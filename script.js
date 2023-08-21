let main = document.querySelector("main");
let inputFont = document.getElementById("inputFont");
let px = document.getElementById("px");
let allFonts = [
  boldCharMap,
  boldItalicCharMap,
  boldSansCharMap,
  italicCharMap,
  cursiveCharMap,
  doubleStruckCharMap,
  font2,
  squiggle2CharMap,
  medievalCharMap,
  currencyCharMap,
  symbolsCharMap,
  symbolQCharMap,
  greekCharMap,
  subscriptCharMap,
  superscriptCharMap,
  symbolQCharMap,
  squiggleCharMap,
  squaresCharMap,
  invertedSquaresCharMap,
  roundChar,
  futureAlienCharMap,
  oldEnglishCharMap,
  squiggle4CharMap,
  neonCharMap,
  squiggle3CharMap,
  monospaceCharMap,
  bentTextCharMap,
  upperAnglesCharMap,
  wideTextCharMap,
  font1,
  wingdingsCharMap,
  blueBoldCharMap,
  font3,
  font4,
  font5,
];

function generateFancyText(text, font) {
  const characters = text.split("");
  const fancyText = characters
    .map((char) => {
      return (
        font[char] ||
        font[char.toLowerCase()] ||
        font[char.toUpperCase()] ||
        char
      );
    })
    .join("");
  return fancyText;
}

function changeFontSize(e){
   px.textContent = e.value
   document.querySelectorAll('.h3').forEach(h=>{
    h.style.fontSize = e.value+"px"
   })
}

function handleInput() {
  main.innerHTML = ""; 
  (inputFont.value ==="")? main.style.display = "none":main.style.display = "flex"
  allFonts.forEach((font) => {
    let fonts = generateFancyText(inputFont.value, font);
    createFontSection(fonts);
  });
}

function createFontSection(text) {
  const section = document.createElement("section");
  section.classList.add("font_box");

  const fontsDiv = document.createElement("div");
  fontsDiv.classList.add("fonts");

  const paragraph = document.createElement("h3");
  paragraph.className = "h3"
  paragraph.textContent = text;
  fontsDiv.appendChild(paragraph);

  const toolsDiv = document.createElement("div");
  toolsDiv.classList.add("tools");

  const contentCopyIcon = document.createElement("i");
  contentCopyIcon.classList.add("material-icons");
  contentCopyIcon.textContent = "content_copy";
  contentCopyIcon.addEventListener("click", () => {
    copyToClipboard(text, contentCopyIcon);
  });
  toolsDiv.appendChild(contentCopyIcon);

  const whatsappIcon = document.createElement("i");
  whatsappIcon.classList.add("fa", "fa-whatsapp");
  whatsappIcon.addEventListener("click", () => {
    sendWhatsAppMessage(text);
  });
  toolsDiv.appendChild(whatsappIcon);

  section.appendChild(fontsDiv);
  section.appendChild(toolsDiv);
  main.appendChild(section);
}

function copyToClipboard(text, icon) {

  navigator.clipboard.writeText(text);
  icon.textContent = "check";
  setTimeout(()=>{
      icon.textContent = "content_copy";

  },3000)
}

function sendWhatsAppMessage(text) {
  const encodedText = encodeURIComponent(text);
  const whatsappURL = `whatsapp://send?text=${encodedText}`;
  window.location.href = whatsappURL;
}

inputFont.addEventListener("input", handleInput);
inputFont.value = "Ranjan"
allFonts.forEach((font) => {
  let fonts = generateFancyText("Ranjan", font);
  createFontSection(fonts);
});





const stickyInput = document.querySelector(".inputBox");

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
      stickyInput.classList.remove("sticky");
  } else {
      stickyInput.classList.add("sticky");
  }
});