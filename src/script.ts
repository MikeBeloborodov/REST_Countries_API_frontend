import { Card } from './my_classes'
import { Country } from './types_api'
const $ = (selector: string) => document.querySelector(selector)
const $$ = (selector: string) => document.querySelectorAll(selector)

const BASE_API_URL = 'https://restcountries.com/v3.1/'
const FIELDS_FILTER = '?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders'

const $body: HTMLDivElement = <HTMLDivElement>$('body')
const $modeSwitcher = $('#mode-switcher')
const $header = $('header')
const $moonImg = $('#moon-img')
const $modeSwitcherText = $('#mode-switcher-text')
const $searchText: HTMLInputElement = <HTMLInputElement>$('#search-text')
const $searchSelect = $('#search-filter')
const $formSearch = $('#form-search')
const $cardsContainer: HTMLDivElement = <HTMLDivElement>$('#cards-container')

// Event listeners
// Switch to Dark Theme
$modeSwitcher?.addEventListener('click', () => {
    $body.classList.toggle('dark')
    $header?.classList.toggle('dark')
    $modeSwitcher.classList.toggle('dark')
    $moonImg?.classList.toggle('dark')
    $modeSwitcherText?.classList.toggle('dark')
    $searchText?.classList.toggle('dark')
    $searchSelect?.classList.toggle('dark')
    const cards = document.querySelectorAll('article')
    cards.forEach((item) => {
        item.classList.toggle('dark')
    })
})

// Search from text input
$formSearch?.addEventListener('submit', async (event) => {
    event.preventDefault()
    const search_query = $searchText.value
    if (search_query.length > 0) {
        const cards = document.querySelectorAll('article')
        cards.forEach((item) => {
            item.remove()
        })
        const resonse = await fetch(BASE_API_URL + 'name/' + search_query + FIELDS_FILTER)
        const api_data: Array<Country> = await resonse.json()
        api_data.forEach((country: Country) => {
            const new_card = new Card(country)
            $cardsContainer.innerHTML += new_card.constructCardElement()
        })
    }
})