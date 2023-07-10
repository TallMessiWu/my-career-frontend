<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>MyCareer</div>
                <div>Record Your Job Applications</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class="font-bold text-3xl text-gray-800">Welcome</h2>
            <div class="my-3"></div>
            <el-form ref="formRef" class="w-[250px]" :model="form" :rules="rules">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="Username/Email">
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="Password" type="password" show-password>
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" @click="onSubmit" :loading="loading" type="primary" >Login</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#909399" class="w-[250px]" @click="OnSignup" type="primary">Sign Up</el-button>
                </el-form-item>
                <div>
                    <p>
                        <el-link type="primary">Forgot Password</el-link>
                    </p>
                </div>
            </el-form>
            
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { login } from '../api/admin'
import { useRouter } from 'vue-router'
import { notify } from '../composables/util'
 import { setToken } from '~/composables/auth'

const router = useRouter()
const form = reactive({
    username: '',
    password: ''
})

const rules = {
    username:[{ required: true, message: 'username cannot be empty', trigger: 'blur' }],
    password:[{ required: true, message: 'password cannot be empty', trigger: 'blur' }]
}

const formRef = ref(null)
const loading = ref(false)

const onSubmit = () => {
    formRef.value.validate((valid) =>{
        if(!valid) return false
        loading.value = true
        login(form.username, form.password)
        .then(res => {
            notify("login success")
            setToken(res.token)
            router.push('/')
        })
        .finally(() => {
            loading.value = false
        })
    })
}

//回车键和登录绑定
function onKeyUp(e){
    if(e.key == "Enter") onSubmit()
}
onMounted(() => { document.addEventListener("keyup", onKeyUp)})
onBeforeUnmount(() => {document.removeEventListener("keyup", onKeyUp)})

const OnSignup = () => { router.push('/signup')}


</script>

<style scoped>
.login-container{
    @apply min-h-screen bg-indigo-500;
}
.login-container .left, .login-container .right{
    @apply flex items-center justify-center;
}
.login-container .right{
    @apply bg-light-50 flex-col;
}
.left>div>div:first-child{
    @apply font-bold text-7xl text-light-50 mb-10;
}
.left>div>div:last-child{
    @apply text-light-50 mb-4 text-1xl;
}
</style>