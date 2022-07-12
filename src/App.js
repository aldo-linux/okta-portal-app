import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
export default App;

/*import AppWithRouterAccess from './AppWithRouterAccess';

const App = () => (
  <Router>
    <AppWithRouterAccess/>
  </Router>
);
export default App;
*/