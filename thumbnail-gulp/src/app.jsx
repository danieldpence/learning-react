var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    imageUrl: 'http://fillmurray.com/120/120',
    title: 'Inbox',
    number: 35,
    name: 'Bill',
    description: "Bill is an awesome guy. He's been in a lot of movies."
  },{
    imageUrl: 'http://fillmurray.com/g/120/120',
    title: 'Inbox',
    number: 14,
    name: 'William',
    description: "React is awesome. William thinks so."
}]
};

//Ask React to render the class
var element = React.createElement(ThumbnailList, options);
//After React has rendered the class, place it inside the body tag
React.render(element, document.querySelector('.target'));
