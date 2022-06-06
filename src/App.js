import Navbar from "./components/Navbar"
import Destination from "./components/Destination"
import destinationData from "./experiencesData"

export default function App(){
    const destinations = destinationData.map(destination => {
        return(
            <>
                <Destination
                    key={destination.id}
                    destination={destination}
                />
                <hr />
            </>

        )
    })

    return(
        <div>
            <Navbar />
            <div className="container">
                <div className="destinations">
                    {destinations} 
                </div>
            </div>
        </div>
    )
}