document.addEventListener("DOMContentLoaded", function() {
  // Code for display.html (control panel)
  const searchInput = document.querySelector(".search input");
  if (searchInput) {
    const goBtn = document.getElementById("goBtn");
    const addBtn = document.getElementById("addBtn");
    const clearBtn = document.getElementById("clear");
  
    goBtn.addEventListener("click", function() {
      if (searchInput.value.trim() !== "") {
        if (window.parent && window.parent.frames["leftFrame"] && 
            window.parent.frames["leftFrame"].addName) {
          window.parent.frames["leftFrame"].addName(searchInput.value.trim());
        }
      }
      searchInput.value = "";
    });
  
    addBtn.addEventListener("click", function() {
      if (searchInput.value.trim() !== "") {
        if (window.parent && window.parent.frames["leftFrame"] && 
            window.parent.frames["leftFrame"].addName) {
          window.parent.frames["leftFrame"].addName(searchInput.value.trim());
        }
      }
      searchInput.value = "";
    });
  
    clearBtn.addEventListener("click", function() {
      if (window.parent && window.parent.frames["leftFrame"] && 
          window.parent.frames["leftFrame"].clearMain) {
        window.parent.frames["leftFrame"].clearMain();
      }
      searchInput.value = "";
    });
  }
  
  // Code for left.html (display area)
  const mainContainer = document.querySelector(".main");
  if (mainContainer) {
    function addName(name) {
      const box = document.createElement("div");
      box.className = "box";
      const h3 = document.createElement("h3");
      h3.textContent = name;
      box.appendChild(h3);
      box.addEventListener("click", function(e) {
        // Remove only the clicked box
        e.currentTarget.remove();
      });
      mainContainer.appendChild(box);
    }
  
    function clearMain() {
      mainContainer.innerHTML = "";
    }
  
    window.addName = addName;
    window.clearMain = clearMain;
  }
});
