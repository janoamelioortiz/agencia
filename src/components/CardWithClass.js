/* import React from 'react';


 export default class CardWithClass extends React.Component {

        state = {
            contador: 1,
        } 
        
    componentWillMount(){ 
        console.log('El componente se esta actualizando', window)      
    }

    componentDidMount() {
        console.log('Hola estoy renderizando');
    }
    componentDidUpdate() {
        if(this.state.contador < 0){
            alert('no puedes restar numeros negativos')
        }
        console.log('Hola me estoy actualizando', this.state.contador);
    }

    sumar = () => {
        this.setState({contador : this.state.contador + 1})
    }
    restar = () => {
        console.log('this', this);
        if(this.state.contador < 0){
            return
        }
        this.setState({contador : this.state.contador - 1})
    }

    contadorNumero = this.state.contador
    render() {
        return (
            <div>
                 <h1>{this.props.hola}</h1>
                 <button onClick={this.restar}>-</button>
                 <h1>{this.state.contador}</h1>
                 <button onClick={this.sumar}>+</button>
            </div>


        )
    }
}
*/
