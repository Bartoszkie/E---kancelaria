import React from "react";
import Header from "./components/header/header.component";
import StartPage from "./pages/start-page/StartPage.component";
import DocsPreviev from "./pages/docs-preview/docs-previev";

import { Route } from "react-router-dom";
import "./sass/global/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={StartPage} />
        <Route path="/documents" component={DocsPreviev} />
      </div>
    );
  }
}

export default App;
