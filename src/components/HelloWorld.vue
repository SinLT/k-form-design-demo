<template>
  <div>
    <k-form-build :value="jsonData"
                  ref="KFB"
                  @submit="handleSubmit" />
    <button @click="getData">提交</button>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      jsonData: {
        list: [
          {
            type: 'slider',
            label: '滑动输入条',
            options: {
              width: '100%',
              defaultValue: 0,
              disabled: false,
              hidden: false,
              min: 0,
              max: 100,
              step: 1,
              showInput: false
            },
            model: 'slider_1594353472178',
            key: 'slider_1594353472178',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'time',
            label: '时间选择框',
            options: {
              width: '100%',
              defaultValue: '',
              disabled: false,
              hidden: false,
              clearable: false,
              placeholder: '请选择',
              format: 'HH:mm:ss'
            },
            model: 'time_1594353473162',
            key: 'time_1594353473162',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'select',
            label: '下拉选择器',
            options: {
              width: '100%',
              multiple: false,
              disabled: false,
              clearable: false,
              hidden: false,
              placeholder: '请选择',
              dynamicKey: '',
              dynamic: false,
              options: [
                { value: '1', label: '下拉框1' },
                { value: '2', label: '下拉框2' }
              ],
              showSearch: false
            },
            model: 'select_1594353474512',
            key: 'select_1594353474512',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'radio',
            label: '单选框',
            options: {
              disabled: false,
              hidden: false,
              defaultValue: '',
              dynamicKey: '',
              dynamic: false,
              options: [
                { value: '1', label: '选项1' },
                { value: '2', label: '选项2' },
                { value: '3', label: '选项3' }
              ]
            },
            model: 'radio_1594353473812',
            key: 'radio_1594353473812',
            rules: [{ required: false, message: '必填项' }]
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 4 },
          wrapperCol: { span: 18 },
          hideRequiredMark: false,
          customStyle: ''
        }
      }
    }
  },
  methods: {
    handleSubmit (p) {
      // 通过表单提交按钮触发，获取promise对象
      p()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res))
        })
        .catch(err => {
          console.log(err, '校验失败')
        })
    },
    getData () {
      // 通过函数获取数据
      this.$refs.KFB.getData()
        .then(res => {
          // 获取数据成功
          alert(JSON.stringify(res))
        })
        .catch(err => {
          console.log(err, '校验失败')
        })
    }
  }
}
</script>
