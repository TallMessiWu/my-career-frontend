<template>
  <div>Index</div>
  <el-button @click="onLogout">Log out</el-button>
</template>

<script setup>

</script>

<script>
import { removeToken } from '~/composables/auth'
import { logout } from '~/api/admin'

export default {
    name: "Index",
    methods: {
      onLogout(){
        removeToken()
        this.$router.go('/')
        logout()
      }
    }
}
</script>

<style lang="less" scoped>

</style>
