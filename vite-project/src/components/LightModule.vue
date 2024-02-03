<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const messageForm = ref({
    Topic: '',
    Sender: '',
    Receiver: '',
    Message: ''
});

const sendMessage = async () => {
    let res = await axios.post('https://localhost:7048/api/Message/SendMessage',  {
            Topic: messageForm.value.Topic,
            Sender: messageForm.value.Sender,
            Receiver: messageForm.value.Receiver,
            Message: messageForm.value.Message
        }, {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
}

</script>

<template>
<div class="m-5 w-80">
    <h1 class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">傳送訊息</h1>
    <form> 
        <div>
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Topic</label>
            <input  v-model="messageForm.Topic" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
    <div class="mb-6">
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-3">Sender</label>
        <input v-model="messageForm.Sender" type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Receiver</label>
        <input v-model="messageForm.Receiver" type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    
    <div class="mb-6">
        <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4">Message</label>
        <input v-model="messageForm.Message"  type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    
    <button @click.prevent="sendMessage" type="submit" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
    </form>
</div>
</template>

<style scoped>
</style>
