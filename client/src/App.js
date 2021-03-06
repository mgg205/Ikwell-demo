import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import MediaList from './components/MediaList';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>GraphQL</h1>
                <MediaList />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
