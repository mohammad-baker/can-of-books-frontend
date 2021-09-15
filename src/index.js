import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var sectionStyle = {
  backgroundImage: `url(https://www.teahub.io/photos/full/271-2719234_free-photo-backgrounds-web-page-background.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  minHeight:912,
};
ReactDOM.render(
  <React.StrictMode>
    <div style={sectionStyle}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
