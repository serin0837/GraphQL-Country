import './App.css';
import CountryList from "./components/CountryList"
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "react-apollo"

const client = new ApolloClient({
  uri:"http://localhost:5000/graphql"
})

function App() {
  return (
    <ApolloProvider client = {client}>
      <div className="container">
        <header className="App-header">
        <h1>
        I want to go travel
        </h1>
        </header>
        <CountryList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
