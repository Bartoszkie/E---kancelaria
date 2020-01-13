import React from "react";
import Header from "./components/header/header.component";
import StartPage from "./pages/start-page/StartPage.component";
import DocsPreviev from "./pages/docs-preview/docs-previev";
import Orders from "./pages/orders/orders.component";

import { Route } from "react-router-dom";
import "./sass/global/main.scss";
import InfoPage from "./pages/info-page/info-page.component";

import Book1 from "./assets/IMG/books-1.jpg";
import Book2 from "./assets/IMG/book-2.jpg";
import Book3 from "./assets/IMG/books-3.jpg";
import Registration from "./pages/registration/registration.component";
import {
  auth,
  createUserProfileDocument
} from "./redux/firebase/firebase.config";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser} />
        <Route exact path="/" component={StartPage} />
        <Route
          exact
          path="/"
          render={() => (
            <InfoPage
              image={Book1}
              number="01"
              per="03"
              heading="Step 1"
              text="You need to sign some hard documents? We got You!"
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <InfoPage
              image={Book2}
              number="02"
              per="03"
              heading="Step 2"
              text="Find a form what You are looking for..."
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <InfoPage
              image={Book3}
              number="03"
              per="03"
              heading="Step 3"
              text="Sign in a form and wait for PDF to begin download - thanks for cooperation!"
            />
          )}
        />
        <Route path="/documents" component={DocsPreviev} />
        <Route path="/registration" component={Registration} />
        <Route path="/orders" component={Orders} />
      </div>
    );
  }
}

export default App;
