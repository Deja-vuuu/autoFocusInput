import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { encryMobile } from './utils'
import './index.scss'

export default class Index extends Component {

   state={
     captcha: '',
     focus: true
   }

  config = {
    navigationBarTitleText: '首页'
  }
  /**
   * 修改验证码的值
   */
  onChangeCaptcha = (e) => {
    let inputValue = e.detail.value.slice(0,4)
    this.setState({
      captcha: inputValue
    },() => {
      if (inputValue.length >= 4){
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

      <View className='sendCaptcha-input-container' onClick={()=>{
        this.setState({
          focus:true
        });
      }
      }
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
