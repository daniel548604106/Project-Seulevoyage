import Image from 'next/image'
import React from 'react'

import { IonButton } from '@ionic/react'

interface ButtonProps {
  customStyle?: {
    width?: string
    height?: string
  }
  borderRadius?: 'full' | 'lg' | 'md' | 'none'
  onClick: () => void
  text: string
  leftIcon?: string
  rightIcon?: string
  disabled?: boolean
}

const Button = (props: ButtonProps) => {
  const {
    onClick,
    customStyle = { width: '', height: '' },
    leftIcon,
    borderRadius = 'full',
    rightIcon,
    text,
    disabled = false,
  } = props
  const { width = '', height = '' } = customStyle

  return (
    <button
      style={{ width, height }}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-${borderRadius} w-full p-4 shadow-lg  ${
        disabled
          ? 'text-black bg-transparent border'
          : 'bg-gradient-to-r from-orange to-pink text-white '
      }`}
    >
      {leftIcon && (
        <Image width="30" height="30" src={leftIcon} alt={leftIcon} />
      )}
      {text}
      {rightIcon && (
        <Image width="30" height="30" src={rightIcon} alt={rightIcon} />
      )}
    </button>
  )
}

export default Button
