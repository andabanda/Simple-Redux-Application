import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Call from './Call';
import axios from 'axios';
import { setCalls } from '../redux/actions/callActions';

const CallLists: React.FC = () => {
    const calls = useSelector((state) => state);
    const dispatch = useDispatch();

    const getCalls = async () => {
        const response = await axios.get('https://aircall-job.herokuapp.com/activities').catch((err) => {
            console.log('ERROR', err);
        });
        // @ts-ignore
        dispatch(setCalls(response.data));
        console.log(dispatch);
    };

    useEffect(() => {
        getCalls();
    }, []);
    console.log('Calls:', calls);

    return (
        <div>
            <Call />
        </div>
    );
};

export default CallLists;
