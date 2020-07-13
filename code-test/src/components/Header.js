import React from "react";
import { Header } from "semantic-ui-react";
// make a simple header
const HeaderComponent = () => (
  <div>
    <Header size="huge">RetireUp Code Test</Header>
    <Header className="headerTitle" size="medium">
      S&P 500 Index 1970-2019
    </Header>
  </div>
);

export default HeaderComponent;
