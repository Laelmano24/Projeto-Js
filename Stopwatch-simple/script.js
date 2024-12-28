let SetIntervalConometer
let ConometerValue = 0
let ButtonPlayValue = false

const SpanConometer = document.querySelector("#ConometerValue")
const ButtonPlay = document.querySelector("#Button-Play")
const ButtonResert = document.querySelector("#Button-Resert")

function UpdateConometerValue() {
  ConometerValue += 1
  SpanConometer.textContent = ConometerValue
}

function ResetTimer() {
  ConometerValue = 0
  SpanConometer.textContent = ConometerValue
}

function ButtonPlayStyle() {
  ButtonPlay.textContent = "Play"
  ButtonPlay.style.background = "#1ECD92"
  ButtonPlay.style.boxShadow = "0px 0px 30px #1ECD92B0"
}

function ButtonResertStyle() {
  ButtonPlay.textContent = "Pause"
  ButtonPlay.style.background = "#CD1E1E"
  ButtonPlay.style.boxShadow = "0px 0px 30px #CD1E1EB0"
}

ButtonPlay.addEventListener("click", () => {
  
  if (ButtonPlayValue) {
    // Valor mudado
    ButtonPlayValue = false
    
    //Trocar aparência do button
    ButtonPlayStyle()
    
    clearInterval(SetIntervalConometer)
    
  } else {
    // Valor mudado
    ButtonPlayValue = true
    
    //Trocar a aparência do button
    ButtonResertStyle()
    
    //Mudar o sistema
    UpdateConometerValue()
    SetIntervalConometer = setInterval(UpdateConometerValue, 1000)
  }
  
})

ButtonResert.addEventListener("click", () => {
  
  clearInterval(SetIntervalConometer)
  ButtonPlayValue = false
  ButtonPlayStyle()
  ResetTimer()
  
})