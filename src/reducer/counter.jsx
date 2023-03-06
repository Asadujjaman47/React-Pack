const initialState = 0;

const changeInterger = (state = initialState, action) => {
    if(action.type == "INCREMENT"){
        return state+1;
    }
    else if(action.type == "DECREMENT"){
        return state-1;
    }
    else{
        return state;
    }
};

export default changeInterger;