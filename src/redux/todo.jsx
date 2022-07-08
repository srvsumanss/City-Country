import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {addcountry,addcity,addpopulation} from "./action"


export const Todo =()=>{


    const [count, setcount] = useState(0)
    const [text, setText] = useState()
    const [city, setcity] = useState()
    const [population, setpopulation] = useState()
    const dispatch=useDispatch()
    const tododata = useSelector((store)=>store.city)
    

    useEffect(()=>{
        getdata()
        
    },[])

        const getdata = ()=>{
        axios.get("http://localhost:3001/tdata").then(({data})=>{

        dispatch(addpopulation(data))
        dispatch(addcity(data))
        dispatch(addpopulation(data))
        
           
          console.log(data,"data")

        })
    }

    const postdata = ()=>{
        
        axios.post("http://localhost:3001/tdata",{ country:text,city:city,population:population,status:"uncompleted"}).then(()=>{
            getdata()
        })
    }
    const patchdata=(id,status)=>{
        if(status==="uncompleted"){status="completed"}
        else{status="uncompleted"}
        console.log(id,"patch")
        axios.patch(`http://localhost:3001/tdata/${id}`,{status}).then(()=>{
    getdata()})
    }



    const deleteGroce=(id)=>{

        const remove = tododata.filter((todo)=>{return todo.id !== id})
    
        axios.delete(`http://localhost:3001/tdata/${id}`).then(()=>{
            getdata();
        })
        dispatch(addpopulation(remove)) 
        dispatch(addcity(remove)) 
        dispatch(addcountry(remove)) 
        }

     

    return (
        <div>
            <input type="text" placeholder="country" onChange={(e)=>setText(e.target.value)}/>
            <input type="text"  placeholder="city" onChange={(e)=>setcity(e.target.value)}/>
            <input type="text"   placeholder="population" onChange={(e)=>setpopulation(e.target.value)}/>
            <button onClick={postdata}>Add</button>
            {tododata.map((e)=>{
              return  (<div style={{display: 'flex', gap: '50px',justifyContent: 'center', margin: '30px'}}>
                 <p>{e.id}</p>
                 <p>{e.country}</p>
                <p>{e.city}</p>
                 <p>{e.population}</p>
              
              
              <button onClick={(() => { deleteGroce(e.id) })}>delete todo</button>
            
              </div>

              )

             })}
        </div>
    )
}