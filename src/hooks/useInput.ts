import { useState } from "react"

const useInput = (initialState:any):any=>{
    const [val,setVal] = useState(initialState)

    const handlerOnChange = (e:any):any=>{
        setVal(e.target.value)
    }
    return [val,handlerOnChange]
}
export default useInput