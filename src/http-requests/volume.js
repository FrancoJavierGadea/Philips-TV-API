/**
 * Show: 
 * - https://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API.html
 * - https://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API-Method-input-key-POST.html
 */


export async function volumeUp({url}){

    const response = await fetch(`${url}/1/input/key`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: 'VolumeUp'
        })
    });

    if(response.status === 200){

        const result = await response.text();

        console.log(result);
    }
}

export async function volumeDown({url}){

    const response = await fetch(`${url}/1/input/key`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: 'VolumeDown'
        })
    });

    if(response.status === 200){

        const result = await response.text();

        console.log(result);
    }
}


export async function volumeMute({url}){

    const response = await fetch(`${url}/1/input/key`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: 'Mute'
        })
    });

    if(response.status === 200){

        const result = await response.text();

        console.log(result);
    }
}