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
        <Route exact path="/" render={() => <InfoPage number="01" per="03" heading="Krok 1" text="Musisz wypełnić jakiś dokument? Przystąp do szukania!"/>} />
        <Route exact path="/" render={() => <InfoPage number="02" per="03" heading="Krok 2" text="Znajdź formularz, którego szukasz!"/>} />
        <Route exact path="/" render={() => <InfoPage number="03" per="03" heading="Krok 3" text="Wypełnij formularz i oczekuj na wygnerowanie - dzięki za współpracę!"/>} />
        <Route path="/documents" component={DocsPreviev} />
      </div>
    );
  }
}

export default App;
