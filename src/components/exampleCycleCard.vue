<template>
    <div>
        <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span class="textH">Software Engineer Intern 2024</span>
                <span class="textH">Started at: June 2023</span>
            <!-- <el-button class="button" text>Operation button</el-button> -->
            </div>
        </template>
        <div class="text">Applied: 500</div>
        <br/>
        <div class="text">Offer: 10</div>
        <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
        </el-card>
    </div>
</template>

<script>
export default {
    name: "ExampleCycleCard"
}
</script>
  
<style scoped>

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.textH {
    font-size: 20px;
    color: #D3D3D3;
}
.text {
    font-size: 14px;
    color: #D3D3D3;
}

.item {
    margin-bottom: 12px;
}

.box-card {
    width: 1200px;
    margin-left: 120px;
    margin-top: 22px;
}
</style>
