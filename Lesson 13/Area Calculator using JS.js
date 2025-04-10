var choice = prompt("Welcome to the Area Calculator! \nPlease enter Your choice in Numbers. \n 1.Area of Rectangle \n 2.Area of Square \n 3.Area of Traingle \n 4.Area of Parallelogram \n 5.Area of Circle")

if(choice == "1"){
    var length = prompt("Enter the Length")
    var breadth = prompt("Enter the Breadth/Width")
    var result = Number(length) * Number(breadth)
    alert("The area is "+ result)
}
if(choice == "2"){
    var side = prompt("Enter the length of the Side")
    var result = Number(side) * Number(side)
    alert("The area is "+ result)
}
if(choice == "3"){
    var base = prompt("Enter the Base")
    var height = prompt("Enter the Height")
    var result = Number(base) * Number(height) /2
    alert("The area is "+ result)
}
if(choice == "4"){
    var base = prompt("Enter the Base")
    var height = prompt("Enter the Height")
    var result = Number(base) * Number(height)
    alert("The area is "+ result)
}
if(choice == "5"){
    var radius = prompt("Enter the Radius")
    var result = 3.14 * Number(radius) * Number(radius)
    alert("The area is "+ result)
}