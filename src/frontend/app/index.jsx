import React from 'react';
import { render } from 'react-dom';
import {Compo1} from './compo1';

class App extends React.Component {
    render() {
        return <div>
            <Compo1 />
            <p> Hello, World! again</p>
        </div>
    }
}
render(<App />, document.getElementById('app'));