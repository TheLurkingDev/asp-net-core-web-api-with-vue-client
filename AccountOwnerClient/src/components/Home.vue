<template>
    <p class="home-text">
        WELCOME TO THE ACCOUNT-OWNER APPLICATION
    </p>
</template>

<script>
import OwnerService from '@/api-services/owner.service';
export default {
    name: 'Home',
    created() {
        OwnerService.getAll().then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error.response.data);
        })
    }
}
</script>

<style scoped>
    .home-text {
        font-size: 35px;
        color: red;
        text-align: center;
        position: relative;
        top: 30px;
        text-shadow: 2px 2px 2px gray;
    }
</style>
