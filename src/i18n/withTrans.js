import React, { Component } from "react";
import { I18nextProvider, withTranslation } from "react-i18next";

import i18next from "./config";

export default function withTrans(WrappedComponent) {
  const WComponent = withTranslation()(WrappedComponent);

  return class extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WComponent {...this.props} language={i18next.language} />
        </I18nextProvider>
      );
    }
  };
}
