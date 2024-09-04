import { useState,useEffect } from "react"
import React from 'react'
import { getcategory } from "../all Api"
import { deletecategery } from "../all Api"
import Categery from "./Categery"
import { toast } from "react-toastify"
import { updatecategery } from "../all Api"
import VideoCard from "./VideoCard"

function Categorylist({response}) {

    const[Categerylist,setcategorylist]=useState([])

    

    useEffect(()=>{
        getdata()

    },[response])
    
   
     
  const  getdata=async()=>{
    const res=await getcategory()

        console.log(res);


    if(res.status==200){

        setcategorylist(res.data)
    }else{
        console.log(res);
        
    }
        
    }

    const handledelete=async(id)=>{
        const result=await deletecategery(id)
        if(result.status==200){
          getdata()
          toast.success("deleted")

        }
       
    }

    const drophandler= async(event,Categery)=>{
      console.log("droped");
      const vid=JSON.parse(event.dataTransfer.getData("video"))
       Categery.videos.push(vid)
       const result=await updatecategery(Categery.id,Categery)
       if(result.status==200){
        toast.success(`${vid.title} added to ${Categery.title}`)
        getdata()
        console.log(result);
        
       }else{
        toast.warning("adding failed")
       }
      

      }

      const dragOverHandler=(event)=>{
        console.log("drag over");
        event.preventDefault()
        
      }




  return (
    <>

      <div className="container-fluid border border-light border-3 p-5 mt-3">

        {
                    Categerylist.length > 0 ?
            <div>
                {
            Categerylist.map(item=>(
              <div>
                <div 
                
                
                 className="m-2 p-3 border justify-content-between d-flex" onDrag={(event)=>{dragOverHandler(event)}} onDrop={(event)=>{drophandler(event,item)}}>
                    <h5 className="">{item.title}</h5>

                    <button onClick={(id)=>{handledelete(item.id)}} className="btn"  ><i className="fa-solid fa-trash fa-xl" style={{color:"red",backgroundColor:"black"}} /></button>

                  </div>
                  {
                    item?.Videos?.length>0  &&
                    item?.Videos?.map(vid=>(

                      <VideoCard v={vid} cat={true}/>
                    ))
                  }

                  </div> 
                  
                
            ))

        }
            </div>
            :
            <h1>NO Category Found</h1>
            
            
        }

      </div>
    
    
    </>
    
  )
}

export default Categorylist