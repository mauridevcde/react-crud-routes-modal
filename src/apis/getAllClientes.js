import axios from "axios"

export const getAllClientes = async() => {
    
    const urlBase = "http://191.101.78.5:5160"

    const request = await axios.get(`${urlBase}/api/transporte/all`)
    const response = await request.data
    return response
}   
