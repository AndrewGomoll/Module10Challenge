//Import fs and inquirer
const fs = require('fs');
const inquirer = require("inquirer");

//set Square, Circle, and Triangle to require data from shapes file
const {Square, Circle, Triangle} = require("./lib/shapes");

//Svg defines svg file
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

//Questions for user about logo
const questions =
[
{
    type: "input",
    name: "userText",
    message: "Enter text you would like to add: ",
},

{
    type: "input",
    name: "textColor",
    message: "Enter the color you would like the text to be: ",
},

{
    type: "list",
    name: "shape",
    message: "Enter the shape you would like to add: ",
    choices: ["Square", "Circle", "Triangle"],
},

{
    type: "input",
    name: "backgroundColor",
    message: "Enter the color of the shape: ",
}
];
//writes data to svg file
function writeToFile(fileName, data)
{
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
//async function waits for questions to be answered before running. Checks text length, calls correct functions based on input, creates new svg file
async function init()
{
    const answers = await inquirer.prompt(questions);

    if (answers.userText.length > 0 && answers.userText.length < 4)
    {
		user_text = answers.text;
	}
    else
    {
		console.log("Enter 1-3 characters to display in text:");
    }
    
    var userText = answers["userText"];

    var textColor = answers["textColor"];

    var shape = answers.shape;

    var backgroundColor = answers["backgroundColor"];

     let newShape;


    switch(shape)
    {
        case "Square":
            newShape = new Square();
            break;
        case "Circle":
            newShape = new Circle();
            break;
        case "Triangle":
            newShape = new Triangle();
            break;
        default:
            console.log("Incorrect Shape");
    }

    newShape.setColor(backgroundColor);

    var svg = new Svg();
	svg.setTextElement(userText, textColor);
	svg.setShapeElement(newShape);
	svgString = svg.render();

    var svgFile = "logo.svg";
    writeToFile(svgFile, svgString);

    
    console.log("Generated logo.svg");
}

init();