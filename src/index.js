const bl = require('nodebl');

var d = window.document.getElementById("results");

d = window.document.getElementById("results");

d.innerText = info = "now loading...";

bl.getBusLocationInformation(153, 165, (err, info)=> {
    d.innerText = "医師会病院前から函館未来大学まで";
    for(var i = 0; i < info.length; i++) {
        d.innerText += info[i].scheduledTime + "\n";
    }
});

