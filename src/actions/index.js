export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const UPDATE_MEMORY = "UPDATE_MEMORY";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const CLEAR_MEMORY = "CLEAR_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const updateMemory = () => {
    return ({type:UPDATE_MEMORY});
}

export const memoryRecall = () => {
    return ({type:MEMORY_RECALL});
}

export const clearMemory = () => {
    return ({type:CLEAR_MEMORY});
}