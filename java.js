// let inputslider = document.querySelector("[data-lengthslider]");
// let numbershow = document.querySelector("[data-lengthnumber]");
// const symbols = '~`;"/?!@#$%^&*(<)_+=-';
// let uppercaseCHeck = document.querySelector("#uppercase");
// let lowercaseCHeck = document.querySelector("#lowercase");
// let symbolCHeck = document.querySelector("#symbols");
// let numberCHeck = document.querySelector("#number");
// let copymsg = document.querySelector("[data-copymsg]")
// //  
// //  let copyMsg=document.querySelector("")
// let passwordDisplay = document.querySelector("[data-passwordDisplay]");
// let allCheckbox=document.querySelector("input[type=checkbox]");
// let genratePassword=document.querySelector("genratebutton");


// let number = 10;
// let passwordLength = 10;
// let checkCount=1;
// handleSlider();
// // ste strength circle

// function handleSlider() {
//     inputslider.value =  passwordLength;
//     numbershow.innerText =  passwordLength;
// }


// let power = document.querySelector("[data-indicator]");

// function setIndicator(color) {
//     power.style.backgroundColor = color;

// }


// function getRndInteger(min, max) {
//     return Math.floor(Math.random) * (max - min) + min;

// }
// function genRandomNumber() {
//     return getRndInteger(0, 9);
// }

// function genRndLowerCase() {
//     return String.fromCharCode(getRndInteger(97, 123));
// }

// function genRndUpperCase() {
//     return String.fromCharCode(getRndInteger(65, 91));
// }

// function genRndSyambool() {
//     const randNum = getRndInteger(0, symbols.length);
//     return symbols.charAt(randNum);
// }

// // strength

// function calcStrength() {
//     let hasupper = false;
//     let haslower = false;
//     let hasnumb = false;
//     let hassymb = false;
//     if (uppercaseCHeck.Checked) hasupper = true;
//     if (lowercaseCHeck.checked) haslower = true;
//     if (symbolCHeck.checked) hasnumb = true;
//     if (numberCHeck.checked) hassymb = true;

//     if (hasupper && haslower && (hasnumb || hassymb) && passwordLength >= 6) {
//         setIndicator("#0f0");
//     } else if (
//         (haslower || hasupper) &&
//         (hasnumb || hassymb) &&
//         passwordLength >= 5) {
//         setIndicator("#ff0");
//     } else {
//         setIndicator("#f00");
//     }

// }

// async function copycontent() {
//     try {
//         await navigator.clipboard.writeText(passwordDisplay.value);
//         copymsg.innerText = "copied";
//     }
//     catch (e) {
//         copymsg.innerText = "error";;
//     }
//     //to make a timer
//     copymsg.classList.add("active");

//     setTimeout(() => {
//         copymsg.classList.remove("active");
//     }, 2000);
// }

// inputslider.addEventListener('input', (e) => {
//     passwordLength = e.target.value;
//     handleSlider();
// });

//  copybtn.addEventListener('click',()=>{
//     if(passwordDisplay.value)
//      copycontent();
//  })

//   function handleCheckBoxChange(){
//     checkCount=0;
//     allCheckbox.forEach((checkbox)=>{
//         if(checkbox.Checked);
//         checkCount++;
//     });
//     // change in checkbox
//      if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider();
//      }

//   }

//  allCheckbox.forEach((checkbox) => {
//     checkbox.addEventListener ('change',handleCheckBoxChange);
//  });

//  genratePassword.addEventListener('click',()=>{
//     if(checkCount<=0)
//     return;

//     if(passwordLength<checkCount){
//         passwordLength=checkCount;
//         handleSlider;
//     }
//     //let start to make a new password

//     //remove old password
//     password="";
    
//  })



const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc")

//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    //or kuch bhi karna chahiye ? - HW
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    
    indicator.style.boxShadow='0px 0px 12px 1px ${color}';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0,9);
}

function generateLowerCase() {  
       return String.fromCharCode(getRndInteger(97,123))
}

function generateUpperCase() {  
    return String.fromCharCode(getRndInteger(65,91))
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    }
    catch(e) {
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    if(passwordDisplay.value)
        copyContent();
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

  

    let funcArr = [];

    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0; i<funcArr.length; i++) {
        password += funcArr[i]();
    }
    console.log("Compulsory adddition done");

    //remaining adddition
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength
    calcStrength();
});
