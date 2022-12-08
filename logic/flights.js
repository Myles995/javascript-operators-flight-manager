function Flights() {
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){
        if (numberOfPassengers % flightCapacity == 0) {
        return (numberOfPassengers / flightCapacity);
        } else if (numberOfPassengers % flightCapacity != 0) { 
            return (numberOfPassengers / flightCapacity) + 1;
        }

    }
    
    return {calculateNumberOfFlights};
}
        
module.exports = Flights();

