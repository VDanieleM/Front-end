import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naviga from './Naviga.jsx';
import Container from 'react-bootstrap/esm/Container.js';
import Footerino from './Footerino.jsx';
import Welcome from './Welcome.jsx';
import Fantasybooks from './Fantasybooks.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container className="bg-body-tertiary">
    <Naviga />
    <Welcome />
    <Fantasybooks />
    </Container>
    <Footerino />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
