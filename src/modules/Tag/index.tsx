import Image from 'next/image'
import React from 'react'

interface TagProps {
  text: string
  icon?: string
  isIconVisible?: boolean
  isHighlighted?: boolean
  onClick?: () => void
}

const Tag = (props: TagProps) => {
  const { text, icon, isIconVisible, isHighlighted, onClick = () => {} } = props
  return (
    <span
      onClick={() => onClick()}
      className={`rounded-lg border whitespace-nowrap border-pink p-1 px-2 ${
        isHighlighted ? 'bg-pink text-white' : 'text-pink'
      }`}
    >
      {text}
      {isIconVisible && (
        <span className="ml-1 text-pink">
          <Image
            width="12"
            height="12"
            src={icon ?? '/img/close.svg'}
            alt="icon"
          />
        </span>
      )}
    </span>
  )
}

export default Tag
