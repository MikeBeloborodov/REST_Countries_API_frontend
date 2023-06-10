import { Country } from "./types_api";

export class Card {
    name: string
    population: number
    region: string
    capital: string[]
    flag: string
    alt_text: string

    constructor(country: Country) {
        this.name = country.name.official
        this.population = country.population
        this.region = country.region
        this.capital = country.capital
        this.flag = country.flags.png
        this.alt_text = country.flags.alt
    }

    constructCardElement(): string {
        const id = Math.random()
        const content = `
          <article class="card" id="${id}">
            <img class="card__flag" src="${this.flag}" alt="${this.alt_text}">
            <div class="card__body">
              <h3 class="card__title">${this.name}</h2>
              <p class="card__description"><span class="card__accent">Population: </span>${this.population}</p>
              <p class="card__description"><span class="card__accent">Region: </span>${this.region}</p>
              <p class="card__description"><span class="card__accent">Capital: </span>${this.capital[0]}</p>
            </div>
          </article>`

        return content
    }
}