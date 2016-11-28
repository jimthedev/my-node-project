// My first component
var App = React.createClass({
  render: function() {
    return (
      <div>
       <h1>Hello. Welcome to {this.props.name} </h1>
       <Lot title="Outdoor Lot" inventory={this.props.inventory.slice(0,2)} />
       <Lot title="Showroom" inventory={this.props.inventory.slice(2,4)} />
      </div>
    )
  }
});

// My first / dummy / example component
// The most basic es5 react component
var ExampleComponent = React.createClass({
  render: function() {
    return (
      <div>Hello</div>
    )
  }
});
