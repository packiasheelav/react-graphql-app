import React, { Component } from "react";
import AllRoutes from "./components/AllRoutes";
import NavBar from "./components/NavBar";
import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const defaultState={
  isEditMode:false
}

const client = new ApolloClient({
	uri: 'https://api-euwest.graphcms.com/v1/cjs54evot3kwa01gjrt913h57/master',
  clientState:{
    defaults: defaultState, 
    resolvers:{}
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <ApolloProvider client={client}>
        <NavBar />
        <AllRoutes />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
