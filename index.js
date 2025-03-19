const ctx = document.getElementById('myChart').getContext('2d');
const data = {
  labels: ['January' , 'February' , 'MArch' , 'April' , 'May' ],
  datasets: [{
    label: 'Monthly Sales',
    data: [65,59,80,81,57],
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',  
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
    ],
    borderWidth: 1
  }]
}
const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
        font: {
          size: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Monthly Sales Data: ${context.raw}`;
            // console.log(context);
          }
        }
      }
    }
  }
});