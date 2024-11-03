const cars = [
  {brand: "BMW", model: "X5", year: 2020},
  {brand: "AUDI", model: "A4", year: 2019},
  {brand: "LEXUS", model: "RX", year: 2021},
  {brand: "HONDA", model: "TYPE-R", year: 2020},
  {brand: "MERCEDES", model: "C3000", year: 2020},
  {brand: "TOYOTA", model: "CAMRY", year: 2020},
  {brand: "HYUNDAI", model: "SANTA-FE", year: 2020},
  {brand: "BMW", model: "6i", year: 2020},
  {brand: "BMW", model: "8i", year: 2020},
  {brand: "BMW", model: "7i", year: 2020},
];

// Them su kien vao nut tim kiem
document.getElementById("search-btn").addEventListener("click", function(event){
  event.preventDefault(); // Ngăn hành động mặc định của form
  const searchInput = document.getElementById("search").value.toLowerCase().trim();
  const results = document.getElementById("results");
  results.innerHTML = ""; // Làm sạch kết quả trước đó

  if (searchInput === "") {
    results.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  const filteredCars = cars.filter(car => car.brand.toLowerCase().includes(searchInput));

  if (filteredCars.length > 0) {
    filteredCars.forEach(car => {
      results.innerHTML += `<p>${car.brand} - ${car.model} - ${car.year}</p>`;
    });
  } else {
    results.innerHTML = "<p>Can't find the car.</p>";
  }
});
