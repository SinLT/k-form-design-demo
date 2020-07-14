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
            type: 'input',
            label: '输入框',
            options: {
              type: 'text',
              isLable: false,
              width: '100%',
              defaultValue: '',
              placeholder: '请输入',
              clearable: false,
              maxLength: null,
              hidden: false,
              disabled: false
            },
            model: 'input_1594690015929',
            key: 'input_1594690015929',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'radio',
            label: '单选框',
            options: {
              isLable: false,
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
            model: 'radio_1594690016996',
            key: 'radio_1594690016996',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'editor',
            label: '富文本',
            list: [],
            options: {
              isLable: false,
              height: 300,
              placeholder: '请输入',
              defaultValue: '',
              chinesization: true,
              hidden: false,
              disabled: false,
              showLabel: false,
              width: '100%'
            },
            model: 'editor_1594690026913',
            key: 'editor_1594690026913',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'radio',
            label: '单选框',
            options: {
              isLable: false,
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
            model: 'radio_1594690022412',
            key: 'radio_1594690022412',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'slider',
            label: '滑动输入条',
            options: {
              width: '100%',
              isLable: false,
              defaultValue: 0,
              disabled: false,
              hidden: false,
              min: 0,
              max: 100,
              step: 1,
              showInput: false
            },
            model: 'slider_1594690018197',
            key: 'slider_1594690018197',
            rules: [{ required: false, message: '必填项' }]
          },
          {
            type: 'button',
            label: '按钮',
            options: {
              type: 'primary',
              handle: 'submit',
              dynamicFun: '',
              hidden: false,
              disabled: false
            },
            key: 'button_1594690020512'
          }
        ],
        config: {
          layout: 'horizontal',
          labelCol: { span: 0 },
          wrapperCol: { span: 24 },
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
