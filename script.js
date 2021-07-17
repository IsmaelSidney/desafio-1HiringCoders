var countDate = new Date('jul 26, 2021 00:00:00').getTime();
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    localStorage.setItem("email",email)
    
})
function finish(){
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));

        document.getElementById("day").innerText = d;
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;

}

setInterval(function(){
    finish();
},1000)