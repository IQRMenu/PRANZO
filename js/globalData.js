export let globalData = {
  cafeName: 'PRANZO',
  botToken: '',
  chatId: '-1002275972138',

  mainLang: 'es',
  currencySymbol: '$',
  googleLink: 'https://maps.app.goo.gl/aYSYBqbfkfXEXmR18',
  version: 'pro',//pro o basik

  fotmAction: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScaBuoSfWwvS14cQocAOxqTHg1SRCYdH7DIuWsp77zFdNIpRQ/formResponse",
  inputNames: {
    inputOrderId: "entry.1281979809",
    inputLangOrderTable: "entry.1676265789",
    inputTableNumberOrderTable: "entry.47087337",
    inputVisitorTypeOrderTable: "entry.89167134",
    inputDishesOrderTable: "entry.229673081",
    inputTotolCostOrderTable: "entry.1963684257",
    inputType: "entry.410713072",
    
  }

}

document.addEventListener("DOMContentLoaded", function () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', './js/info.php', true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = xhr.responseText;
      var a = response.trim(); // Убираем возможные лишние пробелы и переносы строки
      globalData.botToken = a;
    }
  };
  xhr.send();
});