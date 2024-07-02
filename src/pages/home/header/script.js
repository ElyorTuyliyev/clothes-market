let search = document.getElementById("header__search-onclick");
let barsMenu = document.getElementById("header__bars-link-home");
let isSearchVisible = false;

function searchOnclick() {
  isSearchVisible = !isSearchVisible;
  if (isSearchVisible) {
    search.style.height = "45.5px";
    search.style.opacity = "1";
  } else {
    search.style.height = "0";
  }
}
function hideBarsMenu() {
  isSearchVisible = !isSearchVisible;
  if (isSearchVisible) {
    barsMenu.style.visibility = "visible";
    barsMenu.style.height = "380px";
  } else {
    barsMenu.style.visibility = "hidden";
    barsMenu.style.height = "0";
  }
}
