<template>
    <div>
        <div class="button" @click="dialogVisible = true">
            <el-button type="primary">Add A Cycle</el-button>
        </div>
        <el-dialog v-model="dialogVisible" title="Add a cycle" width="30%" center>
            <el-input v-model="input" placeholder="Cycle Name" />
            <template #footer>
                <span class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <ExampleCycleCard></ExampleCycleCard>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import CycleCard from '~/components/cycleCard.vue'
import ExampleCycleCard from '~/components/exampleCycleCard.vue'

const dialogVisible = ref(false)
const input = ref('')


</script>

<style scoped>
.button {
    align-items: center;
    margin-left: 120px;
    margin-top: 30px;
}
.dialog-footer button:first-child {
    margin-right: 10px;
  }
</style>