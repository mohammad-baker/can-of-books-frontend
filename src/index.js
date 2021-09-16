import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
var sectionStyle = {
  backgroundImage: `url(https://www.maxpixel.net/static/photo/1x/Leisure-Blur-Reading-Book-Background-5342680.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight:913,
};
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <div style={sectionStyle}>
      <App />
    </div>
    </Auth0Provider>,
  document.getElementById("root")
);