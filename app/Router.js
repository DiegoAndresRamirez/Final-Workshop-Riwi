import { routes } from "./routes"

export function Router(){
    const path = window.location.pathname

    const publicRoutes = routes.public.find(route => route.path === path)

    if(publicRoutes){
        alert("todo correcto, se encontro el beta")
    }
}

export function navigateTo(){
    window.history.pushState({}, "", window.origin.pathname + path)
    Router()
}