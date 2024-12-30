const messagesContent = $(".msgs-content");
const messageInput = $(".msg-input");
const messageSubmit = $(".msg-submit");
const avatarImage = "img/logo.png";
const fakeMessages = [
  "Teste 1",
  "Teste 2",
  "Teste 3",
  "Teste 4",
  "Teste 5",
  "Teste 6",
  "Teste 7",
  "Teste 8",
  "Teste 9",
  "Teste 10",
  "Teste 11",
  "Teste 12",
  "Teste 13",
];

let minutes = 0;

$(window).on("load", function () {
  messagesContent.mCustomScrollbar();
  setTimeout(fakeMessage, 100);
});

function updateScrollbar() {
  messagesContent
    .mCustomScrollbar("update")
    .mCustomScrollbar("scrollTo", "last", { scrollInertia: 10, timeout: 0 });
}

function addMessageToPage(msg, isPersonal = false) {
  const message = $('<div class="msg"></div>').text(msg);
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
