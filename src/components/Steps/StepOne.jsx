import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';

function StepOne () {

    // Input value comes from Redux (useSelector)
    const personName = useSelector(store => store.personName);
    const allPeople = useSelector(store => store.allPeople);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        // type required. should match action.type from reducer
        const action = { type: 'SET_PERSON_NAME', payload: event.target.value };
        dispatch(action);
    }

    const addPerson = (event) => {
        // Stops page from refreshing on submit
        event.preventDefault();
        const action = { type: 'ADD_PERSON_NAME', payload: personName };
        dispatch(action);
    }

    const nextPage = () => {
        if (allPeople.length > 0) {
            history.push('/step-2');
        } else {
            alert('Please add a person');
        }
    }
    
    return (
        <>
            <h3>Step One</h3>
            Name:
            <form onSubmit={addPerson}>
                <input value={personName} onChange={handleChange} type='text' />
                <input type='submit' />
            </form>
            <br />
            <br />
            Name List:
            <ul>
              {
                // Setting the key equal to index to stop console error
                allPeople.map((person, i) => <li key={i}>{person}</li>)
              }  
            </ul>

            {/* Could also import link from MUI instead of button */}
            <button onClick={nextPage}>Next</button>
        </>
    );
}

export default StepOne;