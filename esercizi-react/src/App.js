import React from 'react';
import {Welcome} from './Welcome';

export class App extends React.Component {
    render() { 
        return (
            <div>
                <Welcome name= {<strong>Emanuele</strong>} age= {25}></Welcome>
            </div>
        );
    }
}
 