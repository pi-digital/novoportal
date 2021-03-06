const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const colors = [
  "#b4b2b5",
  "#dfd73f",
  "#6ed2dc",
  "#66cf5d",
  "#c542cb",
  "#d0535e",
  "#3733c9"
];
let linePos = 0,
  rAF;

canvas.width = innerWidth;
canvas.height = innerHeight;

function texts(color) {
  ctx.font = "25vh Bungee Inline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = "#fff";
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
  ctx.fillText(
    "O INPI",
    innerWidth / 2,
    innerHeight / 2 + innerHeight / 40 - 0);
  
  ctx.font = "17vh Bungee Outline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = color;
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
  ctx.fillText(
    "DÁ VALOR", innerWidth / 2,
    innerHeight / 1.45 - 3.5);

  ctx.fillStyle = "white";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillText(
    "DÁ VALOR", innerWidth / 2,
    innerHeight / 1.45);

  ctx.font = "15vh Bungee Inline";
  ctx.shadowBlur = 30;
  ctx.shadowColor = color;
  ctx.fillStyle = "#fff";
  ctx.setTransform(1, -0.15, 0, 1, 0, -10);
  ctx.fillText(
    "À SUA IDEIA",
    innerWidth / 2,
    innerHeight / 1.25 + innerHeight / 50
  );
  
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
}

function glitch() {
  rAF = window.requestAnimationFrame(glitch);

  ctx.fillStyle = "#1a191c";
  ctx.fillRect(0, 0, innerWidth, innerHeight);

  texts(colors[Math.floor(Math.random() * 30)]);
  ctx.shadowBlur = 0;
  ctx.shadowColor = "none";

  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
  }
  
  ctx.setTransform(1, 0, 0, .8, .2, 0);
}

glitch();

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
