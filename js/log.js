let elUsernameInp = document.getElementById('username');
let elPasswordInp = document.getElementById('password');
let elSubmitBtn = document.getElementById('btn-submit');

elSubmitBtn.addEventListener('click', async () => {
	try {
		let username = elUsernameInp.value;
		let password = elPasswordInp.value;
		if (username !== '' && password !== '') {
			let auth = await fetch('https://dummyjson.com/auth/login', {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify({
					username,
					password,
				}),
			});
			let res = await auth.json();
			if (res.token) {
				localStorage.setItem('access_token', res.token);
				localStorage.setItem('userId', res.id);
				location.href = '/pages/akk.html';
			} else {
				localStorage.removeItem('access_token');
				location.reload();
			}
		}
	} catch (err) {
		console.log(err);
	}
});
