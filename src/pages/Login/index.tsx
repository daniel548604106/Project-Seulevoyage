import Image from 'next/image'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useAppDispatch } from '@/hooks/redux'
import Button from '@/modules/Button'
import { setIsLoggedIn } from '@/redux/slices/commonSlice'
import { IonContent, IonPage } from '@ionic/react'

const Login = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const [formValue, setFormValue] = useState({
    account: '',
    password: '',
  })

  const [isPasswordVisible, setPasswordVisible] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }
  return (
    <IonPage>
      <IonContent className="">
        <div className="h-[calc(100vh-50px)] flex flex-col items-center pb-5 pt-10 px-6 w-screen font-semibold bg-login-bg bg-cover bg-no-repeat bg-opacity-75 overflow-y-auto">
          <Image width="100" height="100" src="/img/logo.svg" alt="logo" />
          <div className="mt-3 w-full text-left">
            <h2 className="text-white text-2xl">
              Welcome,
              <br /> Log in to continue!
            </h2>
          </div>
          <div className="flex items-center mt-8 px-4 py-3 w-full bg-white rounded-md">
            <Image
              width="20"
              height="20"
              src="/img/login/user.svg"
              alt="lock"
            />
            <input
              placeholder="Enter your username or email"
              value={formValue.account}
              name="account"
              onChange={(e) => handleInputChange(e)}
              className="px-3 py-1 w-full text-black bg-transparent outline-none"
              type="email"
            />
          </div>
          <div className="flex items-center mt-4 px-4 py-3 w-full bg-white rounded-md">
            <Image
              width="20"
              height="20"
              src="/img/login/lock.svg"
              alt="lock"
            />
            <input
              placeholder="Enter your password"
              value={formValue.password}
              name="password"
              onChange={(e) => handleInputChange(e)}
              className="px-3 py-1 w-full text-black outline-none"
              type={isPasswordVisible ? 'password' : 'text'}
            />
            <div
              className="flex items-center"
              onClick={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Image
                width="20"
                height="20"
                src={
                  isPasswordVisible
                    ? '/img/login/eye.svg'
                    : '/img/login/eye-close.svg'
                }
                alt="lock"
              />
            </div>
          </div>
          <button
            onClick={() => history.push('/forget-password')}
            className="mt-3 w-full text-right text-white"
          >
            Forgot Password?
          </button>
          <div className="mt-3 w-full text-lg">
            <Button
              onClick={() => {
                dispatch(setIsLoggedIn(true))
                history.push('/')
              }}
              borderRadius="lg"
              text="Login"
            />
          </div>
          <div className="flex items-center mt-6 w-full text-white">
            <div className="h-[1px] w-full bg-white"></div>
            <p className="min-w-[100px] mx-[20px]">Or login with</p>
            <div className="h-[1px] w-full bg-white"></div>
          </div>
          <button className="flex items-center justify-center mt-4 py-3 w-full text-black bg-white rounded-lg space-x-2">
            <Image
              width="25"
              height="25"
              src="/img/login/google.svg"
              alt="google"
            />
            <span>Google</span>
          </button>
          <button className="flex items-center justify-center mt-4 py-3 w-full text-black bg-white rounded-lg space-x-2">
            <Image
              width="25"
              height="25"
              src="/img/login/fb.svg"
              alt="google"
            />
            <span>Facebook</span>
          </button>
          <p className="absolute bottom-4 text-white">
            I’m a new user,{' '}
            <button
              onClick={() => history.replace('/signup')}
              className="text-pink underline cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
