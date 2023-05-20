import React from "react";
import { IntlProvider, useIntl } from "react-intl";

function LocalizationHoc(Component, messages) {
  return function LocalizedComp() {
    const {locale} = useIntl();
    return (
      <IntlProvider messages={messages[locale]}>
        <Component/>
      </IntlProvider>
    )
  }
}
export default LocalizationHoc;