import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    // First, create a redux store
    const store = createStore(
        Reducer, 
        initialState,
    );

    return store;
}