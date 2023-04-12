import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

// StepFour collects user input for miles
function StepFour () {

    // Allows us to navigate to the next page
    const history = useHistory();

    // Allows us to send data to redux
    const dispatch = useDispatch();

    // miles is data coming from redux
    const miles = useSelector(store => store.miles);

    // on input change, send the new value to redux
    const handleChange = (event) => {
        const action = {type: "SET_MILES", payload: event.target.value};
        dispatch(action);
    }

    // Takes us to the next page if miles > 0
    const nextPage = (event) => {
        event.preventDefault();
        if (miles > 0) {
            history.push('/review');
        } else {
            alert('Please enter a value greater than 0.');
        }
}

    return (
        <>
            <h3>Step Four</h3>
            <form onSubmit={nextPage} >
                <label htmlFor="miles">Miles</label>
                <br />
                <input value={miles} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepFour;