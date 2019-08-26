import { Server } from 'http'

export const normalizePort = (val: number | string) : number | string | boolean =>{
    let port: number = (typeof val == 'string') ? parseInt(val): val;
    if(isNaN(port)) return val;
    else if (port >= 0) return port;
    else return false
}

export const onError = (server: Server) => {
    return (error: NodeJS.ErrnoException): void => {
        let port: number | string = server.address().port;
        if(error.syscall !== 'listen') throw error;
        let bind = (typeof port === 'string') ? `pipe ${port}` : `port ${port}`
        switch(error.code){
            case 'EACCES':
                console.error(`${bind} requer elevados privilegios de acesso`)
                process.exit(1)
                break;
            case 'EADORINUSE':
                console.error(`${bind} já esta em uso.`)
                process.exit(1);
                break;
            default:
                throw error;
        } 
    }
}

export const onListering = (server: Server) =>{
    return (): void => {
        let addr = server.address()
        let bind = (typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`)
        console.log(`Listening a ${bind}...`)
    }
}