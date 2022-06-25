export const fetchFunction = async (url, header) => {
    const response = await fetch(url, header);
    return await response.json();
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