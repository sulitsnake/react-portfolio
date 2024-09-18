import './App.css';
import Navibar from './components/Navibar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import './style.css'


function App() {
  return (
    <div className="App">
      <Navibar />
      <Aboutme />
      <Projects />
    </div>
  );
}

export default App;
