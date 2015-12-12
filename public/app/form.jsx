import React from 'react';

var Form = React.createClass({
  getInitialState(){
    return {};
  },
  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },
  handleSubmit(e){
    e.preventDefault();
  },
  render(){
    return(
      <form
        className="form-horizontal"
        onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label className="col-sm-2 control-label">Field Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Field Name"
                name="fieldName"
                value={this.state.fieldName}
                onChange={this.handleChange}
              />
            </div>
        </div>
        <div className="form-group">
            <label className="col-sm-2 control-label">Field Type</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Field Type"
                name="fieldType"
                value={this.state.fieldType}
                onChange={this.handleChange}
              />
            </div>
        </div>
        <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="isRequired"
                      value={this.state.isRequired}
                      onChange={this.handleChange}
                    />
                    Is Required
                  </label>
              </div>
            </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default">
              Add Field
            </button>
          </div>
        </div>
      </form>
    );
  }
});

module.exports = Form;
