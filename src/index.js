import "./styles/index.scss";
import Parallax from "parallax-js";
import $ from "jquery";
import "slick-carousel";

document.addEventListener("DOMContentLoaded", function () {
  // параллакс библиотека
  let scene = document.querySelector(".scene");
  let parallaxInstance = new Parallax(scene, {
    limitX: 20,
  });

  // слайдер
  $(".cases__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });

  // анимация текста
  let pos = -40;
  let p = document.querySelector(".header__paragraphs");
  moveDown();

  // опускания текста
  function moveDown() {
    let interval = setInterval(animate, 50);
    function animate() {
      if (pos >= 75) {
        clearInterval(interval);
        moveUp();
      } else {
        pos += 1;
        p.style.left = pos + "px";
        p.style.top = pos + "px";
      }
    }
  }

  // поднятие текста
  function moveUp() {
    let interval = setInterval(animate, 50);
    function animate() {
      if (pos <= -40) {
        clearInterval(interval);
        moveDown();
      } else {
        pos -= 1;
        p.style.left = pos + "px";
        p.style.top = pos + "px";
      }
    }
  }

  // анимация кометы
  let comet = document.querySelector(".comet");
  let cometInterval = setInterval(start, 10000);
  let cometposX = 100;
  let cometposY = 0;

  comet.style.left = 120 + "%";

  function start() {
    let idk = setInterval(cometAnim, 15);
    function cometAnim() {
      if (cometposX >= 50) {
        cometposX -= 1;
        cometposY += 1;
        comet.style.left = cometposX + "%";
        comet.style.top = cometposY + "%";
      } else {
        cometposX = 100;
        cometposY = 0;
        clearInterval(idk);
      }
    }
  }
});
