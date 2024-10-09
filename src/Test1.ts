import { Utils } from "./Utils";

const unit_test = async() =>{


//test1
if (Utils.add(1, 2) === 3) {
    console.log(0)
} else {
    console.log('add test 1')
    return;
}

//test2
if (Utils.add(2, 2) === 4) {
    console.log(0)
} else {
    console.log('add test2')
    return;
}

//test user
const data:any ={
    "name": "panda",
    "username": "pp"
}
const response: any = await Utils.addUser(data);
const correct_result:any = {
    "name": "panda",
    "username": "pp"
}

    try {
        const response: any = await Utils.addUser(data);
        const correct_result: any = { "name": "panda", "username": "pp" }

        const keys: string[] = Object.keys(correct_result);
        for (const k of keys) {
            if (correct_result[k] !== response[k]) {
                console.log("addUser" + k)
                return
            }
        }

    } catch (error) {
        console.log("addUser" + error)
    }


}



unit_test();