import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// reduce function receives current state and action to
// generate the next state
// It is a pure function, cannot modify state in the Reducer
export const Reducer = (state = initialState, action) => {
    // When the reducer is called by the store
    // the store has no state
    // So in order to have the state defined, 
    // We define the state as the initialState as the Reducer is called
    return state;
};
