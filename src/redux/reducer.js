import { ADD_CITY, ADD_COUNTRY, ADD_POPULATION } from "./action";


export const reducer =(store,{type,payload})=>{

    switch (type){
    case ADD_COUNTRY:
        return{...store, country:[...payload]};
        case ADD_CITY:
            return{...store, city:[...payload]};

            case ADD_POPULATION:
                return{...store, population:[...payload]};

     default:return store;
}

}