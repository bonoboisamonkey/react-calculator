import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    number: null,
    prevNumber: null,
    operator: null,
    prevOperator: null,
    answer: null,
    prevAnswer: null
}

export const calculate = createAsyncThunk(
    'calculate',
    (data) => {
        let firstNumber = data.prevNumber;
        let secondNumber = data.number;
        let operator = data.prevOperator;

        if (firstNumber.includes('.')) {
            firstNumber = parseFloat(firstNumber);
        } else {
            firstNumber = parseInt(firstNumber);
        }
        if (secondNumber.includes('.')) {
            secondNumber = parseFloat(secondNumber);
        } else {
            secondNumber = parseInt(secondNumber);
        }
        let answer = null;
        switch (operator) {
            case '+':
                answer = firstNumber + secondNumber;
                break;
            case '-':
                answer = firstNumber - secondNumber;
                break;
            case '*':
                answer = firstNumber * secondNumber;
                break;
            case '/':
                answer = firstNumber / secondNumber;
                break;
            default:
                break;
        }

        return { answer: answer.toString() }
    }
)

const reducerSlice = createSlice({
    name: 'reducer',
    initialState: initialState,
    reducers: {
        saveNumber(state, action) {
            state.number = action.payload;
        },
        savePrevNumber(state, action) {
            state.number = initialState.number;
            state.prevNumber = action.payload;
        },
        startOperation(state, action) {
            state.operator = action.payload;
        },
        saveOperator(state, action) {
            state.prevOperator = action.payload;
        },
        saveAnswer(state, action) {
            state.prevAnswer = action.payload;
            state.answer = initialState.answer;
        },
        equal(state, action) {
            state.answer = action.payload;
            state.number = initialState.number;
            state.prevNumber = initialState.prevNumber;
            state.prevAnswer = initialState.prevAnswer;
            state.operator = initialState.operator;
            state.prevOperator = initialState.prevOperator;
        }
    },
    extraReducers: {
        [calculate.fulfilled]: (state, action) => {
            state.answer = action.payload.answer;
            state.prevNumber = action.payload.answer;
            state.number = initialState.number;
        }
    }
})

export const {
    saveNumber,
    savePrevNumber,
    startOperation,
    saveOperator,
    saveAnswer,
    equal
} = reducerSlice.actions;
export default reducerSlice.reducer;