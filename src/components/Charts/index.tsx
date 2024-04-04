import ReactEcharts from "echarts-for-react"; 

function SalesChart() {  
const option = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    left: '65%',
    top: '38%',
    orient: "vertical",
    itemHeight: 16,
    itemWidth: 20,
    textStyle: {
      color: "rgba(255, 255, 255, 1)",
      fontSize: 14
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 10,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 2000, name: 'boleto' },
        { value: 5000, name: 'cartão' },
        { value: 3000, name: 'pix' },
      ],
      height: "100%",
      width: "55%",
      top: "8%",
      left: "10%",
    }
  ]
}; 
return <ReactEcharts option={option} style={{ height: '200px' }} className="w-[300px] bottom-28"/>;
} 
export default SalesChart;