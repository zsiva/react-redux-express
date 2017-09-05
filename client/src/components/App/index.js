import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import { fetchContent } from '../../actions/questions';

export class App extends Component {
  componentDidMount(){
    this.props.fetchContent('/api/getQuestions');
  }

  render() {
    const { items = [], errors = false} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>List of questions</h2>
        </div>
        <div className="App-intro">
          {errors && <p>Data not found</p>}
          <ul>
            {!errors && items.map((i,k) => <li key={k}>{i.eid} : {i.title}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      items: state.questions.content && state.questions.content.items,
      isLoading: state.questions.isLoading,
      errors: state.questions.hasErrors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContent: (url) => dispatch(fetchContent(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
