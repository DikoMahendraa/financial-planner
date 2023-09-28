import React from 'react';

import LayoutAuthentication from '@/layouts/LayoutAuthentication';
import PageRegister from '@/components/pages/Register';
import ASEO from '@/components/atoms/SEO';

export default function Register() {
  return (
    <React.Fragment>
      <ASEO title="Daftar" />

      <LayoutAuthentication>
        <PageRegister />
      </LayoutAuthentication>
    </React.Fragment>
  );
}
