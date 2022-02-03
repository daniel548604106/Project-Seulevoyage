import Image from 'next/image';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppDispatch } from '@/hooks/redux';
import Button from '@/modules/Button';
import { setIsLoggedIn } from '@/redux/slices/commonSlice';
import { IonContent, IonPage } from '@ionic/react';

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
        <div className=" px-6 font-semibold bg-login-bg w-full h-[100vh] flex flex-col items-center pt-10 pb-5">
          <Image width="100" height="100" src="/img/logo.svg" alt="logo" />
          <div className="mt-3 w-full text-left">
            <h2 className="text-2xl  text-white">
              Welcome,
              <br /> Log in to continue!
            </h2>
          </div>
          <div className="mt-8 bg-white rounded-md w-full flex items-center py-3 px-4">
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
              className="w-full py-1 px-3 text-black outline-none bg-transparent"
              type="email"
            />
          </div>
          <div className="mt-4 bg-white rounded-md w-full flex items-center py-3 px-4">
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
              className="w-full py-1 px-3 text-black outline-none "
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
            className="mt-3 text-white text-right w-full"
          >
            Forgot Password?
          </button>
          <div className="mt-3 w-full text-lg">
            <Button
              onClick={() => {
                dispatch(setIsLoggedIn(true))
                history.push('/')
              }}
              text="Login"
            />
          </div>
          <div className="flex items-center w-full mt-6 text-white">
            <div className="w-full h-[1px] bg-white"></div>
            <p className="min-w-[100px] mx-[20px]">Or login with</p>
            <div className="w-full h-[1px] bg-white"></div>
          </div>
          <button className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center mt-4 space-x-2">
            <Image
              width="25"
              height="25"
              src="/img/login/google.svg"
              alt="google"
            />
            <span>Google</span>
          </button>
          <button className="w-full bg-white text-black py-3 rounded-lg flex items-center justify-center mt-4  space-x-2">
            <Image
              width="25"
              height="25"
              src="/img/login/fb.svg"
              alt="google"
            />
            <span>Facebook</span>
          </button>
          <p className="mt-5 text-white">
            I’m a new user,{' '}
            <button
              onClick={() => history.replace('/signup')}
              className="underline cursor-pointer text-pink"
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
