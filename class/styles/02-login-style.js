import { withTheme } from '@emotion/react'
import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 640px;
  height: 1138px;
  background-image: url(../../../images/loginBackground.png);
`
export const StatusBar = styled.div`
  width: 640px;
  height: 43px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 15px;
  `
export const Time = styled.span`
  margin-right: 25px;
  width: 58px;
  height: 30px;
  font-size: 25px;
  color: white;
  opacity: 0.9;
`
export const LogoWrapper = styled.div`
  height: 532px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LogoImg = styled.img`
  
`
export const LogoTxt = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #fff;
  margin-top: 27px;
`
export const EmailInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: white;
  margin-left: 51px;
  padding-right: 267px;
`
export const DeleteBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`
export const Line = styled.div`
  border-bottom: 1px solid white;
  opacity: 0.4;
  width: 540px;
  margin-left: 51px;
  padding-top: 20px;
`
export const EmailErr = styled.div`
  color: #ff1b6d;
  font-size: 18px;
  width: 540px;
  margin-left: 51px;
  padding-top: 10px;
  `
export const PasswordInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 24px;
  color: white;
  margin-left: 51px;
  margin-top: 28px;
  padding-right: 267px;
  `
export const PasswordErr = styled.div`
  color: #ff1b6d;
  font-size: 18px;
  width: 540px;
  margin-left: 51px;
  padding-top: 10px;
  `
export const LoginBtn = styled.button`
  width:540px;
  height:76px;
  margin-left: 51px;
  margin-top: 20px;
  /* background-color: #ff1b6d; */
  background-color: rgba(255, 27, 109, 0.6);
  /* opacity: 0.6; */
  border-radius: 38px;
  border: none;
  color: white;
  font-size: 26px;
  font-weight: bold;
  cursor: pointer;
`
export const AboutSign = styled.div`
  padding-top: 44px;
  width: 640px;
  padding-left: 122px;
  padding-right: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FindingEmailBtn = styled.button`
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 3px 0 0 0;
`
export const FindingPWBtn = styled.button`
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 3px 0 0 0;
`
export const SignupBtn = styled.button`
  font-size: 20px;
  border: none;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  padding: 3px 0 0 0;
`
export const ColBar = styled.span`
  color: #fff;
  opacity: 0.55;
`
export const KaKaoLoginBtn = styled.button`
  width:540px;
  height:76px;
  margin-left: 51px;
  margin-top: 60px;
  background-color: transparent;
  /* opacity: 0.6; */
  /* background-color: rgba(0, 0, 0, 0.5); */
  border-radius: 38px;
  border: solid yellow 3px;
  color: yellow;
  font-size: 26px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const KakaoLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`