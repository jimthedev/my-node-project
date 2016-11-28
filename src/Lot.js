// My second component
var Lot = React.createClass({
  getInitialState() {
    return { /* initial state */ };
  },
  slideToggle: function() {
    console.log('SLIDE THAT TOGGLE');
  },
  style: {
    button: {
      color: 'whitesmoke',
      borderRadius: 5,
      fontSize: '16px',
      padding: 5,
      border: '3px groove #ccc',
      backgroundColor: '#1560fb'
    }
  },
  render: function() {
    return (
      <div>
        Hello from the {this.props.title}
        <button style={this.style.button} onClick={this.slideToggle.bind(this)}>Get Lot Inventory</button>
        <List items={this.props.inventory} />
      </div>
    )
  }
});
