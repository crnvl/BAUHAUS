import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./components/header";
import Canvas from "./components/canvas";

function App() {
  return (
    <>
      <Router>
          <Header/>
          <Canvas/>
      </Router>
    </>
  );
}

export default App;
