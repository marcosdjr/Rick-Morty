import React from 'react'
import Personagem from './Personagem.js'
import CaixadePesquisa from './CaixadePesquisa.js';

class ListadePersonagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            personagens: []
        };
    }


    criarQuadroPersonagens() {
        return this.state.personagens.map((personagem) => {
            return <Personagem personagem={personagem} key={personagem.id} />
        });
    }

    pesquisarPersonagens(evento) { 
        if (evento.key ==="Enter"){
        const personagemBuscado = evento.target.value
       
        fetch(`https://rickandmortyapi.com/api/character/?name=${personagemBuscado}`)
                .then(resultado => resultado.json())
                .then(resultadoJson => {
                    if (resultadoJson.results) {
                    this.setState({
                        isLoaded: true,
                        personagens: resultadoJson.results
                    })
                } else{

                    alert('Não encontrado neste universo...')
                }
                })
        
            }

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
                <div className='lista'>
                    <div className="lista__titulo">
                        <h1>Mick and Rorty</h1>
                       <CaixadePesquisa placeholder='Quem procuras? (Nome + Enter)' 
                       funcaoPesquisar={(evento) => this.pesquisarPersonagens(evento)} />
                    </div>
                    <div className='lista__personagens'>
                    {this.criarQuadroPersonagens()}
                     </div> 
                        <button className='lista__personagens__botaoMoreTyngs' onClick={() => this.criarQuadroPersonagens()}>
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