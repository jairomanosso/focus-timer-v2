import { timer } from './timer.js'
import * as sounds from './sounds.js'
import * as functions from './functions.js'
import * as elements from './elements.js'

export const increase = elements.increaseBtn.onclick = () => {
    if(timer.isRunning || timer.minutes === 60) {
        return
    }
    
    timer.minutes += 5
    functions.updateDisplay()
}

export const decrease = elements.decreaseBtn.onclick = () => {
    if(timer.isRunning || timer.minutes === 0) {
        return
    }
    
    timer.minutes -= 5
    functions.updateDisplay()
}

export const start = elements.startBtn.onclick = () => {
    if(timer.minutes === 0 || timer.isRunning){
        return
    }

    timer.isRunning = true

    elements.stopBtn.classList.remove('disable')
    
    functions.handleTimerControls()

    functions.countdown()

    sounds.btnPressSound.play()
}

export const stop = elements.stopBtn.onclick = () => {
    if(!timer.isRunning){
        return
    }

    elements.stopBtn.classList.add('disable')

    functions.resetTimer()
    functions.handleTimerControls()
    
    sounds.btnPressSound.play()
}