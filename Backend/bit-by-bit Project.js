var Profiles = [];
//music, sport , cinema, boks, biznes, arts, history, science, technology, politics, travel, cook

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
    Cook: 11
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

const CookSubCategories = {
    Recipes: 0,
    Baking: 1,
    HealthyEating: 2,
    Vegetarian: 3,
    Vegan: 4,
    ItalianCuisine: 5,
};


function createNumberWithBitAtIndex(indexes) {
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
       let number = createNumberWithBitAtIndex(subcategory);
   
       // Use assignment to add key-value pair to the person object
       person[category] = number;
     }
     
     // Add the constructed person object to the Profiles array
     Profiles.push(person);
}
    // Example usage
    setProfile([{1: [2, 5]}, {0: [3, 4]}, {2: [1, 6]}]);
    setProfile([{2: [1, 6]}, {1: [3, 4]}, {3: [2, 5]}]);
   
    //console.log(Profiles); // Optionally, log the Profiles array to see all profiles

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
simularCategories(Profiles[0],Profiles);

function getRandomElement(arr) {
     if (arr.length === 0) {  
         return undefined; // Handle empty array case
     }
  
     const randomIndex = Math.floor(Math.random() * arr.length);
     return arr[randomIndex];
}

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
/*
function chosenChatTheme(arrayReturn) {
    let categorySubcategoryElement =  getRandomElement(arrayReturn);
    let categoryIndex = Number(Object.keys(categorySubcategoryElement));
    let subcategories = Object.values(categorySubcategoryElement);

    let randomCategoryIndex = getRandomOneCategory(subcategories);

    let categoryName = Object.keys(Categories).find(key => Categories[key] === categoryIndex);
    let subcategoryName = Object.keys(getSubcategories(categoryIndex)).find(key => getSubcategories(categoryIndex)[key] === randomCategoryIndex);

    let matchedObj={};
    matchedObj[categoryName] = subcategoryName;
                  
    return matchedObj;
}
chosenChatTheme(simularCategories(Profiles[0],Profiles));

function chooseChatArray(arrayReturn) {
     let arrThemes = [];
     arrayReturn.forEach(element => {
          arrThemes.keys() = element.key();
          
     });

     return arrThemes;
}

*/

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

function fillArrayThemes(arrayThemes,categoryIndex,subIndex){
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
    if (arrayThemes.length === 0) return undefined; // Handle empty array case
  
    const randomIndex = Math.floor(Math.random() * arrayThemes.length);
    let result = arrayThemes.splice(randomIndex, 1);
    console.log(result)
    console.log(arrayThemes)
    return result;
}s

chosenChatThemeArray(simularCategories(Profiles[0],Profiles))
pickRandomTheme(chosenChatThemeArray(simularCategories(Profiles[0],Profiles)))
//chosenChatTheme(simularCategories(Profiles[0],Profiles))