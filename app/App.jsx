const React = require('react');
const ReactDOM = require('react-dom');

const $ = require('jquery');

const PersonList = require('./PersonList.jsx');

const App = React.createClass({
  getInitialState () {
    return {
      people: []
    }
  },

  componentDidMount () {
    // http://swapi.co/api/people/
    $.get('http://swapi.co/api/people/', data => {
        console.log(data);
        this.setState({
            people: data.results
        });
    });
  },

  _handleCardClick (name, e) {
    alert(name);
  },

  render () {
    return (
        
      <PersonList people={this.state.people} onCardClick={this._handleCardClick} />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));