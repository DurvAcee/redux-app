import './App.css';
import Navbar from './state/components/Navbar';
import Shop from './state/components/Shop';

function App() {
  return (
          <>
              <Navbar/>
              <div className="container">
                  <Shop/>
              </div>      
          </>
  );
}

export default App;
