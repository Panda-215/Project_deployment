import axios from "axios";

function add(a: number, b: number) {
    return a + b;
}

async function addUser(data:any) {
    const response: any = await axios.post('https://jsonplaceholder.typicode.com/users', data);
   console.log (response);
   return response.data

}
export const Utils = { addUser, add }
