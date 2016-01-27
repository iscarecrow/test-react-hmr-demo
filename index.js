import React from 'react';

import {render} from 'react-dom';

import App from './src/App';

let mountNode = document.getElementById('content');

render(<App/>,mountNode);