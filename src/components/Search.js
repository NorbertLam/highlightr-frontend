import React from 'react';
import {withRouter} from 'react-router-dom';
import Downshift from 'downshift';

import AwesomeDebouncePromise from 'awesome-debounce-promise';

import {connect} from 'react-redux';

import MenuList from '@material-ui/core/MenuList';
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
    marginTop: '31px'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  logo: {
    width: '30%'
  }
});

const searchAPI = channel => fetch(`https://api.twitch.tv/kraken/search/channels?query=${channel}&limit=5`, {
  headers: {
    'content-type': 'application/json',
    'Client-ID': process.env.REACT_APP_CLIENT
  }
});

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

class Search extends React.Component {

  state = {
    input: '',
    selectedItem: '',
    results: null
  }

  componentWillUnmount() {
    this.setState = () => {};
  }

  handleChange = (event) => {
    console.log('aaaaaaaaa');
  }

  handleInput = async e => {
    this.setState({ input: e.target.value, results: null});
    const result = await searchAPIDebounced(e.target.value).then(resp => resp.json());
    this.setState({results: result.channels});
  }

  handleItemClick = (event) => {
    this.props.history.push(`/channel/${event.target.innerText}`);
    this.setState({input: ''});
  }

  render() {
    const { classes } = this.props;
    const { input } = this.state

    return (
      <div>
        <Downshift
          inputValue={this.state.inputValue}
          selectedItem={this.state.selectedItem} >
          {({
            getInputProps,
            getItemProps,
            getMenuProps,
            isOpen,
            inputValue,
            highlightedIndex,
            selectedItem,
      }) => (
        <div>
          <TextField
            InputProps={getInputProps({
              placeholder: "Search...",
              value: input,
              onChange: this.handleInput,
              classes: {underline: classes.underline}
            })}
            />
          <MenuList {...getMenuProps()}>
            {isOpen ? (
              <Paper className={classes.paper}>
                {!!this.state.results ? 
                  this.state.results.map(item => 
                    <MenuItem {...getItemProps} key={item.display_name} onClick={this.handleItemClick}>
                      <img className={classes.logo} src={item.logo} alt={item.logo} />
                      {item.display_name}
                    </MenuItem>)
                  : <MenuItem>Empty</MenuItem>}
              </Paper>
              ) : null }
          </MenuList>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Search)));
