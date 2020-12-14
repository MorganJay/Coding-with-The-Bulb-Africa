// const circle = {
//     radius: 7,
//     location: {
//         x: 2, y: 0
//     },
//     isVisble: true,
//     draw: function(){
//         console.log("draw");
//     }
// };

// factory functions
function createCircle(radius) { // ! uses camelCase
    return {
        radius,
        draw(){
            console.log("draw");
        }
    };
}

const circle1 = createCircle(4);
// console.log(circle1);

//constructor functions
function Circle(radius){
    this.radius = radius;
    this.draw= function() {
        console.log("draw");
    }
}

const circle = new Circle(100);