<template>
  <Header></Header>
  <h2>Main Page</h2>
  
</template>

<script setup>

</script>

<script>
import { removeToken } from '~/composables/auth'
import { logout } from '~/api/admin'
import { jsPDF } from "jspdf"
import { getAllApplication } from '~/api/application'
import Header from '~/layout/header.vue'
// import 'jspdf-autotable'
import { applyPlugin } from 'jspdf-autotable'
applyPlugin(jsPDF)


export default {
    name: "Index",
    components:{
      Header
    },
    methods: {
      onLogout(){
        removeToken()
        this.$router.go('/')
        logout()
      },
      exportPDF(){
        getAllApplication(1)
        .then(res => {
          let info = []
          res.data.forEach((element, index, array) => {
            let company = element.company
            let comment = element.comment
            let status = element.status
            if(comment == null) comment = ""
            info.push([company, comment, status])
          })
          const doc = new jsPDF()
          doc.autoTable({
            head: [['Company', 'Comment', 'Status']],
            body: info
          })
          doc.save("test.pdf")
        })
      }
    }
}
</script>

<style lang="less" scoped>

</style>
