let xhr = new XMLHttpRequest();
let results = document.getElementById("results");

function getAll() {
    xhr.open('GET', '/products', true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function getOne() {
    let name = encodeURI(document.getElementById("get-name").value);
    xhr.open('GET', `/product/${name}`, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function addOne() {
    let params = {
        name : document.getElementById("add-name").value,
        price : document.getElementById("add-price").value,
        available : document.getElementById("add-available").value,
        dateCreated : document.getElementById("add-date").value
    }
    xhr.open('POST', '/product', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange = processRequest;
}

function deleteOne() {
    let name = encodeURI(document.getElementById("del-name").value);
    xhr.open('DELETE', `/product/${name}`, true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
}

function processRequest(e) {
    let response;
    if (xhr.readyState == 4 && xhr.status == 200) {
        results.innerHTML = '';
        if (xhr.getResponseHeader('Content-Type') == 'application/json; charset=utf-8') {
            response = JSON.parse(xhr.responseText);
            response.forEach( value => {
                var p = document.createElement('p');
                var t = document.createTextNode(`Name: ${value.name}, Available: ${value.available}, Price: ${value.price}, Date: ${value.dateCreated}`);
                p.appendChild(t);
                results.appendChild(p);
            });
        }
        else {
            response = xhr.responseText;
            results.innerHTML = response;
        }
        console.log(response);
    }
}
