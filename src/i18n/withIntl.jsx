import React, { Component, Fragment } from 'react';
import { IntlProvider, injectIntl, addLocaleData } from 'react-intl';
import LanguageContext from './LanguageContext';
import IntlContext from './IntlContext';
import { localeData } from './locales';

addLocaleData(localeData);

const InjectIntlContext = injectIntl(({ intl, children }) => {
  return <IntlContext.Provider value={intl}>{children}</IntlContext.Provider>;
});

export default ComposedComponent => {
  class withIntl extends Component {
    constructor(props) {
      super();
      const { pageContext } = props;
      const { locale, languages, originalPath } = pageContext;

      this.state = {
        language: {
          locale,
          languages,
          originalPath
        }
      };
    }

    render() {
      const { language } = this.state;
      const locale = language.locale || 'en';
      const messages = require(`./locales/${locale}.js`); // eslint-disable-line

      return (
        <IntlProvider
          textComponent={Fragment}
          locale={locale}
          key={locale}
          messages={messages}
          defaultLocale="en"
        >
          <InjectIntlContext>
            <LanguageContext.Provider value={language}>
              <ComposedComponent {...this.props} />
            </LanguageContext.Provider>
          </InjectIntlContext>
        </IntlProvider>
      );
    }
  }
  return withIntl;
};
