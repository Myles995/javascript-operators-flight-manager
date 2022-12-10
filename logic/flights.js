function Flights() {
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){
        let passengers = numberOfPassengers;
        let capacity = flightCapacity;
        if (passengers < 0) {
            console.log("The number of passengers must be a positive integer value");
        }
        if (capacity < 0) {
            console.log("The capacity of the flight must be a positive integer value");
        }
        if (numberOfPassengers % flightCapacity == 0) {
        return (numberOfPassengers / flightCapacity);
        } else if (numberOfPassengers % flightCapacity != 0) { 
            return ((numberOfPassengers / flightCapacity) + 1).toFixed(0);
        }
        
        
    }
    
    return {calculateNumberOfFlights};
}
        
module.exports = Flights();

