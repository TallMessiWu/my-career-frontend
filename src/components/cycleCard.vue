<template>
  <div v-for="cycle in cycle_list" :key="cycle" class="text item">
    <el-card class="box-card">
      <template #header>
        <div class="card-header" >
          <span> {{ cycle.cycle_name}}
            <el-button :icon="Edit" @click="editDialogVisible = true"/>
            <el-button :icon="Delete" @click="goDeleteCycle(cycle.id)"/>
          </span>       
          <el-button class="button" text>Started at:</el-button>
        </div>
      </template>
      <div class="text">Applied: </div>
        <br/>
      <div class="text">Offer: </div>
    </el-card>
  </div>
  <el-dialog v-model="editDialogVisible" title="Edit Cycle Name" width="30%" center>
      <el-input v-model="input" placeholder="Rename Cycle" />
      <template #footer>
          <span class="dialog-footer">
          <el-button @click="editDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="editDialogVisible = false">Confirm</el-button>
          </span>
      </template>
  </el-dialog>
</template>

<script setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { reactive, ref } from "vue"
import { getAllCycles,deleteCycle } from "~/api/cycle"
import { notify } from '../composables/util'

const editDialogVisible = ref(false)
const input = ref('')
const cycle_list = ref(null)

getAllCycles()
.then(res => {
  cycle_list.value = res.data
})

const goDeleteCycle = (cycle_id) => {
  deleteCycle(cycle_id)
  .then(res => {
    window.location.reload()
    notify("delete success")
  })
}

</script>
  
<style scoped>
.card-header {
    font-weight: bold;
    font-size: x-large;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.item {
    margin-bottom: 2px;
}

.box-card {
    width: 1200px;
    margin-left: 120px;
    margin-top: 22px;
}

.text {
    font-size: 14px;
}
</style>
