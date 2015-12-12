import React from 'react';
import ReactDOM from 'react-dom';

import GeneratorForm from './form.jsx';
import FieldList from './fieldList.jsx';

var containerStyle = {
  maxWidth : '750px',
  marginLeft : 'auto',
  marginRight : 'auto',
  marginTop : '20px',
};

var App = React.createClass({
  getInitialState(){
    return{
      fields : [
        { name : 'field1', type : 'field 1 type', isRequired : true },
        { name : 'field2', type : 'field 2 type', isRequired : false },
        { name : 'field3', type : 'field 3 type', isRequired : true },
        { name : 'field4', type : 'field 4 type', isRequired : false },
      ]
    };
  },
  render(){
    return (
      <div style={containerStyle}>
        <h3>Generator Form</h3>
        <GeneratorForm />
        <h3>Fields</h3>
        <FieldList fields={this.state.fields}/>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
