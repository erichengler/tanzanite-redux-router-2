import { HashRouter as Router, Route, Link } from 'react-router-dom';
import StepOne from '../Steps/StepOne';
import StepTwo from '../Steps/StepTwo';
import StepThree from '../Steps/StepThree';
import StepFour from '../Steps/StepFour';
import Review from '../Steps/Review';


function App () {
  
  return (
    <div>
      <Router>

        <h1>Activity Log</h1>

        <Route exact path="/">
          {/* Step one component goes here */}
          <StepOne />
        </Route>
        
        {/* Navigate to /step-2 in URL to display StepTwo component */}
        <Route exact path="/step-2">
          {/* Step two component goes here */}
          <StepTwo />
        </Route>

        <Route exact path="/step-3">
          <StepThree />
        </Route>

        <Route exact path="/step-4">
          <StepFour />
        </Route>

        <Route exact path="/review">
          <Review />
        </Route>

      </Router>
    </div>
  );

}

export default App
