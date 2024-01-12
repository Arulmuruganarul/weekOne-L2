let spinnerEl = document.getElementById("spinner");
let menEl = document.getElementById("sectionMen");
let womenEl = document.getElementById("sectionWomen");
let kidsEl = document.getElementById("sectionkids");

function opentab(tabname) {
    let tablinks = document.getElementsByClassName("tab-links");
    let tabcontents = document.getElementsByClassName("tab-contents");
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let initialAmt = 0 ;
function addToCard(eachItem){

    let cardElement = document.createElement("div");
    cardElement.classList.add("card");



    let sectionEl = document.createElement("section");
    sectionEl.classList.add("img-container");

    let slideWrap = document.createElement("div");
    slideWrap.classList.add("slider-wrapper");
    sectionEl.appendChild(slideWrap);

    let slider = document.createElement("div");
    slider.classList.add("slider");
    slideWrap.appendChild(slider);

    let img1 = document.createElement("img");
    img1.setAttribute("src", eachItem.image);
    img1.setAttribute("id", eachItem.title);
    slider.appendChild(img1);
    let img2 = document.createElement("img");
    img2.src = eachItem.second_image;
    img2.id = eachItem.title + "2";
    slider.appendChild(img2);

    let slidNav = document.createElement("div");
    slidNav.classList.add("slider-nav");
    let ang1 = document.createElement("a");
    ang1.href = "#" + img1.id;
    slidNav.appendChild(ang1);
    let ang2 = document.createElement("a");
    ang2.href = "#" + img2.id;
    slidNav.appendChild(ang2);
    slideWrap.appendChild(slidNav);
    cardElement.appendChild(sectionEl);

    if (eachItem.badge_text) {
        let badgeEl = document.createElement("p");
        badgeEl.textContent = eachItem.badge_text;
        badgeEl.classList.add("badge-text");
        sectionEl.appendChild(badgeEl);
    }

    let cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = eachItem.title;
    cardDetails.appendChild(title);

    let discriptionDiv = document.createElement("div");
    discriptionDiv.classList.add("discription-container");
    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "Rs." + eachItem.price;
    discriptionDiv.appendChild(price);

    let compare_at_price = document.createElement("p");
    compare_at_price.classList.add("compare_at_price");
    compare_at_price.textContent = "Rs." + eachItem.compare_at_price;
    discriptionDiv.appendChild(compare_at_price);

    let discount = ((eachItem.compare_at_price - eachItem.price) / eachItem.compare_at_price) * 100;
    let discountPercent = Math.ceil(discount);

    let discountEl = document.createElement("p");
    discountEl.classList.add("discount");
    discountEl.textContent = discountPercent + "%";
    discriptionDiv.appendChild(discountEl);
    cardDetails.appendChild(discriptionDiv);

    let brand = document.createElement("div");
    brand.classList.add("discription-container", "grow");


    let vendor = document.createElement("p");
    vendor.classList.add("vendor");
    vendor.textContent = eachItem.vendor;
    let logo = document.createElement("i");
    logo.classList.add("fa-solid", "fa-bag-shopping", "bag");
    brand.appendChild(logo);
    brand.appendChild(vendor);
    cardDetails.appendChild(brand);

    let btnEl = document.createElement("button");
    btnEl.textContent = "Remove";
    btnEl.classList.add("button-remove");
    cardDetails.appendChild(btnEl);
    
    cardElement.appendChild(cardDetails);
    
    let cartItems = document.getElementById("card-items");

    let avgAmount = document.getElementById("avg-price");
    let totalAmount = document.getElementById("total-amount");

    cartItems.appendChild(cardElement);
    
    initialAmt += parseInt(eachItem.price);

    let totalAmt = initialAmt + 100;
     
    avgAmount.textContent = "Rs." + initialAmt;
    totalAmount.textContent = "Rs." + totalAmt;
     
    btnEl.addEventListener("click",()=>{
        cartItems.removeChild(cardElement);
        initialAmt -= parseInt(eachItem.price);
        totalAmt -= parseInt(eachItem.price) + 100;

        avgAmount.textContent = "Rs." + initialAmt;
        totalAmount.textContent = "Rs." + totalAmt;
    })

    

}


function creatAndAppendResult(eachItem, sectionFor) {
    let sectionTab = sectionFor;
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");



    let sectionEl = document.createElement("section");
    sectionEl.classList.add("img-container");

    let slideWrap = document.createElement("div");
    slideWrap.classList.add("slider-wrapper");
    sectionEl.appendChild(slideWrap);

    let slider = document.createElement("div");
    slider.classList.add("slider");
    slideWrap.appendChild(slider);

    let img1 = document.createElement("img");
    img1.setAttribute("src", eachItem.image);
    img1.setAttribute("id", eachItem.title);
    slider.appendChild(img1);
    let img2 = document.createElement("img");
    img2.src = eachItem.second_image;
    img2.id = eachItem.title + "2";
    slider.appendChild(img2);

    let slidNav = document.createElement("div");
    slidNav.classList.add("slider-nav");
    let ang1 = document.createElement("a");
    ang1.href = "#" + img1.id;
    slidNav.appendChild(ang1);
    let ang2 = document.createElement("a");
    ang2.href = "#" + img2.id;
    slidNav.appendChild(ang2);
    slideWrap.appendChild(slidNav);
    cardElement.appendChild(sectionEl);

    if (eachItem.badge_text) {
        let badgeEl = document.createElement("p");
        badgeEl.textContent = eachItem.badge_text;
        badgeEl.classList.add("badge-text");
        sectionEl.appendChild(badgeEl);
    }

    let cardDetails = document.createElement("div");
    cardDetails.classList.add("card-details");
    let title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = eachItem.title;
    cardDetails.appendChild(title);

    let discriptionDiv = document.createElement("div");
    discriptionDiv.classList.add("discription-container");
    let price = document.createElement("p");
    price.classList.add("price");
    price.textContent = "Rs." + eachItem.price;
    discriptionDiv.appendChild(price);

    let compare_at_price = document.createElement("p");
    compare_at_price.classList.add("compare_at_price");
    compare_at_price.textContent = "Rs." + eachItem.compare_at_price;
    discriptionDiv.appendChild(compare_at_price);

    let discount = ((eachItem.compare_at_price - eachItem.price) / eachItem.compare_at_price) * 100;
    let discountPercent = Math.ceil(discount);

    let discountEl = document.createElement("p");
    discountEl.classList.add("discount");
    discountEl.textContent = discountPercent + "%";
    discriptionDiv.appendChild(discountEl);
    cardDetails.appendChild(discriptionDiv);

    let brand = document.createElement("div");
    brand.classList.add("discription-container", "grow");


    let vendor = document.createElement("p");
    vendor.classList.add("vendor");
    vendor.textContent = eachItem.vendor;
    let logo = document.createElement("i");
    logo.classList.add("fa-solid", "fa-bag-shopping", "bag");
    brand.appendChild(logo);
    brand.appendChild(vendor);
    cardDetails.appendChild(brand);

    let btnEl = document.createElement("button");
    btnEl.textContent = "Add to Card";
    btnEl.classList.add("button");
    cardDetails.appendChild(btnEl);

    cardElement.appendChild(cardDetails);
    

    if (sectionTab === "Men") {
        menEl.appendChild(cardElement);
    } else if (sectionTab === "Women") {
        womenEl.appendChild(cardElement);
    } else if (sectionTab === "Kids") {
        kidsEl.appendChild(cardElement);
    }

    btnEl.addEventListener("click", ()=>{
        addToCard(eachItem);
    });
}

function getItems() {
    let url = "./index.json";
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData.categories);
            let listItem = jsonData.categories;
            listItem.forEach(item => {
                if (item.category_name === "Men") {
                    let search_result_men = item.category_products;
                    for (let eachItem of search_result_men) {
                        creatAndAppendResult(eachItem, "Men");
                    }
                } else if (item.category_name === "Women") {
                    let search_result_women = item.category_products;
                    for (let eachItem of search_result_women) {
                        creatAndAppendResult(eachItem, "Women");
                    }
                } else if (item.category_name === "Kids") {
                    let search_result_Kids = item.category_products;
                    for (let eachItem of search_result_Kids) {
                        creatAndAppendResult(eachItem, "Kids");
                    }
                }
                console.log(item.category_name);
                console.log(item.category_products);
            });
        });
}
getItems();



