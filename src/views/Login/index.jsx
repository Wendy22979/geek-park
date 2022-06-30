import { useDispatch } from "react-redux"
import { useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom'
// 引入组件
import NavBar from "@/components/NavBar/index.jsx"
import Input from "@c/Input/index.jsx"

// 引入表单验证插件
import { useFormik } from 'formik';

// 引入样式
import "./style/index.scss"

// 引入actions
import { sendValidationCode, login } from "@/store/actions/login"

import { Toast } from 'antd-mobile'


export default function Login () {
  const dispatch = useDispatch()
  const [time, setTime] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()

  // 表单验证模块
  const form = useFormik({
    // 设置表单字段的初始值
    initialValues: {
      mobile: '13900001111',
      code: '246810',
    },
    // 提交
    onSubmit: async (values) => {
      // 登录请求
      try {
        // 请求获取token
        await dispatch(login(values))

        // 登录成功
        Toast.show({
          content: "登录成功"
        })

        // 跳转页面
        const { state } = location
        if (!state) {
          navigate('/')
        } else {

        }

      } catch (error) {
        if (error.response) {
          Toast.show({
            content: error.response.data.message
          })
        } else {
          Toast.show({
            content: "系统繁忙，请稍后"
          })
        }
      }
    },

    //  表单验证
    validate (values) {
      const errors = {}
      if (!values.mobile) {
        errors.mobile = '手机号不能为空'
      }
      if (!values.code) {
        errors.code = '验证码不能为空'
      }
      return errors
    },


  })
  // 获取错误信息
  const { errors } = form

  //验证码发送
  const onExtraClick = async () => {
    if (time > 0) return    //如果定时器计时不为0就不能触发发送请求
    //  收集好进行验证
    // 先对手机号进行验证,格式不正确就不发送请求
    if (!/^1[3-9]\d{9}$/.test(form.values.mobile)) {
      return
    }


    try {
      // 发送请求
      await dispatch(sendValidationCode(form.values.mobile))
      Toast.show({
        icon: 'success',
        content: '验证码获取成功'
      })

      // 开始倒计时
      setTime(60) //设置时间一分钟发送一次
      let timer = setInterval(() => {
        setTime((time) => {
          if (time === 1) {
            clearInterval(timer)
          }
          return time - 1
        })

      }, 1000)

    } catch (error) {

      if (error.response) {
        Toast.show({
          content: error.response.data.message
        })
      } else {
        Toast.show({
          content: "系统繁忙，请稍后"
        })
      }


    }


  }


  return (
    <div>
      {/* 顶部导航 */}
      <NavBar title="我是标题" extra={<span >更多</span>} />

      {/* 内容 */}
      <div className="content">
        <h3>短信登录</h3>
        <form onSubmit={form.handleSubmit}>
          <div className="input-item">
            <div className="input-box">
              <Input
                name="mobile"
                value={form.values.mobile}
                placeholder="请输入手机号"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
            {errors.mobile ? (<div className="validate">{errors.mobile}</div>) : ""}

          </div>
          <div className="input-item">
            <div className="input-box">
              <Input
                type="text"
                name="code"
                extra={time === 0 ? '发送验证码' : time + 's后发送'}
                value={form.values.code}
                onChange={form.handleChange}
                maxLength={6}
                placeholder="请输入验证码"
                onExtraClick={onExtraClick}
              />
            </div>
            {errors.code ? <div className="validate">{errors.code}</div> : ""}

          </div>
          {/* 登录按钮 */}
          <button type="submit" className="login-btn">
            登录
          </button>
        </form>
      </div>
    </div>
  )
}