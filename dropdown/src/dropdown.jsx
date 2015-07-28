//Show a button and a list
//This component should know when to show the list
//based on when the User clicks a button

var React = require('react');
var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({
  handleClick: function() {
    //when clicked, flip value of this.state.open
    //any time setState is called, it will force re-render
    //never directly manipulate state - only use setState()
    this.setState({open: !this.state.open})
  },
  getInitialState: function() {
    //value is referenced below in className expression on the <ul>
    return { open: false }
  },
  handleItemClick: function(item) {
    this.setState({
      open: false, //close the dropdown
      itemTitle: item //title of the Button component - update to selected line item
    });
  },
  render: function() {
    var list = this.props.items.map(function(item) {
        return <ListItem
                  item={item}
                  whenItemClicked={this.handleItemClick}
                  className={this.state.itemTitle === item ? "active" : ""}
                  />
    }.bind(this));

    return <div className="dropdown">
      <Button
        whenClicked={this.handleClick}
        className="btn-default"
        title={this.state.itemTitle || this.props.title}
        subTitleClassName="caret"
      />
      <ul className={"dropdown-menu " + (this.state.open ? "show" : "")}>
        {list}
      </ul>
    </div>
  }
})
