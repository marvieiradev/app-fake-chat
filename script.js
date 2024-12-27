const messagesContent = $(".msgs-content");
const messagesInput = $(".msgs-input");
const messageSubmit = $(".msgs-submit");
const avatarImage = "logo.png";
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
  setTimeout(fakeMessages, 100);
});

function upateScrollbar() {
  messagesContent
    .mCustomScrollbar("update")
    .mCustomScrollbar("scrollTo", "bottom", { scrollInertia: 10, timeout: 0 });
}

function addTimestamp() {
  const date = new Date();
  const minutesNow = date.getMinutes();

  if (minutes !== minutesNow) {
    minutes = minutesNow;
    const timeStamp = $('<div class"timestamp"></div>').text(
      `${date.getHours()}:${minutes}`
    );
    $(".msg:last").append(timeStamp);
  }
}
