import React, { useState,useEffect } from 'react'
import axios from 'axios'

export default function Message() {
    const [result, setResult] = useState(null)

    const message = async () => {
        try{
            let res = await axios.get("https://8000-purple-lark-7y3ixq93.ws.trilogy.devspaces.com/")
            let result = res.data
            setResult(result)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        message()
    }, [])

    return (
        <div>
            {result}
        </div>
    )
}