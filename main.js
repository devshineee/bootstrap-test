//import bootstrap from'bootstrap/dist/js/bootstrap.bundle'
import Dropdown from'bootstrap/js/dist/dropdown'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
})



// tootip
// const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

// modal
// const emailInputEl = document.querySelector('#exampleInputEmail1')
// const modalEl = document.querySelector('#exampleModal')

// modalEl.addEventListener('shown.bs.modal', function () {
//   emailInputEl.focus()
// })


