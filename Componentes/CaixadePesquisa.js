import React from 'react';

class CaixadePesquisa extends React.Component {
    render() {
        return (
            <div className='caixa-de-pesquisa'>
                <input type='text'
                className='caixa-de-pesquisa__input' 
                placeholder={this.props.placeholder}
                onSubmit={this.props.funcaoPesquisar}/>
            </div>

        )
            

        
    }
}

export default CaixadePesquisa;