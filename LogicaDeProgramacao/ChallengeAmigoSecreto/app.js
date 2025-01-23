const friendsList = document.querySelector("ul#listaAmigos");
const result = document.querySelector("ul#resultado");

function createFriend(name) {
  const el = document.createElement("li");
  el.innerText = name;
  return el;
}

function checkEmptyResult() {
  const isEmptyResult = result.children.length;
  isEmptyResult !== 0 ? result.replaceChildren() : "";
}

function printFriend(name) {
  const friend = createFriend(name);
  friendsList.appendChild(friend);
}

function getFriendArray() {
  const arrayFriendsElements = friendsList.children;
  const list = [];
  for (let i = 0; i < arrayFriendsElements.length; i++) {
    list.push(arrayFriendsElements[i].innerText);
  }
  return list;
}

function printResult(name) {
  const textFriend = `O amigo secreto sorteado é: ${name}`;
  const friend = createFriend(textFriend);
  result.appendChild(friend);
}

function clearListFriends() {
  friendsList.replaceChildren();
}

function adicionarAmigo() {
  const input = document.querySelector("input#amigo");

  checkEmptyResult();

  if (input.value.trim() === "")
    return alert(
      "Digite o nome do seu amigo antes de clicar no botão 'Adicionar'."
    );

  printFriend(input.value.trim());
  input.value = "";
}

function sortearAmigo() {
  const friendsArray = getFriendArray();
  const rand = parseInt(Math.random() * friendsArray.length);
  const selectedFriendElement = friendsArray[rand];
  printResult(selectedFriendElement);
  clearListFriends();
}
