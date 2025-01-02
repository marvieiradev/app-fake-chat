const messagesContent = $(".msgs-content");
const messageInput = $(".msg-input");
const messageSubmit = $(".msg-submit");
const avatarImage = "media/logo.png";
let msgCount = 0;

const fakeMessages = [
  `Olá seja bem-vindo!<br> Como se chama?`,
  `Belo nome!<br> Gostaria de ver nosso produto?`,
  `<img src="media/product.png" width="150px" heigth="150px"/><br>Aqui está, muito lindo né?`,
  `<audio controls><source src="media/voice.mp3" type="audio/mpeg" /></audio>`,
  `Por apenas R$ 49,99 você pode levar <br> pra casa, essa camisa maravilhosa`,
  ``,
];

let minutes = 0;

$(window).on("load", function () {
  messagesContent.mCustomScrollbar();
  setTimeout(fakeMessage, 100);
});

function updateScrollbar() {
  messagesContent
    .mCustomScrollbar("update")
    .mCustomScrollbar("scrollTo", "bottom", { scrollInertia: 10, timeout: 0 });
}

function addMessageToPage(msg, isPersonal = false) {
  msgCount++;
  if (msgCount >= 10) {
    return;
  }

  const message = $(`<div class="msg">${msg}</div>`);
  if (isPersonal) {
    message.addClass("msg-personal");
  } else {
    const figure = $('<figure class="avatar"></figure>');
    const image = $("<img>").attr("src", avatarImage);
    figure.append(image);
    message.addClass("new").prepend(figure);
  }
  $(".mCSB_container").append(message);
  updateScrollbar();
}

function insertMessage() {
  const messageText = messageInput.val().trim();
  if (messageText === "") {
    return false;
  }
  addMessageToPage(messageText, true);
  messageInput.val(null);
  setTimeout(fakeMessage, 300 + Math.random() * 20 * 100);
}

messageInput.on("keydown", function (e) {
  if (e.which === 13) {
    insertMessage();
    return false;
  }
});

messageSubmit.on("click", insertMessage);

function fakeMessage() {
  if (messageInput.val() !== "") {
    return false;
  }

  const loadingMessage = $('<div class="msg loading new"></div>');
  const figure = $('<figure class="avatar"></figure>');
  const image = $("<img>").attr("src", avatarImage);
  figure.append(image);
  loadingMessage.append(figure).append($("<span></span>"));
  $(".mCSB_container").append(loadingMessage);
  updateScrollbar();

  setTimeout(function () {
    loadingMessage.remove();
    addMessageToPage(fakeMessages.shift());
  }, 300 + Math.random() * 20 * 100);
}
