let boxes = document.querySelector('.main-box')
let box = document.querySelector(".box");
let elMode = document.querySelector('.fa-moon')
let elComment = document.querySelector('.fa-comment-dots')

function mode() {
    let body = document.body;
    body.classList.toggle("dark");
 }
elComment.addEventListener('click',()=>{
    location.href = '/pages/comment.html'
})
async function getApi(){
    const data = await fetch(
        'https://dummyjson.com/posts',
    {
        method:'GET'
    },
    );

    const {posts} = await data.json() 
    posts.forEach(post=>{

     let h4El = document.createElement("h4")
     h4El.textContent = post.title
     
     let pEl = document.createElement("p")
     let a = post.body.split('').splice(0, 320).join("")
     let b = post.body.split("")
     
     
     if(b.length > 321){
        pEl.innerHTML = a + '...'
    }else{
        pEl.innerHTML = post.body
    }


     let box = document.createElement('div')
     box.setAttribute('class','box')


     box.appendChild(h4El)
     box.appendChild(pEl)
   boxes.appendChild(box)

    });
    
}
getApi()


