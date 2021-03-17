import React from 'react';
import ReactDOM from 'react-dom';
import './styles/globals.scss';

// import styles from './styles/<app>';

import { createStore } from 'redux';
import reducer from './reducers/index.js';

const store = createStore(reducer);

const App = () => {

    return (
        <div>
            Welcome to Redux template!
        </div>
    )
}

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
)

render()
store.subscribe(render)

if (module.hot) {
    module.hot.accept();
}
