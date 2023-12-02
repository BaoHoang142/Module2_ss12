const initialState = {
    count: 0
};


export const reducer = (state=initialState,action)=> {
    switch (action.type) {
        case "INCRESE":
            let newState = {...state}
            newState.count = newState.count+1
            return newState  
         case "DECRESE":
            let newState1 = {...state}
            newState1.count = newState1.count-1
            return newState1
        default:
            return state;
    }
}
