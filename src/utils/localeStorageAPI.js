function serializeData(data) {
  return JSON.stringify(data);
}

function deserializeData(serializedData) {
  let deserializedData;
  try {
    deserializedData = JSON.parse(serializedData);
  } catch (error) {
    console.log('ERROR: ', error);
    console.log('ERROR MESSAGE: ', error.message);
  }
  return deserializedData;
}

function addDataToLocalStorage(key, data) {
  localStorage.setItem(key, data);
}

function getDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}

const localStorageAPI = {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  serializeData,
  deserializeData,
};

export default localStorageAPI;
