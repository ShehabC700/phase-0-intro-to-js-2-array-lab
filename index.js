// Write your solution here!
const cats = [`Milo`, `Otis`, `Garfield`]

function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    let backCats = [...cats]
    backCats.push(name)
    return(backCats)
}
function prependCat(name) {
    let copyCats = [...cats]
    copyCats.unshift(name)
    return(copyCats)
}
function removeLastCat() {
    let lastCat = [...cats]
    lastCat.pop()
    return lastCat
}
function removeFirstCat() {
    let firstCat = [...cats]
    firstCat.shift()
    return firstCat
}