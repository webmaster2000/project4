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

const submit = document.getElementsByName('type=submit')


const removeTableRows = () => {
    const tableRows = document.querySelectorAll('.row')

    tableRows.forEach(row => {
        table.removeChild(row)
    })
}

submit.addEventListener('click', (e) => {
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


// main.appendChild(table)
// main.appendChild(form)
// document.body.appendChild(main)
