export const ADD_COUNTRY="ADD_COUNTRY";

export const ADD_CITY="ADD_CITY";

export const ADD_POPULATION="ADD_POPULATION";



export const addcountry=(country)=>({type: "ADD_COUNTRY",payload:country}); 


export const addcity=(city)=>({type: "ADD_CITY",payload:city}); 


export const addpopulation=(population)=>({type: "ADD_POPULATION",payload:population}); 