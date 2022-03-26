import axios from "axios";
import { useState, useEffect } from 'react'

export default function useAxios(url) {

    const [Response, setResponse] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://3.131.5.153:4000/api${url}`, {
                headers: {
                    auth_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDIsImlhdCI6MTY0ODI4NzExMywiZXhwIjoxNjUwODc5MTEzfQ.pyj_5fXijY9GoRP8sqEH218YLqMIvqnPPeE0kUy_DxY"
                }
            })

            setResponse(response.data?.data)
        }
        fetchData()
    }, [url])
    return Response
}
