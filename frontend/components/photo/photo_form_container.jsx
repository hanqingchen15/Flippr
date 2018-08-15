import React from 'react';
import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const msp = (state, ownProps) => {
  const photo = {
    name: "",
    description: ""
  };
  return {
    photo,
    errors: state.errors.photos
  };
}

const mdp = (dispatch, ownProps) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo))
  }
}

export default connect(msp, mdp)(PhotoForm);