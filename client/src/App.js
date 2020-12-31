import './App.css';
import CountryList from "./components/CountryList"
import Home from "./components/Home"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo"
import { Route, Switch, Link } from "react-router-dom";

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql"
})

function App() {
  return (
    <ApolloProvider client = {client}>

      <div className="container">
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              <span >I want to go travel</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/country" className="nav-link">
              Country Info
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="nav-link">
             My Trip
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/country" component={CountryList} />
      </Switch>
      </div>
    </ApolloProvider>
  );
}

export default App;




