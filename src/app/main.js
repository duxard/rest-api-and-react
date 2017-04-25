import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Animals from './components/Animals';


class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Hello from react</h1>
                <Animals />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
