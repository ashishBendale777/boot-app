import { useLocation } from 'react-router-dom'



const Details = () => {
    // const { langname } = useParams()

    const langData = useLocation().state

    return (
        <div>
            <h1>Details</h1>
            {/* <h2>Name: {langname}</h2> */}
            <h4>Name:{langData.title}</h4>
            <h4>Name:{langData.description}</h4>
        </div>
    )
}

export default Details