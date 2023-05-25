//Shape class sets colors for each instance passed
class Shape{
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    //Returns file syntax for circle shape
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"></circle>`
        }
    }
    //Returns file syntax for square shape
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}"></rect>`
        }
    }
    //Returns file syntax for triangle shape
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`

        }
    };
    
    module.exports = {Circle, Square, Triangle}