export function saveDataToLocalStorage(key: string, data: object) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeDataFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function getDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);

  if (!data) {
    return {};
  }

  return JSON.parse(data);
}