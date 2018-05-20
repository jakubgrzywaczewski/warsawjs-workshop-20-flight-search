import React, { Component } from 'react';

import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromValue: 'ATL',
            toValue: 'WAW',
            departValue: '',
            returnValue: ''
        };
    }

    static propTypes = {
        onAppSubmit: PropTypes.isRequired.func
    };

    onToChange = e => {
        this.setState({ toValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onFromChange = e => {
        this.setState({ fromValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onDepartChange = e => {
        this.setState({ departValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onReturnChange = e => {
        this.setState({ returnValue: e.target.value }, () => {
            console.log(this.state);
        });
    };
    onSubmit = event => {
        event.preventDefault();
        if (
            this.state.departValue === '' ||
            this.state.returnValue === '' ||
            this.state.fromValue === '' ||
            this.state.toValue === ''
        ) {
            console.error('blank inputs');
            return;
        }
        if (new Date(this.state.returnValue) - new Date(this.state.departValue) < 0) {
            console.error('wrong dates');
            return;
        }
        this.props.onAppSubmit({
            ...this.state
        });
    };
    render() {
        return (
            <form className="searchContainer" onSubmit={this.onSubmit}>
                <label>
                    <strong>From</strong>
                    <select value={this.state.fromValue} onChange={this.onFromChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </select>
                </label>
                <label>
                    <strong>To</strong>
                    <select value={this.state.toValue} onChange={this.onToChange}>
                        <option value="ATL">ATL</option>
                        <option value="WAW">WAW</option>
                    </select>
                </label>
                <label>
                    <strong>Depart</strong>
                    <input type="date" value={this.state.departValue} onChange={this.onDepartChange} />
                </label>
                <label>
                    <strong>Return</strong>
                    <input type="date" value={this.state.returnValue} onChange={this.onReturnChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default SearchView;