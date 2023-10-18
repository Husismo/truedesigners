import "./styles/index.scss";
import Parallax from "parallax-js";
import $ from "jquery";
import "slick-carousel";

document.addEventListener("DOMContentLoaded", function () {
  let scene = document.querySelector(".scene");
  let parallaxInstance = new Parallax(scene, {
    // relativeInput: true,
    limitX: 20,
  });
  $(".cases__slider").slick({
    // centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  });
});
