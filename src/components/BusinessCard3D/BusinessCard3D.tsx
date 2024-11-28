import React from 'react';
import { animated } from '@react-spring/web';
import { BusinessCard } from '../BusinessCard';
import { QRCode } from './QRCode';
import { useCard3DAnimation } from './hooks/useCard3DAnimation';
import type { BusinessCard3DProps } from './types';

export const BusinessCard3D: React.FC<BusinessCard3DProps> = ({ config, ...props }) => {
  const { bind, frontStyle, backStyle, flipped } = useCard3DAnimation(config);

  return (
    <div className="relative w-96 h-56" {...bind()}>
      <animated.div
        className="absolute w-full h-full"
        style={frontStyle}
      >
        <BusinessCard {...props} />
      </animated.div>
      <animated.div
        className="absolute w-full h-full"
        style={backStyle}
      >
        <BusinessCardBack {...props} />
      </animated.div>
    </div>
  );
};

const BusinessCardBack: React.FC<BusinessCard3DProps> = ({ theme = 'light' }) => {
  const baseClasses = 'w-full h-full rounded-lg shadow-lg p-6 flex items-center justify-center';
  const themeClasses = theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white';

  return (
    <div className={`${baseClasses} ${themeClasses}`}>
      <div className="text-center">
        <p className="text-sm mb-2">スワイプまたはクリックで表面に戻ります</p>
        <div className="w-24 h-24 mx-auto">
          <QRCode />
        </div>
      </div>
    </div>
  );
};