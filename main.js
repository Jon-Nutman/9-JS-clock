
// get the hrs, min and sec 
// display them in screen
// account for american time

function displayTime(){
    const currentTime = new Date()

    let h = currentTime.getHours() 
    let m = currentTime.getMinutes() 
    let s = currentTime.getSeconds() 
    let maridian = 'AM'

    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        maridian = "PM";
    }
    

    // if (h >= 0 && h <= 12 ){
    //     maridian = 'AM'
    // }
    // else{
    //     maridian = 'PM'
    // }

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s


    let time = h + ":" + m + ":" + s + " " + maridian
    


    document.getElementById('clock').innerHTML = time
    
    setTimeout(displayTime, 1000)
}
displayTime()