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
        "What are some popular songs in this music genre?",
        "Who are some iconic artists in this genre?",
        "What are the characteristics of this genre?"
    ],
    Sport: [
        "What are some major sporting events in this category?",
        "Who are some legendary athletes in this sport?",
        "What are the rules and regulations of this sport?"
    ],
    Cinema: [
        "What are some classic movies in this genre?",
        "Who are some renowned directors in this category?",
        "What are the common themes explored in this genre?"
    ],
    Books: [
        "What are some must-read books in this category?",
        "Who are some acclaimed authors in this genre?",
        "What are the main themes in these types of books?"
    ],
    Business: [
        "What are some key concepts in this business field?",
        "Who are some influential figures in this industry?",
        "What are the current trends and challenges in this sector?"
    ],
    Art: [
        "What are some famous artworks in this category?",
        "Who are some celebrated artists known for this art form?",
        "What are the techniques used in this artistic style?"
    ],
    History: [
        "What are some significant events in this historical era?",
        "Who are some notable figures from this period?",
        "What are the lasting impacts of this historical era?"
    ],
    Science: [
        "What are some groundbreaking discoveries in this scientific field?",
        "Who are some prominent scientists in this discipline?",
        "What are the main theories and principles in this area?"
    ],
    Technology: [
        "What are some recent advancements in this tech field?",
        "Who are some innovators and pioneers in this sector?",
        "What are the potential future developments in this technology?"
    ],
    Politics: [
        "What are some major political movements or ideologies?",
        "Who are some influential political leaders in this area?",
        "What are the main challenges facing this political landscape?"
    ],
    Travel: [
        "What are some top travel destinations in this category?",
        "What are some cultural experiences one can have in these places?",
        "What are some travel tips for exploring this region?"
    ],
    Cooking: [
        "What are some classic recipes in this culinary style?",
        "Who are some renowned chefs known for this type of cuisine?",
        "What are the key ingredients and techniques in this cooking tradition?"
    ]
};

const MusicSubQuestions = {
    Pop: "What are some popular pop songs of the last decade?",
    Rap: "Who is considered one of the greatest rappers of all time?",
    Rock: "What are the origins of rock and roll music?",
    Jazz: "Who is known as the King of Jazz?",
    Classical: "What are some famous composers of classical music?"
};

const SportSubQuestions = {
    Football: "Who won the last FIFA World Cup?",
    Basketball: "What NBA team has the most championships?",
    Tennis: "Who holds the record for the most Grand Slam titles in men's tennis?",
    Golf: "What is the nickname of golfer Tiger Woods?",
    Swimming: "Who is considered one of the greatest Olympic swimmers of all time?"
};

const CinemaSubQuestions = {
    Action: "What are some classic action movies?",
    Comedy: "Who is known as the 'King of Comedy' in Hollywood?",
    Drama: "What are some iconic drama films that have won Oscars?",
    SciFi: "What are some popular sci-fi TV series?",
    Horror: "Who is considered the 'Master of Horror' in filmmaking?"
};


const BooksSubQuestions = {
    Fiction: "What are some must-read classic fiction novels?",
    NonFiction: "What are some popular non-fiction books on self-improvement?",
    Mystery: "Who is the author of the famous detective character Sherlock Holmes?",
    Thriller: "What are some famous thriller novels turned into successful movies?",
    Romance: "What are some timeless romance novels?"
};

const BusinessSubQuestions = {
    Finance: "What are some key concepts in personal finance?",
    Marketing: "Who is considered the father of modern marketing?",
    Entrepreneurship: "What are some successful startup stories?",
    Management: "What are the qualities of effective management?",
    Economics: "What are the different types of economic systems?"
};


const ArtsSubQuestions = {
    Painting: "Who is known for painting the Mona Lisa?",
    Sculpture: "What are some famous sculptures around the world?",
    Drawing: "What are some essential drawing techniques?",
    Photography: "Who is considered a pioneer in photography?",
    Architecture: "What are some iconic architectural landmarks?"
};

const HistorySubQuestions = {
    AncientHistory: "What are some ancient civilizations and their achievements?",
    MedievalHistory: "What are some key events in medieval Europe?",
    ModernHistory: "What are the major events of the 20th century?",
    WorldHistory: "What are some significant world-changing events?",
    USHistory: "What are some important moments in American history?"
};


const ScienceSubQuestions = {
    Physics: "What are the fundamental laws of physics?",
    Chemistry: "What are some common chemical reactions?",
    Biology: "What are the main branches of biology?",
    Astronomy: "What are some interesting facts about the planets in our solar system?",
    Psychology: "What are some famous psychological experiments?"
};


const TechnologySubQuestions = {
    Programming: "What are some popular programming languages?",
    WebDevelopment: "What are some essential tools for web developers?",
    MobileDevelopment: "What are some top mobile app development frameworks?",
    ArtificialIntelligence: "What are some applications of AI in everyday life?",
    Blockchain: "How does blockchain technology work and what are its advantages?"
};

const PoliticsSubQuestions = {
    Government: "What are the different types of government systems?",
    InternationalRelations: "What are some key international organizations?",
    PoliticalTheory: "Who are some influential political philosophers?",
    PublicPolicy: "What are some examples of successful public policies?",
    Elections: "What are some notable election controversies in history?"
};

const TravelSubQuestions = {
    AdventureTravel: "What are some thrilling adventure travel destinations?",
    BudgetTravel: "How can one travel on a budget?",
    FamilyTravel: "What are some family-friendly vacation spots?",
    SoloTravel: "What are the benefits of solo travel?",
    LuxuryTravel: "What are some luxurious travel experiences?"
};


const CookingSubQuestions = {
    Recipes: "What are some easy and delicious recipes for beginners?",
    Baking: "What are some classic baking recipes?",
    HealthyEating: "What are some tips for maintaining a healthy diet?",
    Vegetarian: "What are some tasty vegetarian dishes?",
    Vegan: "What are some popular vegan substitutes for common ingredients?"
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
    console.log(result);
    console.log(arrayThemes);

    return result;
}
function getSubQuestions(category  ,subCategory) {
    let questionsArr = [];
    console.log(category)
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
            console.log(GenericQuestions.Music)
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

    return arrayQuestionsToReturn;
}

// Call functions
setProfile([{1: [2, 5]}, {0: [3, 4]}, {2: [1, 6]}]);
setProfile([{2: [1, 6]}, {1: [3, 4]}, {3: [2, 5]}]);
console.log(Profiles); // Optionally, log the Profiles array to see all profiles
//simularCategories(Profiles[0], Profiles);
//chosenChatThemeArray(simularCategories(Profiles[0], Profiles));
//pickRandomTheme(chosenChatThemeArray(simularCategories(Profiles[0], Profiles)));
//chosenChatTheme(simularCategories(Profiles[0],Profiles));

let theme = simularCategories(Profiles[0], Profiles);
let chosenTheme = chosenChatThemeArray(theme)
let questions = getArrayWithQuestions(chosenTheme);
getArrayWithQuestions(chosenTheme);