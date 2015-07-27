//Import components that the current component depends on
var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  //render function renders a variable name list that is an array of thumbnail instances
  render: function () {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });

    return <div>
      {list}
    </div>
  }
});
