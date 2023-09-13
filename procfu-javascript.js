// JavaScript runs whenever data is rendered
// NB: this is JavaScript and NOT ProcScript
// target = jquery DOM wrapper of the current screen
// my_variables = {foo:"bar",etc} - cannot be changed here

const categoriaDivs = document.querySelectorAll('div[data-field="categorias"]')
categoriaDivs.forEach(function (div) {
	const text = div.textContent.trim().toLowerCase()
	div.style.borderRadius = '5px'
	div.style.padding = '4px'
	div.style.textAlign = 'center'
	if (text === 'aguardando retorno') {
		div.style.backgroundColor = '#FFD5B8'
	} else if (text === 'não iniciado') {
		div.style.backgroundColor = '#B1EDEA'
	} else if (text === 'em análise') {
		div.style.backgroundColor = '#F9EFB6'
	} else if (text === 'em andamento') {
		div.style.backgroundColor = '#BAFBAF'
	} else if (text === 'aguardando validação') {
		div.style.backgroundColor = '#D2BDFF'
	} else if (text === 'Aguardando Fabricante') {
		div.style.backgroundColor = '#FFB8B8'
	} else if (text === 'encerrado') {
		div.style.backgroundColor = '#E6E6E6'
	}
})
const severidadeDivs = document.querySelectorAll('div[data-field="severidade"]')
severidadeDivs.forEach(function (div) {
	const text = div.textContent.trim().toLowerCase()
	div.style.borderRadius = '5px'
	div.style.padding = '4px'
	div.style.textAlign = 'center'
	div.style.marginBottom = '3px'
	div.style.marginTop = '3px'
	if (text === 'problema emergencial') {
		div.style.backgroundColor = '#FFD1D1'
	} else if (text === 'problema') {
		div.style.backgroundColor = '#F8EDAC'
	} else {
		div.style.backgroundColor = '#BAFBAF'
	}
})
const filterSelect = document.getElementById('filterSelect')
// Get all the card elements
const cards = document.querySelectorAll('.pf-card.pf-card-clickable')
// Add an event listener to the select element
filterSelect.addEventListener('change', function () {
	const selectedStatus = filterSelect.value
	// Loop through each card and check if it contains the selected dataset-id
	cards.forEach(card => {
		const statusDiv = card.querySelector('div[data-field="categorias"]')
		const status = statusDiv.textContent

		if (status === selectedStatus || selectedStatus === 'Todos') {
			card.classList.remove('hide')
		} else {
			card.classList.add('hide')
		}
	})
})
const selectedStatus = filterSelect.value
cards.forEach(card => {
	const statusDiv = card.querySelector('div[data-field="categorias"]')
	const status = statusDiv.textContent

	if (status === selectedStatus || selectedStatus === 'Todos') {
		card.classList.remove('hide')
	} else {
		card.classList.add('hide')
	}
})
const searchBar = document.querySelector('.pf-search-bar')
const inputSearchBar = searchBar.querySelector("input[type='text']")
const searchButton = searchBar.querySelector('a')
searchButton.classList.add('search-button')

const searchIcon = document.createElement('img')
searchIcon.className = "search-icon"
searchIcon.src = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/magnifying-glass.svg"
console.log(searchIcon)
searchButton.appendChild(searchIcon)
console.log(searchButton)

searchButton.textContent = ""

inputSearchBar.classList.add("search-input")
const header = document.querySelector('.filter-header')
header.appendChild(searchBar)

const cardsContainer = document.querySelector('.pf-cards')
const searchBarToDelete = cardsContainer.querySelector('.pf-search-bar')
if (searchBarToDelete) {
    searchBarToDelete.remove()
}


