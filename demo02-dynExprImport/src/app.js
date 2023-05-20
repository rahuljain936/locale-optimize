import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import TopBar from "./components/topBar";
import Body from "./components/body";

let initLocale = "en";
if (navigator.language === "es") {
  initLocale = "es";
}

function App() {
  const [locale, setLocale] = useState(initLocale)
  return (
    <IntlProvider locale={locale}>
      <div>
        <div style={{ textAlign: "right" }}>
          <select value={locale} onChange={(e) => setLocale(e.target.value)} style={{ minWidth: "150px" }}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <TopBar/>
        <Body/>
      </div>
    </IntlProvider>
  );
}

export default App;