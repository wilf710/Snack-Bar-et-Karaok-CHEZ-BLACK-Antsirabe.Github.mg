function loadSiteData() {
  const phone = localStorage.getItem("phone");
  const email = localStorage.getItem("email");
  const openTime = localStorage.getItem("openTime");
  const menu = localStorage.getItem("menu");

  if (phone) document.getElementById("phone").textContent = phone;
  if (email) document.getElementById("email").textContent = email;
  if (openTime) document.getElementById("open-time").textContent = openTime;
  if (menu) {
    const items = menu.split("\n");
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = "";
    items.forEach(item => {
      if (item.trim()) {
        const li = document.createElement("li");
        li.textContent = item.trim();
        menuList.appendChild(li);
      }
    });
  }
}

function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "blackadmin") {
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Mot de passe incorrect !");
  }
}

function saveChanges() {
  const phone = document.getElementById("new-phone").value;
  const email = document.getElementById("new-email").value;
  const openTime = document.getElementById("new-open-time").value;
  const menu = document.getElementById("new-menu").value;

  if (phone) localStorage.setItem("phone", phone);
  if (email) localStorage.setItem("email", email);
  if (openTime) localStorage.setItem("openTime", openTime);
  if (menu) localStorage.setItem("menu", menu);

  alert("Données enregistrées ! Reviens sur le site pour voir les changements.");
}
