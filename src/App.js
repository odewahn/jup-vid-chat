import React, { Component } from "react";
import { Button, Input } from "@oreilly/shape-react-core";

export default class MyUserInfo extends Component {
  render() {
    return (
      <div>
        <Input label="First Name" />
        <Input label="Last Name" />
        <Button>Save Me</Button>
      </div>
    );
  }
}
