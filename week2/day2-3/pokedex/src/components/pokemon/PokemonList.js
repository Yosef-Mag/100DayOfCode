import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [visible, setVisible] = useState(20)
    

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(res => {
                setPokemons(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const showMore = (e) => {
        e.preventDefault()
        setVisible(prevValue => prevValue + 21)
    }

    const pokemonInfo = (index) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
            .then(res => {
                console.log(res)
                // setPokemon(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
        <div className="main">
            <div className="list">
                <div className="cards">
                    {pokemons.slice(0, visible).map((pokemon, index) => (
                        <div key={index} className="card" onClick={() => pokemonInfo(index)}>
                            <div className="card_header"><h5 className="pokemon_number">{index + 1}</h5></div>
                            <div className="pokemon_card_content">
                                <img className="pokemon_img" src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${index + 1}.png?raw=true`}
                                    alt={pokemon.name} />
                                <h1 className="pokemon_name">{pokemon.name.toLocaleLowerCase().split(' ')
                                    .map(letter => letter.charAt(0).toLocaleUpperCase() + letter.substring(1)).join(' ')}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="btn_div">
                    <button className="btn" onClick={showMore}>Show More</button>
                </div>
            </div>
        </div>
        <div>

        </div>
        </>
    )
}
