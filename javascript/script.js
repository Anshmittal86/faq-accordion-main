const ExpandIcon = document.querySelectorAll(".faq-question img");
const faqAnswer = document.querySelectorAll(".faq-answer")

ExpandIcon.forEach((icon, index)=> {
  icon.addEventListener("click", function() {
    let faqAnswerIsActive = faqAnswer[index].classList.toggle("active")
    if(faqAnswerIsActive) {
      icon.setAttribute("src", "./assets/images/icon-minus.svg")
    } else {
      icon.setAttribute("src", "./assets/images/icon-plus.svg")
    }
  })
})
