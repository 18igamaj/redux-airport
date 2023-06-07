import {useSelector} from "react-redux"

function AirlinesList() {

    const airlinesList = useSelector(store => store.airlinesList)

    return (
        <ul>    
            {airlinesList.map((airline, i) => (
                <li key={i}>
                    {airline}
                </li>
            ))}

        </ul>
    )
}

export default AirlinesList