import React from "react";

import { Banner } from "../common";
import "./BannerNewsletter.css";

function BannerNewsletter() {
  return (
    <Banner
      headline="You know you don't want to miss out"
      mediaQueryClassName="newsletter"
      inputType="email"
      inputPlaceholderText="i-like_keyboards@keycaps.cables"
      buttonText="be in the know"
      buttonOnPress={addNewSubscription}
    />
  );
}

function addNewSubscription(emailAddress?: string) {
  if (!emailAddress) {
    console.error("No email address was received for new newsletter subscription.");
    return;
  }
  // use fetch API to PUT the email address to the database at the proper endpoint
}

export default BannerNewsletter;