import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import LanguageContext from './LanguageContext';
import { localeData } from './locales';

addLocaleData(localeData);

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
        <IntlProvider locale={locale} messages={messages}>
          <LanguageContext.Provider value={language}>
            <ComposedComponent {...this.props} />
          </LanguageContext.Provider>
        </IntlProvider>
      );
    }
  }
  return withIntl;
};
