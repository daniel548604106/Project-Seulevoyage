import React from 'react';

interface AccountInfoProps {
  title: string;
  content?: string;
  required?: boolean;
  icon?: string;
  onClick: () => void;
}

const AccountInfo = (props: AccountInfoProps) => {
  const { title, content = '', required = false, icon, onClick } = props;
  return (
    <div onClick={() => onClick()}>
      <p className="mb-2 mx-3 text-gray-500 font-semibold">
        {`${title}`}
        {required && `*`}
      </p>
      <div className="rounded-full border shadow-lg px-4 py-2">{content}</div>
    </div>
  );
};

export default AccountInfo;
