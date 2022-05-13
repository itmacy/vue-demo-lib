<!--
    @author: itmacy
    @desc: 自定义树节点图标
-->
<template>
  <div>
        <el-tree
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick">
                  <span slot-scope="{ node, data }">
                        <i v-if="data.children" class="el-icon-folder"></i>
                        <i v-else class="el-icon-collection-tag"></i>
                        <span style="margin-left: 10px">{{ node.label}}</span>
                  </span>
        </el-tree>
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
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }
</script>
