import React from 'react'

interface BusinessCardLogoProps {
  logo: string
}

export const BusinessCardLogo: React.FC<BusinessCardLogoProps> = ({ logo }) => {
  return (
    <div className="w-16 h-16 flex-shrink-0 ml-4">
      <img
        src={logo}
        alt="Company logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}
