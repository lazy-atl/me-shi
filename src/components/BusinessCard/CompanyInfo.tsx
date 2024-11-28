import React from 'react'
import { useBusinessCardTheme } from './hooks/useBusinessCardTheme'
import type { Theme } from './types'

interface CompanyInfoProps {
  company: string
  department: string
  theme: Theme
}

export const CompanyInfo: React.FC<CompanyInfoProps> = ({
  company,
  department,
  theme,
}) => {
  const { subHeadingClassName, subTextClassName } = useBusinessCardTheme(theme)

  return (
    <div className="mb-4">
      <h2 className={subHeadingClassName}>{company}</h2>
      <p className={subTextClassName}>{department}</p>
    </div>
  )
}
