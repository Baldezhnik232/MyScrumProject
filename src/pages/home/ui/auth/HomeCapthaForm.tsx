import ReCAPTCHA from 'react-google-recaptcha';
import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, Input, FormControl, TextField } from '@mui/material';

export const MyCaptha = () => {
  const SITE_KEY = '6LenHnsrAAAAAOco1aNOcldh20TO29phhXkC3Q3L  ';

  const [captchaValue, setCaptchaValue] = React.useState<null | string>();
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: null | string) => {
    console.log('CAPTCHA value:', value);
    setCaptchaValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaValue) {
      alert('Пожалуйста, подтвердите, что вы не робот');
      recaptchaRef.current?.reset();
      return;
    }

    console.log('Отправка формы с CAPTCHA:', captchaValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        sitekey={SITE_KEY}
        ref={recaptchaRef}
        onChange={handleCaptchaChange}
      />
    </form>
  );
};
