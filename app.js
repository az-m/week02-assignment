// array to hold image information

const arrImages = [
  {
    src: "./assets/images/Gashadokuro.png",
    thumb: "./assets/thumbs/Gashadokuro_thumb.png",
    title: "Gashadokuro",
    alt: "An image of a Gashadokuro, the 'starving skeleton' yokai.",
  },
  {
    src: "./assets/images/Joroogumo.png",
    thumb: "./assets/thumbs/Joroogumo_thumb.png",
    title: "Joroogumo",
    alt: "An image of a Joroogumo, a spider-woman yokai.",
  },
  {
    src: "./assets/images/Jubokko.png",
    thumb: "./assets/thumbs/Jubokko_thumb.png",
    title: "Jubokko",
    alt: "An image of a Jubokko, a possessed tree yokai.",
  },
  {
    src: "./assets/images/Kappa.png",
    thumb: "./assets/thumbs/Kappa_thumb.png",
    title: "Kappa",
    alt: "An image of a man being startled by a Kappa, a tortoise yokai.",
  },
  {
    src: "./assets/images/Shuten_Dooji.png",
    thumb: "./assets/thumbs/Shuten_Dooji_thumb.png",
    title: "Shuten_Dooji",
    alt: "An image of Shuten_Dooji, the wine-drinking demon yokai.",
  },
  {
    src: "./assets/images/Tamamo-no-Mae.png",
    thumb: "./assets/thumbs/Tamamo-no-Mae_thumb.png",
    title: "Tamamo-no-Mae",
    alt: "An image of Tamamo-no-Mae, the nine-tailed fox yokai.",
  },
  {
    src: "./assets/images/Yamauba.png",
    thumb: "./assets/thumbs/Yamauba_thumb.png",
    title: "Yamauba",
    alt: "An image of a Yamauba, a mountain crone yokai.",
  },
  {
    src: "./assets/images/Yuki_Onna.png",
    thumb: "./assets/thumbs/Yuki_Onna_thumb.png",
    title: "Yuki_Onna",
    alt: "An image of a Yuki_Onna, a snow-woman yokai.",
  },
];

// actions

createThumbnails();
addListeners();

// functions

function createThumbnails() {
  arrImages.forEach(function (image) {
    let thumbHTML = "";
    if (image.title == "Gashadokuro") {
      thumbHTML = `<img src="${image.thumb}" id="${image.title}" alt="${image.alt}" class="active" />`;
    } else {
      thumbHTML = `<img src="${image.thumb}" id="${image.title}" alt="${image.alt}" />`;
    }
    document.getElementById("thumbnail-container").innerHTML += thumbHTML;
  });
}

function addListeners() {
  arrImages.forEach(function (image) {
    let imageElement = document.getElementById(image.title);
    imageElement.addEventListener("click", (event) => {
      // set full-size image
      document.getElementById(
        "fullsize-container"
      ).innerHTML = `<img src="${image.src}" alt="${image.alt}" />`;
      // take the highlight off the current active thumbnail
      document.getElementsByClassName("active")[0].removeAttribute("class");
      // and add it to the selected thumbnail
      document.getElementById(image.title).setAttribute("class", "active");
    });
  });
}
