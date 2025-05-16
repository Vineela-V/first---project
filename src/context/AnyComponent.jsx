import React from 'react';
import { useGlobalState, useSetGlobalState } from './GlobalStateContext';

const AnyComponent = () => {
    const state = useGlobalState();
    const setState = useSetGlobalState();

    const login = () => {
        setState(prev => ({...prev, user: {name: 'Ravi'} }));
    };
    return (
        <div>
            <p>Current User: {state.user?.name || 'None'}</p>
            <button onClick={login}></button>
        </div>
    );
};

export default AnyComponent;