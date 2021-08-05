import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CallDetail from './CallDetails';

const Modal: React.FC = () => {
    const history = useHistory();

    const closeModal = (e) => {
        e.stopPropagation();
        history.goBack();
    };

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div>
            <span onClick={closeModal}></span>
            <CallDetail />
        </div>
    );
};

export default Modal;
