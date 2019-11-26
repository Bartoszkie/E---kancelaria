import React from "react";


import {Route} from 'react-router-dom';
import StartPage from './pages/start-page/StartPage.component';
import DocsPreviev from './pages/docs-preview/docs-previev';

import "./sass/global/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={StartPage}/>
        <Route path="/documents" component={DocsPreviev}/>
      </div>
    );
  }
}

export default App;
