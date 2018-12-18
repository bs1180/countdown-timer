import React from "react";
import App, { Container } from "next/app";
import { Provider } from "../hooks/useI18n";

const translations = {
  en: {
    heading: "Starts in",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds"
  },
  de: {
    heading: "Beginnt in",
    days: "Tage",
    hours: "Stunde",
    minutes: "Minuten",
    seconds: "Sekunden"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider translations={translations} defaultLanguage="en">
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
