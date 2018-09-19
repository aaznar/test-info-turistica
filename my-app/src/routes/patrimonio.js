import React from 'react';

//Components
import Toolbar from '../components/toolbar';
  
class Patrimonio extends React.Component{
  state={
    site:"patrimonio",
  }

  render(){
    return (
      <div id="cuerpoPrincipal">
        <Toolbar activeItem={this.state.site}/>

        <p>Estás en la página de PATRIMONIO</p>
      </div>
    );
  }
}

export default Patrimonio;