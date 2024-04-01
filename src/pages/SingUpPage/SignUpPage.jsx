import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputFormComponent from '../../components/InputFormComponent/InputFormComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Image } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'


const SignUpPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)

  return (
    <div style={{  display : 'flex', alignItems : 'center', justifyContent : 'center', background : 'rgba(,0,0,0,0.53)', height : '100vh'}}>
      <div style={{width : '800px', height : '445px', borderRadius : '6px', background : '#fff', display : 'flex'}}>
      <WrapperContainerLeft>
        <h1>Xin chào</h1>
        <p>Đăng nhập hoặc Tạo tài khoản</p>
        <InputFormComponent style = {{marginBottom : '10px'}} placeholder = "Abc@gmail.com"/>
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
            <InputFormComponent placeholder="password" style={{ marginBottom: '10px' }} type={isShowPassword ? "text" : "password"}/>
          </div>
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '10px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputFormComponent placeholder="confirm password" type={isShowConfirmPassword ? "text" : "password"}
            />
          </div>
        <ButtonComponent 
                    bordered = {false}
                    size={40} 
                    styleButton = {{
                        background:'rgb(255,57,69',
                        width : '100%',
                        height : '48px',
                        margin : '26px 0 10px' }} 
                    textButton = {'Đăng Ký'} 
                    styleTextButton={ {color : '#fff', fontSize : '15px', fontWeight :'700'}}
                ></ButtonComponent>
                <p>Bạn đã có tài khoản? <WrapperTextLight>Đăng Nhập</WrapperTextLight></p> 
      </WrapperContainerLeft>
      <WrapperContainerRight>
        <Image src = {imageLogo} preview = {false} alt = "image-logo" height = "203px" width = "203px"/>
        <h4>Mua sắm tại App.vn</h4>
      </WrapperContainerRight>
    </div>
    </div>
  )
}

export default SignUpPage