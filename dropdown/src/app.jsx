var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose an option',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

//Ask React to render the class
var element = React.createElement(Dropdown, options);
//After React has rendered the class, place it inside the body tag
React.render(element, document.querySelector('.target'));
