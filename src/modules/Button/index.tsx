import React from 'react';

import { IonButton } from '@ionic/react';

interface ButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { onClick, text, disabled = false } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full w-full p-5 shadow-lg  ${
        disabled
          ? 'text-black bg-transparent border'
          : 'bg-gradient-to-r from-orange to-pink text-white '
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
