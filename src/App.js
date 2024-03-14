import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/Home/Home";


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
        <Route  exact path="/" component={Home} />

        </Switch>
      </Layout>
    </Router>
    
  );
}

export default App;
