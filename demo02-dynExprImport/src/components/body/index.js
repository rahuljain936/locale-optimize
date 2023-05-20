import React from "react";
import { useIntl } from "react-intl";
import LocalizationHoc from "../../localeHoc";

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
  );
}

export default LocalizationHoc(Body, 'body')