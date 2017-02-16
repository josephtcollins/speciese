import React from 'react';
import AnimalCard from './animal/AnimalCard'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AnimalCard class='parent-card' group='Herding Group' description='Herding dogs are know for their fantastic ability to heard animals...' />
        <br />
        <div className='row child-card-row columns col-md-12 col-centered'>
          <AnimalCard class='row-box col-md-2' group='Australian Shephard' description=''/>
          <AnimalCard class='row-box col-md-2' group='Bearded Collie' description=''/>
          <AnimalCard class='row-box col-md-2' group='Border Collie' description=''/>
          <AnimalCard class='row-box col-md-2' group='Spanish Water Dog' description=''/>
        </div>
      </div>
    )
  }
}
