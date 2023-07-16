<template>
    <el-row class="fpw-container">
        <el-col class="fpw">
            <h2 class="font-bold text-5xl text-gray-800">Forgot Password</h2>
            <div class="my-4"></div>
            <el-form class="w-[550px]" ref="formRef">
                <el-form-item>
                    <el-input v-model="form.username" placeholder="Username/Email"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[150px]" @click="onSendEmail" :loading="loading">Submit</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { forgotPasswordEmail } from '~/api/admin' 
import { notify } from '~/composables/util'
import { ref, reactive } from 'vue'

const router = useRouter()
const form = reactive({
    username:''
})
const formRef = ref(null)
const loading = ref(false)

const onSendEmail = () => {
    loading.value = true
    forgotPasswordEmail(form.username)
    .then(res => {
        if(res.data.status == 'success'){
            notify("Password Reset Link has been sent to your email")
        }else{
            notify(res.data.message, "error")
        }
    })
    .finally(() => {
        loading.value = false
    })
}
</script>

<style>
.fpw-container{
    @apply min-h-screen;
}
.fpw{
    @apply flex items-center justify-center flex-col;
}
</style>