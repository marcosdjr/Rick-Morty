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
        console.log(evento) 
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

                    alert('não encontrado')
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
                <div className='englobadora'>
                    <div className="titulo">
                        <h1>Mick and Rorty</h1>
                       <CaixadePesquisa placeholder=' Digite o nome e pressione Enter' 
                       funcaoPesquisar={(evento) => this.pesquisarPersonagens(evento)} />
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