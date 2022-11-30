import {useState} from 'react'
const useToken = user =>{
    const [token, setToken] = useState()
    console.log('for genarate token', user)
    return [token]
}
export default useToken;