// import logo from './logo.svg';
import './App.css';
// import About from './component/about';
// import Summer from './component/summer';
// import Hello from './component/hello';
import Home from './component/home';
// import store from './redux/store';
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Home></Home>
    </Provider>
    </div>
  );
}

export default App;
