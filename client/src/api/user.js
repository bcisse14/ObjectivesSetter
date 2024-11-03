import { get, post, remove, update } from ".";

export async function getInfo(){    
    const response = await get('/user');
    return response;
}