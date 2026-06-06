// Home page image upload
const imgUpload = document.getElementById("imgUpload");
const previewImg = document.getElementById("previewImg");

if (imgUpload) {
  imgUpload.addEventListener("change", () => {
    const file = imgUpload.files[0];
    if (file) {
      previewImg.src = URL.createObjectURL(file);
      previewImg.classList.remove("hidden");
    }
  });
}

// Kiss page image upload
const kissUpload = document.getElementById("kissUpload");
const kissImg = document.getElementById("kissImg");

if (kissUpload) {
  kissUpload.addEventListener("change", () => {
    const file = kissUpload.files[0];
    if (file) {
      kissImg.src = URL.createObjectURL(file);
      kissImg.classList.remove("hidden");
    }
  });
}

// Kiss interaction
function sendKiss() {
  const texts = [
    "Muaaah 💋💖",
    "A kiss just for you 😘",
    "Endless kisses 💞",
    "Bubu loves Dudu 🐻💕"
  ];

  document.getElementById("kissText").innerText =
    texts[Math.floor(Math.random() * texts.length)];

  if (kissImg) {
    kissImg.style.transform = "scale(1.2)";
    setTimeout(() => kissImg.style.transform = "scale(1)", 300);
  }
}
