const bl = require('nodebl');

var d = window.document.getElementById("results");

d.innerText = "now loading...";

bl.getBusLocationInformation(153, 165, (err, info)=> {
    d.innerText = "医師会病院前から函館未来大学まで";
    for(var i = 0; i < info.length; i++) {
        d.innerText += info[i].scheduledTime + "\n";
    }
});


/**
 * 出発地・到着地を変更する毎に何かしら処理を行うための関数。
 * @param {string} type departureかarrival
 * @param {string} text 変更後の選択内容
 */
function changeRoute(type, text) {
  switch(type) {
    case "departure":
      alert("departure: " + text);
      break;
    case "arrival":
      alert("arrival: " + text);
      break;
    default:
      return;
  }
}


/**
 * HTML5 APIを使った通知。
 * @param {string} title 通知のタイトル
 * @param {string} body 通知の本文
 */
function notification(title, body) {
  let myNotification = new Notification(title, {
    body: body
  });
}
