import { createStore } from "redux";
import { reducer } from "./reducer";


export const store=createStore(reducer,{
    country:[],
    city:[],
    population:[]
})