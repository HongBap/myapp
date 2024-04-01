import { Col, Image, Row } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import smallImage from '../../assets/images/smallimage.webp'
import { WrapperAddressProduct , WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './style'
import { MinusOutlined, PlusOutlined, StarFilled } from '@ant-design/icons'
import ButtonComponent from '../ButtonComponent/ButtonComponent'


const ProductDetailsComponent = () => {
  return (
    <Row style={{padding : '16px', background : '#fff', borderRadius : '4px'}}>
        <Col span = {10} style={{borderRight : '1px solid #e5e5e5', paddingRight : '8px'}}>
          <Image src={imageProduct} alt="image Product" preview ={false}/>
          <Row style={{paddingTop : '10px', justifyContent : 'space-between'}}>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
              <WrapperStyleColImage span = {4}>
                  <WrapperStyleImageSmall src={smallImage} alt="small Product" preview ={false}/>
              </WrapperStyleColImage>
          </Row>
        </Col>
        <Col span = {14} style={{paddingLeft : '10px'}}>
            <WrapperStyleNameProduct>Chiến Thắng Kỳ Thi 9 Vào 10 Chuyên Môn Tiếng Anh</WrapperStyleNameProduct>
            <div>
                <StarFilled style = {{fontSize : '12px', color : 'rgb(253,216,54)'}}/>
                <StarFilled style = {{fontSize : '12px', color : 'rgb(253,216,54)'}}/>
                <StarFilled style = {{fontSize : '12px', color : 'rgb(253,216,54)'}}/>
                <StarFilled style = {{fontSize : '12px', color : 'rgb(253,216,54)'}}/>
                <StarFilled style = {{fontSize : '12px', color : 'rgb(253,216,54)'}}/>
                <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
                <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
                <span>Giao đến </span>
                <span className='address'>Phường Thắng Nhất, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu</span> - 
                <span className='change-address'> Đổi địa chỉ</span>
            </WrapperAddressProduct>
            <div style ={{margin : '10px 0 20px', padding : '10px 0', borderTop : '1px solid #e5e5e5', borderBottom : '1px solid #e5e5e5' }}>
                <div style={{marginBottom : '10px'}}>Số lượng</div>
                <WrapperQualityProduct>
                    <button style={{border : 'none', background : 'transparent'}}>
                        <MinusOutlined style={{color : '#000', fontSize : '20px'}} /> 
                    </button>
                    <WrapperInputNumber defaultValue={3} onChange={onchange} size = 'small' />
                    <button style={{border : 'none', background : 'transparent'}}>
                        <PlusOutlined style={{color : '#000', fontSize : '20px'}} />
                    </button>
                </WrapperQualityProduct>
            </div>
            <div style={{display : 'flex', alignItems : 'center', gap :  '12px'}}>
                <ButtonComponent 
                    bordered = {false}
                    size={40} 
                    styleButton = {{
                        background:'rgb(255,57,69',
                        width : '220px',
                        height : '48px' }} 
                    textButton = {'Chọn mua'} 
                    styleTextButton={ {color : '#fff', fontSize : '15px', fontWeight :'700'}}
                ></ButtonComponent>

                <ButtonComponent 
                    bordered = {false}
                    size={40} 
                    styleButton = {{
                        background: '#fff',
                        width : '220px',
                        height : '48px',
                        border : '1px solid rgb(13,92,182)'}}
                    textButton = {'Mua trước trả sau'} 
                    styleTextButton={ {color : 'rgb(13,92,182)', fontSize : '15px'}}
                ></ButtonComponent>
            </div>
        </Col>
    </Row>
  )
}

export default ProductDetailsComponent