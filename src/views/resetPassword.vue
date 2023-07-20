<template>
    <el-row class="fpw-container">
        <el-col class="fpw">
            <h2 class="font-bold text-5xl text-gray-800">Resetting Password</h2>
            <div class="my-5"></div>
            <el-form class="w-[550px]" ref="formRef" :model="form" :rules="rules">
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item prop="re_password">
                    <el-input v-model="form.re_password" placeholder="confirm password" type="password" show-password></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[150px]" @click="onSumbit">Submit</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { forgotPasswordEmail, changePassword } from '~/api/admin' 
import { notify } from '~/composables/util'
import { ref, reactive } from 'vue'


const router = useRouter()
const route = useRoute()

const form = reactive({
    password: '',
    re_password: ''
})
const formRef = ref(null)

const onSumbit = () => {
    const username = route.params.username
    console.log('resetPassword page is resetting password for' + username)
    changePassword(username, form.password, form.re_password)
    .then(res => {
        if(res.data.status == 'success'){
            notify('password reset success')
            router.push('/login')
        }else{
            notify(res.data.message, "error")
        }
    })
}

//自定义验证规则
const validatePassword = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('password connot be empty'))
    }
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,18}$/
    if (!value.match(reg)) {
        callback(new Error('8 to 18 Characters, at least one uppercase letter, one lowercase letter and one number'))
    } else {
        callback()
    }
}
const validatePassword2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('Please input the password again'))
    } else if (value !== form.password) {
        callback(new Error("Two passwords don't match!"))
    } else {
        callback()
    }    
}

const rules = {
    password: [{ validator: validatePassword, trigger: 'blur'}],
    re_password:[{ validator: validatePassword2, trigger: 'blur'}]
}
</script>