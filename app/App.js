import { Router } from "./Router"

export function App(){
    const root = document.getElementById('root')
    if(!root){
        throw new error("ha ocurrido un error")
    }
    Router()
}