import * as React from "react";
import { Heading, Flex } from "@rebass/emotion";
import Layout from "../components/Layout";
import CountdownTimer from "../components/CountdownTimer";
import LanguageToggle from "../components/LanguageToggle";
import { useI18n } from "../hooks/useI18n";

export default () => {
  return (
    <Layout title="Countdown Timer">
      <Flex alignItems="center" justifyContent="center" flexDirection="column" css={{ minHeight: "100vh" }}>
        <Heading css={{ textTransform: "uppercase", textAlign: "left" }}>{useI18n("heading")}</Heading>
        <CountdownTimer endAt="2018-12-25T00:00:00" />
        <LanguageToggle />
      </Flex>
    </Layout>
  );
};
