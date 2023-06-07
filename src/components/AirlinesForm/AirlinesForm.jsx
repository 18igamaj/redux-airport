import {useState} from 'react'
import { useDispatch } from 'react-redux'
function AirLinesForm() {
const dispatch = useDispatch()
    const [airline,setAirline] = useState('')

    

   const handleSubmit = (event) => {
        event.preventDefault()

        dispatch({
            type: 'ADD_AIRLINE',
            payload: airline
        })

        setAirline('')
    } 

    return (
        <>
        <h2> Add An Airline </h2>
        <form onSubmit = {handleSubmit}>
        <label>Airline</label>    
        <input value={airline} type="text" placeholder="Airline" onChange={ (e) => setAirline(e.target.value)} />
        <button type="submit">Submit</button>
        </form>
    </>)
}

export default AirLinesForm