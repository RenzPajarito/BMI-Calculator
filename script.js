const weight = document.getElementById("weightInput")
const height = document.getElementById("heightInput")
const bmiRes = document.getElementById("bmiResult")
const categoryRes = document.getElementById("categoryResult")
const calculateBmi = document.getElementById("calculateBtn")

const app = () => {
    let heightPow = (height.value / 100) * (height.value / 100)
    let bmi = weight.value / heightPow
    bmi = bmi.toFixed(1)

    bmiRes.innerHTML = `Your BMI: ${bmi}`

    let message = "Your Category: "

    if (bmi < 18.5) { // Underweight = <18.5
        categoryRes.innerHTML = `${message} Underweight`
    } else if (bmi >= 18.5 && bmi <= 24.9) { // Normal weight = 18.5–24.9
        categoryRes.innerHTML = `${message} Normal Weight`
    } else if (bmi >= 25 && bmi <= 29.9) { // Overweight = 25–29.9
        categoryRes.innerHTML = `${message} Overweight`
    } else if (bmi >= 30) {
        categoryRes.innerHTML = `${message} Obesity`
    } else { // Obesity = BMI of 30 or greater
        categoryRes.innerHTML = `${message}`
    }
}
calculateBmi.addEventListener("click", app)