// General constants
var Profiles = [];

// Categories: music, sport , cinema, boks, biznes, arts, history, science, technology, politics, travel, cook
const Categories = {
    Music: 0,
    Sport: 1,
    Cinema: 2,
    Books: 3,
    Business: 4,
    Art: 5,
    History: 6,
    Science: 7,
    Technology: 8,
    Politics: 9,
    Travel: 10,
    Cooking: 11,
    Religion:12,
    Geography:13
};

const MusicSubCategories = {
    Pop: 0,
    Rap: 1,
    Rock: 2,
    Jazz: 3,
    Classical: 4,
};

const SportSubCategories = {
    Football: 0,
    Basketball: 1,
    Tennis: 2,
    Golf: 3,
    Swimming: 4,
    Cycling: 5,
    Running: 6,
};

const CinemaSubCategories = {
    Action: 0,
    Comedy: 1,
    Drama: 2,
    SciFi: 3,
    Horror: 4,
    Documentary: 5,
};

const BooksSubCategories = {
    Fiction: 0,
    NonFiction: 1,
    Mystery: 2,
    Thriller: 3,
    Romance: 4,
    Fantasy: 5,
    ScienceFiction: 6,
    Historical: 7,
    Biography: 8,
    SelfHelp: 9,
    Poetry: 10,
};

const BusinessSubCategories = {
    Finance: 0,
    Marketing: 1,
    Entrepreneurship: 2,
    Management: 3,
    Economics: 4,
    Investing: 5,
};

const ArtSubCategories = {
    Painting: 0,
    Sculpture: 1,
    Drawing: 2,
    Photography: 3,
    Architecture: 4,
    Design: 5,
};

const HistorySubCategories = {
    AncientHistory: 0,
    MedievalHistory: 1,
    ModernHistory: 2,
    WorldHistory: 3,
    USHistory: 4,
    EuropeanHistory: 5,
};

const ScienceSubCategories = {
    Physics: 0,
    Chemistry: 1,
    Biology: 2,
    Astronomy: 3,
    Geology: 4,
    Psychology: 5,
};

const TechnologySubCategories = {
    Programming: 0,
    WebDevelopment: 1,
    MobileDevelopment: 2,
    ArtificialIntelligence: 3,
    Blockchain: 4,
    Cybersecurity: 5,
};

const PoliticsSubCategories = {
    Government: 0,
    InternationalRelations: 1,
    PoliticalTheory: 2,
    PublicPolicy: 3,
    Elections: 4,
    PoliticalParties: 5,
};

const TravelSubCategories = {
    AdventureTravel: 0,
    BudgetTravel: 1,
    FamilyTravel: 2,
    SoloTravel: 3,
    LuxuryTravel: 4,
    Backpacking: 5,
};

const CookingSubCategories = {
    Recipes: 0,
    Baking: 1,
    HealthyEating: 2,
    Vegetarian: 3,
    Vegan: 4,
    ItalianCuisine: 5,
};

const ReligionSubCategories = {
    Christianity: 0,
    Islam: 1,
    Hinduism: 2,
    Buddhism: 3,
    Judaism: 4,
    Atheism: 5,
    Agnosticism: 6,
};

const GeographySubCategories = {
    Mountains: 0,
    Rivers: 1,
    Deserts: 2,
    Oceans: 3,
    Cities: 4,
    Countries: 5,
    Continents: 6,
};

const GenericQuestions = {
    Music: [
        "What are some unpopular songs you're interested in?",
        "Who are some artists that have made an impact on you?"
    ],
    Sport: [
        "What are some major sporting events that you have attend?",
        "Who are some legendary athletes that have left a lasting impression on you?",
    ],
    Cinema: [
        "What are some classic movies you like?",
        "Who are some renowned directors you like?",
    ],
    Books: [
        "What are some must-read books in your list?",
        "Who are some acclaimed authors that have made an impact on you?",
    ],
    Business: [
        "Who are some influential figures in this industry you admire?",
        "Who are some influential businessman you wish to meet?"
    ],
    Art: [
        "What are some famous artworks you admire?",
        "Who are some celebrated artists you wish to meet?",
    ],
    History: [
        "Who are some notable figures from this period you wish to meet?",
        "What are do you believe will be a lasting impact of our historical era?"
    ],
    Science: [
        "What are some groundbreaking discoveries you are interested in?",
        "Who are some prominent scientists you admire?",
    ],
    Technology: [
        "Who are some innovators and pioneers in this sector that you wish to meet?",
        "What are some potential future developments you wish were real now?"
    ],
    Politics: [
        "Who are some influential political leaders whose ideas resonate with your beliefs?",
        "What are some major political movements or ideologies that you align with?"
    ],
    Travel: [
        "What are some top travel destinations in your bucket list?",
        "What are some cultural experiences that have shocked you?",
    ],
    Cooking: [
        "What are some classic recipes you can make?",
        "Who are some renowned chefs you wish to meet?",
    ]
};

const MusicSubQuestions = {
    Pop: "What's a pop song that always gets you dancing?",
    Rap: "Who's an upcoming rapper you think is going to make it big?",
    Rock: "What's a rock band you'd love to see live in concert?",
    Jazz: "Do you have a favorite jazz musician that you always listen to?",
    Classical: "If you could attend a classical music concert, which composer's work would you want to hear?"
};

const SportSubQuestions = {
    Football: "What team do you think will win the next World Cup?",
    Basketball: "Who's your all-time favorite NBA player and why?",
    Tennis: "Have you ever tried playing tennis? What do you like about it?",
    Golf: "Do you follow any golf tournaments? Who's your favorite golfer?",
    Swimming: "Have you ever competed in a swimming race? What was it like?"
};

const CinemaSubQuestions = {
    Action: "What's your go-to action movie for a movie night?",
    Comedy: "Who's a comedian that always makes you laugh?",
    Drama: "Do you prefer classic dramas or modern ones?",
    SciFi: "If you could be in a sci-fi movie, what kind of character would you play?",
    Horror: "Have you watched any horror movies that kept you up at night?"
};


const BooksSubQuestions = {
    Fiction: "What's a fiction book that you could read over and over again?",
    NonFiction: "Do you have a favorite self-improvement book that inspired you?",
    Mystery: "Who's your favorite detective character from a mystery novel?",
    Thriller: "Have you ever been on the edge of your seat reading a thriller?",
    Romance: "What's a classic romance novel that you think everyone should read?"
};

const BusinessSubQuestions = {
    Finance: "What's a financial tip that changed the way you manage money?",
    Marketing: "Who's a marketer that you think has mastered the art of persuasion?",
    Entrepreneurship: "If you could start any business, what would it be and why?",
    Management: "What's the best leadership advice you've ever received?",
    Economics: "How do you think different economic systems impact society?"
};


const ArtsSubQuestions = {
    Painting: "Do you have a favorite painting that speaks to you?",
    Sculpture: "Have you ever tried sculpting? What kind of sculpture would you create?",
    Drawing: "What's the hardest thing about drawing for you?",
    Photography: "What's the most beautiful photo you've ever taken?",
    Architecture: "What's an architectural style that you find fascinating?"
};

const HistorySubQuestions = {
    AncientHistory: "Which ancient civilization do you find most intriguing?",
    MedievalHistory: "If you could live in any historical period, which would it be?",
    ModernHistory: "What's a major historical event you wish you could have witnessed?",
    WorldHistory: "Which historical figure do you admire the most?",
    USHistory: "What's a lesser-known fact about US history that fascinates you?"
};


const ScienceSubQuestions = {
    Physics: "What's a mind-blowing fact about physics that you find fascinating?",
    Chemistry: "Do you have a favorite chemical element? Why?",
    Biology: "What's a biological process that you find amazing?",
    Astronomy: "Have you ever stargazed? What's your favorite celestial object?",
    Psychology: "What's a psychological phenomenon that you find intriguing?"
};


const TechnologySubQuestions = {
    Programming: "What programming language do you find most versatile?",
    WebDevelopment: "Do you have a favorite website design that you find impressive?",
    MobileDevelopment: "What's a mobile app that you can't live without?",
    ArtificialIntelligence: "How do you think AI will impact our daily lives in the future?",
    Blockchain: "What's an interesting use case for blockchain technology?"
};

const PoliticsSubQuestions = {
    Government: "What's a government system from history that you find interesting?",
    InternationalRelations: "Do you follow international politics? What's a recent event that caught your attention?",
    PoliticalTheory: "Who's a political philosopher that has influenced your views?",
    PublicPolicy: "What's a public policy issue that you're passionate about?",
    Elections: "Have you ever volunteered during an election? What was the experience like?"
};

const TravelSubQuestions = {
    AdventureTravel: "What's the most adventurous trip you've ever been on?",
    BudgetTravel: "Do you have any tips for traveling on a budget?",
    FamilyTravel: "What's a memorable family vacation you've been on?",
    SoloTravel: "Have you ever traveled solo? What did you learn from the experience?",
    LuxuryTravel: "If money was no object, where would you go for a luxurious vacation?"
};


const CookingSubQuestions = {
    Recipes: "What's a recipe that never fails to impress your guests?",
    Baking: "Do you have a favorite baked good that you love to make?",
    HealthyEating: "What's a healthy meal that you enjoy preparing?",
    Vegetarian: "Have you ever tried a vegetarian dish that surprised you with how tasty it was?",
    Vegan: "What's a popular vegan dish that you think everyone should try?"
};

const ReligionSubQuestions = {
    Christianity: "What is the significance of the resurrection of Jesus in Christianity?",
    Islam: "What are the Five Pillars of Islam?",
    Hinduism: "What is the concept of Karma in Hinduism?",
    Buddhism: "What are the Four Noble Truths of Buddhism?",
    Judaism: "What is the importance of the Torah in Judaism?",
    Atheism: "How do atheists find meaning in life without belief in a deity?",
    Agnosticism: "What distinguishes agnosticism from atheism?"
};

const GeographySubQuestions = {
    Mountains: "What is the tallest mountain in the world, and where is it located?",
    Rivers: "Which river is known as the longest river in the world?",
    Deserts: "What are some survival strategies for the desert environment?",
    Oceans: "How do ocean currents affect global climate?",
    Cities: "Which city is considered the oldest continuously inhabited city in the world?",
    Countries: "What country has the largest population?",
    Continents: "Which continent is the largest by area?"
};

// Functions
// 1.
function createNumberWithBitsAtIndex(indexes) {
    let number = 0;

    for (let index of indexes) {
        number |= (1 << index-1);
    }

    return number;
}

function setProfile(arrayCategories) {
    let person = {};
   
    // Iterate over the array of categories
    for (let element of arrayCategories) {
        let category = Object.keys(element)[0]; // Get the category name
        let subcategory = element[category]; // Get the subcategory values
        let number = createNumberWithBitsAtIndex(subcategory);
   
        // Use assignment to add key-value pair to the person object
        person[category] = number;
    }
     
    // Add the constructed person object to the Profiles array
    Profiles.push(person);
}

// 2.
function countOneBits(returnValue) {
    let count = 0;

    while (returnValue) {
        count += returnValue & 1; // Add the LSB to count if it is 1
        returnValue = returnValue >>> 1; // Logical shift right by 1 bit
    }
   
    return count;
}

function similarSubcategories(yourSubCategory, otherSubCategory){
    let returnValue = yourSubCategory & otherSubCategory;

    if (countOneBits(returnValue) >= 1) {
        return returnValue;
    }
    else {
        return 0;
    }
}

function simularCategories(yourProfile, profilesArr) {
    let arrayReturn = [];
    
    for (const curProfile of profilesArr) {
        let curProfileArr = Object.entries(curProfile);
        for (let [category, subcategory] of curProfileArr) {
            if (yourProfile.hasOwnProperty(category)) {
                let similarCategoriesCount = similarSubcategories(yourProfile[category], subcategory);
                if (similarCategoriesCount !== 0 && !arrayReturn.some(obj => obj[category] === similarCategoriesCount)) {
                    let matchedObj = {};
                    matchedObj[category] = similarCategoriesCount;
                    arrayReturn.push(matchedObj);
                }
            }
        }
    }

    return arrayReturn;
}

// 3.
function getRandomOneCategory(n) {
    const onesCount = countOneBits(n);

    // Choose a random "1" bit
    const randomBitIndex = Math.floor(Math.random() * onesCount) + 1;

    let currentBitIndex = 0;

    for (let bitIndex = 0; n > 0; bitIndex++) {
        if (n & 1) {
            currentBitIndex++;

            if (currentBitIndex === randomBitIndex) {
                // Found the randomly chosen "1" bit  
                return 1 << bitIndex;
            }
        }

        n = n >>> 1; // Use unsigned right shift
    }
}

function getSubcategories(categoryIndex) {
    switch(categoryIndex) {
        case Categories.Music:
            return MusicSubCategories;
        case Categories.Sport:
            return SportSubCategories;
        case Categories.Cinema:
            return CinemaSubCategories;
        case Categories.Books:
            return BooksSubCategories;
        case Categories.Business:
            return BusinessSubCategories;
        default:
            return {};
    }
}

//Get array with chosen similar themes
function getIndexesSubcategories(subIndex){
    let positions = [];
    let position = 0;
      
    while (subIndex > 0) {
        if (subIndex & 1) {
            positions.push(position);
        }

        subIndex >>= 1; // Shift number to the right by 1 bit
        position++;
    }
      
    return positions;   
}

// 4.
function fillArrayThemes(arrayThemes, categoryIndex, subIndex){
    let categoryName = Object.keys(Categories).find(key => Categories[key] === categoryIndex);
    let indexesPosition = getIndexesSubcategories(subIndex);
    
    for (let index = 0; index < indexesPosition.length; index++) {
        let themeObject={};
        themeObject[categoryName]= Object.keys(getSubcategories(categoryIndex)).find(key=> getSubcategories(categoryIndex)[key] === indexesPosition[index]);
        arrayThemes.push(themeObject);
    }

    return arrayThemes;
}

function chosenChatThemeArray(arrayReturn){
    let arrayThemes = [];

    arrayReturn.forEach(element => {
        let categoryIndex =Number(Object.keys(element));
        let subIndex = Number(Object.values(element));
        fillArrayThemes(arrayThemes,categoryIndex,subIndex);
    });

    return arrayThemes;
}

//choose a random themes
function pickRandomTheme(arrayThemes){
    if (arrayThemes.length === 0) {
        return undefined; // Handle empty array case
    }
  
    const randomIndex = Math.floor(Math.random() * arrayThemes.length);
    let result = arrayThemes.splice(randomIndex, 1);
    return result;
}
function getSubQuestions(category  ,subCategory) {
    let questionsArr = [];
    switch (category) {
        case 'Music':
            questionsArr = MusicSubQuestions[subCategory];
            return questionsArr;
            
        case 'Sport':
            questionsArr = SportSubQuestions[subCategory];
            return questionsArr;
        case 'Cinema':
            questionsArr = CinemaSubQuestions[subCategory];
            return questionsArr;
        case 'Books':
            questionsArr = BooksSubQuestions[subCategory];
            return questionsArr;
        case 'Business':
            questionsArr = BusinessSubQuestions[subCategory];
            return questionsArr;
        case 'Art':
            questionsArr = ArtsSubQuestions[subCategory];
            return questionsArr;
        case 'History':
            questionsArr = HistorySubQuestions[subCategory];
            return questionsArr;
        case 'Science':
            questionsArr = ScienceSubQuestions[subCategory];
            return questionsArr;
        case 'Technology':
            questionsArr = TechnologySubQuestions[subCategory];
            return questionsArr;
        case 'Politics':
            questionsArr = PoliticsSubQuestions[subCategory];
            return questionsArr;
        case 'Travel':
            questionsArr = TravelSubQuestions[subCategory];
            return questionsArr;
        case 'Cooking':
            questionsArr = CookingSubQuestions[subCategory];
            return questionsArr;
        default:
            questionsArr = [];
            break;
    }

    // Push an object with category as key and questionsArr as value
    arrayQuestionsToReturn.push({ [category]: questionsArr });

    return questionsArr;
}

function addSubQuestions(arrayToReturn, category, subcategory) {
    // Find the object in arrayToReturn with the matching category
    let categoryObject = arrayToReturn.find(obj => obj.hasOwnProperty(category));

    // If the category object exists and it already has an array of questions
    if (categoryObject && Array.isArray(categoryObject[category])) {
        categoryObject[category].push(getSubQuestions(category, subcategory));
    } else {
        // If the category object doesn't exist or doesn't have an array yet, create it
        let newCategoryObject = {};
        newCategoryObject[category] = [getSubQuestions(category, subcategory)];
        arrayToReturn.push(newCategoryObject);
    }
}

function getGenericQuestions(category) {
    switch (category) {
        case 'Music':
            return GenericQuestions.Music;
        case 'Sport':
            return GenericQuestions.Sport;
        case 'Cinema':
            return GenericQuestions.Cinema;
        case 'Books':
            return GenericQuestions.Books;
        case 'Business':
            return GenericQuestions.Business;
        case 'Art':
            return GenericQuestions.Art;
        case 'History':
            return GenericQuestions.History;
        case 'Science':
            return GenericQuestions.Science;
        case 'Technology':
            return GenericQuestions.Technology;
        case 'Politics':
            return GenericQuestions.Politics;
        case 'Travel':
            return GenericQuestions.Travel;
        case 'Cooking':
            return GenericQuestions.Cook;
        default:
            return [];
    }
}
            
function addGenericQuestions(arrayQuestionsToReturn,category){
    let questionsArr = getGenericQuestions(category);
    
    let matchedObj={};
    matchedObj[category] = questionsArr;
    arrayQuestionsToReturn.push(matchedObj)
    
}

function getArrayWithQuestions(arrayThemes) {
    let arrayQuestionsToReturn = [];

    arrayThemes.forEach(element => {
        let category = Object.keys(element)[0];
        let subCategory = Object.values(element)[0];

        // Check if the category exists in arrayQuestionsToReturn
        let categoryExists = arrayQuestionsToReturn.some(obj => obj.hasOwnProperty(category));

        if (categoryExists) {
            // If category exists, add questions to existing array
             addSubQuestions(arrayQuestionsToReturn, category, subCategory);
        } else {
            // If category doesn't exist, add generic questions
            addGenericQuestions(arrayQuestionsToReturn, category);
            // i want to fill arrayQuestionsToReturn at the given category which already has an array 
             addSubQuestions(arrayQuestionsToReturn, category, subCategory);
        }
    });

    // Reverse the order of questions in each category
    arrayQuestionsToReturn.forEach(category => {
        let reversedQuestions = category[Object.keys(category)[0]].reverse();
        category[Object.keys(category)[0]] = reversedQuestions;
    });

    return arrayQuestionsToReturn;
}

// Call functions
setProfile([{1: [2, 5]}, {0: [3, 4]}, {2: [1, 6]}]);
setProfile([{2: [1, 6]}, {1: [3, 4]}, {3: [2, 5]}]);
// Optionally, log the Profiles array to see all profiles
//simularCategories(Profiles[0], Profiles);
//chosenChatThemeArray(simularCategories(Profiles[0], Profiles));
//pickRandomTheme(chosenChatThemeArray(simularCategories(Profiles[0], Profiles)));
//chosenChatTheme(simularCategories(Profiles[0],Profiles));

let theme = simularCategories(Profiles[0], Profiles);
let chosenTheme = chosenChatThemeArray(theme)
export const questions = getArrayWithQuestions(chosenTheme);
getArrayWithQuestions(chosenTheme);
