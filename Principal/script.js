// Toggle sidebar visibility
// Toggle sidebar visibility
document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const sideBar = document.getElementById('side-bar');
    const mainContent = document.getElementById('main-content');
    const isSidebarHidden = sidebar.classList.toggle('hidden');
    sideBar.classList.toggle('hidden', isSidebarHidden);
    mainContent.style.marginLeft = isSidebarHidden ? '15px' : '250px';
});

// Toggle submenu visibility
document.getElementById('more-btn').addEventListener('click', function() {
    const submenu = document.getElementById('more-submenu');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('categories-btn').addEventListener('click', function() {
    const submenu = document.getElementById('categories-submenu');
    submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
});

// Toggle star state
function toggleStar(element) {
    element.classList.toggle('starred');
}
/* scroll bar*/


document.getElementById('scroll-container').addEventListener('scroll', function() {
    if (this.scrollTop + this.offsetHeight >= this.scrollHeight) {
      this.classList.add('hidden-scroll');
    } else {
      this.classList.remove('hidden-scroll');
    }
  });


  /*asd*/
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.addEventListener('click', () => {
        // Desmarcar todos los tabs
        document.querySelectorAll('.tab-content').forEach(t => {
            t.setAttribute('aria-selected', 'false');
        });

        // Marcar el tab seleccionado
        tab.setAttribute('aria-selected', 'true');
    });
});