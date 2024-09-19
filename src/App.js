import './App.css';
import Navibar from './components/Navibar';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contactform from './components/Contactme';
import './style.css'


function App() {
  return (
    <div className="App">
      <Navibar />
      <Aboutme />
      <Projects />
      <Contactform />


    </div>
  );
}

export default App;
