const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 28th!";
  gif.src =
    "https://media.giphy.com/media/VpW0LoWNwGIgo7fams/giphy.gif";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Pretty Please??";
  gif.src =
    "https://media.giphy.com/media/5MxFJWDSm3boe6wigL/giphy.gif";

    noBtn.addEventListener("click", () => {
      question.innerHTML = "ok well then";
      gif.src =
        "https://64.media.tumblr.com/ca78837792381cc044fcc86f4744ff57/tumblr_oshzzizHck1ty7lb2o1_540.gif";

        noBtn.addEventListener("click", () => {
          question.innerHTML = "seriously!! We could have been this!";
          gif.src =
            "https://marvelousgeeksmedia.com/wp-content/uploads/2020/02/jake-amy-b99.gif";
        });

    });
});



/*noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
*/