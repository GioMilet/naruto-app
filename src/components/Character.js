import React from 'react'

function Character({ character }) {
    console.log(character)
    return (
        <div className="character">
            <div>
                <div className="character__name">
                    <h3>{character.name} - <span>{character.rank} from the {character.village} </span></h3>
                </div>
                <div className="character__image">
                    <img src={character.avatarSrc} alt={character.name} />
                </div>
                <div className="character__meta">

                    <h4 className="character__description">Description</h4>
                    <span>{character.description}</span>

                </div>
            </div>
        </div>
    )
}

export default Character;
