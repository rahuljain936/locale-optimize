import React, { useState, useEffect } from "react";
import { useIntl, IntlProvider } from "react-intl";

function loadMessages(path, locale) {
  switch (locale) {
    case "es":
      return import(
        /* webpackChunkName: "localeEs" */
        /* webpackMode: "lazy-once" */
        `./components/${path}/lang/es.json`);
    default:
      return import(
        /* webpackChunkName: "localeEn" */
        /* webpackMode: "lazy-once" */
        `./components/${path}/lang/en.json`);
  }
}

function LocalizationHoc(Component, path) {
  return function LocalizedComp() {
    const intl = useIntl();
    const [messages, setMessages] = useState(null);

    useEffect(() => {loadMessages(path, intl.locale).then(setMessages)}, [intl.locale]);

    return messages ? (
      <IntlProvider messages={messages}>
        <Component/>
      </IntlProvider>
    ) : null;
  }
}
export default LocalizationHoc;