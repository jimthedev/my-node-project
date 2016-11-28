var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item){
          return ( <li>{item}</li> )
        })}
      </ul>
    )
  }
});
