import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';
import Spinner from './spinner';

class App extends React.Component {
  state = { lt: null, lg: null, errorMessage: '' };

  // constructor(props) {
  //   super(props);
  //   this.state = { lt: null, lg: null, errorMessage: '' };
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({ lt: position.coords.latitude, lg: position.coords.longitude });
  //     },
  //     (err) => {
  //       this.setState({ errorMessage: err.message });
  //     });
  // }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lt: position.coords.latitude, lg: position.coords.longitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      });
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <div>
          <div> Error : {this.state.errorMessage}</div>
        </div>
      );
    }
    if (!this.state.errorMessage && this.state.lt) {
      return (
        <div>
          <div className='text-title'>Posisi Anda :</div>
          <div className='text-info'> Latitude : {this.state.lt}</div>
          <div className='text-info space-bottom'> Longitude : {this.state.lg}</div>
          <SeasonDisplay />
          <Spinner/> 
        </div>
      );
    }
    return <div>Loading !!!</div>

    // return (
    //   <div> Posisi Anda :
    //     <div> Latitude : {this.state.lt}</div>
    //     <div> Longitude : {this.state.lg}</div>
    //     <div> Error : {this.state.errorMessage}</div>
    //   </div>);
  }
};
ReactDOM.render(<App />, document.querySelector('#root'));
