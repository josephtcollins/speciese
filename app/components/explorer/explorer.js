import React from 'react';
import AnimalCard from '../animal/animalcard'
import Bracket from './bracket';
import TopBar from '../topbar/topbar';

export default class Explorer extends React.Component {
  render() {
    return (
      <div>
      <TopBar />
      <div className='explore-content'>
        <AnimalCard class='parent-card' group='Herding Group' description='Herding dogs are know for their fantastic ability to heard animals...' />
        <br />
        <Bracket />
        <div className='row child-card-row columns col-md-12 col-centered'>
          <AnimalCard class='row-box col-md-2 special-gold' group='Australian Shephard' description=''/>
          <AnimalCard class='row-box col-md-2' group='Bearded Collie' description=''/>
          <AnimalCard class='row-box col-md-2' group='Border Collie' description=''/>
          <AnimalCard class='row-box col-md-2' group='Spanish Water Dog' description=''/>
        </div>
      </div>
      </div>
    )
  }
}
