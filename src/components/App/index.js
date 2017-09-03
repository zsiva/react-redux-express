import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { fetchContent } from '../../actions/questions';

class App extends Component {
  componentDidMount(){
    this.props.fetchContent('./data/dummy.json');
  }

  render() {
    const { items = []} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <h2>List of questions</h2>
        </div>
        <p className="App-intro">
          <ul>
            {items.map((i,k) => <li key={k}>{i.eid} : {i.title}</li>)}
          </ul>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      items: state.questions.content && state.questions.content.items,
      isLoading: state.questions.isLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContent: (url) => dispatch(fetchContent(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
