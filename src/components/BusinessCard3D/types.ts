import type { BusinessCardProps } from '../BusinessCard/types'

export interface Card3DConfig {
  rotationSensitivity?: number
  maxRotation?: number
  dampingFactor?: number
  autoRotateSpeed?: number
  enableAutoRotate?: boolean
  enableSwipe?: boolean
  enableClick?: boolean
}

export interface BusinessCard3DProps extends BusinessCardProps {
  config?: Card3DConfig
}
