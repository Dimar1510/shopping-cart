import { useEffect, useState } from "react";

function useFetch() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch('https://fake-coffee-api.vercel.app/api')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error('api error')
            }
            return response.json()
        })
        .then((response) => setData(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
}, [])

return { data, error, loading }
}

export default useFetch;