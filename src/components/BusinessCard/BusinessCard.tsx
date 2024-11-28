import React from 'react'
import { ContactInfo } from './ContactInfo'
import { PersonalInfo } from './PersonalInfo'
import { CompanyInfo } from './CompanyInfo'
import { BusinessCardLogo } from './BusinessCardLogo'
import { BusinessCardDivider } from './BusinessCardDivider'
import { useBusinessCardTheme } from './hooks/useBusinessCardTheme'
import type { BusinessCardProps } from './types'

export const BusinessCard: React.FC<BusinessCardProps> = ({
  name,
  title,
  company,
  department,
  email,
  phone,
  address,
  website,
  logo,
  theme = 'light',
}) => {
  const { cardClassName } = useBusinessCardTheme(theme)

  return (
    <div className={cardClassName}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <PersonalInfo
            name={name}
            title={title}
            theme={theme}
          />
          <CompanyInfo
            company={company}
            department={department}
            theme={theme}
          />
        </div>
        {logo && <BusinessCardLogo logo={logo} />}
      </div>
      <BusinessCardDivider theme={theme} />
      <ContactInfo
        email={email}
        phone={phone}
        address={address}
        website={website}
        theme={theme}
      />
    </div>
  )
}
