


let bamberg = document.getElementById('bamberg-switch');
let burbach = document.getElementById('burbach-switch');
let leun = document.getElementById('leun-switch');

let map = document.getElementById('leun');


let bamberg_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.5910037496838!2d10.881283511346176!3d49.88428201142278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a22318e0c27867%3A0x1926e3ea8d8b5bad!2sLaurenzistra%C3%9Fe%2030%2C%2096049%20Bamberg!5e0!3m2!1sen!2sde!4v1632060482907!5m2!1sen!2sde'
let burbach_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.0971341484715!2d8.139715215741797!3d50.73668727951592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc17dced631247%3A0x6f00738b9da39738!2sHickengrundstra%C3%9Fe%2062%2C%2057299%20Burbach!5e0!3m2!1sen!2sde!4v1632061077417!5m2!1sen!2sde'
let leun_url = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6030.77364400518!2d8.298276377327136!3d50.541090909839724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb980769e48ed62a!2sRechtsanwaltskanzlei%20Thomas%20Forell%20%26%20Kollegen!5e0!3m2!1sen!2sde!4v1632050596392!5m2!1sen!2sde'


bamberg.addEventListener('click', function() {
    map.src = bamberg_url;
});

burbach.addEventListener('click', function() {
    map.src = burbach_url;
});

leun.addEventListener('click', function() {
    map.src = leun_url;
});
