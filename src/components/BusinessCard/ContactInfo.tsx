import React from 'react';
import { useBusinessCardTheme } from './hooks/useBusinessCardTheme';
import type { Theme } from './types';

interface ContactInfoProps {
  email: string;
  phone: string;
  address: string;
  website: string;
  theme: Theme;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  address,
  website,
  theme
}) => {
  const { contactTextClassName } = useBusinessCardTheme(theme);

  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <p className={contactTextClassName}>{email}</p>
      <p className={contactTextClassName}>{phone}</p>
      <p className={contactTextClassName}>{address}</p>
      <p className={contactTextClassName}>{website}</p>
    </div>
  );
};