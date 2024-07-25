//Servers JS

function getServerHypixel() {
    var apiUrl = 'https://api.mcsrvstat.us/2/mc.hypixel.net';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var serverInfo = JSON.parse(xhr.responseText);
            displayServerHypixel(serverInfo);
        } else {
            document.getElementById('status').textContent = 'Erro ao carregar informações do servidor.';
        }
    };

    xhr.onerror = function () {
        document.getElementById('status').textContent = 'Erro ao conectar-se ao servidor.';
    };

    xhr.send();
}

function displayServerHypixel(serverInfo) {
    var circle = document.getElementById('circle');
    if (serverInfo.online) {
        // document.getElementById('status').textContent = 'Servidor Online';
        document.getElementById('playersHypixel').textContent = 'Players: ' + serverInfo.players.online + ' / ' + serverInfo.players.max;
    } else {
        document.getElementById('status').textContent = 'Servidor Offline';
        circle.classList.toggle('circle-red');
        circle.classList.remove('circle');

    }
}

function getServerMush() {
    var apiUrl = 'https://api.mcsrvstat.us/2/jogar.mush.com.br';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var serverInfo = JSON.parse(xhr.responseText);
            displayServerMush(serverInfo);
        } else {
            document.getElementById('status').textContent = 'Erro ao carregar informações do servidor.';
        }
    };

    xhr.onerror = function () {
        document.getElementById('status').textContent = 'Erro ao conectar-se ao servidor.';
    };

    xhr.send();
}

function displayServerMush(serverInfo) {
    var circle = document.getElementById('circle');
    if (serverInfo.online) {
        document.getElementById('playersMush').textContent = 'Players: ' + serverInfo.players.online + ' / ' + serverInfo.players.max;
    } else {
        document.getElementById('status').textContent = 'Servidor Offline';
        circle.classList.toggle('circle-red');
        circle.classList.remove('circle');
    }
}


window.onload = function () {
    getServerHypixel();
    getServerMush();
};
