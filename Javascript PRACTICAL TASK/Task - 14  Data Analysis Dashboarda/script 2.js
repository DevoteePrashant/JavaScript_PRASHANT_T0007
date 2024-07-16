const mobileSales = [
  {
      "apple": {
          "iPhone 12": {
              "salesCount": 2000,
              "unicode": 54634,
              "Discount": 1120
          },
          "iPhone 13": {
              "salesCount": 1550,
              "unicode": 5665,
              "Discount": 120
          }
      }
  },
  {
      "sememe": {
          "sememe 12": {
              "salesCount": 2250,
              "unicode": 51614,
              "Discount": 110
          },
          "sememe 13": {
              "salesCount": 850,
              "unicode": 2065,
              "Discount": 20
          }
      }
  },
  {
      "samsung": {
          "Galaxy S22": {
              "salesCount": 1800,
              "unicode": 45678,
              "Discount": 150
          },
          "Galaxy S23": {
              "salesCount": 1200,
              "unicode": 67890,
              "Discount": 100
          }
      }
  },
  {
      "google": {
          "Pixel 6": {
              "salesCount": 900,
              "unicode": 34567,
              "Discount": 80
          },
          "Pixel 7": {
              "salesCount": 600,
              "unicode": 23456,
              "Discount": 60
          }
      }
  },
  {
      "oneplus": {
          "OnePlus 9": {
              "salesCount": 1500,
              "unicode": 56789,
              "Discount": 130
          },
          "OnePlus 10": {
              "salesCount": 1000,
              "unicode": 78901,
              "Discount": 90
          }
      }
  },
  {
      "huawei": {
          "P30": {
              "salesCount": 1200,
              "unicode": 90123,
              "Discount": 110
          },
          "P40": {
              "salesCount": 800,
              "unicode": 45678,
              "Discount": 80
          }
      }
  },
  {
      "huawei2": {
          "P30": {
              "salesCount": 1110,
              "unicode": 97523,
              "Discount": 500
          },
          "P40": {
              "salesCount": 1013,
              "unicode": 47878,
              "Discount": 500
          }
      }
  }
];

let chart;

async function loadQuestions() {
  chart = new Chart(document.getElementById("pie-chart"), {
      type: 'bar',
      data: {
          labels: mobileSales.map(item => Object.keys(item)[0]),
          datasets: [{
              backgroundColor: [
                  "#610101",
                  "#459565",
                  "#789365",
                  "#782565",
                  "#239565",
                  "#534cd8",
                  "#534cd8"
              ],
              data: mobileSales.map(item => Object.values(item)[0].salesCount) // default data
          }]
      },
      options: {
          legend: { display: false },
          title: {
              display: true,
              text: 'Students Data'
          }
      }
  });
}

loadQuestions();

const selectElement = document.getElementById("Mobiles");
selectElement.addEventListener("change", (e) => {
  e.preventDefault();
  const selectedValue = e.target.value;
  const selectedMobile = mobileSales.find(item => Object.keys(item)[0] === selectedValue);
  chart.data.labels = [selectedValue];
  chart.data.datasets[0].data = [Object.values(selectedMobile[selectedValue])[0].salesCount];
  chart.update(); // Update the chart
});

const selectElement2 = document.getElementById("connect2");
selectElement2.addEventListener("change", (e) => {
  e.preventDefault();
  const selectedValue = e.target.value;
  const selectedMobile = mobileSales[0]; // assuming the first object
  chart.data.datasets[0].data = [Object.values(selectedMobile[Object.keys(selectedMobile)[0]])[0][selectedValue]];
  chart.update(); // Update the chart
});