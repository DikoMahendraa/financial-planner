import React from 'react';
import LayoutAuthentication from '@/layouts/LayoutAuthentication';
import PageLogin from '@/components/pages/Login';
import ASEO from '@/components/atoms/SEO';

export default function Login() {
  return (
    <React.Fragment>
      <ASEO title="Masuk" />
      <LayoutAuthentication>
        <PageLogin />
      </LayoutAuthentication>
    </React.Fragment>
  );
}
