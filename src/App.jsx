

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './containers/errors/Home'
import Error404 from './containers/errors/error404'

function App() {
  return (
    <Router>
      <Routes>
         {/*Error Display*/}
        <Route path="*" element={<Error404/>} />
        {/*Home Page*/}
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
