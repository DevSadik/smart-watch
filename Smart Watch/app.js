const clock = document.querySelector('#clock')
const hourMin = document.querySelector('#hm')
const sec = document.querySelector('#sec')
const calender1 = document.querySelector('#date')


setInterval( function (){
    let date = new Date();
    let dt = date.getDate();
    let mon = date.getMonth();
    let yer = date.getFullYear();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = '';

    
   

   calender1.innerHTML = `${zerotumi(dt)}-${zerotumi(mon+1)}-${zerotumi(yer)}`

    hm.innerHTML = `${ zerotumi(hour(h) )}:${zerotumi(m)}`
    sec.innerHTML = `${zerotumi(s)}  ${h >11.59 ? "PM":"AM"}`
    calender1.innerHTML = `${calander}`
    
}, 1000 )



