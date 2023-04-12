import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

// StepTwo collects user input for activity type
function StepTwo () {

    const history = useHistory();

    const type = useSelector(store => store.activityType)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TYPE', payload: event.target.value}
        dispatch(action);
    }

    const nextPage = (event) => {
        event.preventDefault();
        if ( type === '' ) {
            alert('Please enter an activity.')
        } else {
            history.push('/step-3');
        }
}

    return (
        <>
            <h3>Step Two</h3>
            <form onSubmit={nextPage} >
                <label htmlFor="activity">Activity</label>
                <br />
                <input value={type} onChange={handleChange} type="text" />
                <input type="submit" value="Next" />
            </form>
        </>
    );
}

export default StepTwo;