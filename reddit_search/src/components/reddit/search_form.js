import React from 'react';
import NumericInput from 'react-numeric-input';


class SearchForm extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            searchFormBoard: '',
            searchFormLimit: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBoardChange = this.handleBoardChange.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.subRedditSelect(this.state.searchFormBoard, this.state.searchFormLimit);
    }

    handleBoardChange(e){
        this.setState({searchFormBoard: e.target.value})
    }

    handleLimitChange(e){
        this.setState({searchFormLimit: e.target.value})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text'
                       name='redditName'
                       placeholder='Seach for something in Reddit'
                       value={this.state.searchFormBoard}
                       onChange={this.handleBoardChange}/>

                <NumericInput min={0}
                              max={100}
                              value={this.state.searchFormLimit}
                              onChange={e => this.handleLimitChange}/>

                <button onClick={this.handleSubmit} className="button">Submit</button>
            </form>
        )
    }
}

export default SearchForm