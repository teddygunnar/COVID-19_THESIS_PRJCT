import React from "react";
import { Container } from "@material-ui/core";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Dashboard, About, Navbar, Provinsi, Footer } from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Provinsi" exact component={Provinsi} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default App;
