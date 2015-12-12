import React from 'react';
import Field from './field.jsx';

var FieldList = React.createClass({
  render(){
    var fields = this.props.fields.map(function(item,index){
      return <Field key={item.name} field={item} />;
    });
    return (
      <table
        className="table table-striped">
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Type</th>
            <th className="col-sm-1">Required</th>
          </tr>
        </thead>
        <tbody>
          {fields}
        </tbody>
      </table>
    );
  }
});

module.exports = FieldList;
