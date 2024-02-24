import * as elements from './elements.js'
import { timer } from './timer.js'
import * as sounds from './sounds.js'

export function updateDisplay(minutes, seconds){
    elements.minutesDisplay.textContent = minutes ?? String(timer.minutes).padStart(2, "0")
    elements.secondsDisplay.textContent = seconds ?? String(timer.seconds).padStart(2, "0")
}

export function countdown(){
    if(!timer.isRunning) {
        return
    }

    clearTimeout(timer.countdownID)
    
    let minutes = Number(elements.minutesDisplay.textContent)
    let seconds = Number(elements.secondsDisplay.textContent)
    
    if(seconds === 0){
        minutes--
        seconds = 60
    }

    if(minutes < 0) {
        timer.isRunning = false
        handleTimerControls()
        sounds.kitchenTimerSound.play()
        return
    }

    seconds--

    updateDisplay(String(minutes).padStart(2, "0"), String(seconds).padStart(2, "0"))

    timer.countdownID = setTimeout(() => countdown(), 1000)
}

export function resetTimer () {
    timer.isRunning = false
    timer.minutes = 0
    timer.seconds = 0
    updateDisplay()
}

export function handleTimerControls () {
    elements.startBtn.classList.toggle('running')
    elements.increaseBtn.classList.toggle('disable')
    elements.decreaseBtn.classList.toggle('disable')
}

export function handleStartBtn(){
    if(timer.minutes === 0){
        elements.startBtn.classList.add('disable')
        return
    }

    elements.startBtn.classList.remove('disable')

}