import React from "react";
import { useIntl } from "react-intl";
import LocalizationHoc from "../../localeHoc";

function TopBar() {
  const {formatMessage} = useIntl();
  return (
    <div style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
      <h1>{formatMessage({ id: "message.argument" }, { link: "https://tinyurl.com/localeBundling" })}</h1>
    </div>
  );
}

export default LocalizationHoc(TopBar, 'topBar')
