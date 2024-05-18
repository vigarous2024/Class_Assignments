type VehicleData = [{
    name : string, //01
    color : string,
    price : number,
    city : string,
},
{   name : string,//02
    color : string,
    price : number,
    city : string,
},
{
    name : string,//03
    color : string,
    price : number,
    city : string,
},
{    name : string,//04
    color : string,
    price : number,
    city : string,
},
{   name : string,//05
    color : string,
    price : number,
    city : string,
},
{
    name : string,//06
    color : string,
    price : number,
    city : string,
},
    {name : string,//07
    color : string,
    price : number,
    city : string,
},
{   name : string,//08
    color : string,
    price : number,
    city : string,
},
{
    name : string,//09
    color : string,
    price : number,
    city : string,
},
{
    name : string,//10
    color : string,
    price : number,
    city : string,
},
]
const cars : VehicleData = [
    {
        name : "Toyota",    //01
        color : "Red",
        price : 750000,
        city : "Hyderabad",
    },
    {
        name : "Honda",     //02
        color : "White",
        price : 800000,
        city : "Karachi",
    },
    {
        name : "Toyota",    //03
        color : "White",
        price : 850000,
        city : "Hyderabad",
    },
    {
        name : "Toyota",       //04
        color : "Black",
        price : 775000,
        city : "Lahore",
    },
    {
        name : "Suzuki",     //05
        color : "White",
        price : 855000,
        city : "Lahore",
    },
    {
        name : "Toyota",    //06
        color : "Black",
        price : 950000,
        city : "Lahore",
    },
    {
        name : "Honda",       //07
        color : "Black",
        price : 1000000,
        city : "Lahore",
    },
    {
        name : "Honda",     //08
        color : "White",
        price : 875000,
        city : "Karachi",
    },
    {
        name : "Suzuki",    //09
        color : "White",
        price : 1100000,
        city : "Hyderabad",
    },

    {
        name : "Toyota",    //10
        color : "White",
        price : 850000,
        city : "Hyderabad",
    }
]
// const filterColor : string[] = cars.filter((colorVal : string) => colorVal == "Red")
// console.log(cars[0].color)
const filterCar = cars.filter((matchatt:{name,color,price,city}) => (matchatt.city == "Hyderabad" && matchatt.color == "White") && (matchatt.name == "Suzuki"))
console.log(filterCar)
