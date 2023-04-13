import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ActivityList () {

    const dispatch = useDispatch();
    const activities = useSelector(store => store.activities)

    const fetchActivityList = () => {
        axios.get('/activity').then(response => {
            // Could use state here, but practicing redux
            dispatch({ type: 'SET_ACTIVITY_LIST', payload: response.data })
        }).catch(error => {
            alert('Something went wrong.');
        });
    }

    useEffect(() => {
        fetchActivityList();
    }, []);

    return (
        <>
            <h3>Activity List</h3>
            {
                activities.map(activity => (
                    <div key={activity.id}>
                        {/* Data coming from server */}
                        <p>Name: {activity.name}</p>
                        <p>Type: {activity.type}</p>
                        <p>Minutes: {activity.minutes}</p>
                        <p>Miles: {activity.miles}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    );
}

export default ActivityList;