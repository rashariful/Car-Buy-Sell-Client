import {useState} from 'react'
const useToken = user =>{
    
    const [token, setToken] = useState()

    console.log('for Genarate Token', user)
    return [token]
}
export default useToken;