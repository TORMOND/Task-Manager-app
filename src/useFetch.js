import { useState } from 'react';
import { useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData]= useState(null)
    const [isPending, setisPending] =useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, {signal:abortCont.signal})
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch that resource')
            }
            return res.json()
        })
        .then(data=>{
         console.log(data)
         setData(data)
         setisPending(false)
         setError(null)
        })
        .catch(err=>{
            if(err.name ==='AbortError'){
                console.log('Fetch Aborted')
            }else{
                console.log(err)
                setError(err.message)
                setisPending(false) 
            }
            
        })
        return ()=> abortCont.abort();
    }, [url]);
    return {data, isPending, error};
}

export default useFetch;