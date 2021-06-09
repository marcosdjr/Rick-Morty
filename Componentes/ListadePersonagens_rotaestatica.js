import React from 'react'
import Personagem from './Personagem.js'

class ListadePersonagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        };
    }

    listarPersonagens() {
        const novosPersonagens = [
            {
                'id': 1,
                'name': 'Ricky Sanchez',
                'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
                'status': 'Alive',
                'species': 'Human'
            },
            {
                'id': 2,
                'name': 'Morty Smith',
                'image': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
                'status': 'Alive',
                'species': 'Human'
            }
        ];

        this.setState({
            personagens: novosPersonagens
        });

    }


    criarQuadroPersonagens() {
        return this.state.personagens.map((personagem) => {
            return <Personagem personagem={personagem} key={personagem.id}/>
        });
    }


    render() {
        return (
            <div className='englobadora'>
                <div className="titulo">
                    <h1>Mick and Rorty</h1>
                    {this.criarQuadroPersonagens()}
                </div>
                <div className='listadePersonagens'>
                <button onClick={() => this.listarPersonagens()}>
                    More Tyngs
                </button>
                </div>
            </div>
        )
    }
}

export default ListadePersonagens