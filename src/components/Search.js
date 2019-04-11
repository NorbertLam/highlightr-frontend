import React from 'react';
import Downshift from 'downshift';

import {connect} from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import {getSearch} from '../actions/searchActions';


class Search extends React.Component {

  state = {
    input: '',
    selectedItem: ''
  }

  handleChange = () => {
    console.log('change');
  }

  render() {
    return (
      <div>
        <Downshift
          inputValue={this.state.inputValue}
          onChange={this.handleChange}
          selectedItem={this.state.selectedItem}
        >
          {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <label></label>
          <TextField/>
        </div>
      )}
        </Downshift>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  results = state.results
}

const mapDispatchToProps = (dispatch) => {
  return {getSearch: (term) => dispatch(getSearch(term))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
