/**
 * ローカルストレージアクセス
 * @param key キー名
 * @param initialValue 初期値
 * @returns データ
 */
export const readLocalStorage = <T>(key: string, initialValue: T): T => {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return initialValue;
  }

  try {
    return JSON.parse(storedValue) as T;
  } catch (err) {
    console.log(err);

    return initialValue;
  }
};

/**
 * ローカルストレージへ保存
 * @param key キー名
 * @param initialValue 初期値
 */
export const saveLocalStorage = <T>(key: string, newValue: T) => {
  try {
    localStorage.setItem(key, JSON.stringify(newValue));
  } catch (err) {
    throw err;
  }
};
