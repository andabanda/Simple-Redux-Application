import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';
import '../css/App.css';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';

const Call: React.FC = () => {
    const calls = useSelector((state: RootState) => state.allCalls.calls);
    const renderList = () =>
        calls.map((call) => {
            const { id, from, created_at, duration } = call;
            const date = moment(created_at).format('MMMM Do, YYYY');

            return (
                <div key={id}>
                    <div style={{ padding: '10px' }}>
                        <Card style={{ width: '50rem' }}>
                            <Card.Body>
                                <Card.Title style={{ alignContent: 'left' }}>
                                    {`Caller: `}
                                    {from}
                                </Card.Title>
                                <Card.Text>
                                    {`Date: `}
                                    {date}
                                </Card.Text>
                                <Card.Text>
                                    {`Length of call: `}
                                    {duration} {`mins`}
                                </Card.Text>
                                <Link to={`/call/${id}`}>
                                    <Button variant="primary">Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            );
        });

    return <div>{renderList()}</div>;
};

export default Call;
