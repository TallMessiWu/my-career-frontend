<template>
    <div class="layout">
        <el-container>
            <el-header class="header">
                <div class="logo">MyCareer</div>
                <div class="user-info">
                    <span>Welcome Back &nbsp;</span>
                    <el-dropdown trigger="click">
                        <span class="username"> 
                            {{ username }}
                            <span class="iconfont icon-close"></span>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>Logout</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-header>
        </el-container>
    </div>
</template>
<script>

import { getToken } from '~/composables/auth'

export default {
    name: "Header",
    data(){
        return {
            username: getToken().username
        }
    }
}
</script>

<style scoped>
.layout .header {
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.layout .header .logo {
    margin-left:30px;
    font-size: 30px;
}

.layout .header .user-info {
    display: flex;
    align-items: center;
}

.layout .header .username {
    color: rgb(6, 143, 234)
}
.layout .header .username .icon-close {
    font-size:15px
}
</style>
