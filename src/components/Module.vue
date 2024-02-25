<script setup>

</script>

<template>
<div class="grid w-full gap-2 lg:grid-cols-3 md:grid-cols-1">
    <div class="card card-compact w-96 bg-base-100 shadow-xl m-2">
        <figure><img src="../assets/img1.jpeg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">智慧城市</h2>
            <div class="card-actions justify-end">
             <router-link to="/LightModule">
                <button class="btn btn-primary">前往</button>
             </router-link>
            </div>
        </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl m-2">
        <figure><img src="../assets/img2.jpeg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">智慧建築</h2>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">前往</button>
            </div>
        </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl m-2">
        <figure><img src="../assets/img3.jpeg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">健康建築</h2>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">前往</button>
            </div>
        </div>
    </div>

    <div class="card card-compact w-96 bg-base-100 shadow-xl m-2">
        <figure><img src="../assets/img4.jpeg" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">低碳建築</h2>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">前往</button>
            </div>
        </div>
    </div>

    
</div>
</template>

<style scoped>
</style>
