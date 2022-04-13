jQuery(document).ready ( function($) {
  $("#accordion").accordion();
} );

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__artist-name').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__left-content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__left-content_active')
      })

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__left-content_active')
    })
  })
})
