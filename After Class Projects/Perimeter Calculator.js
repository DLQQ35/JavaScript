var choice = prompt("Welcome to the Area Calculator! \nPlease enter Your choice in Numbers. \n 1.Perimeter of Rectangle \n 2.Perimeter of Square \n 3.Perimeter of Traingle \n 4.Circumference of Circle")

if (choice == "1") {
    var length = prompt("Enter the Length")
    var breadth = prompt("Enter the Breadth/Width")
    var result = 2 * (Number(length) + Number(breadth))
    alert("The perimeter is " + result)
}
if (choice == "2") {
    var side = prompt("Enter the length of the Side")
    var result = Number(side) * 4
    alert("The perimeter is " + result)
}
if (choice == "3") {
    var base = prompt("Enter the length of the Side")
    var result = Number(base) + Number(base) + Number(base)
    alert("The perimeter is " + result)
}
if (choice == "4") {
    var radius = prompt("Enter the Radius")
    var result = 2 * 3.14 * Number(radius)
    alert("The circumference is " + result)
}
