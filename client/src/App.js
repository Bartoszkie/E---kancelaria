import React from "react";
import Header from "./components/header/header.component";
import StartPage from "./pages/start-page/StartPage.component";
import DocsPreviev from "./pages/docs-preview/docs-previev";

import { Route } from "react-router-dom";
import "./sass/global/main.scss";
import InfoPage from "./pages/info-page/info-page.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Route exact path="/" component={StartPage} />
        <Route exact path="/" render={() => <InfoPage number="01" per="03" heading="Step 1" text="You need to sign some hard documents? We got You!"/>} />
        <Route exact path="/" render={() => <InfoPage number="02" per="03" heading="Step 2" text="Find a form what You are looking for..."/>} />
        <Route exact path="/" render={() => <InfoPage number="03" per="03" heading="Step 3" text="Sign in a form and wait for PDF to begin download - thanks for cooperation!"/>} />
        <Route path="/documents" component={DocsPreviev} />
      </div>
    );
  }
}

export default App;
