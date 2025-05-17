import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./route/AppRoutes"; 

function App() {
  return (
    <Router>
      <div>
        <AppRoutes /> 
      </div>
    </Router>
  );
}

export default App;