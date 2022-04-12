const productosl=[
    {id:1, nombre:"Macbook Pro", precio:20000, imagen:"assets/producto_mac.jpg"},
    {id:2, nombre:"Echo Dot", precio:999, imagen:"assets/producto_echodot.jpg"},
    {id:3, nombre:"Airpods", precio:3099, imagen:"assets/producto_airpods.jpg"},
    {id:4, nombre:"Nintendo Switch", precio:6959, imagen:"assets/producto_switch.jpg"},
    {id:5, nombre:"Oculus Quest 2", precio:7256, imagen:"assets/producto_oculus.jpg"},
    {id:6, nombre:"Xbox Series X", precio:16000, imagen:"assets/producto_xboxx.jpg"},
    {id:7, nombre:"Xbox Series S", precio:7000, imagen:"assets/producto_xboxs.jpg"},
    {id:8, nombre:"Iphone 12", precio:23999, imagen:"assets/producto_iphone.jpg"},
    {id:9, nombre:"Beats Studio Buds", precio:2999, imagen:"assets/producto_buds.jpg"},
    {id:10, nombre:"Por fin acabé", precio:1000000, imagen:"assets/producto_festejo.jpg"}
]
const producto={id:6, nombre:"Xbox Series X", precio:16000, imagen:"assets/producto_xboxx.jpg", descripcion:"Presentamos Xbox Series X, la consola Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones de consolas: todos los juegos se ven y se juegan mejor en Xbox Series X."}
export const productosfetch= new Promise((resolve,reject)=>{
    let condition=true
    if (condition){
        setTimeout(()=>{
            resolve(productosl)
        },2000);
    } else{
        reject(console.log("Error"));
    }
    });
    export const productofetch= new Promise((resolve,reject)=>{
        let condition=true
        if (condition){
            setTimeout(()=>{
                resolve(producto)
            },2000);
        } else{
            reject(console.log("Error"));
        }
        });
