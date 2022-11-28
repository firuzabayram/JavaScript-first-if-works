function fullname() {
  return "firuza";
}

function fullname(firstName, secondName) {
  return firstName + " " + secondName;
}

function addNumbers(a, b) {
  return a + b;
}

function areaOfRectangle(a, b) {
  return a * b;
}

function perimeterOfRectangle(a, b) {
  return (a + b) * 2;
}

function VolumOfRectPrism(a, b, c) {
  return a * b * c;
}

function areaOfCircle(a, R) {
  return (a * R ** 2) / 2;
}

function circumOfCircle(p, V) {
  return p / V;
}

function Selsi(F) {
  return 1/9*F
}

function func(ceki,boy) {
    let hesab=0
    hesab = ceki/(boy*boy)
    if(hesab <18.5){
        return `az ceki : ${hesab}`
    }
    if(hesab >18.5 & hesab<24.4){
        return `normal ceki : ${hesab}`
    }
    if(hesab >24.4 & hesab<29.9){
        return `artiq ceki : ${hesab}`
    }
    if(hesab>29.9){
        return `obez : ${hesab}`
    }
}



console.log("1-", fullname());
console.log("2-", fullname("firuza", "bayram"));
console.log("3-", addNumbers(5, 9));
console.log("4-", areaOfRectangle(5, 9));
console.log("5-", perimeterOfRectangle(5, 9));
console.log("6-", perimeterOfRectangle(5, 9));
console.log("7-", VolumOfRectPrism(5, 9, 1));
console.log("8-", areaOfCircle(5, 9));
console.log("9-", circumOfCircle(5, 7));
console.log("10-", Selsi(56));
console.log("11-", func(43,1.63))
