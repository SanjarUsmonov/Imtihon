let boxes = document.querySelector('.main-box')
let box = document.querySelector(".box");
let elComment = document.querySelector('.fa-comment-dots')


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
     pEl.innerHTML = post.body
    


     let box = document.createElement('div')
     box.setAttribute('class','box')

     let icon = document.createElement('span')
     icon.setAttribute('class','fa-solid fa-xmark')

box.appendChild(icon)
     box.appendChild(h4El)
     box.appendChild(pEl)
   boxes.appendChild(box)
icon.addEventListener('click', e => {
	if (e.target.classList[1] === 'fa-xmark') {
		e.target.parentElement.remove();
	}
});
    });
    
}
getApi()


