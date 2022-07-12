let fortune = Math.floor(Math.random() * 11);

// fortune = 0;
// set fortune here

console.log(`fortune number: ${fortune}`)
if (fortune >= 0 && fortune <= 3) {
    console.log("low fortune!")
} else if (fortune > 3 && fortune <= 7) {
    console.log("average fortune!")
} else if (fortune > 7 && fortune <= 10) {
    console.log("great fortune!")
} else {
    console.log("fortune out of range.")
}