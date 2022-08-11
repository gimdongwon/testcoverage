

const apiCall = async (carId) => {
    const apiUrl = `https://api.encar.com/v1/readside/clean-encar/vehicle/${carId}`;
    const result = await fetch(apiUrl).then(res=> res.ok);
    console.log(result);
    return result;
}

const add = (a,b) => a + b;

const substraction = (a,b) => a - b;


export default apiCall;
export {add, substraction};