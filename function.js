// function printMultiples(number) {
//     for (let i = number; i <= 100; i += number) {
//         console.log(i);
//     }
// }
// printMultiples(5)


// // #############check whether it is an even or odd number######

// // Prompt the user for a number
// const number = prompt("Enter a number:");

// // Check if the number is odd or even
// if (number % 2 === 0) {
//     console.log(number + " is even.");
// } else {
//     console.log(number + " is odd.");
// }



// //#########Fibonacci Sequence########
// function generateFibonacciSequence(numTerms) {
//     var fibonacciSequence = [];

//     if (numTerms >= 1) {
//         fibonacciSequence.push(0);
//     }

//     if (numTerms >= 2) {
//         fibonacciSequence.push(1);
//     }

//     for (var i = 2; i < numTerms; i++) {
//         var nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
//         fibonacciSequence.push(nextTerm);

//         if (nextTerm >= numTerms) {
//             break;
//         }
//     }

//     return fibonacciSequence;
// }

// Example usage
// var numTerms = 30;
// var sequence = generateFibonacciSequence(numTerms);
// console.log(sequence);


// // #################### factorial###########
// function calculateFactorial(number) {
//     if (number === 0 || number === 1) {
//         return 1;
//     } else {
//         let factorial = 1;
//         for (let i = 2; i <= number; i++) {
//             factorial *= i;
//         }
//         return factorial;
//     }
// }

// const number = 10;
// const factorial = calculateFactorial(number);
// console.log(`The factorial of ${number} is ${factorial}.`);


// //   ######################Palindrome Checker###############

// function isPalindrome(str) {
//     // Convert the string to lowercase and remove non-alphanumeric characters
//     const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // Compare the formatted string with its reverse
//     const reversedStr = formattedStr.split('').reverse().join('');
//     return formattedStr === reversedStr;
// }

// // Example usage
// const inputString = "A man, a plan, a canal: Panama";
// const isPalindromeResult = isPalindrome(inputString);
// console.log(`"${inputString}" is a palindrome: ${isPalindromeResult}`);







const allProducts = [
    {
        id: 1,
        name: 'AC',
        description: 'For Cooling',
        price: '200'
    },
    {
        id: 2,
        name: 'Washing Machine',
        description: 'For dry cleaning clothes and beddings',
        price: '500'
    },
    {
        id: 3,
        name: 'Screen',
        description: 'For viewing content',
        price: '300'
    },
    {
        id: 4,
        name: '	Keyboard',
        description: 'Typing',
        price: '50'
    },
    {
        id: 5,
        name: 'Phone',
        description: 'Making Calls',
        price: '1150'
    },
    {
        id: 6,
        name: 'Marker',
        description: 'Writing',
        price: '50'
    },
    {
        id: 7,
        name: 'Table',
        description: 'Placing items',
        price: '50'
    },
    {
        id: 8,
        name: 'Chair',
        description: 'Sitting',
        price: '5'
    },
    {
        id: 9,
        name: 'Cap',
        description: '	For providing shade',
        price: '2'
    },
    {
        id: 10,
        name: 'Electricity',
        description: '	For providing power',
        price: '500'
    },
]

// dropdown
const profile_btn = document.querySelector('.profile')
const dropdown = document.querySelector('.dropdown')
let maxwell = true
// profile_btn.removeChild(dropdown)
dropdown.classList.add('hidden')

profile_btn.addEventListener('click', () => {
    maxwell = !maxwell
    if (maxwell) {
        // profile_btn.appendChild(dropdown)
        dropdown.classList.remove('hidden')
    }
    else {
        // profile_btn.removeChild(dropdown)
        dropdown.classList.add('hidden')
    }

})

// table
const main = document.querySelector('main')
const table = document.createElement('table')
table.setAttribute('border', '1px')
table.setAttribute('width', '100%')
table.setAttribute('cellpadding', '2px')
table.setAttribute('cellspacing', '10px')

const tableHeaderRow = document.createElement('tr')
table.appendChild(tableHeaderRow)

const headers = ['S/N', 'Item', 'Description', 'Price', 'Action']

headers.forEach(element => {
    let tableHeader = document.createElement('th')
    tableHeader.innerText = element
    tableHeaderRow.appendChild(tableHeader)
})

allProducts.forEach((element, index) => {
    let tableRow = document.createElement('tr')

    let td1 = document.createElement('td')
    td1.innerText = index + 1
    tableRow.appendChild(td1)

    let td2 = document.createElement('td')
    td2.innerText = element.name
    tableRow.appendChild(td2)

    let td3 = document.createElement('td')
    td3.innerText = element.description
    tableRow.appendChild(td3)

    let td4 = document.createElement('td')
    td4.innerText = element.price
    tableRow.appendChild(td4)

    table.appendChild(tableRow)
})

// form


main.appendChild(table)
document.body.appendChild(main)

// form
const form = document.createElement('form')

// item
const itemLabel = document.createElement('label')
itemLabel.innerText = 'Item name'

const itemInput = document.createElement('input')
itemInput.setAttribute('type', 'text')

const itemContainer = document.createElement('div')
itemContainer.appendChild(itemLabel)
itemContainer.appendChild(itemInput)
form.appendChild(itemContainer)

// description
const descriptionLabel = document.createElement('label')
descriptionLabel.innerText = 'Description'

const descriptionInput = document.createElement('textarea')

const descriptionContainer = document.createElement('div')
descriptionContainer.appendChild(descriptionLabel)
descriptionContainer.appendChild(descriptionInput)
form.appendChild(descriptionContainer)

// Price
const priceLabel = document.createElement('label')
priceLabel.innerText = 'Price'
form.appendChild(priceLabel)

const priceInput = document.createElement('input')
priceInput.setAttribute('type', 'number')
form.appendChild(priceInput)

const priceContainer = document.createElement('div')
priceContainer.appendChild(priceLabel)
priceContainer.appendChild(priceInput)
form.appendChild(priceContainer)

const submitForm = document.createElement('button')
submitForm.innerText = 'Add Item'
form.appendChild(submitForm)

const removeTableRows = () => {
    const tableRows = document.querySelectorAll('.row')

    tableRows.forEach(row => {
        table.removeChild(row)
    })
}

submitForm.addEventListener('click', (e) => {
    e.preventDefault()

    if (itemInput.value && descriptionInput.value && priceInput.value) {
        let item = {
            id: allProducts.length + 1,
            name: itemInput.value,
            description: descriptionInput.value,
            price: priceInput.value
        }

        products = [...products, item]
        removeTableRows()
        createTableList()
        itemInput.value = ''
        descriptionInput.value = ''
        priceInput.value = ''
    }
    else {
        alert('Insert all fields')
    }

})


main.appendChild(table)
main.appendChild(form)
document.body.appendChild(main)
