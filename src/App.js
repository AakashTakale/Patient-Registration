
import './App.css'
import {
  NavLink as Link
} from "react-router-dom";


function App() {
  return (
    <div className="container">
        <h3>Welcome to the Patient Registration</h3>
      <nav>
        <Link to="/doctor" className="btn doctor-link">Doctor</Link>
        <Link to="/patient" className="btn patient-link">Patient</Link>
        {/* <a href="/Patient-Registration/doctor" className="btn doctor-link">Doctor</a>
        <a href="/Patient-Registration/patient" className="btn patient-link">Patient</a> */}
      </nav>
    </div>
  );
}

export default App;
