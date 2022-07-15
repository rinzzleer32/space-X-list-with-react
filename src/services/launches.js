const Api_url = "https://api.spacexdata.com/v4";

export async function getAllLaunches(){
    
    try {
        const response = await fetch(`${Api_url}/launches`);
        const data = await response.json();
        return data;
     
    } catch (error) {
        console.log(error);
    }
    
}


export async function getLaunchesByFlightNumber(fl){
    
    try {
        const response = await fetch(`${Api_url}/launches/${fl}`);
        const data = await response.json();
        return data;
     
    } catch (error) {
        console.log(error);
    }
    
}
