// counter를 위한 reducer 함수
const counter = (state=0, action) => {
    // 매개변수 state : 이전 state
    // action : 객체. payload , type
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT' :
            return state - 1;

        default:
            return state;
    }
}

export default counter;