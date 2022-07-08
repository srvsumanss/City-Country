import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { addTodo } from "./action"

export const Productdetails=()=>{
    const {id}=useParams()
    useEffect(()=>{
        getdata()
    },[])

const [db,setdb]=useState([])

    const getdata = ()=>{
        axios.get(`http://localhost:3001/tdata/${id}`).then(({data})=>{
            setdb([data])
        })
    }
    
    
    return (
        <div>

<Link to="/"> <button>home</button></Link>
           {db.map((e)=>{
               
               return  <><div><div>{e.id}.{e.title}</div></div></>

             })}
        </div>
    )
}