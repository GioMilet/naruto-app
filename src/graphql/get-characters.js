import gql from 'graphql-tag';

export const GET_CHARACTERS = gql`
    query characters($rank: [String!]){
        characters(filter: {rank: $rank}){
            results{
            _id
            name
            avatarSrc
            description
            rank
            village
            }
        }
    }
`