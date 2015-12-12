(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _form = require('./form.jsx');

var _form2 = _interopRequireDefault(_form);

var _fieldList = require('./fieldList.jsx');

var _fieldList2 = _interopRequireDefault(_fieldList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containerStyle = {
  maxWidth: '750px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '20px'
};

var App = _react2.default.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    return {
      fields: [{ name: 'field1', type: 'field 1 type', isRequired: true }, { name: 'field2', type: 'field 2 type', isRequired: false }, { name: 'field3', type: 'field 3 type', isRequired: true }, { name: 'field4', type: 'field 4 type', isRequired: false }]
    };
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: containerStyle },
      _react2.default.createElement(
        'h3',
        null,
        'Generator Form'
      ),
      _react2.default.createElement(_form2.default, null),
      _react2.default.createElement(
        'h3',
        null,
        'Fields'
      ),
      _react2.default.createElement(_fieldList2.default, { fields: this.state.fields })
    );
  }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('container'));

},{"./fieldList.jsx":3,"./form.jsx":4,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var center = {
  textAlign: 'center'
};

var Field = _react2.default.createClass({
  displayName: 'Field',
  render: function render() {
    var isRequired = _react2.default.createElement('div', null);
    if (this.props.field.isRequired) {
      isRequired = _react2.default.createElement(
        'div',
        { style: center },
        ' ',
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-check' }),
        ' '
      );
    }
    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        this.props.field.name
      ),
      _react2.default.createElement(
        'td',
        null,
        this.props.field.name
      ),
      _react2.default.createElement(
        'td',
        null,
        isRequired
      )
    );
  }
});

module.exports = Field;

},{"react":undefined}],3:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _field = require('./field.jsx');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldList = _react2.default.createClass({
  displayName: 'FieldList',
  render: function render() {
    var fields = this.props.fields.map(function (item, index) {
      return _react2.default.createElement(_field2.default, { key: item.name, field: item });
    });
    return _react2.default.createElement(
      'table',
      {
        className: 'table table-striped' },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            null,
            'Field Name'
          ),
          _react2.default.createElement(
            'th',
            null,
            'Field Type'
          ),
          _react2.default.createElement(
            'th',
            { className: 'col-sm-1' },
            'Required'
          )
        )
      ),
      _react2.default.createElement(
        'tbody',
        null,
        fields
      )
    );
  }
});

module.exports = FieldList;

},{"./field.jsx":2,"react":undefined}],4:[function(require,module,exports){
"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _react2.default.createClass({
  displayName: "Form",
  getInitialState: function getInitialState() {
    return {};
  },
  handleChange: function handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
  },
  render: function render() {
    return _react2.default.createElement(
      "form",
      {
        className: "form-horizontal",
        onSubmit: this.handleSubmit },
      _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "label",
          { className: "col-sm-2 control-label" },
          "Field Name"
        ),
        _react2.default.createElement(
          "div",
          { className: "col-sm-10" },
          _react2.default.createElement("input", {
            type: "text",
            className: "form-control",
            placeholder: "Field Name",
            name: "fieldName",
            value: this.state.fieldName,
            onChange: this.handleChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "label",
          { className: "col-sm-2 control-label" },
          "Field Type"
        ),
        _react2.default.createElement(
          "div",
          { className: "col-sm-10" },
          _react2.default.createElement("input", {
            type: "text",
            className: "form-control",
            placeholder: "Field Type",
            name: "fieldType",
            value: this.state.fieldType,
            onChange: this.handleChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-offset-2 col-sm-10" },
          _react2.default.createElement(
            "div",
            { className: "checkbox" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("input", {
                type: "checkbox",
                name: "isRequired",
                value: this.state.isRequired,
                onChange: this.handleChange
              }),
              "Is Required"
            )
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "form-group" },
        _react2.default.createElement(
          "div",
          { className: "col-sm-offset-2 col-sm-10" },
          _react2.default.createElement(
            "button",
            { type: "submit", className: "btn btn-default" },
            "Add Field"
          )
        )
      )
    );
  }
});

module.exports = Form;

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvYXBwL2FwcC5qc3giLCJwdWJsaWMvYXBwL2ZpZWxkLmpzeCIsInB1YmxpYy9hcHAvZmllbGRMaXN0LmpzeCIsInB1YmxpYy9hcHAvZm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ01BLElBQUksY0FBYyxHQUFHO0FBQ25CLFVBQVEsRUFBRyxPQUFPO0FBQ2xCLFlBQVUsRUFBRyxNQUFNO0FBQ25CLGFBQVcsRUFBRyxNQUFNO0FBQ3BCLFdBQVMsRUFBRyxNQUFNO0NBQ25CLENBQUM7O0FBRUYsSUFBSSxHQUFHLEdBQUcsZ0JBQU0sV0FBVyxDQUFDOztBQUMxQixpQkFBZSw2QkFBRTtBQUNmLFdBQU07QUFDSixZQUFNLEVBQUcsQ0FDUCxFQUFFLElBQUksRUFBRyxRQUFRLEVBQUUsSUFBSSxFQUFHLGNBQWMsRUFBRSxVQUFVLEVBQUcsSUFBSSxFQUFFLEVBQzdELEVBQUUsSUFBSSxFQUFHLFFBQVEsRUFBRSxJQUFJLEVBQUcsY0FBYyxFQUFFLFVBQVUsRUFBRyxLQUFLLEVBQUUsRUFDOUQsRUFBRSxJQUFJLEVBQUcsUUFBUSxFQUFFLElBQUksRUFBRyxjQUFjLEVBQUUsVUFBVSxFQUFHLElBQUksRUFBRSxFQUM3RCxFQUFFLElBQUksRUFBRyxRQUFRLEVBQUUsSUFBSSxFQUFHLGNBQWMsRUFBRSxVQUFVLEVBQUcsS0FBSyxFQUFFLENBQy9EO0tBQ0YsQ0FBQztHQUNIO0FBQ0QsUUFBTSxvQkFBRTtBQUNOLFdBQ0U7O1FBQUssS0FBSyxFQUFFLGNBQWMsQUFBQztNQUN6Qjs7OztPQUF1QjtNQUN2QixtREFBaUI7TUFDakI7Ozs7T0FBZTtNQUNmLHFEQUFXLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQUFBQyxHQUFFO0tBQ25DLENBQ047R0FDSDtDQUNG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QVk7UUFDdkI7O1lBQU8sU0FBUyxFQUFDLHdCQUF3Qjs7U0FBbUI7UUFDNUQ7O1lBQUssU0FBUyxFQUFDLFdBQVc7VUFDeEI7QUFDRSxnQkFBSSxFQUFDLE1BQU07QUFDWCxxQkFBUyxFQUFDLGNBQWM7QUFDeEIsdUJBQVcsRUFBQyxZQUFZO0FBQ3hCLGdCQUFJLEVBQUMsV0FBVztBQUNoQixpQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxBQUFDO0FBQzVCLG9CQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQUFBQztZQUM1QjtTQUNFO09BQ0o7TUFDTjs7VUFBSyxTQUFTLEVBQUMsWUFBWTtRQUN2Qjs7WUFBSyxTQUFTLEVBQUMsMkJBQTJCO1VBQ3hDOztjQUFLLFNBQVMsRUFBQyxVQUFVO1lBQ3JCOzs7Y0FDRTtBQUNFLG9CQUFJLEVBQUMsVUFBVTtBQUNmLG9CQUFJLEVBQUMsWUFBWTtBQUNqQixxQkFBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxBQUFDO0FBQzdCLHdCQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQUFBQztnQkFDNUI7O2FBRUk7V0FDTjtTQUNGO09BQ0o7TUFDTjs7VUFBSyxTQUFTLEVBQUMsWUFBWTtRQUN6Qjs7WUFBSyxTQUFTLEVBQUMsMkJBQTJCO1VBQ3hDOztjQUFRLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLGlCQUFpQjs7V0FFeEM7U0FDTDtPQUNGO0tBQ0QsQ0FDUDtHQUNIO0NBQ0YsQ0FBQyxDQUFDOztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IEdlbmVyYXRvckZvcm0gZnJvbSAnLi9mb3JtLmpzeCc7XG5pbXBvcnQgRmllbGRMaXN0IGZyb20gJy4vZmllbGRMaXN0LmpzeCc7XG5cbnZhciBjb250YWluZXJTdHlsZSA9IHtcbiAgbWF4V2lkdGggOiAnNzUwcHgnLFxuICBtYXJnaW5MZWZ0IDogJ2F1dG8nLFxuICBtYXJnaW5SaWdodCA6ICdhdXRvJyxcbiAgbWFyZ2luVG9wIDogJzIwcHgnLFxufTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCl7XG4gICAgcmV0dXJue1xuICAgICAgZmllbGRzIDogW1xuICAgICAgICB7IG5hbWUgOiAnZmllbGQxJywgdHlwZSA6ICdmaWVsZCAxIHR5cGUnLCBpc1JlcXVpcmVkIDogdHJ1ZSB9LFxuICAgICAgICB7IG5hbWUgOiAnZmllbGQyJywgdHlwZSA6ICdmaWVsZCAyIHR5cGUnLCBpc1JlcXVpcmVkIDogZmFsc2UgfSxcbiAgICAgICAgeyBuYW1lIDogJ2ZpZWxkMycsIHR5cGUgOiAnZmllbGQgMyB0eXBlJywgaXNSZXF1aXJlZCA6IHRydWUgfSxcbiAgICAgICAgeyBuYW1lIDogJ2ZpZWxkNCcsIHR5cGUgOiAnZmllbGQgNCB0eXBlJywgaXNSZXF1aXJlZCA6IGZhbHNlIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgICAgPGgzPkdlbmVyYXRvciBGb3JtPC9oMz5cbiAgICAgICAgPEdlbmVyYXRvckZvcm0gLz5cbiAgICAgICAgPGgzPkZpZWxkczwvaDM+XG4gICAgICAgIDxGaWVsZExpc3QgZmllbGRzPXt0aGlzLnN0YXRlLmZpZWxkc30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIGNlbnRlciA9e1xuICB0ZXh0QWxpZ24gOiAnY2VudGVyJyxcbn07XG5cbnZhciBGaWVsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCl7XG4gICAgdmFyIGlzUmVxdWlyZWQgPSAoIDxkaXY+PC9kaXY+ICk7XG4gICAgaWYoIHRoaXMucHJvcHMuZmllbGQuaXNSZXF1aXJlZCApe1xuICAgICAgaXNSZXF1aXJlZCA9ICggPGRpdiBzdHlsZT17Y2VudGVyfT4gPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGVja1wiIC8+IDwvZGl2PiApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZmllbGQubmFtZX08L3RkPlxuICAgICAgICA8dGQ+e3RoaXMucHJvcHMuZmllbGQubmFtZX08L3RkPlxuICAgICAgICA8dGQ+e2lzUmVxdWlyZWR9PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQuanN4JztcblxudmFyIEZpZWxkTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCl7XG4gICAgdmFyIGZpZWxkcyA9IHRoaXMucHJvcHMuZmllbGRzLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KXtcbiAgICAgIHJldHVybiA8RmllbGQga2V5PXtpdGVtLm5hbWV9IGZpZWxkPXtpdGVtfSAvPjtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlXG4gICAgICAgIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWRcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5GaWVsZCBOYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5GaWVsZCBUeXBlPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjb2wtc20tMVwiPlJlcXVpcmVkPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2ZpZWxkc31cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmllbGRMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZSgpe1xuICAgIHJldHVybiB7fTtcbiAgfSxcbiAgaGFuZGxlQ2hhbmdlKGUpe1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBuZXh0U3RhdGVbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gIH0sXG4gIGhhbmRsZVN1Ym1pdChlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxmb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cImZvcm0taG9yaXpvbnRhbFwiXG4gICAgICAgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5GaWVsZCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmllbGQgTmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiPkZpZWxkIFR5cGU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWVsZCBUeXBlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmllbGRUeXBlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZFR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImlzUmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICBJcyBSZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLW9mZnNldC0yIGNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgIEFkZCBGaWVsZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07XG4iXX0=
