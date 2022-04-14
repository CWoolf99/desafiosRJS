const productosl=[
    {id:1, nombre:"Macbook Pro",categoria:"compusCelulares", precio:20000, imagen:"https://i.blogs.es/31148f/jeremy-bezanger-jx-ux9zvdkk-unsplash/500_333.jpeg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:2, nombre:"Echo Dot",categoria:"audifonos", precio:999, imagen:"https://http2.mlstatic.com/D_NQ_NP_987458-MLA45738508185_042021-O.jpg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:3, nombre:"Airpods",categoria:"audifonos", precio:3099, imagen:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632861342000", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:4, nombre:"Nintendo Switch",categoria:"consolas", precio:6959, imagen:"https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:5, nombre:"Oculus Quest 2",categoria:"consolas", precio:7256, imagen:"https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:6, nombre:"Xbox Series X",categoria:"consolas", precio:16000, imagen:"https://ibcmexico.mx/wp-content/uploads/2021/11/3022894.jpg", descripcion:"Presentamos Xbox Series X, la consola Xbox más rápida y potente de la historia. Juega miles de títulos de cuatro generaciones de consolas: todos los juegos se ven y se juegan mejor en Xbox Series X."},
    {id:7, nombre:"Xbox Series S",categoria:"consolas", precio:7000, imagen:"https://gameplanet-53f8.kxcdn.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/s/e/series_s_1_1_1.jpg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:8, nombre:"Iphone 12",categoria:"compusCelulares", precio:23999, imagen:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:9, nombre:"Beats Studio Buds",categoria:"audifonos", precio:2999, imagen:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."},
    {id:10, nombre:"Por fin acabé",categoria:"CompusCelulares", precio:1000000, imagen:"https://http2.mlstatic.com/D_NQ_NP_866698-MLA48632316143_122021-V.jpg", descripcion:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, reprehenderit iure asperiores eius corrupti omnis sit alias, molestias, voluptatem accusantium harum eaque ratione cumque delectus facere. Numquam eligendi corrupti excepturi."}
]

export const productosfetch= (categoryId)=>{
    return new Promise((resolve,reject)=>{
    const productosfiltrados=productosl.filter((productol)=>productol.categoria===categoryId) 
    setTimeout(()=>{
        if (categoryId) {
            resolve(productosfiltrados)
        } else {
            resolve(productosl) 
        }
        },2000);
    });
}
    export const productofetch=(id)=>{return new Promise((resolve,reject)=>{
        const producto=productosl.find((prod)=>prod.id===Number(id))
            setTimeout(()=>{
                resolve(producto)
            },2000);
        });
    }
