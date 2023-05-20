import React, { useState, useEffect } from "react";
import { useIntl, IntlProvider } from "react-intl";
import loadMessages from './lang'

export default function BodyLocalizationWrapper() {
  const {locale} = useIntl();
  const [messages, setMessages] = useState(null);

  useEffect(() => { import(/* webpackChunkName: "[request]" */`./lang/${locale}.json`).then(setMessages) }, [locale]);

  return messages ? (
    <IntlProvider messages={messages}>
      <Body/>
    </IntlProvider>
  ) : null;
}

function Body() {
  const {formatMessage} = useIntl();

  return (
    <div>
      <div style={{ padding: 20 }} data-testid="examples">
        <h3>{formatMessage({ id: "examples" })}</h3>
        {formatMessage({ id: "message.simple" })}
        <br />
        {formatMessage({ id: "message.argument" }, { name: "Rahul" })}
      </div>
    </div>
  )
}