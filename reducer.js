

const START_TIMER = 'START_TIMER'
const RESTART_TIMER = 'RESTART_TIMER'
const ADD_SECOND = 'ADD_SECOND'

function startTimer() {
    return {
        type: START_TIMER
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

const TIME_DURATION = 10

const initialState = {
    isPlaying : false,
    elapsedTime: 0,
    timerDuration: TIME_DURATION
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case START_TIMER:
            return applyStartTime(state);
        case RESTART_TIMER:
            return applyRestartTime(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state
    }
}

function applyStartTime(state) {
    return  {
        ...state,
        isPlaying: true
    }
}

function applyRestartTime(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state) {
    if (state.elapsedTime < TIME_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    } else {
        return {
            state,
            isPlaying: false
        }
    }
}

export const actionCreators = {
    startTimer,
    restartTimer,
    addSecond,
}

export default reducer;