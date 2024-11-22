// Ambil elemen HTML
const menu = document.getElementById("menu");
const editor = document.getElementById("editor");
const fileInput = document.getElementById("fileInput");
const fileContent = document.getElementById("fileContent");
const saveFile = document.getElementById("saveFile");
const openEditor = document.getElementById("openEditor");
const aboutApp = document.getElementById("aboutApp");
const backButton = document.getElementById("backButton");

// Pindah ke editor
openEditor.addEventListener("click", () => {
  menu.style.display = "none";
  editor.style.display = "block";
});

// Kembali ke menu utama
backButton.addEventListener("click", () => {
  editor.style.display = "none";
  menu.style.display = "flex";
});

// Baca file yang di-upload
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      fileContent.value = e.target.result;
    };
    reader.readAsText(file); // Ubah ke readAsArrayBuffer untuk data binary
  }
});

// Simpan file hasil edit
saveFile.addEventListener("click", () => {
  const content = fileContent.value;
  const blob = new Blob([content], { type: "application/octet-stream" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "edited_savefile.sav2n";
  link.click();
});

// Tentang aplikasi
aboutApp.addEventListener("click", () => {
  alert("SaveEditor v1.0\n\nDibuat untuk membaca dan mengedit file save game dengan mudah.");
});