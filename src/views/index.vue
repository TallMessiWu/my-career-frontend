<template>
  <div>Index</div>
  <el-button @click="onLogout">Log out</el-button>
  <el-button @click="exportPDF">export PDF</el-button>
</template>

<script setup>

</script>

<script>
import { removeToken } from '~/composables/auth'
import { logout } from '~/api/admin'
import { jsPDF } from "jspdf"


export default {
    name: "Index",
    methods: {
      onLogout(){
        removeToken()
        this.$router.go('/')
        logout()
      },
      exportPDF(){
        const doc = new jsPDF()
        doc.text("This is a test pdf", 10, 10)
        doc.save("test.pdf")
      }
    }
}
</script>

<style lang="less" scoped>

</style>
