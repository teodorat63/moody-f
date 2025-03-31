document.addEventListener("DOMContentLoaded", () => {
  // Ensure the mood elements are selected
  const moods = document.querySelectorAll<HTMLElement>(".mood");
  const createPlaylistBtn = document.getElementById("createPlaylist") as HTMLButtonElement;

  console.log('Hello from the TypeScript script');

  // Handle mood selection logic
  moods.forEach(mood => {
      mood.addEventListener("click", () => {
          moods.forEach(m => m.classList.remove("selected"));
          mood.classList.add("selected");

          console.log('Selected mood: ', mood.textContent);

          createPlaylistBtn.classList.remove("hidden");
      });
  });
});
