import React from "react";
import config from "./api_links.jsx";

var authorization_key = "O5mGIP3VNia0JvPH2IBiwA==";

class FetchAllApi extends React.Component {
  static userLogin(email_id, password, callback) {
    fetch(config.login_link, {
      method: "POST",
      body: JSON.stringify({
        email_id: email_id,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: authorization_key,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 1) {
          callback(null, data);
        } else {
          callback(null, data);
        }
      });
  }
}

export default FetchAllApi;