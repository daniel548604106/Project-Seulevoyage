import Image from 'next/image';
import React from 'react';

import { IonBackButton, IonButtons, IonTitle, IonToolbar } from '@ionic/react';

interface NavigationProps {
  title: string
  icon?: string
  customStyle?: string
  leftIcon?: {
    icon?: string
    onClick: () => void
  }
  rightTools?: React.ReactNode
}
const Navigation = (props: NavigationProps) => {
  const { title, customStyle = '', leftIcon, rightTools } = props
  return (
    <div
      className={`${customStyle} py-3 px-2 flex items-center justify-between`}
    >
      <button onClick={() => leftIcon?.onClick()}>
        {leftIcon?.icon ? (
          <Image width="20" height="20" src={leftIcon?.icon} alt="back" />
        ) : (
          <Image width="20" height="20" src="/img/back.svg" alt="back" />
        )}
      </button>
      <div>
        <IonTitle>{title}</IonTitle>
      </div>
      {rightTools ?? <div />}
    </div>
  )
}

export default Navigation
