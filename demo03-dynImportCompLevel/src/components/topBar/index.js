import React, { useState, useEffect } from "react";
import { useIntl, IntlProvider } from "react-intl";
import loadMessages from './lang'

export default function TopbarLocalizationWrapper() {
  const {locale} = useIntl();
  const [messages, setMessages] = useState(null);

  useEffect(() => { import(/* webpackChunkName: "[request]" */`./lang/${locale}.json`).then(setMessages) }, [locale]);

  return messages ? (
    <IntlProvider messages={messages}>
      <TopBar/>
    </IntlProvider>
  ) : null;
}

function TopBar() {
  const {formatMessage} = useIntl();

  return (
    <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
      <h1>{formatMessage({ id: "message.argument" }, { link: "https://tinyurl.com/localeBundling" })}</h1>
    </div>
  );
}
