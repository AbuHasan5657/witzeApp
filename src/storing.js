const LOCAL_STORAGE_KEY = "jokes";

export function getSaveJokes() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}

export function saveJoke(joke) {
  const savedJokes = getSaveJokes();

  if (savedJokes.find((savedJoke) => savedJoke === joke)) {
    alert("Witz wurde bereits gespeichert!");
    return;
  }
  const newSavedJokes = [joke, ...savedJokes];
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedJokes));
}
export function removeJoke(index) {
  const newSavedJokes = getSaveJokes();
  newSavedJokes.splice(index, 1);

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSavedJokes));
}
