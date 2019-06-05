import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Select from './select';


function router() {
  return(
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/select/:subId" component={Select} />
      </Router>
  )
}

export default router;