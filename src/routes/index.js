import React from "react";
import { BrowserRouter, Route } from  'react-router-dom';

import Home from './Home';

export default () => (
    <BrowserRouter>
        <Route path="/home" component={Home} />
    </BrowserRouter>);
