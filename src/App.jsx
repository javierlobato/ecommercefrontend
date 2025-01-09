import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import Home from './containers/errors/Home';
import Error404 from './containers/errors/error404';
import { Navbar } from './components/navigation/Navbar'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />            
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="*" element={<Error404 />} />
        </Routes>      
      </Router>
    </Provider>
  );
}

export default App;



