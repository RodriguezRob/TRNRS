import Navbar from "";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;