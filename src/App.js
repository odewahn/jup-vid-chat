import React, { Component } from "react";
import { SafariChrome } from "@oreilly/shape-react-core";

import "@oreilly/shape-react-core/index.css";
import "@oreilly/shape-css/grid.css";

const user = {
  user_type: "Trial",
  user_identifier: "f38ee9b3-06f5-468a-a245-000000000000",
  primary_account: "b70baefa-e8ed-44ca-8a6e-111111111111",
  username: "odewahn",
  first_name: "Andrew",
  last_name: "Odewahn",
  salesforce_id: "foobar",
  permissions: {
    view_full_epub: true,
    view_collections: false
  }
};

export default class MyUserInfo extends Component {
  render() {
    return (
      <SafariChrome user={user}>
        <h1>
          Welcome, {user.first_name} {user.last_name}
        </h1>
      </SafariChrome>
    );
  }
}
