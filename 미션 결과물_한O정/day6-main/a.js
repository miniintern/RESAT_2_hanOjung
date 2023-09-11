var slideIndex = 1;
showSlides(slideIndex);

// 이전/다음 버튼 클릭시 호출되는 함수
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// 현재 슬라이드 표시하는 함수
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}