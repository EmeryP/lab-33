import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import If from '../lib/if.js';
import '../app.module.scss';

class Link extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cased: true,
    }
  }

  fetchPeople = async e => {
    e.preventDefault();
    let url = 'https://swapi.co/api/people/';
    this.props.handleGet(url);
    this.setState({cased: false});
  }

  render() {
    return (
      <If condition={this.state.cased}>
      <button onClick={this.fetchPeople}>
      Click to find your Star Wars hero
      </button>
      </If>
    )
  }
}

const mapStateToProps = state => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGet: url => dispatch(actions.get(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);