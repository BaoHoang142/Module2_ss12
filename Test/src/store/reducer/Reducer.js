const initialRedux = {
    count: 0
};
 export const reducer = (state = initialRedux, action)=> {
    switch (action.type) {
        case "Incre":
            let newSate = {...state}
            return newSate = newSate +1
        case "Decre":
            let newState1 = {...state}
            return newState1 = newState1 -1
        default:
            return state
    }
 }
