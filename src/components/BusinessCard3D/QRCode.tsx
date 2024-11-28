import React from 'react'

export const QRCode: React.FC = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      fill="currentColor"
    >
      <path d="M30,30 L30,40 L40,40 L40,30 Z" />
      <path d="M60,30 L60,40 L70,40 L70,30 Z" />
      <path d="M30,60 L30,70 L40,70 L40,60 Z" />
      <rect
        x="45"
        y="45"
        width="10"
        height="10"
      />
      <path d="M30,45 L40,45 L40,55 L30,55 Z" />
      <path d="M60,45 L70,45 L70,55 L60,55 Z" />
      <path d="M45,30 L55,30 L55,40 L45,40 Z" />
      <path d="M45,60 L55,60 L55,70 L45,70 Z" />
    </svg>
  )
}
