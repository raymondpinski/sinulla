// Define an object with different types of marks
const Marks = {
    circle: { shape: 'circle', radius: 10 },
    square: { shape: 'square', side: 20 },
    triangle: { shape: 'triangle', base: 15, height: 25 }
};

// Assume scene is an object with a property 'marktype'
const scene = {
    marktype: 'circle'
};

// Use the scene.marktype to dynamically access the correct mark from Marks
const mark = Marks[scene.marktype];

console.log(mark); // Output: { shape: 'circle', radius: 10 }
