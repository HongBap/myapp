import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import imageLogo from '../../assets/images/logo-login.png'
import { Image } from 'antd'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'

const SigninPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh' }}>
    <div style={{ width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập vào tạo tài khoản</p>
        <InputFormComponent style={{ marginBottom: '10px' }} placeholder="abc@gmail.com" />
        <div style={{ position: 'relative' }}>
          <span
            onClick={() => setIsShowPassword(!isShowPassword)}
            style={{
              zIndex: 10,
              position: 'absolute',
              top: '10px',
              right: '8px'
            }}
          >{
              isShowPassword ? (
                <EyeFilled />
              ) : (
                <EyeInvisibleFilled />
              )
            }
          </span>
          <InputFormComponent
            placeholder="password"
            type={isShowPassword ? "text" : "password"}
          />
        </div>
          <ButtonComponent
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              width: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
          ></ButtonComponent>
        <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
        <p>Chưa có tài khoản? <WrapperTextLight> Tạo tài khoản</WrapperTextLight></p>
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
        <h4>Mua sắm tại LTTD</h4>
      </WrapperContainerRight>
    </div>
  </div >
  )
}

export default SigninPage