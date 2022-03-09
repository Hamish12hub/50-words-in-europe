// intro

function links_buttons_one_function(){
    window.scrollTo(1000);
    // console.log("hello");
}
function links_buttons_two_function(){
    // window.scrollTo(0, 0);
}
function links_buttons_three_function(){
    // window.scrollTo(0, 0);
}
function links_buttons_four_function(){
    window.scrollTo(bottom);
}


const navSLIDE = () => {
    const burger = document.querySelector(".INTRO_burger");
    const nav = document.querySelector(".INTRO_nav-links");
    const navLinks = document.querySelectorAll(".INTRO_nav-links li");

    burger.addEventListener("click", () => {
        
        nav.classList.toggle("INTRO_nav-active");
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle("toggle");

    });

    
}
navSLIDE();


// home



let dropdownone = document.querySelector(".list_languges_one");
dropdownone.addEventListener('change', function(event) {
    if     (event.target.value === "Bulgarian") {
        document.getElementsByClassName("div_bulgarian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_bulgarian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_bulgarian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_bulgarian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Croatian") {
        document.getElementsByClassName("div_croatian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_croatian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_croatian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_croatian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Czech") {
        document.getElementsByClassName("div_czech_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_czech_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_czech_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_czech_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Danish") {
        document.getElementsByClassName("div_danish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_danish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_danish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_danish_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Dutch") {
        document.getElementsByClassName("div_dutch_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_dutch_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_dutch_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_dutch_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "English") {
        document.getElementsByClassName("div_english_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_english_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_english_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_english_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Estonian") {
        document.getElementsByClassName("div_estonian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_estonian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_estonian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_estonian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Finnish") {
        document.getElementsByClassName("div_finnish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_finnish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_finnish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_finnish_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "French") {
        document.getElementsByClassName("div_french_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_french_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_french_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_french_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "German") {
        document.getElementsByClassName("div_german_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_german_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_german_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_german_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Greek") {
        document.getElementsByClassName("div_greek_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_greek_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_greek_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_greek_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Hungarian") {
        document.getElementsByClassName("div_hungarian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_hungarian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_hungarian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_hungarian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Irish") {
        document.getElementsByClassName("div_irish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_irish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_irish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_irish_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Italian") {
        document.getElementsByClassName("div_italian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_italian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_italian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_italian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Latvian") {
        document.getElementsByClassName("div_latvian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_latvian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_latvian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_latvian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Lithuanian") {
        document.getElementsByClassName("div_lithuanian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_lithuanian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_lithuanian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_lithuanian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Maltese") {
        document.getElementsByClassName("div_maltese_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_maltese_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_maltese_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_maltese_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Polish") {
        document.getElementsByClassName("div_polish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_polish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_polish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_polish_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Portuguese") {
        document.getElementsByClassName("div_portuguese_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_portuguese_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_portuguese_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_portuguese_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Romanian") {
        document.getElementsByClassName("div_romanian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_romanian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_romanian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_romanian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Slovak") {
        document.getElementsByClassName("div_slovak_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_slovak_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_slovak_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_slovak_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Slovenian") {
        document.getElementsByClassName("div_slovenian_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_slovenian_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_slovenian_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_slovenian_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Spanish") {
        document.getElementsByClassName("div_spanish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_spanish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_spanish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_spanish_table_three")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Swedish") {
        document.getElementsByClassName("div_swedish_table_one")[0].style.zIndex = 10;
        document.getElementsByClassName("div_swedish_table_three")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_swedish_table_one")[0].style.zIndex = 1;
        document.getElementsByClassName("div_swedish_table_three")[0].style.zIndex = 1;
    }
});

let dropdowntwo = document.querySelector(".list_languges_two");
dropdowntwo.addEventListener('change', function(event) {
    if     (event.target.value === "Bulgarian") {
        document.getElementsByClassName("bulgarian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_bulgarian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_bulgarian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("bulgarian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_bulgarian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_bulgarian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Croatian") {
        document.getElementsByClassName("croatian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_croatian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_croatian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("croatian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_croatian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_croatian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Czech") {
        document.getElementsByClassName("czech_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_czech_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_czech_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("czech_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_czech_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_czech_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Danish") {
        document.getElementsByClassName("danish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_danish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_danish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("danish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_danish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_danish_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Dutch") {
        document.getElementsByClassName("dutch_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_dutch_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_dutch_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("dutch_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_dutch_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_dutch_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "English") {
        document.getElementsByClassName("english_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_english_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_english_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("english_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_english_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_english_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Estonian") {
        document.getElementsByClassName("finnish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_estonian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_estonian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("finnish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_estonian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_estonian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Finnish") {
        document.getElementsByClassName("finnish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_finnish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_finnish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("finnish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_finnish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_finnish_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "French") {
        document.getElementsByClassName("french_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_french_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_french_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("french_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_french_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_french_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "German") {
        document.getElementsByClassName("german_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_german_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_german_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("german_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_german_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_german_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Greek") {
        document.getElementsByClassName("greek_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_greek_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_greek_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("greek_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_greek_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_greek_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Hungarian") {
        document.getElementsByClassName("hungarian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_hungarian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_hungarian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("hungarian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_hungarian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_hungarian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Irish") {
        document.getElementsByClassName("irish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_irish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_irish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("irish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_irish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_irish_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Italian") {
        document.getElementsByClassName("italian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_italian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_italian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("italian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_italian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_italian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Latvian") {
        document.getElementsByClassName("estonian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_latvian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_latvian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("estonian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_latvian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_latvian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Lithuanian") {
        document.getElementsByClassName("lithuanian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_lithuanian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_lithuanian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("lithuanian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_lithuanian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_lithuanian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Maltese") {
        document.getElementsByClassName("maltese_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_maltese_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_maltese_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("maltese_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_maltese_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_maltese_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Polish") {
        document.getElementsByClassName("polish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_polish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_polish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("polish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_polish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_polish_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Portuguese") {
        document.getElementsByClassName("portuguese_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_portuguese_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_portuguese_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("portuguese_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_portuguese_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_portuguese_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Romanian") {
        document.getElementsByClassName("romanian_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_romanian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_romanian_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("romanian_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_romanian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_romanian_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Slovak") {
        document.getElementsByClassName("slovak_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_slovak_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_slovak_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("slovak_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_slovak_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_slovak_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Slovenian") {
        document.getElementsByClassName("div_slovenian_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_slovenian_table_four")[0].style.zIndex = 10;
        document.getElementsByClassName("slovenian_flag")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("div_slovenian_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_slovenian_table_four")[0].style.zIndex = 1;
        document.getElementsByClassName("slovenian_flag")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Spanish") {
        document.getElementsByClassName("spanish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_spanish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_spanish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("spanish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_spanish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_spanish_table_four")[0].style.zIndex = 1;
    }
    if     (event.target.value === "Swedish") {
        document.getElementsByClassName("swedish_flag")[0].style.zIndex = 10;
        document.getElementsByClassName("div_swedish_table_two")[0].style.zIndex = 10;
        document.getElementsByClassName("div_swedish_table_four")[0].style.zIndex = 10;
    } else {
        document.getElementsByClassName("swedish_flag")[0].style.zIndex = 1;
        document.getElementsByClassName("div_swedish_table_two")[0].style.zIndex = 1;
        document.getElementsByClassName("div_swedish_table_four")[0].style.zIndex = 1;
    }
});

dropdownone.value = "English";
dropdowntwo.value = "French";

function functionone(){
    window.open("https://www.instagram.com/50wordsineurope/");
}
function functiontwo(){
    window.open("mailto:50wordsineurope@gmail.com");
}