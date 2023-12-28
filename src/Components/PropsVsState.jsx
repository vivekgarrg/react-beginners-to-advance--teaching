import { useState } from "react";

export default function PropsVsState() {
    // props // properties(read only);
    // state // dynamic properties ()
    
    const [state, setState] = useState(0);
    const [loading, setLoading] = useState(true);
   

    const handleChange = ()=>{
        setState(prev=>prev+1);
        setState(prev=>prev+1);
        setState(prev=>prev+1);
    }

    const defaultProps = {name: 'props',age: 0, state, handleChange};

  return (
    <div>
        PropsVsState
        {console.log('1')}
        &nbsp;
        {loading ? "Loading..." : "No Loading..."}
        <button onClick={()=>setLoading(prev=>!prev)}>Change Loading</button>
        count:{state}
        <button onClick={handleChange}>+</button>
        <NewComponent {...defaultProps}/>
    </div>

  )
}


const NewComponent = (props)=>{
    console.log(props)
    return <h1>New Component <button >+</button> {console.log('2')}</h1>
}