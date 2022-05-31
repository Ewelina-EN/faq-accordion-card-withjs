const question = document.getElementsByClassName("faq_question");
let i;

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let faq_answer = this.nextElementSibling;
    if (faq_answer.style.display === "block") {
      faq_answer.style.display = "none";
    } else {
      faq_answer.style.display = "block";
    }
  });
}
