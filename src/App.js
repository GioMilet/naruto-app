import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import CharacterContainer from './containers/CharactersContainer';

function App() {

  const client = new ApolloClient({
    uri: 'https://www.narutoql.com/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <main>
        <CharacterContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
