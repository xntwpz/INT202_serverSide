class Cube {
    constructor (side=0){
        this.setSide(side)
    }

    getSide(){
        return this.side
    }
    setSide(n){
        this.side = n ? Math.abs(n) : 0
    }
}
    
const cubeWithSide = new Cube(3);
console.log(cubeWithSide.getSide()); // Output: 3

const cubeWithNoSide = new Cube(0);
console.log(cubeWithNoSide.getSide()); // Output: 0

const cubeWithNegativeSide = new Cube(-5);
console.log(cubeWithNegativeSide.getSide()); // Output: 5