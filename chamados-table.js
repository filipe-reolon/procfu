const categoriaDivs = document.querySelectorAll('td[data-field="categorias"]')
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
const severidadeDivs = document.querySelectorAll('td[data-field="severidade"]')
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
const table = document.querySelector('.pftable.pf-tr-clickable');
const tableLines = table.querySelectorAll('tbody tr');


const selectedStatus = filterSelect.value
tableLines.forEach(line => {
	const statusDiv = line.querySelector('td[data-field="categorias"]')
	const status = statusDiv != null ? statusDiv.textContent : "hide"

	if (status === selectedStatus || selectedStatus === 'Todos') {
		line.classList.remove('hide')
	} else {
		line.classList.add('hide')
	}
})

const searchBar = document.querySelector('.pf-search-bar')
searchBar.classList.add('show')
const inputSearchBar = searchBar.querySelector("input[type='text']")
const searchButton = searchBar.querySelector('a')
searchButton.classList.add('search-button')
const searchIcon = document.createElement('img')
searchIcon.className = "search-icon"
searchIcon.src = "https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/solid/magnifying-glass.svg"
searchButton.appendChild(searchIcon)
searchButton.textContent = ""
inputSearchBar.classList.add("search-input")
const header = document.querySelector('.filter-header')
header.appendChild(searchBar)

const searchBarToDelete = document.querySelector('.pf-search-bar:not(.show)')
if (searchBarToDelete) {
    searchBarToDelete.remove()
}

const solicitanteLines = document.querySelectorAll('td[data-field="solicitante"]')
const solicitanteHead = document.querySelectorAll('th[data-field="solicitante"]')

solicitanteLines.forEach(line => {
    line.style.display = 'none'
})
solicitanteHead.forEach(line => {
    line.style.display = 'none'
})



