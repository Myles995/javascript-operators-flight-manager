function Passengers() {
    function checkFlightCapacity(flightCapacity, passengersArray) {
        let totalPassengers = passengersArray.reduce((accumulator, value) => {
            return accumulator + value;
        },0);

        

        if (totalPassengers > flightCapacity) {
            throw new Error("There are too many passengers for this flight.");
        } 
            
        return totalPassengers;
    }
    return {checkFlightCapacity};

    
    
}

module.exports = Passengers();

