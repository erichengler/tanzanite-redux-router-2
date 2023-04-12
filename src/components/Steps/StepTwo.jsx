import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function StepTwo () {

    const history = useHistory();

    const type = useSelector(store => store.activityType)

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const action = { type: 'SET_ACTIVITY_TYPE', payload: event.target.value}
        dispatch(action);
    }

    const nextPage = () => {
            history.push('/step-3');
    }

    return (
        <>
            <h3>Step Two</h3>
            Activity:
            <form>
                <input value={type} onChange={handleChange} type="text" />
            </form>
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default StepTwo;