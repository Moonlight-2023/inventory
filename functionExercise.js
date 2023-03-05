// Circle Area

function pi(){

    let pinum;
    pinum = 3.14;

    return (pinum)
}

function R2(r){

    let intRadius;
    intRadius = r * r;

    return (intRadius)
}

function CircleArea (r){
    
    let intArea;
    intArea =  R2(r)* pi();

    return (intArea)
}
console.log(CircleArea(5));

// cylinder Volume

function cylinderVolume (r,h){

    let intVolume;
    intVolume = CircleArea(r) * h

return (intVolume)
}
console.log(cylinderVolume(8,5))

// cylinder Area

function cylinderArea(r,h){

    let itArea;
    itArea = 2 * pi() * r * h;

    return (itArea)
}

console.log(cylinderArea(10,5))

// Cube Area

function CubeArea(a){

    let intArea;
    intArea = a * a * 6

    return(intArea)
}
console.log(CubeArea(8))


// Rectangular Cubic Area

function RectangularCubicArea (l,h,w){

    let intArea;
    intArea = (2 * l * h) + (2 * l * w) + (2 * w * h)

    return(intArea)
}
console.log(RectangularCubicArea(6,8,5))
console.log("Morgh")
