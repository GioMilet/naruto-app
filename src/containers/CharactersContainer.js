import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Character from '../components/Character';
import { GET_CHARACTERS } from '../graphql/get-characters';

function CharactersContainer() {

    const { data: { characters = [] } = {} } = useQuery(GET_CHARACTERS, {
        variables: { rank: "kage" },
    })
    return (
        <div className="container">
            {characters.results && characters.results.map(character => <Character key={character._id}
                character={character}
            />)}
        </div>
    )
}

export default CharactersContainer
