import React from 'react';
import ReactDom from 'react-dom';

{/* A class with a form component*/}
class SearchForm extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            redditName: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchFormChange = this.handleSearchFormChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.redditSelect(this.state.redditName);
    }

    handleSearchFormChange(e){
        this.setState({redditName: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                       name='redditName'
                       placeholder='Seach for something in reddit'
                       value={this.state.redditName}
                       onChange={this.handleSearchFormChange}/>
            </form>
        )
    }
}

export default SearchForm