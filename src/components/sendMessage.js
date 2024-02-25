import axios from 'axios';

const sendMessage = async () => {
let res = await axios.post('https://localhost:7048/api/Supabase/Login', {
email: form.value.email,
password: form.value.password
}, {
"Cache-Control": "no-cache",
"Content-Type": "application/x-www-form-urlencoded",
"Access-Control-Allow-Origin": "*",
}).then((res) => {
console.log(res);
localStorage.setItem('accessToken', res.data.data.accessToken);
localStorage.setItem('email', res.data.data.email);
router.push('Home');
}).catch((err) => {
console.log(err);
router.push('Login');
});
};
