
const defaultState = {
    inputValue:'dell',
    list:[]
}

export default (state = defaultState , action)=>{
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.inputValue
        return newState;
    }
    return state;
}