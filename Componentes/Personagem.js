import React from 'react';
import { Link } from 'react-router-dom';

class Personagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagem: {}
        }
    }

    render() {
        //const isLoaded = this.state.isLoaded
        //const pokemon = this.state.pokemon
        const { isLoaded, personagem } = this.state;

        if (!isLoaded) {
            return (
                <div className='carregando'>
                    Procurando personagens...
                </div>
            );
        } else {
            const imageSrc = `https://rickandmortyapi.com/api/character/avatar/${personagem.id}.jpeg`
            return (
                <Link to={`/personagem/${personagem.id}`}>
                    <section className='lista__personagens__figuraeinfo'>
                        <div className='lista__personagens__figuraeinfo__figura'>
                            <img src={imageSrc} alt={personagem.name} />
                        </div>
                        <div className='lista__personagens__figuraeinfo__info'>
                            <h2>{personagem.name}</h2>
                            <div className='lista__personagens__figuraeinfo__info__categorias'>
                                <div className='lista__personagens__figuraeinfo__info__categorias__categoria'>
                                    <span>Status: {personagem.status}</span>
                                </div>

                                <div className='lista__personagens__figuraeinfo__info__categorias__categoria'>
                                    <span>Species: {personagem.species}</span>
                                </div>
                            </div>
                        </div>
                    </section>


                </Link>
            );
        }
    }


    componentDidMount() {
        fetch(this.props.personagem.url)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    personagem: resultadoJson
                });
            })

    }


}

export default Personagem;