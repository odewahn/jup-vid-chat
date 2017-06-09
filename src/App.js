import React, { Component } from "react";
import { Card } from "@oreilly/shape-react-core";

export default class MyUserInfo extends Component {
  render() {
    return (
      <Card
        title="UX Strategy: How to Devise Innovative Digital Products that People Want"
        uri="https://www.safaribooksonline.com/library/view/ux-strategy/9781449372972/"
        coverUri="https://www.safaribooksonline.com/library/cover/9781449372972/600w/"
        format="book"
        authors={[{ name: "Barrett Austin Clark" }]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel porttitor enim. Donec ultricies massa sed."
        bottomMatter="Total Views: 1,000"
      />
    );
  }
}
