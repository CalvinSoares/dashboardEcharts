import ReactEcharts from "echarts-for-react"; 

const salesData = [
    { date: '1', amount: 1000 },
    { date: '2', amount: 1500 },
    { date: '3', amount: 2000 },
    { date: '4', amount: 6000 },
    { date: '5', amount: 7000 },
    { date: '6', amount: 2000 },
    { date: '7', amount: 3000 },
    { date: '8', amount: 1000 },
    { date: '9', amount: 10500 },
    { date: '10', amount: 2000 },
    { date: '11', amount: 9000 },
    { date: '12', amount: 7000 },
    { date: '13', amount: 2000 },
    { date: '14', amount: 3000 },
    

  ];

const LineChart = () => {

    const option = {
        xAxis: {
            type: 'category',
            data: salesData.map((item) => item.date)
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: false
            }
          },
          
          series: [
            {
              data: salesData.map((total) => total.amount),
              type: 'line',
              smooth: true,
              
            },
            
          ],
          height: "60%",
            width: "85%",
    }


    return <ReactEcharts option={option} className="min-w-full m-auto"/>
}

export default LineChart
