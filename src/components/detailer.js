import React from 'react';
import { connect } from 'react-redux';
import app from '../app.module.scss';

class Detailer extends React.Component {

  render() {
    return (
      <>
        <div className={app.person}>
          {Object.keys(this.props.api.person).map((key, i) => (
            <div key={i}>
              <span>{key}:</span>
              <span>{this.props.api.person[key]}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api,
});

export default connect(
  mapStateToProps,
)(Detailer);
