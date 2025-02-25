export async  function fetchDishesList() {
  const sheetId = "1oKdM6Bv7wRntfs35yXl840-W1tPcgIt5VBDnsTU-NVs"; // ID твоей таблицы
  const apiKey = "AIzaSyAoqUP1XTXL7Y5zXyQ9rfEgMy4d30qDC-Q"; // Вставь сюда API-ключ
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    
    return processData(data.values); // Конвертируем в удобный формат
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    return [];
  }
}


function processData(data) {
  const keys = data[0];
  const objectsArray = data.slice(2).map(row => {
    let obj = {};
    row.forEach((value, index) => {
      obj[keys[index]] = value;
    });
    return obj;
  });
  return objectsArray;
}
