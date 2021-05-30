import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';

// import styles from './styles/<app>';

import store from './app/store'
import { Provider } from 'react-redux'
import Counter from './features/counter/counter.js';

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
)
