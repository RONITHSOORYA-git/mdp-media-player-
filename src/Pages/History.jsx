import React from 'react'
import { useState,useEffect } from 'react'
import { gethistory } from '../all Api'
import { deletehistory } from '../all Api'

function History() {

  

  const [history,sethistory]=useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData=async()=>{
    const result=await gethistory()
    if(result.status==200){
      sethistory(result.data)
    }
    else{
      console.log(result);
      
    }
  }


  const delhistory=async(id)=>{

    const result=await deletehistory(id)
    console.log(result);
    if(result.status==200){
      getData()
    }
    

  }

  return (
    <>
    
          
   <div>
        {
              history.length > 0 ?

      
    <div className='p-5'>
      <h1>Watch History</h1>

      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Title</th>
            <th>Video URL</th>
            <th>Date & Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>     

          {
            history.map(item=>(


              <tr>
              <td>{item.videoid}</td>
              <td>{item.title}</td>
              <td>{item.url}</td>
              <td>{item.date}</td>
              <td>
                <button className='btn'onClick={()=>{delhistory(item.id)}}><i className="fa-solid fa-trash" style={{color: "#ed0c0c",}} /></button>
              </td>
            </tr>


            ))
          }
         
        </tbody>
      </table>

      </div>

      :

      <h2 className='text-center text-danger'>No History Found</h2>


}

    </div>
 

    </>
  )
}

export default History