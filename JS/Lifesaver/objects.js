const circle = {
    radius: 7,
    isVisible: true,
    draw: function(){
        console.log("draw");
    }
};

// factory functions
function createCircle(radius) { 
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
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

//const circle = new Circle(100); // new creates an empty object then sets this to point to the origin object and finally returns it
// circle.draw();

// const newCircle = {
//     radius: 1
// };

// newCircle.color = "yellow";
// newCircle.fire = "FIREEEE";
// delete newCircle.fire;
// console.log(newCircle);
//console.log(circle.constructor);

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = function() {
    console.log("draw")
}`);

//const another = new Circle1(5);
//console.log(another);

// Functions are objects
Circle.call({}, 1); 
Circle.apply({}, [1,2,3]);

// Values types vs Reference types
// let x = {value: 10};
// let y = x;

// x.value = 20;
// console.log(x, y);

// for (const key in circle) {
//     console.log(key, circle[key]);    
// }

// for (const key of Object.keys(circle)) {
//     console.log(key);
// }

// for (const entry of Object.entries(circle)) {
//     console.log(entry);
// }

// if("draw" in circle) console.log("yes");

//Cloning an object

//const another = {};
// for (const key in circle) {
//     another[key] = circle[key];
// }

// const another = Object.assign({
//     color: "Yellow"
// }, circle);

const another = {...circle};
//console.log(another);

// Garbage Collection
