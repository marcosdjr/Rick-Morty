import React from 'react'
import Personagem from './Personagem.js'
import CaixadePesquisa from '/CaixadePesquisa.js';

class ListadePersonagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        };
    }

    /*
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

    } */


    criarQuadroPersonagens() {
        return this.state.personagens.map((personagem) => {
            return <Personagem personagem={personagem} key={personagem.id} />
        });
    }


    render() {
        const isLoaded = this.state.isLoaded;

        if (!isLoaded) {
            return (
                <div className='carregando'>
                    Buscando personagens...
                </div>
            )
        } else {
            return (
                <div className='englobadora'>
                    <div className="titulo">
                        <h1>Mick and Rorty</h1>
                       
                    </div>
                    <div className='listadePersonagens'>
                    {this.criarQuadroPersonagens()}
                    </div>
                        <button onClick={() => this.criarQuadroPersonagens()}>
                            More Tyngs
                         </button>
                    
                </div>
            )
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    personagens: resultadoJson.results
                })
            })
    }


}

export default ListadePersonagens