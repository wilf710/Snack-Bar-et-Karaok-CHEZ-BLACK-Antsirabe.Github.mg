function loadSiteData() {
  if (localStorage.getItem("phone")) {
    document.getElementById("phone").innerText = localStorage.getItem("phone");
  }
  if (localStorage.getItem("email")) {
    document.getElementById("email").innerText = localStorage.getItem("email");
  }
  if (localStorage.getItem("openTime")) {
    document.getElementById("open-time").innerText = localStorage.getItem("openTime");
  }
  if (localStorage.getItem("menu")) {
    const items = localStorage.getItem("menu").split("\n");
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.innerText = item;
      menuList.appendChild(li);
    });
  }
}

function saveSiteData() {
  localStorage.setItem("phone", document.getElementById("phone-input").value);
  localStorage.setItem("email", document.getElementById("email-input").value);
  localStorage.setItem("openTime", document.getElementById("open-time-input").value);
  localStorage.setItem("menu", document.getElementById("menu-input").value);
  alert("Données enregistrées !");
}

function loadGalleryImages() {
  const container = document.getElementById("gallery-images");
  if (!container) return;

  const images = JSON.parse(localStorage.getItem("gallery") || "[]");
  container.innerHTML = "";
  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
}

function uploadImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const images = JSON.parse(localStorage.getItem("gallery") || "[]");
    images.push(e.target.result);
    localStorage.setItem("gallery", JSON.stringify(images));
    alert("Image ajoutée à la galerie !");
  };
  reader.readAsDataURL(file);
}