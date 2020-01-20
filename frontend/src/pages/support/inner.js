//----------------------------------------------------------------------
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dispatcher_Support } from './dispatchers';

import { free_teirText } from './text/free_teir';
import { pay_teirText } from './text/pay_teir';
import { documentationText } from './text/documentation';
import { contact_usText } from './text/contact_us';
import { about_usText } from './text/about_us';
import * as su from './actions';
import * as utils from '../../utils';
import './support.css';

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------
class SupportInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cur_submenu: props.cur_submenu
    };
    // EXISTING_CODE
    // EXISTING_CODE
  }

  componentDidMount = () => {
    this.props.dispatcher_Support(this.state.cur_submenu.route + '?' + this.state.cur_submenu.query);
  };

  // EXISTING_CODE
  // EXISTING_CODE

  getInnerPage = () => {
    if (this.state.cur_submenu.query === su.FREE_TEIR) {
      return free_teirText();
    } else if (this.state.cur_submenu.query === su.PAY_TEIR) {
      return pay_teirText();
    } else if (this.state.cur_submenu.query === su.DOCUMENTATION) {
      return documentationText();
    } else if (this.state.cur_submenu.query === su.CONTACT_US) {
      return contact_usText();
    } else if (this.state.cur_submenu.query === su.ABOUT_US) {
      return about_usText();
    }
    // EXISTING_CODE
    return <Fragment></Fragment>;
    // EXISTING_CODE
  };

  render = () => {
    return (
      <Fragment>
        <div className="inner-panel">
          <div className="title inner-page">{utils.breadCrumb('Support', this.state.cur_submenu)}</div>
          {this.getInnerPage()}
        </div>
      </Fragment>
    );
  };
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------
const mapStateToProps = ({ reducer_Status, reducer_Support }) => ({
  // EXISTING_CODE
  // EXISTING_CODE
  sysConnected: reducer_Status.isConnected,
  sysError: reducer_Status.error,
  isLoading: reducer_Support.isLoading,
  error: reducer_Support.error,
  data: reducer_Support.data,
  meta: reducer_Support.meta
});

//----------------------------------------------------------------------
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      // EXISTING_CODE
      // EXISTING_CODE
      dispatcher_Support
    },
    dispatch
  );

//----------------------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupportInner);