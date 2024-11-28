import { useMemo } from 'react'
import clsx from 'clsx'
import type { Theme } from '../types'

export const useBusinessCardTheme = (theme: Theme) => {
  return useMemo(() => ({
    cardClassName: clsx(
      'w-96 h-56 rounded-lg shadow-lg p-6 flex flex-col justify-between',
      theme === 'light' ? 'bg-white' : 'bg-gray-800'
    ),
    headingClassName: clsx(
      'text-2xl font-bold',
      theme === 'light' ? 'text-gray-800' : 'text-white'
    ),
    subHeadingClassName: clsx(
      'text-lg font-semibold',
      theme === 'light' ? 'text-gray-800' : 'text-white'
    ),
    subTextClassName: clsx(
      'text-md',
      theme === 'light' ? 'text-gray-600' : 'text-gray-300'
    ),
    contactTextClassName: clsx(
      'text-sm',
      theme === 'light' ? 'text-gray-600' : 'text-gray-300'
    ),
    dividerClassName: clsx(
      'h-px my-4',
      theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
    )
  }), [theme])
}
