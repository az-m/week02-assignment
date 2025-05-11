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
    title: "Shuten Dooji",
    alt: "An image of Shuten Dooji, the wine-drinking demon yokai.",
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
    title: "Yuki Onna",
    alt: "An image of a Yuki Onna, a snow-woman yokai.",
  },
];

// actions

createThumbnails();
createInitialImage();
addListeners();

// functions

// we need the first image showing on load before the user selects another one so let's do that

function createInitialImage() {
  document.getElementById(
    "fullsize-container"
  ).innerHTML = `<img src="${arrImages[0].src}" alt="${arrImages[0].alt}" />`;
  document.getElementById(
    "image-title"
  ).innerHTML = `<h1>${arrImages[0].title}</h1>`;
}

// create the thumbnails and highlight the first image thumb because that's the one we're displaying on load

function createThumbnails() {
  arrImages.forEach(function (image, index) {
    let thumbHTML = "";
    if (index == 0) {
      thumbHTML = `<img src="${image.thumb}" id="${image.title}" alt="${image.alt}" class="active" />`;
    } else {
      thumbHTML = `<img src="${image.thumb}" id="${image.title}" alt="${image.alt}" />`;
    }
    document.getElementById("thumbnail-container").innerHTML += thumbHTML;
  });
}

// now we've attached the thumbnails to the DOM, add the event listeners to them and the handler function

function addListeners() {
  arrImages.forEach(function (image) {
    let imageElement = document.getElementById(image.title);
    imageElement.addEventListener("click", (event) => {
      // set full-size image
      document.getElementById(
        "fullsize-container"
      ).innerHTML = `<img src="${image.src}" alt="${image.alt}" />`;
      document.getElementById(
        "image-title"
      ).innerHTML = `<h1>${image.title}</h1>`;
      // take the highlight off the current active thumbnail
      document.getElementsByClassName("active")[0].removeAttribute("class");
      // and add it to the selected thumbnail
      document.getElementById(image.title).setAttribute("class", "active");
    });
  });
}
