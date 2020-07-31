import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Suspense fallback={"Loading..."}>
                <Home />
              </Suspense>
            )}
          />
          <Route
            path="/about"
            render={() => (
              <Suspense fallback={"Loading..."}>
                <About />
              </Suspense>
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
