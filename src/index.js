import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './component/header';
import Admin from './component/admin';

const PageOne = () => {
  return (
    <div>Page 1
      <Link to="/pageTwo">Ke Halaman 2</Link>
    </div>)
};
const PageTwo = () => {
  return (
    <div>Page 2
      <Link to="/pageThree/3">Ke Halaman 3</Link>
    </div>)
};
const PageThree = (props) => {
  return (
    <div>Page {props.match.params.num}
      <Link to="/">Ke Halaman Awal</Link>
    </div>
  )
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header />
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pageTwo" component={PageTwo} />
            <Route path="/pageThree/:num" component={PageThree}/> 
            <Route path="/admin" component={Admin} />
          </div>
        </BrowserRouter>
      </div>)
  }
}
export default App;
ReactDOM.render(<App />, document.querySelector('#root'));