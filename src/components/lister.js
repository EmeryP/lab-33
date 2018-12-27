import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import app from '../app.module.scss';
import Detailer from '../components/detailer';
import Link from '../components/link.js';

class Lister extends React.Component {

  fetchPerson = async (url) => {
    this.props.handleGetOne(url);
  }

  render() {
    return (
      <>
      <Link />
      <section className={app.people}>
      <ul>
        {this.props.api.people.map((result, i) => (
          <li onClick={() => this.fetchPerson(result.url)} key={i}>
            {result.name}
          </li>
        ))}
      </ul>
        <Detailer />
      </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api,
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGetOne: url => dispatch(actions.getOne(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Lister);
