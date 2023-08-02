const listElement = document.querySelectorAll("li");

for (let i = 0; i < listElement.length; i++) {
listElement[i].addEventListener('click',()=>{
  console.log('click');
  listElement.forEach(el=>{
    el.classList.remove('active')
  })
  listElement[i].classList.toggle('active')
})

}

