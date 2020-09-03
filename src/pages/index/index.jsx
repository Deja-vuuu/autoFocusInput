import React, { Component } from 'react'
import { View, Text,Input } from '@tarojs/components'
import { encryMobile, debounce } from './utils'
import './index.scss'

export default class Index extends Component {
  state={
    captcha: '',
    focus: true
  }
  /**
   * 修改验证码的值
   */
  onChangeCaptcha = (e) => {
    let inputValue = e.detail.value.slice(0,4)
    console.log('inputValue',inputValue)
    this.setState({
      captcha: inputValue
    },() => {
      if (inputValue.length === 4){
        // 这里需要加锁避onChange重复触发，或者根据业务场景进行其他操作。
        console.log('触发登陆');
      }
    });
  };

  render () {
      let { captcha, focus } = this.state;
    return <View className='sendCaptcha-page'>
      <View className='sendCaptcha-title'>
        验证码
      </View>
      <View className='sendCaptcha-content'>
        <Text className='mobile-num'>已发送至 {encryMobile('15900000000')}</Text>
        <Text className='countdown'>重新发送</Text>
      </View>

      <View className='sendCaptcha-input-container'
        onClick={()=>{
          this.setState({
            focus:true
          });
      }}
      >
        <Input className='sendCaptcha-input' type='number' maxLength='4' focus={focus} onInput={this.onChangeCaptcha} />
        {
          [0, 1, 2, 3].map((value, index) => {
            return <View className={index===captcha.length ? 'sendCaptcha-input-box sendCaptcha-input-box-at' :'sendCaptcha-input-box'} key={index}>
              {
                captcha[index]
              }
            </View>
          })
        }
      </View>
    </View>;

  }
}
