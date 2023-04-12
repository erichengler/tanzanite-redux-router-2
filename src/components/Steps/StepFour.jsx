import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function StepFour () {

    const history = useHistory();
    const dispatch = useDispatch();

    const miles = useSelector(store => store.miles);

    const handleChange = (event) => {
        const action = {type: "SET_MILES", payload: event.target.value};
        dispatch(action);
    }

    const nextPage = () => {
        history.push('/step-5');
}

    return (
        <>
            <h3>Step Four</h3>
            Miles:
            <form>
                <input value={miles} onChange={handleChange} type="number" />
            </form>
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default StepFour;