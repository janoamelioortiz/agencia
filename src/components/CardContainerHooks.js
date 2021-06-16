/* import React, {useState} from 'react';

function CardContainer(){

    const [ referens, setReferens] = useState(referensData);

    return(
        <div>
            Container Card
            {this.state.referens.map((item, key) =>
            <card {...item} buttonFunction={this.buttonFunction} />)}

            <button onClick={this.addNewCard}>Agregar Referencia </button>
        </div>

    )   
}