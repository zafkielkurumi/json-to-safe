<template>
  <div class="HomePage">
    <div>
      <el-input
        type="textarea"
        placeholder="请输入内容"
        v-model="inputString"
      ></el-input>
      <div style="display:flex; align-items:center;">
        <el-checkbox v-model="fnChecked">转换方法</el-checkbox>
        <el-input v-model="rootName" @change="onRootNameChange()" style="margin:0 8px; width:120px"></el-input>
        <el-button @click="formateJson()">格式化</el-button>
        <el-button @click="generate()">生成{{rootName}}</el-button>
      </div>
    </div>
    <div style="overflow:auto">
      <el-table
        v-if="configData"
        :data="configData.props"
        row-key="label"
        default-expand-all
        :tree-props="{ children: 'props', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="jsonKey" label="jsonKey"></el-table-column>
        <el-table-column prop="label" label="属性名称"></el-table-column>
        <el-table-column prop="type" label="type"></el-table-column>
        <el-table-column prop="tsType" label="类型">
          <template #default="scope">
            <span style="margin-left: 10px" v-if="scope.row.type === 'Array'">
              {{ tranferType(scope.row) }}
            </span>
            <span v-else-if="scope.row.type === 'Object'">{{scope.row.tsType}}</span>
            <el-select
              v-else
              style="margin-left: 10px"
              size="mini"
              v-model="scope.row.tsType"
              @change="onTypeChange(scope.row)"
            >
              <el-option label="string" value="string"></el-option>
              <el-option label="number" value="number"></el-option>
              <el-option label="boolean" value="boolean"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="tsType" label="默认值">
          <template #default="scope">
            <el-input size="mini" v-model="scope.row.default"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="tsType" label="注释">
          <template #default="scope">
            <el-input size="mini" v-model="scope.row.comment"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="tsType" label="null">
          <template #default="scope">
            <el-checkbox v-model="scope.row.isNull"></el-checkbox>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" src="./HomePage"></script>

<style lang="scss" scoped>
@import "./HomePage.scss";
</style>
<style lang="scss">
.el-textarea,
.el-textarea__inner {
  height: 100%;
}
</style>
