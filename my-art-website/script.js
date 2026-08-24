/* =====================================================
   ARTWORK DATABASE
===================================================== */

const artworks = [

    /* =========================
       ART
    ========================== */

    {
        title: "Landscape of Stockholm",

        description:
            "A hand-drawn landscape inspired by Stockholm.",

        category: "Art",

        year: "2026",

        technique: "Pencil on paper",

        type: "art",

        featured: true,

        images: [
            "images/landscape-of-stockholm/01.jpg",
            "images/landscape-of-stockholm/02.jpg",
            "images/landscape-of-stockholm/03.jpg"
        ]
    },


    {
        title: "Family Vacation",

        description:
            "An artwork inspired by memories of family and travel.",

        category: "Art",

        year: "2026",

        technique: "Mixed media",

        type: "art",

        featured: true,

        images: [
            "images/family-vacation/01.jpg",
            "images/family-vacation/02.jpg",
            "images/family-vacation/03.jpg"
        ]
    },


    {
        title: "Mixed Fruits",

        description:
            "A still life study exploring shapes, colours and everyday objects.",

        category: "Art",

        year: "2026",

        technique: "Painting",

        type: "art",

        featured: true,

        images: [
            "images/mixed-fruits/01.jpg",
            "images/mixed-fruits/02.jpg",
            "images/mixed-fruits/03.jpg",
            "images/mixed-fruits/04.jpg"
        ]
    },


    {
        title: "Portrait with Trees",

        description:
            "A portrait composition surrounded by natural elements.",

        category: "Art",

        year: "2026",

        technique: "Painting",

        type: "art",

        featured: true,

        images: [
            "images/portrait-with-trees/01.jpg",
            "images/portrait-with-trees/02.jpg",
            "images/portrait-with-trees/03.jpg",
            "images/portrait-with-trees/04.jpg"
        ]
    },


    {
        title: "Still Life with Bowl",

        description:
            "A still life study focusing on composition, light and form.",

        category: "Art",

        year: "2026",

        technique: "Painting",

        type: "art",

        featured: true,

        images: [
            "images/stilllife-with-bowl/01.jpg",
            "images/stilllife-with-bowl/02.jpg",
            "images/stilllife-with-bowl/03.jpg"
        ]
    },


    {
        title: "Still Life with Plums",

        description:
            "A still life study featuring plums and natural forms.",

        category: "Art",

        year: "2026",

        technique: "Painting",

        type: "art",

        featured: false,

        images: [
            "images/stilllife-with-plums/01.jpg",
            "images/stilllife-with-plums/02.jpg",
            "images/stilllife-with-plums/03.jpg",
            "images/stilllife-with-plums/04.jpg"
        ]
    },


    /* =========================
       ILLUSTRATIONS
    ========================== */

    {
        title: "Illustration 1",

        description:
            "An illustration by Zahra Azimzade.",

        category: "Illustration",

        year: "2026",

        technique: "Digital / Mixed media",

        type: "illustration",

        featured: false,

        images: [
            "images/illustrations/illustration-1/01.jpg",
            "images/illustrations/illustration-1/02.jpg"
        ]
    },


    {
        title: "Illustration 2",

        description:
            "An illustration by Zahra Azimzade.",

        category: "Illustration",

        year: "2026",

        technique: "Digital / Mixed media",

        type: "illustration",

        featured: false,

        images: [
            "images/illustrations/illustration-2/01.jpg",
            "images/illustrations/illustration-2/02.jpg"
        ]
    },


    {
        title: "Illustration 3",

        description:
            "An illustration by Zahra Azimzade.",

        category: "Illustration",

        year: "2026",

        technique: "Digital / Mixed media",

        type: "illustration",

        featured: false,

        images: [
            "images/illustrations/illustration-3/01.jpg",
            "images/illustrations/illustration-3/02.jpg"
        ]
    }

];



/* =====================================================
   HOME SLIDESHOW
===================================================== */

const heroImage =
    document.getElementById("heroImage");

const imageTitle =
    document.getElementById("imageTitle");

const imageDescription =
    document.getElementById("imageDescription");

const nextButton =
    document.getElementById("next");

const previousButton =
    document.getElementById("previous");


const featuredArtworks =
    artworks.filter(
        artwork => artwork.featured === true
    );


let currentIndex = 0;



function showHero(index) {

    if (!heroImage) {
        return;
    }


    const artwork =
        featuredArtworks[index];


    heroImage.style.opacity = "0";


    setTimeout(() => {

        heroImage.src =
            artwork.images[0];

        heroImage.alt =
            artwork.title;

        imageTitle.textContent =
            artwork.title;

        imageDescription.textContent =
            artwork.description;

        heroImage.style.opacity =
            "1";

    }, 300);

}



function nextArtwork() {

    currentIndex++;


    if (
        currentIndex >=
        featuredArtworks.length
    ) {

        currentIndex = 0;

    }


    showHero(currentIndex);

}



function previousArtwork() {

    currentIndex--;


    if (currentIndex < 0) {

        currentIndex =
            featuredArtworks.length - 1;

    }


    showHero(currentIndex);

}



if (heroImage) {

    showHero(0);


    setInterval(
        nextArtwork,
        5000
    );


    heroImage.addEventListener(
        "click",
        () => {

            const artwork =
                featuredArtworks[
                    currentIndex
                ];


            const realIndex =
                artworks.indexOf(
                    artwork
                );


            window.location.href =
                `artwork.html?id=${realIndex}`;

        }
    );

}



if (nextButton) {

    nextButton.addEventListener(
        "click",
        nextArtwork
    );

}


if (previousButton) {

    previousButton.addEventListener(
        "click",
        previousArtwork
    );



    /* =====================================================
       ARTWORK DETAIL PAGE
    ===================================================== */

}


const artworkImage =
    document.getElementById(
        "artworkImage"
    );


if (artworkImage) {


    const params =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parseInt(
            params.get("id")
        );


    const artwork =
        artworks[id];


    if (!artwork) {

        window.location.href =
            "art.html";

    }


    else {


        document.title =
            `${artwork.title} | Zahra Azimzade`;


        document.getElementById(
            "artworkTitle"
        ).textContent =
            artwork.title;


        document.getElementById(
            "artworkDescription"
        ).textContent =
            artwork.description;


        document.getElementById(
            "artworkYear"
        ).textContent =
            artwork.year;


        document.getElementById(
            "artworkCategory"
        ).textContent =
            artwork.category;


        document.getElementById(
            "artworkTechnique"
        ).textContent =
            artwork.technique;



        let imageIndex = 0;


        const counter =
            document.getElementById(
                "imageCounter"
            );


        const thumbnails =
            document.getElementById(
                "artworkThumbnails"
            );


        const previous =
            document.getElementById(
                "artworkPrevious"
            );


        const next =
            document.getElementById(
                "artworkNext"
            );



        function showArtworkImage(index) {

            imageIndex = index;


            artworkImage.src =
                artwork.images[
                    imageIndex
                ];


            counter.textContent =
                `${imageIndex + 1} / ${artwork.images.length}`;


            updateThumbnails();

        }



        function createThumbnails() {

            thumbnails.innerHTML = "";


            artwork.images.forEach(
                (image, index) => {

                    const thumbnail =
                        document.createElement(
                            "img"
                        );


                    thumbnail.src =
                        image;


                    thumbnail.classList.add(
                        "thumbnail"
                    );


                    thumbnail.addEventListener(
                        "click",
                        () => {

                            showArtworkImage(
                                index
                            );

                        }
                    );


                    thumbnails.appendChild(
                        thumbnail
                    );

                }
            );

        }



        function updateThumbnails() {

            const all =
                document.querySelectorAll(
                    ".thumbnail"
                );


            all.forEach(
                (thumbnail, index) => {

                    thumbnail.classList.toggle(
                        "active",
                        index === imageIndex
                    );

                }
            );

        }



        next.addEventListener(
            "click",
            () => {

                imageIndex++;


                if (
                    imageIndex >=
                    artwork.images.length
                ) {

                    imageIndex = 0;

                }


                showArtworkImage(
                    imageIndex
                );

            }
        );



        previous.addEventListener(
            "click",
            () => {

                imageIndex--;


                if (imageIndex < 0) {

                    imageIndex =
                        artwork.images.length - 1;

                }


                showArtworkImage(
                    imageIndex
                );

            }
        );



        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    next.click();

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    previous.click();

                }

            }
        );



        createThumbnails();

        showArtworkImage(0);

    }

}