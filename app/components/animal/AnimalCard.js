import React from 'react';

export default class Animal extends React.Component {
  render() {
    return (
      <div className={`box box1 shadow1 text-center animal-card ${this.props.class}`} >
        <div className='box-content'>
          <h3>{this.props.group}</h3>
          <div>{this.props.description}</div>
        </div>
      </div>
    )
  }
}
