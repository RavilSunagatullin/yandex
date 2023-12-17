const nameInput = document.querySelector("#heroName");
const classInput = document.querySelector("#heroClass");
const imgInput = document.querySelector("#heroUrl");
const heroesContainer = document.querySelector("#heroesContainer");

const form = document.querySelector("#form");
form.onsubmit = (event) => {
  event.preventDefault();
};

const hideBtn = (document.querySelector("#hideBtn").onclick = () => {
  form.classList.toggle("hide");
});

// стандартные значения
let heroes = [
  {
    name: "Gojo Satoru",
    class: "Special Rank Spellcaster",
    img: "https://steamuserimages-a.akamaihd.net/ugc/1754695472804333066/5A0B0134BBFD81C78681D92D96FBF589CA06156A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
  },
  {
    name: "Ryomen Sukuna",
    class: "King of Curses",
    img: "https://preview.redd.it/ryomen-sukuna-colored-by-me-v0-27e4bjwukcub1.png?width=1080&crop=smart&auto=webp&s=1717c3ae1f2c20da07d868e98c1b750564800abc",
  },
  {
    name: "Kento Nanami",
    class: "1st level mage.",
    img: "https://www.comingsoon.net/wp-content/uploads/sites/3/2023/11/jjk-does-nanami-die.png",
  },
  {
    name: "Levi Ackerman",
    class: "Humanity's Strongest Soldier",
    img: "https://img.asmedia.epimg.net/resizer/uitWqP5D3lW3gbLMqO39S5f0q5Q=/1288x725/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/HBQZJU3D55AKHDANAGVYR7ZEVQ.png",
  },
  {
    name: "Rudeus Greyrat",
    class: "Rudeus of the Swamp",
    img: "https://jonahwritesdotblog.files.wordpress.com/2023/09/screenshot-283.png?w=746",
  },
  {
    name: "Yagami Light",
    class: "God of the New World",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/10/Featured-Image-9.jpg",
  },
];

heroes.forEach((hero) => {
  displayHeroes(hero.name, hero.class, hero.img);
});

function displayHeroes(heroName, heroClass, heroImg) {
  let heroDiv = document.createElement("div");
  heroDiv.setAttribute("class", "card");
  let cardInfo = createCardInfo(
    createHeroTitle(heroName),
    createHeroDescription(heroClass)
  );
  let heroPhoto = createHeroImg(heroImg);
  heroDiv.append(cardInfo, heroPhoto);
  heroesContainer.appendChild(heroDiv);
}
function createHeroTitle(heroName) {
  const heroTitle = document.createElement("h3");
  heroTitle.textContent = heroName;
  return heroTitle;
}
function createHeroDescription(heroClass) {
  const heroDescription = document.createElement("p");
  heroDescription.textContent = heroClass;
  return heroDescription;
}
function createHeroImg(heroImg, heroName) {
  const heroPhoto = document.createElement("img");
  console.log(heroImg);
  heroPhoto.setAttribute("src", heroImg);
  heroPhoto.setAttribute("alt", heroName);
  return heroPhoto;
}
function createCardInfo(titleNode, descriptionNode) {
  let cardInfo = document.createElement("div");
  cardInfo.setAttribute("class", "card-info");
  cardInfo.append(titleNode, descriptionNode);
  return cardInfo;
}

document.getElementById("addButton").onclick = () => {
  let newHero = {
    name: nameInput.value,
    class: classInput.value,
    img: imgInput.value,
  };
  heroes.push(newHero);
  displayHeroes(nameInput.value, classInput.value, imgInput.value);
  nameInput.value = "";
  classInput.value = "";
  imgInput.value = "";
};
