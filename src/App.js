// My first component
var App = React.createClass({
  // Set the initial state so that it is not 'null', which causes :(
  getInitialState: function() {
    return {
      query: ''
    }
  },
  style: {
    searchContainer: {
      border: '1px solid #efefef',
      padding: '1rem',
      margin: '1rem'
    }
  },
  onNewSearchValue: function(e) { // Search input handler
    console.log('new car entered', e.target.value);
    this.setState({
      query: e.target.value
    })
  },
  onSearchButtonClick: function() { // Button click handler
    console.log('You searched for ', this.state.query);
  },
  isIndexMatch: function(item) { // Search function
    return item.indexOf(this.state.query) > -1;
  },
  render: function() {
    console.log(this.state); // null
    return (
      <div>
        <h1>Hello. Welcome to {this.props.name} </h1>
        <div style={this.style.searchContainer}>
          <input
            role="search"
            type="text"
            placeholder="Find a car"
            onChange={this.onNewSearchValue.bind(this)} />
          <button
            onClick={this.onSearchButtonClick}>Search</button>
        </div>
        <Lot title="Outdoor Lot" inventory={
          this.props.inventory
            .slice(0,2)
            .filter(this.isIndexMatch)
          } />
        <Lot title="Showroom" inventory={
          this.props.inventory
            .slice(2,4)
            .filter(this.isIndexMatch)
          } />
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
