export {circle};

// move circle object to circle.js
const circle = {
    area(r){
        return Math.PI * (r * r)
    },
    diameter(r){
        return r + r
    }
}
