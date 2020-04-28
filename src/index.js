import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
const PageOne = () => {
  return (
    <div>Page 1
      <Link to="/pageTwo">Ke Halaman 2</Link>
    </div>)
};
const PageTwo = () => {
  return (
    <div>Page 2
      <Link to="/">Ke Halaman Awal</Link>
    </div>)
};
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={PageOne} />
            <Route path="/pageTwo" component={PageTwo} />
          </div>
        </BrowserRouter>
      </div>)
  }
}
export default App;