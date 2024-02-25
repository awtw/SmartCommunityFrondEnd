import { defineStore } from 'pinia';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router'
export const userStore = defineStore({
    id: 'user',
    state: () => ({
        email: '',
        accessToken: '',
    }),
    action: {
        async logout() {
            let res = await axios.post('https://localhost:7048/api/Supabase/Logout',  {
                
            }, {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            });

            localStorage.setItem('accessToken', '');

            this.$patch({
                email: '',
                accessToken: ''
            });
        },
        async login(email, password) {
            let res = await axios.post('https://localhost:7048/api/Supabase/Login',  {
                email: email,
                password: password
            }, {
                "Cache-Control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            }).catch((err) => {
                console.log(err);
                const router = useRouter();
                router.push('Login');
            } ) 
        
            localStorage.setItem('accessToken', res.data.data.accessToken);

            this.$patch({
                email: res.data.data.user.email,
                accessToken: res.data.data.accessToken
            });
        }
    }
}); 

