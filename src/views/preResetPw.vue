<template>
    <el-row class="fpw-container">
        <el-col class="fpw">
            <h2 class="font-bold text-5xl text-gray-800"> Resetting Password page</h2>
            <div class="my-4"></div>
            <el-button round color="#626aef" class="w-[150px]" @click="goResetPW">Continue</el-button>
        </el-col>
    </el-row>
</template>

<script setup>
import { checkValidPWReset } from '~/api/admin'
import { notify } from '~/composables/util'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const goResetPW = () => {
    //verification
    const hashedUsername = route.params.username
    console.log(hashedUsername)
    checkValidPWReset(hashedUsername)
    .then(res => {
        if(res.data.status == 'success'){
            notify("Redirecting you to resetting page")
            const username = res.data.username
            console.log("frontend get: " + username)
            router.push('/resetPassword/' + username)
        }else{
            notify(res.data.message, "error")
        }
    })
}
</script>