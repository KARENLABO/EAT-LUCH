const API = "http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json";


async function getRestaurants() {
    const response = await fetch(API)
    return response.json();
}

export default getRestaurants