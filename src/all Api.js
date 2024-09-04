import axios from "axios";
const baseUrl="https://mediaplayerdb.onrender.com"

export const addvideos= async(data)=>{
    return await axios.post(`${baseUrl}/videos`,data)
}


export const getvideos=async()=>{
    return await axios.get(`${baseUrl}/videos`)

}

export const deletevideo=async(id)=>{
    return await axios.delete(`${baseUrl}/videos/${id}`)

}

// export const deletevideo=async(id)=>{
//     return await axios.delete(`http://localhost:8852/videos${id}`)
// }


export const addhistory=async(data)=>{
    return await axios.post(`${baseUrl}/History`,data)
}

export const gethistory=async()=>{
    return await axios.get(`${baseUrl}/History`)
}

export const deletehistory=async(id)=>{
    return await axios.delete(`${baseUrl}/History/${id}`)
}

export const addcategory=async(data)=>{
    return await axios.post(`${baseUrl}/category`,data)
}

export const getcategory=async()=>{
    return await axios.get(`${baseUrl}/category`)
}

export const deletecategery=async(id)=>{
    return await axios.delete(`${baseUrl}/${id}`)
}

export const updatecategery=async(id,data)=>{
    return await axios.put(`${baseUrl}/${id}`,data)
}

export const checkemail=async(email)=>{
    return await axios.get(`${baseUrl}/users?email=${email}`)
}

export const registerapi=async(data)=>{
    return await axios.post(`${baseUrl}/users`,data)
}

export const loginapi=async(email,password)=>{
    return await axios.get(`${baseUrl}/users?email=${email}&?Zpassword=${password}`)
}