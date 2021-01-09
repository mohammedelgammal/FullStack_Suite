function animatedForm() {
  let arrows = document.querySelectorAll(".fa-arrow-circle-down");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      let input = arrow.previousElementSibling;
      let parent = arrow.parentElement;
      let nextForm = parent.nextElementSibling;
      console.log(nextForm);
      if (input.type === "text" && checkLength(input)){
        nextField(parent, nextForm);
      } else if (input.type === "email" && checkLength(input)) {
        nextField(parent, nextForm);
      } else if(input.type === 'password' && checkLength(input)) {
        nextField(parent, nextForm);
        changeBg('#d3d699')
      } else {
        parent.style.animation = 'shake 0.3s ease'
      }
      parent.addEventListener('animationend', () => parent.style.animation = '')
    });
  });
  function nextField(parent, nextForm) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
  }
  function checkLength(user){
    if (user.value.length < 6) {
      console.log('not enought characters!');
      changeBg('indianred');
      
    } else {
      changeBg('#98ff98')
      return true
    }
  }
  function changeBg(color) {
    document.body.style.backgroundColor = color;
  }
  
};
animatedForm();-