import React from 'react';

var center ={
  textAlign : 'center',
};

var Field = React.createClass({
  render(){
    var isRequired = ( <div></div> );
    if( this.props.field.isRequired ){
      isRequired = ( <div style={center}> <span className="glyphicon glyphicon-check" /> </div> );
    }
    return (
      <tr>
        <td>{this.props.field.name}</td>
        <td>{this.props.field.name}</td>
        <td>{isRequired}</td>
      </tr>
    );
  }
});

module.exports = Field;
