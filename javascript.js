const menuItems = [
    {

        "name": "White Sauce Pasta",
        "imageSrc": "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/5/14/0/FNK_INDOOR-GRILLED-SALMON-H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1557860284890.jpeg",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/75c25eb5538b4b3c91fdf71e747c1e84/BFV44742_PantryPasta_FB_Final.jpg",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },

    {
        "name": "Chicken Grill",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8o1muIaIGB-FjbEvDE7dlNcxpFC8GP5vbw&usqp=CAU",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },


    {
        "name": "Cheese Pizza",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2kKC2nQACcEF6Dr_imi0DGbFKzIdhJpnHSj_2XaNB5lzwC0D7nVT72IffIqX5tWmRNLc&usqp=CAU",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://food-images.files.bbci.co.uk/food/recipes/rib-eye_steak_with_61963_16x9.jpg",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },

    {
        "name": "Veggie Delight",
        "imageSrc": "https://5.imimg.com/data5/HO/IU/GLADMIN-33876378/subway-club-500x500.jpg",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://content.jdmagicbox.com/comp/delhi/r6/011pxx11.xx11.220423161158.c7r6/catalogue/kfc-delhi-fried-chicken-restaurants-0fhtq4jgdl.jpg",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://realfood.tesco.com/media/images/Risotto-HERO-e01a72c1-a4af-427c-9909-6333de581bda-0-472x310.jpg",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://www.recipetineats.com/wp-content/uploads/2022/08/Stack-of-cheeseburgers.jpg",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/paneer-tikka.jpg",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://www.allrecipes.com/thmb/I2ENWJQG1mb2b5OSXPqQudzlzJw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/220987-Baked-BBQ-Baby-Back-Ribs-mfs-041-77a42b0ce0f0424e9aeec2b22664f1aa.jpg",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDDr5Jg7_C5Bwlrpx2XAAd3K1w31d0JQdXQ&usqp=CAU",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://thefirstyearblog.com/wp-content/uploads/2015/11/chocolate-chocolate-cake-1.png",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    },
    {
        "name": "Pani puri",
        "imageSrc": "https://media.istockphoto.com/id/1314329942/photo/goal-gappa-or-pani-puri.jpg?s=612x612&w=0&k=20&c=l6akiKMfTLE9nR4VonhiOZpZGDY4aEjimAN-BSskF-A=",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 5
    },
    {
        "name": "Cold Coffee",
        "imageSrc": "https://curlytales.com/wp-content/uploads/2022/05/Untitled-design-2022-05-25T184543.982.jpg",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 5,
    },
    {
        "name": "pan cakes",
        "imageSrc": "https://joyfoodsunshine.com/wp-content/uploads/2022/08/chocolate-chip-pancakes-1.jpg",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 3,
    },



]
function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.width = 800;
    card.height = 800;

    //IMAGE......
    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.name;
    image.style.width = 800;
    image.style.height = 800;
    image.style.borderRadius = 10;
    card.appendChild(image);



    //RATING.....
    const itemTypeNameRating = document.createElement("div");
    itemTypeNameRating.classList.add("item-type-name-rating");



    //ITEMTYPE.....
    const itemType = document.createElement("p");
    itemType.textContent = item.type;
    itemTypeNameRating.appendChild(itemType);


    //NAME OF DISH...........
    const name = document.createElement("p");
    name.textContent = item.name;
    name.style.fontWeight = 600;
    name.style.fontSize = "25px";


    itemTypeNameRating.appendChild(name);


    itemTypeNameRating.style.color = "#acacac"
    itemTypeNameRating.style.marginTop = "5px";


    //ITEM RATING......
    const rating = document.createElement("p");
    rating.textContent = item.rating;
    card.appendChild(itemTypeNameRating);



    let ratings = itemTypeNameRating.appendChild(rating);




    const div1 = document.createElement("div");
    div1.style.display = "flex";
    div1.style.justifyContent = "space-between";

  
    const ratingContainer = document.createElement("div");
    ratingContainer.style.display = "flex";
    ratingContainer.style.justifyContent = "center";
    ratingContainer.style.alignItems = "center";



   
    const starIcon = document.createElement("i");
    starIcon.className = "fa-solid fa-star fa-xs";
    starIcon.style.color = "#fbff00";
    starIcon.style.marginTop = "-25px";


    
    ratingContainer.appendChild(starIcon);
    ratingContainer.appendChild(ratings);
    div1.appendChild(name);

   
    div1.appendChild(ratingContainer);



    card.appendChild(div1);


    ///TIME
    const timeLike = document.createElement("div");
    timeLike.classList.add("time-like");
    const time = document.createElement("p");
    time.textContent = item.time;
    time.style.color = "#dc582a";
    time.style.fontWeight = 600;
    timeLike.appendChild(time);



    //LIKE BUTTON....
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");


    // Create the heart icon element
    const heartIcon = document.createElement("i");
    heartIcon.className = "fa-regular fa-heart";
    heartIcon.style.color = "#000000";

    likeButton.appendChild(heartIcon);

  
    timeLike.appendChild(likeButton);


    likeButton.addEventListener("click", function () {
      
        item.isLiked = !item.isLiked;
    
       if (item.isLiked) {
            heartIcon.className = "fa-solid fa-heart fa-xl";
            heartIcon.style.color = "#cf0707";
        } else {
            heartIcon.className = "fa-regular fa-heart fa-xl";
            heartIcon.style.color = "#000000";
        }
    
        console.log(menuItems);
    });
    










    const div2 = document.createElement("div");
    div2.style.display = "flex";
    div2.style.margin = "0"
    div2.style.justifyContent = "space-between";
    div2.appendChild(time);
    div2.appendChild(likeButton);


    card.appendChild(div2);

    //card.appendChild(timeLike);

    return card;
}




function addCardsToContainer(data) {
    const container = document.querySelector(".sec2");
    data.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });
}

// Calling  the function to add cards 
addCardsToContainer(menuItems);







//veg button showwing

const vegButton = document.getElementById("veg");
function displayVegRecipes() {
    const container = document.querySelector(".sec2");
    container.innerHTML = ""; // Clear the existing recipes

    menuItems.forEach(item => {
        if (item.type === "veg") {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
}
vegButton.addEventListener("click", displayVegRecipes);




//all recipes showinf........

const allButton = document.getElementById("all");
function displayallRecipes() {
    const container = document.querySelector(".sec2");
    container.innerHTML = ""; // Clear the existing recipes

    menuItems.forEach(item => {
        if (item.type === "veg" || item.type === "non-veg") {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
}
allButton.addEventListener("click", displayallRecipes);


//non-veg showing
const nonButton = document.getElementById("non");
function displaynonRecipes() {
    const container = document.querySelector(".sec2");
    container.innerHTML = ""; // Clear the existing recipes

    menuItems.forEach(item => {
        if (item.type === "non-veg") {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
}
nonButton.addEventListener("click", displaynonRecipes);







function updateRecipesByRating(filterValue) {
    const container = document.querySelector(".sec2");
    container.innerHTML = ""; 

    menuItems.forEach(item => {
        if (filterValue === "Show All" || (filterValue === "4 and above" && item.rating >= 4.0) || (filterValue === "Below 4" && item.rating < 4.0)) {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
}

const radioButtons = document.querySelectorAll(".my-radio");
radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", function () {
        if (this.checked) {
            updateRecipesByRating(this.value);
        }
    });
});


updateRecipesByRating("Show All");










//search ibarrr

const searchInput = document.querySelector("input[type='text']");
searchInput.addEventListener("input", handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();

    const container = document.querySelector(".sec2");
    container.innerHTML = "";

    menuItems.forEach(item => {
        if (item.name.toLowerCase().includes(searchTerm)) {
            const card = createCard(item);
            container.appendChild(card);
        }
    });
}



//toggling for mobile vieww/......
const toggleButton = document.getElementById("toggleButton");
const hideElement = document.querySelector(".hide");

toggleButton.addEventListener("click", () => {
    if (hideElement.style.display === "none") {
        hideElement.style.display = "block";
    } else {
        hideElement.style.display = "none";
    }
});
