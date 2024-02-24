import * as sounds from './sounds.js'
import * as functions from './functions.js'
import * as elements from './elements.js'

export function startBtn () {
    elements.controls.addEventListener('click', () => functions.handleStartBtn())
}

export function handleSoundCards () {
    elements.soundCards.forEach((card) => {
        card.addEventListener('click', () => {
            const selectedSoundCard = document.querySelector('.card-selected')
            
            if(selectedSoundCard && selectedSoundCard !== card) {
                selectedSoundCard.classList.remove('card-selected')
                switch (selectedSoundCard.id) {
                    case 'florest':
                        sounds.florestSound.pause()
                        break;
                    case 'rain':
                        sounds.rainSound.pause()
                        break;
                    case 'coffe-shop':
                        sounds.coffeShopSound.pause()
                        break;
                    case 'fireplace':
                        sounds.fireplaceSound.pause()
                        break;
                }            
            }
    
            card.classList.toggle('card-selected')
            switch (card.id) {
                case 'florest':
                    card.classList.contains('card-selected') ? sounds.florestSound.play() : sounds.florestSound.pause()
                    break;
                case 'rain':
                    card.classList.contains('card-selected') ? sounds.rainSound.play() : sounds.rainSound.pause()
                    break;
                case 'coffe-shop':
                    card.classList.contains('card-selected') ? sounds.coffeShopSound.play() : sounds.coffeShopSound.pause()
                    break;
                case 'fireplace':
                    card.classList.contains('card-selected') ? sounds.fireplaceSound.play() : sounds.fireplaceSound.pause()
                    break;
            }
        })
    })
}
