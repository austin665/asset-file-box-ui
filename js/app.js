var asc = true;
var images = [];
window.onload = function() {
    
    var results = [];
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState === 4) {
            if (xmlHttpRequest.status === 200) {
                var data = JSON.parse(xmlHttpRequest.responseText);
                for(var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    if(obj.is_published === true) {
                         results.push(obj);    
                    }
                }
                callbackFn(results);
            }
        }
    };
    xmlHttpRequest.open('GET', "data.json");
    xmlHttpRequest.send(); 
}


var callbackFn = function(data) {
    images = data;
    if(asc) {
    data.sort(function(a, b) {
        return (a.title.toLowerCase() < b.title.toLowerCase())  ? -1 : (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : 0;
    });
    }
    else {
        data.sort(function(a, b) {
        return (a.title.toLowerCase() > b.title.toLowerCase())  ? -1 : (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : 0;
    });
    }
    var assets = document.getElementsByClassName("asset-body")[0];
    for(var i=0; i<data.length; i++) {
        var div = document.createElement("div");
        div.className = "file-box";
        var img = document.createElement("img");
        img.src = "images/"+data[i].image_name;
        var divTitle = document.createElement("div");
        divTitle.className = "box-title";
        divTitle.innerHTML = data[i].title.charAt(0).toUpperCase() + data[i].title.slice(1);
        var divName = document.createElement("div");
        divName.className = "box-file-name";
        divName.innerHTML = data[i].image_name;
        var hr = document.createElement("hr");
        var divDesc= document.createElement("div");
        divDesc.className = "description";
        divDesc.innerHTML = data[i].description;
        var divActions = document.createElement("div");
        divActions.className = "action-icons";
        var i1 = document.createElement("i");
        var i2 = document.createElement("i");
        i1.className = "material-icons";
        i2.className = "material-icons";
        i1.innerHTML = "favorite";
        i2.innerHTML = "grade"; 
        divActions.appendChild(i1);
        divActions.appendChild(i2);
        
        div.appendChild(img);
        div.appendChild(divTitle);
        div.appendChild(divName);
        div.appendChild(hr);
        div.appendChild(divDesc);
        div.appendChild(divActions);
        assets.appendChild(div);
        
    }
}    


function toggleSort() {
    asc = !asc;
    document.getElementsByClassName("asset-body")[0].innerHTML = "";
    callbackFn(images);
}