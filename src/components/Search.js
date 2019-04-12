import React from 'react';
import Downshift from 'downshift';

import {connect} from 'react-redux';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

import {getSearch} from '../actions/searchActions';

const styles = theme => ({
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
    },
    marginTop: '15px'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  }
});

class Search extends React.Component {

  state = {
    input: '',
    selectedItem: ''
  }

  handleChange = () => {
    console.log('change');
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => {
      this.props.getSearch(this.state.input);
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Downshift
          inputValue={this.state.inputValue}
          // onChange={this.handleChange}
          selectedItem={this.state.selectedItem} >
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
          <TextField 
            {...getInputProps({onChange: this.handleInput})}
            InputProps={{classes:{underline: classes.underline}}} 
            name='input' 
            placeholder="Streamer Search" 
            value={this.state.input} 
            />
          <div {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper}>
                {!!this.props.results ? 
                  this.props.results.map(item => <MenuItem {...getItemProps} key={item.display_name}>{item.display_name}</MenuItem>)
                  : <MenuItem>Empty</MenuItem>}
              </Paper>
              ) : null }
          </div>
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
