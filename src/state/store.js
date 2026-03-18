// Load saved data from browser storage
const saved = localStorage.getItem("state");

 let state =//saved ?JSON.parse(saved):
{
    todos:[],
    planning: [],
    journal: []
    
};
const listeners =[];

export function getState(){
    return state;
}
export function setState(newState) {
    state ={...state,...newState};

    localStorage.setItem("state",JSON.stringify(state));
    listeners.forEach((listener)=>listener())
}
export function subscribe(listener){
    listeners.push(listener);
}