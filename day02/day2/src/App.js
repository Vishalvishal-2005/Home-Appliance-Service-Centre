/*import Home2 from './components/Home2.jsx';
import React from 'react';

function App(){
  return(
    <div>
      <Home2/>
    </div>
  );
}
export default App;
*/

import Login from "./components/Login.jsx";
import Signup from './components/Signup.jsx';
import DashBoard from './components/Dashboard.jsx';
import About from './components/About.jsx';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';

/**
 * Defines the main application component with routing.
 */
function App(){
return(
     <div>
        <Router>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/About" element={<About/>}/>
          </Routes>
        </Router>
      </div>
    );
}
export default App;
     /* <div>
        <Router>
          <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          </Routes>
        </Router>
      </div>*/