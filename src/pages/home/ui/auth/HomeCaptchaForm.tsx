import ReCAPTCHA from 'react-google-recaptcha';
import * as React from 'react';
import {  Controller, useFormContext } from 'react-hook-form';
import { FormControl, FormHelperText } from '@mui/material';
import { Environments } from '../../../../environments/environment';

export const MyCaptcha = () => {
  const { control } = useFormContext();
  const siteKey = Environments.captcha;
  const captchaRef = React.useRef<ReCAPTCHA>(null);

  return (
    <Controller
      control={control}
      name='captcha'
      rules={{ required: 'Капча обязательна' }}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <FormControl error={!!error}>
          <ReCAPTCHA
            sitekey={siteKey}
            ref={captchaRef}
            onChange={onChange}
          />
          {error && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
