import { cbcDecode } from "../decrypt.js";


export async function getName({url}){

    const response = await fetch(`${url}/1/system/name`, {
        method: 'GET',
    });

    if(response.status === 200){

        const result = await response.json();

        console.log(result);
    }
}


export async function getSystemInfo({url}){

    const response = await fetch(`${url}/1/system`, {
        method: 'GET',
    });

    if(response.status === 200){

        const result = await response.json();

        result.decrypt = {};

        Object.keys(result).forEach(key => {

            if(key.endsWith('_encrypted')){

                const encryptData = result[key];

                const decryptData = cbcDecode(encryptData);

                result.decrypt[key.replace('_encrypted', '')] = decryptData;
            }
        });

        console.log(result);
    }
}