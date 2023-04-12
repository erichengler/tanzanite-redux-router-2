import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

// StepThree collects user input for minutes
function StepThree () {

    const history = useHistory();
    const dispatch = useDispatch();

    const minutes = useSelector(store => store.minutes);

    const handleChange = (event) => {
        const action = {type: "SET_MINUTES", payload: event.target.value};
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if (minutes > 0) {
            history.push('/step-4');
        } else {
            alert('Please enter a value greater than 0.');
        }
}

    return (
        <>
            <h3>Step Three</h3>
            <form onSubmit={nextPage} >
                <label htmlFor="minutes">Minutes</label>
                <br />
                <input value={minutes} onChange={handleChange} type="number" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepThree;