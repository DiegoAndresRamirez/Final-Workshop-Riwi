export function fetchApi(url, options){
    try{
        const resp = fetch(url, options)
        const data = resp.json()
        return data;
    }catch (error){
        alert("ocurrio un error", error)
    }
}