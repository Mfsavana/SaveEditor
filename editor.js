// Navigasi antara Menu Utama dan Editor
const menu = document.getElementById("menu");
const editor = document.getElementById("editor");
const selectFileButton = document.getElementById("selectFileButton");
const fileInput = document.getElementById("fileInput");
const backToMenu = document.getElementById("backToMenu");

// Saat tombol "Select File" ditekan, langsung buka file manager
selectFileButton.addEventListener("click", () => {
  fileInput.click(); // Trigger elemen input file
});

// Fungsi Editor
fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      document.getElementById("fileContent").value = content;
      menu.classList.add("hidden");
      editor.classList.remove("hidden");
    };
    reader.readAsText(file); // Ubah ke readAsArrayBuffer untuk binary data
  }
});

document.getElementById("saveFile").addEventListener("click", function () {
  const content = document.getElementById("fileContent").value;
  const blob = new Blob([content], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "edited.sav2n";
  link.click();
});

backToMenu.addEventListener("click", () => {
  editor.classList.add("hidden");
  menu.classList.remove("hidden");
});