import Topbar from './components/topbar/Topbar';

import Fide from './components/feed/Fide';
import Right from './components/Right/Right';
import Side from './components/Side/Side';
import '../src/App.css'
function App() {
  return (
    <>
    <Topbar/>
    <div className="container">
    <Fide/>
    <Right/>
    <Side/>
    </div>
    
      
    </>

  );
}

export default App;
