import React from 'react'
import { useBusinessCardTheme } from './hooks/useBusinessCardTheme'
import type { Theme } from './types'

interface PersonalInfoProps {
  name: string
  title: string
  theme: Theme
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  name,
  title,
  theme,
}) => {
  const { headingClassName, subTextClassName } = useBusinessCardTheme(theme)

  return (
    <div className="mb-4">
      <h1 className={headingClassName}>{name}</h1>
      <p className={subTextClassName}>{title}</p>
    </div>
  )
}
