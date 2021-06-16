import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar.jsx';
// import CardWithClass from './components/CardWithClass';
import {ThemeProvider} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import theme from './temaConfig'
import { Typography } from '@material-ui/core';
import Category from "./Category.js";
import MenuItem from "./MenuItem.js";


class App extends Component { 

  render() {
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className="App">
          <ul>
            <Category name="Autos" items={['0 km', 'Usados', 'Planes']} icon="fa-solid fa-car" />
            <Category name="Motos" items={['0 km', 'Usadas', 'Planes']} icon="fa-solid fa-motorcycle"/>
            <Category name="Gestoria" items={['Tramites', 'Presupuestos', 'Ver tramites']} icon="fa-solid fa-id-card" />
          </ul>

        </div>
      
      
        
      </ThemeProvider>
    );  
  }
  

}

export default App;
