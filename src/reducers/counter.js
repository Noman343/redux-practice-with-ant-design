const initialState = 10

const handleNumber = (state = initialState, action) =>{
    switch(action.type) {
        case 'INC' : return state + 5;
        case 'DEC' : return state - 3;
        default: return state
    }
}
export default handleNumber