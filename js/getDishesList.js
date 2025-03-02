export async function fetchDishesList(sheetIdGlobal) {  
  const sheetId = sheetIdGlobal;
  const proxyUrl = "https://menu-pro.interactivemenuqr.workers.dev"; 
  const type = 'tableGet';
  try {
    let fullResponse = await fetch(`${proxyUrl}/${type}?${sheetId}`);    
    let fullData = await fullResponse.json();
    const objectData = JSON.parse(fullData)
    
    // Конвертируем данные в массив объектов
    const processedData = processData(objectData.values);
    console.log(processedData);
    return processedData;
  } catch (error) {
    return console.error("Ошибка загрузки данных:", error);
  }
}

// Функция обработки данных (без изменений)
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