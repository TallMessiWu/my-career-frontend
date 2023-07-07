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
            <el-form class="w-[250px]">
                <el-form-item>
                    <el-input>
                        <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input>
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]">Login</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#909399" class="w-[250px]">Sign Up</el-button>
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

<scipt setup>

</scipt>

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