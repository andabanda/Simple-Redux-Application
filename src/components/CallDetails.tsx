import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCall, removeSelectedCall } from '../redux/actions/callActions';
import { RootState } from '../redux/store';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

const CallDetail: React.FC = () => {
    const call = useSelector((state: RootState) => state.call);
    const { created_at, direction, from, to, via, duration, call_type } = call;
    const { callID } = useParams();
    const dispatch = useDispatch();
    console.log(callID);

    const getCallDetail = async (id: any) => {
        const response = await axios.get(`https://aircall-job.herokuapp.com/activities/${callID}`).catch((error) => {
            console.log('ERROR', error);
        });

        // @ts-ignore
        dispatch(selectedCall(response.data));
    };

    useEffect(() => {
        if (callID && callID !== '') getCallDetail(callID);
        return () => {
            dispatch(removeSelectedCall());
        };
    }, [callID]);
    const date = moment(created_at).format('MMMM Do, YYYY');
    const time = moment(created_at).format('h:mm:ss A');
    return (
        <div>
            {Object.keys(call).length == 0 ? (
                <div>Please wait...</div>
            ) : (
                <div style={{ padding: '10px' }}>
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            <Card.Title style={{ alignContent: 'left' }}>
                                {`Caller: `}
                                {from}
                            </Card.Title>
                            <Card.Text>
                                {`Recipient: `}
                                {to}
                            </Card.Text>
                            <Card.Text>
                                {`Date: `}
                                {date}
                            </Card.Text>
                            <Card.Text>
                                {`Time: `}
                                {time}
                            </Card.Text>
                            <Card.Text>
                                {`Length of call: `}
                                {duration} {`mins`}
                            </Card.Text>
                            <Link to={`/`}>
                                <Button variant="primary">Go back</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            )}{' '}
        </div>
    );
};

export default CallDetail;
