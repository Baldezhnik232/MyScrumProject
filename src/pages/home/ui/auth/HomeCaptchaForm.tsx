import ReCAPTCHA from 'react-google-recaptcha';
import * as React from 'react';

interface MyCaptchaProps {
  onChange?: (token: string | null) => void;
}
export const MyCaptcha = ({ onChange }: MyCaptchaProps) => {
  const siteKey = import.meta.env.VITE_FIREBASE_CAPTCHA_KEY as string;
  const captchaRef = React.useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    console.log('CAPTCHA value:', value);
    onChange?.(value); 
  };
  return (
    <ReCAPTCHA
      sitekey={siteKey}
      ref={captchaRef}
      onChange={handleCaptchaChange}
    />
    
  );
};
