document.addEventListener("DOMContentLoaded", () => {
  const moods = document.querySelectorAll(".mood");
  const createPlaylistBtn = document.getElementById("createPlaylist");

  moods.forEach(mood => {
      mood.addEventListener("click", () => {
          moods.forEach(m => m.classList.remove("selected"));
          mood.classList.add("selected");

          createPlaylistBtn.classList.remove("hidden");
      });
  });
});
