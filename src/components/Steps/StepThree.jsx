import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function StepThree () {

    const history = useHistory();
    const dispatch = useDispatch();

    const minutes = useSelector(store => store.minutes);

    const handleChange = (event) => {
        const action = {type: "SET_MINUTES", payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/step-4');
}

    return (
        <>
            <h3>Step Three</h3>
            Minutes:
            <form>
                <input value={minutes} onChange={handleChange} type="number" />
            </form>
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default StepThree;