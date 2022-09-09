import callOfDuty from "../img/callOfDuty.jpg"
import godOfWar from "../img/godOfWar.jpg"
import halo from "../img/halo.jpg"
import monsterHunter from "../img/monsterHunter.jpg"


const productos = [
    {id:"1", title:"Call Of Duty", category:"shooter" ,description:"Empujando los límites de lo que los fanáticos esperan de la franquicia de entretenimiento que establece récords, Call of Duty®: Black Ops II impulsa a los jugadores a un futuro cercano, la Guerra Fría del siglo XXI, donde la tecnología y las armas han convergido para crear una nueva generación de guerra.", price: 2000, stock:10, img: callOfDuty},
    {id:"2", title:"God Of War", category:"accion" ,description:"accion", price: 10, stock:5, img: godOfWar},
    {id:"3", title:"Halo", category:"shooter" ,description:"shooter", price: 10, stock:15, img: halo},
    {id:"4", title:"Monster Hunter", category:"RPG" ,description:"RPG", price: 10, stock:20, img: monsterHunter}
]

export const data = new Promise ((res, rej) =>{
    setTimeout(() => {
        res(productos)
    }, 2000);
})
