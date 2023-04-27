//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  // console.log(data)
  const btn = question.querySelector(".question-btn");
  // console.log(btn)

  // when open another question previous one will be closed automatically...

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
      // console.log(item)
    });

    question.classList.toggle("show-text");
  });
});

// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     // console.log(e.currentTarget.parentElement.parentElement)
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text')
//   });
// });
