//const element = document.createElement('h1');
//element.innerText = 'hola mundo';

//const container = document.getElementById('app');
//container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';


import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('app');

ReactDOM.render(<Badge firstname = "Marco Aurelio" lastname="Guaman" job="Teacher" tw="choloviejo" />, container);