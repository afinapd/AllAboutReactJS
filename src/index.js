import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar';
import ImageList from './imageList';


class App extends React.Component {

  state = { images: [] }

  onSearchSubmit = (term) => {
    fetch(`https://jsonplaceholder.typicode.com/photos?id=${term}`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then((data) => {
        this.setState({ images: data })
      })
  }

  // onSearchSubmit = async (term) => {
  //   const response = await fetch(`https://jsonplaceholder.typicode.com/photos?id=${term}`, {
  //     method: 'GET'
  //   })
  //   const data = await response.json();
  //   this.setState({ images: data })
  // }

  render() {
    return (
      <div className="container mt-3">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found:{this.state.images.length} images
        <ImageList images = {this.state.images} />
      </div>)
  }
}
export default App;
ReactDOM.render(<App />, document.querySelector('#root'));