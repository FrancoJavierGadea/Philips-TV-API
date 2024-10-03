

export async function shutdown({url}){

    const response = await fetch(`${url}/1/input/key`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            key: 'Standby'
        })
    });

    if(response.status === 200){

        const result = await response.text();

        console.log(result);
    }
}