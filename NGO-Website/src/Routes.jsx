import {
  BrowserRouter as Router,
  Route,
  Routes as ReactRoutes,
} from "react-router-dom";
import App from "./App";
import DonatePage from "./components/DonatePage";

function Routes() {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<App />} />
        <Route path="/donate" element={<DonatePage />} />
      </ReactRoutes>
    </Router>
  );
}

export default Routes;
