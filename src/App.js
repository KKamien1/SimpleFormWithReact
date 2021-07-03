import React from 'react';

import { FormTask } from './tasks/form-task/FormTask';
import './tasks/scss/style.scss'

function App() {
    return (
        <>
            <h1>Front-end developer recruitment task</h1>
            <p><i>If you wish to use TypeScript, you are more than welcome to. You will need to convert the application files to TS.</i></p>

            <hr />

            <FormTask />
        </>
    );
}

export default App;
