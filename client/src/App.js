import React from "react";
import Header from "./components/header/header.component";
import StartPage from "./pages/start-page/StartPage.component";
import DocsPreviev from "./pages/docs-preview/docs-previev";

import { Route } from "react-router-dom";
import "./sass/global/main.scss";

class App extends React.Component {
  state = {
    isHidden: false
  };

  render() {
    return (
      <div className="container">
        <Header isHidden={this.state.isHidden} />
        <Route exact path="/" component={StartPage} />
        <Route path="/documents" component={DocsPreviev} />
      </div>
    );
  }
}

export default App;
