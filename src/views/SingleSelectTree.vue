<!--
    @author: itmacy
    @desc: 树节点单选
-->
<template>
  <div class="about">
      <el-tree :data="data"
               ref="tree"
               :props="defaultProps"
               node-key="id"
               show-checkbox
               check-strictly
               @check-change="handleNodeClick"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 11,
          label: '二级 1-1',
          children: [{
            id: 111,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 21,
          label: '二级 2-1',
          children: [{
            id: 222,
            label: '三级 2-1-1'
          }]
        }, {
          id: 22,
          label: '二级 2-2',
          children: [{
            id: 221,
            label: '三级 2-2-1'
          }]
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 31,
          label: '二级 3-1',
          children: [{
            id: 311,
            label: '三级 3-1-1'
          }]
        }, {
          id: 32,
          label: '二级 3-2',
          children: [{
            id: 321,
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      selectNode: {} // 选中的节点
    }
  },
  methods: {
    handleNodeClick (data, checked) {
      if (checked) {
        this.$refs.tree.setCheckedNodes([data])
        this.selectNode = data
      }
    }
  }
}
</script>
