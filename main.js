let colorPicker = document.querySelector('input')

let colorOutput = document.querySelector('label')

let colorScreen = document.getElementById('colorScreen')


addEventListener('input' , (Event) => {
colorOutput.innerText=colorPicker.value

colorScreen.style.backgroundColor=colorPicker.value


})
