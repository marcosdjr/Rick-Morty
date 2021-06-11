import { Link } from 'react-router-dom'
import React from 'react'

class Detalhar extends React.Component {
    constructor(props) {
        super(props);
        //pegar o id que vem da rota da URL e transforma em int
        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            personagem: {}

        }

    }


    render() {
        const { isLoaded, personagem } = this.state;
        if (!isLoaded) {
            return (
                <div className='detalhar'>
                    Carregando personagem selecionado...
                </div>
            )
        } else {
            const imageSrc = `https://rickandmortyapi.com/api/character/avatar/${personagem.id}.jpeg`
            return (
                <div className='detalhar' >

                    <div className='detalhar__middle'>
                        <section>
                            <div className='detalhar__middle__mid'>
                                <img src={imageSrc} alt={personagem.name} />
                            </div>
                            <div className='detalhar__middle__mid'>
                                <div className='detalhar__middle__mid__info'>
                                    <p><strong>{personagem.name}</strong></p>
                                    <p><strong>Status: </strong>{personagem.status}</p>
                                    <p>Species: {personagem.species}</p>
                                </div>
                            </div>
                        </section>

                        <div className='detalhar__middle__bottom'>
                            <button className='detalhar__middle__bottom__voltar'> 
                            <Link to='/'>Voltar</Link>
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        fetch(`https://rickandmortyapi.com/api/character/${this.id}`)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    personagem: resultadoJson
                })
            })
    }
}

export default Detalhar