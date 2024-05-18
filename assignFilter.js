var cars = [
    {
        name: "Toyota",
        color: "Red",
        price: 750000,
        city: "Hyderabad",
    },
    {
        name: "Honda",
        color: "White",
        price: 800000,
        city: "Karachi",
    },
    {
        name: "Toyota",
        color: "White",
        price: 850000,
        city: "Hyderabad",
    },
    {
        name: "Toyota",
        color: "Black",
        price: 775000,
        city: "Lahore",
    },
    {
        name: "Suzuki",
        color: "White",
        price: 855000,
        city: "Lahore",
    },
    {
        name: "Toyota",
        color: "Black",
        price: 950000,
        city: "Lahore",
    },
    {
        name: "Honda",
        color: "Black",
        price: 1000000,
        city: "Lahore",
    },
    {
        name: "Honda",
        color: "White",
        price: 875000,
        city: "Karachi",
    },
    {
        name: "Suzuki",
        color: "White",
        price: 1100000,
        city: "Hyderabad",
    },
    {
        name: "Toyota",
        color: "White",
        price: 850000,
        city: "Hyderabad",
    }
];
// const filterColor : string[] = cars.filter((colorVal : string) => colorVal == "Red")
// console.log(cars[0].color)
var filterCar = cars.filter(function (matchatt) { return (matchatt.city == "Hyderabad" && matchatt.color == "White") && (matchatt.name == "Suzuki"); });
console.log(filterCar);
