export const fetchFunction = async (url, header) => {
    const response = await fetch(url, header);
    if(response.status<300){
        return "OK";
    }
    return "ERROR";
}

export const buildHeader = (method, body) => {
    if(method === "GET"){
        return { 
            method: method,
            headers: {
                "Content-Type":"application/json"
            }
        }
    }
    else if(method === "POST"){
        return {
            method: method,
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        }
    }
    else{
        alert("Escribiste mal el metodo, se escribe POST o GET")
    }
}

export const fetchLogin = async (url, header) => {
    const response = await fetch(url, header);
    if(response.status<300){
        return await response.json();
    }
    return response.json();
}