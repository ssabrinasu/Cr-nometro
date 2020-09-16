

var hh = 0
var mm = 0
var ss = 0

var cron

var relogio = document.getElementById("relogio")




function start() {
    cron = setInterval(function() {
        ss += 1
        relogio.textContent = ss

        if(ss > 59){
           mm++
           ss = 00
           if(mm > 59){
              hh++ 
              mm = 00
           }
        }
        relogio.innerHTML = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)

    }, 1000)
  

    
}

function pause() {
  clearInterval(cron)
}

function restart(){
    clearInterval(cron)
    hh = 0
    mm = 0
    ss = 0
    relogio.innerHTML = "00:00:00"
}

function contagem (){
   


    //document.getElementById("relogio").innerHTML = hh + ':' +mm+ ':' + ss
}

