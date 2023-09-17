var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 10 + "px";
  crsr.style.top = dets.y + 10 + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -1%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  //   height: "120px",
  //   duration: 0.5,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -5%",
    end: "top -68%",
    scrub: true,
  },
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "0.5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 1,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 1,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2,
  },
});
