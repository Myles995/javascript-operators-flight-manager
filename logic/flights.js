function Flights() {
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){
        // Ensures # of passengers and flights is a positive integer
        if ((numberOfPassengers < 0) || (!Number.isInteger(Number(numberOfPassengers)))) {
           throw new console.error("The number of passengers must be a positive integer value"); 
        }
        if ((flightCapacity < 0) || (!Number.isInteger(Number(flightCapacity)))) {
            throw new console.error("The capacity of the flight must be a positive integer value"); 
        }
        // Calculates number of flights 
        if (numberOfPassengers % flightCapacity == 0) {
        return (numberOfPassengers / flightCapacity);
        } else if (numberOfPassengers % flightCapacity != 0) { 
            return ((numberOfPassengers / flightCapacity) + 1).toFixed(0);
        }
        
        
    }   
    

    function checkAircraftRevision(distanceLimit, distanceArray) {
        let totalDistance = 0;
        let distance;
        for (distance of distanceArray) {
            totalDistance += distanceArray;
        }

        if (totalDistance > distanceLimit) {
            throw new Error("Flight maximum allowed distance (" + distanceLimit + ") exceeded. No flight is allowed any longer, you need to make the revision immediately.");
        }

        if (totalDistance <= distanceLimit/2) {
            return "The revision needs to be done within the next 3 months";
        } else if (totalDistance <= 3 * distanceLimit/4) {
            return "The revision needs to be done within the next 2 months";
        } else {
            return "The revision needs to be done within the next month";
        }
         
        
        
    }

    return {calculateNumberOfFlights, checkAircraftRevision};
}



module.exports = Flights();

