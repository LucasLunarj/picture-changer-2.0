let characterPic = document.querySelector(".characterPicture");
let character = document.getElementById("characterName");
let characterNames = [
  "Obi Wan Kenobi",
  "Anakin Skywalker/Darth Vader",
  "Din Djarin/The Mandalorian",
  "Grogu",
  "Master Yoda",
];
let characterPictures = [
  "https://cdn.ome.lt/sUI2WXjuEVnzmryI62BjJgc2HKc=/1200x630/smart/extras/conteudos/kenobi_2.jpg",
  "https://listasnerds.com.br/wp-content/uploads/2021/10/Anakin-Skywalker_DESTAQUE-850x560.png",
  "https://comicyears.com/wp-content/uploads/2022/01/The-Mandalorian-Returns-The-Book-of-Boba-Fett-Din-Djarin-Darksaber.png",
  "http://disneyplusbrasil.com.br/wp-content/uploads/2022/03/Baby-Yoda.jpg",
  "http://pm1.narvii.com/7817/f6bd79eaf2dbedc6d474c07b725bb69873f221efr1-1810-1500v2_uhq.jpg",
];
let count = 0;
function right() {
  console.log(count);
  character.innerHTML = `${characterNames[count]}`;
  characterPic.src = characterPictures[count];
  count++;
  if (count >= 4) {
    count = 4;
  }
}
let count2 = count;
function left() {
  count--;
  console.log(count);
  character.innerHTML = `${characterNames[count]}`;
  characterPic.src = characterPictures[count];
  if (count <= 0) {
    count = 1;
  }
}
