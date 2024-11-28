import { useState, useEffect } from 'react'
import { useSpring } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import type { Card3DConfig } from '../types'

const DEFAULT_CONFIG: Required<Card3DConfig> = {
  rotationSensitivity: 1,
  maxRotation: 180,
  dampingFactor: 0.95,
  autoRotateSpeed: 1,
  enableAutoRotate: false,
  enableSwipe: true,
  enableClick: true,
}

export const useCard3DAnimation = (config: Card3DConfig = {}) => {
  const [flipped, setFlipped] = useState(false)
  const finalConfig = { ...DEFAULT_CONFIG, ...config }

  const [{ rotateY, opacity }, api] = useSpring(() => ({
    rotateY: 0,
    opacity: 0,
    config: { mass: 5, tension: 500, friction: 80 },
  }))

  useEffect(() => {
    let animationFrame: number

    if (finalConfig.enableAutoRotate && !flipped) {
      const animate = () => {
        api.start({
          rotateY: rotateY.get() + finalConfig.autoRotateSpeed,
          immediate: false,
        })
        animationFrame = requestAnimationFrame(animate)
      }
      animationFrame = requestAnimationFrame(animate)
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [finalConfig.enableAutoRotate, flipped, api, rotateY, finalConfig.autoRotateSpeed])

  const bind = useGesture(
    {
      onDrag: ({ movement: [mx], direction: [dx] }) => {
        if (!finalConfig.enableSwipe) return

        const rotation = (mx * finalConfig.rotationSensitivity) % 360

        api.start({
          rotateY: rotation,
          immediate: false,
        })

        if (Math.abs(rotation) > finalConfig.maxRotation) {
          setFlipped(true)
          api.start({
            rotateY: 180 * Math.sign(dx),
            immediate: false,
          })
        }
      },
      onClick: () => {
        if (!finalConfig.enableClick) return
        setFlipped((state) => !state)
        api.start({
          rotateY: flipped ? 0 : 180,
          immediate: false,
        })
      },
    },
    {
      drag: {
        filterTaps: true,
        rubberband: true,
        delay: 200,
      },
    }
  )

  const frontStyle = {
    opacity: opacity.to((o) => 1 - o),
    transform: rotateY.to((r) => `perspective(1000px) rotateY(${r}deg)`),
    backfaceVisibility: 'hidden' as const,
  }

  const backStyle = {
    opacity: rotateY.to((r) => (Math.abs(r) > 90 ? 1 : 0)),
    transform: rotateY.to((r) => `perspective(1000px) rotateY(${r + 180}deg)`),
    backfaceVisibility: 'hidden' as const,
  }

  return {
    bind,
    frontStyle,
    backStyle,
    flipped,
  }
}
