import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            }
        case 'ADD_INCOME':
            return {
                ...state,
                income: [...state.income, action.payload]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense)=> expense.id !== action.payload
                )
            }
        case 'DELETE_INCOME':
            return {
                ...state,
                income: state.income.filter(
                    (item)=> item.id !== action.payload
                )
            }
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            }
        default : return state;
    }
}

const initialState = {
    budget: 30000,
    expenses: [
        {id: 1,name: '밥먹기', cost: 1000},
        {id: 2,name: '카드비', cost: 3000},
        {id: 3,name: '교통비', cost: 7000},
    ],
    income: [
        {id: 1,name: '월급', cost: 50000},
        {id: 2,name: '용돈', cost: 20000},
    ]
}

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            budget: state.budget,
            income: state.income,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
