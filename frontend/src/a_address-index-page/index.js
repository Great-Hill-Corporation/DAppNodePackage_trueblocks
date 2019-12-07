import React from 'react';
import ConnectionComponent from '../z_components';
import AddressIndexInner from './address-index-inner';

const AddressIndexPage = (props) => (
  <div className="page">
    <ConnectionComponent props={props} />
    <AddressIndexInner props={props} />
  </div>
);

export default AddressIndexPage;
