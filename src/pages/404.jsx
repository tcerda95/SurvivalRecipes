import React from 'react';
import { FormattedMessage } from 'react-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { withIntl } from '../i18n';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      <FormattedMessage id="notFoundText" />
    </p>
  </Layout>
);

export default withIntl(NotFoundPage);
