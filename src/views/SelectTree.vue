<!--
    @author: itmacy
    @desc: 选择器选项以树形控件展示
-->
<template>
  <div>
      <el-select v-model="form.id" placeholder="请选择" ref="selectTree">
          <el-option :key="form.id" :value="form.id" :label="form.label" hidden/>
          <el-tree :data="data"
                   :props="defaultProps"
                   node-key="id"
                   accordion
                   highlight-current
                   @node-click="handleNodeClick"/>
      </el-select>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
        id: '',
        value: ''
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      // console.log(data)
      this.form = {
        id: data.label,
        value: data.label
      }
      // 使 input 失去焦点，并隐藏下拉框
      this.$refs.selectTree.blur()
    }
  }
}
</script>
