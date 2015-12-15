const React = require('react');
const ReactDOM = require('react-dom');

const request = require('browser-json-client');

const { Loader } = require('mx-react-components');
const PersonList = require('./PersonList');

const App = React.createClass({
  getInitialState () {
    return {
      people: []
    }
  },

  componentDidMount () {
    request.get('http://swapi.co/api/people/', {
      success: (results) => {
        this.setState({
          people: results.results
        });
      }
    })
  },

  _handleCardClick (name, e) {
    alert(name);
  },

  render () {
    return (
      <div>
        <Loader isLoading={!this.state.people.length} />
        <PersonList people={this.state.people} onCardClick={this._handleCardClick} />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));

// 4. create a card component to display more character information