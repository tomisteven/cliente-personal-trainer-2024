import './index.css'
import {Header} from './components/Sections Pages/Header/Header'
import {Presentation} from './components/Sections Pages/Presentation/Presentation'
import {Planes} from './components/Sections Pages/Planes/Planes'


function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Presentation/>
      <Planes/>
    </div>
    
    
  );
}

export default App;
