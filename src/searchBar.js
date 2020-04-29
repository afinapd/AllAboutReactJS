import React from 'react';

class SearchBar extends React.Component {
state={searchKeyword:''}

onFormSubmit=(event)=>{
    // mencegah event bawaan dom
    event.preventDefault();
    this.props.onSubmit(this.state.searchKeyword)
    console.log(this.state.searchKeyword)
}

onInputChange=(event)=>{
    this.setState({searchKeyword:event.target.value})
    // console.log(event.target.value)
}

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div class="form-group">
                    <input type="text" class="from-control" id="searchBar" 
                    placeholder="Search Image" 
                    value={this.state.searchKeyword} 
                    onChange={this.onInputChange}/>
                </div>
            </form>
        )
    }
}

export default SearchBar;