import React from 'react';
import Downshift from 'downshift';

import {connect} from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

import {getSearch} from '../actions/searchActions';

const styles = {
  input: {
    color: "white"
  },
  underline: {
    color: "white",
    '&:before': {
      borderBottomColor: 'white',
    },
    '&:after': {
      borderBottomColor: 'white',
    },
    '&:hover:before': {
      borderBottomColor: ['white', '!important'],
    }
  }
};

class Search extends React.Component {

  state = {
    input: '',
    selectedItem: ''
  }

  handleChange = () => {
    console.log('change');
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    const { classes } = this.props;
    console.log(classes);

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
          {/* InputProps={{style: {color: 'white'}}} */}
          <TextField InputProps={{classes:{underline: classes.underline}}} name='input' value={this.state.input} onChange={this.handleInput} />
        </div>
      )}
        </Downshift>
      </div>
    )
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {results: state.results};
}

const mapDispatchToProps = (dispatch) => {
  return {getSearch: (term) => dispatch(getSearch(term))};
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));
