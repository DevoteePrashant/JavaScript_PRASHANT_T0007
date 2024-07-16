const mobileSales =  [{
        "name": "iPhone 13",
        "salesCount": 1250,
        "unicode": 54634
        ,"Discount": 1120,        
      },
      {
        "name": "Samsung Galaxy S21",
        "salesCount": 980,
        "unicode": 53634
        ,"Discount": 820,
      },
      {
        "name": "Google Pixel 6",
        "salesCount": 675,
        "unicode": 68634
        ,"Discount": 1020,
      },
      {
        "name": "OnePlus 9",
        "salesCount": 1080,
        "unicode": 62634
        ,"Discount": 720,
      },
      {
        "name": "Xiaomi Mi 11",
        "salesCount": 830,
        "unicode": 80634,
        "Discount": 580,
        }];

        let chart ;
  
        async function loadQuestions() {
            chart = new Chart(document.getElementById("pie-chart"), {
                type: 'bar',
                data: {
                  labels: mobileSales.map(item => item.name),
                  datasets: [{
                    backgroundColor: [
                      "#610101",
                      "#789565",
                      "#239565",
                      "#534cd8",
                      "#610101",
                      "#789565",
                      "#239565",
                      "#443412",
                      "#534cd8"
                    ],
                    data: mobileSales.map(item => item.salesCount) // default data
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

          loadQuestions()
  
          const selectElement = document.getElementById("Mobiles");
          selectElement.addEventListener("change", (e) => {
            e.preventDefault()
            const selectedValue = e.target.value;
            const selectedMobile = mobileSales.find(item => item.name === selectedValue);
            chart.data.labels = [selectedMobile.name];
            chart.data.datasets[0].data = [selectedMobile.salesCount];
            chart.update(); // Update the chart
          });
          
          const selectElement2 = document.getElementById("connect2");
          selectElement2.addEventListener("change", (e) => {
            e.preventDefault()
            const selectedValue1 = e.target.value;
            const selectedData = mobileSales.map(item => item[selectedValue1]);
            chart.data.datasets[0].data = selectedData;
            chart.update(); // Update the chart
          });