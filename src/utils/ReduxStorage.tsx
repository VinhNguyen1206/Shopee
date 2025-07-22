type StateProps = {
  state: any;
  key: string;
};

export function saveToLocalStorage({ state, key }: StateProps) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem(key, serialState);
  } catch (e) {
    console.warn(e);
  }
}

export function loadFromLocalStorage(key: string) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
