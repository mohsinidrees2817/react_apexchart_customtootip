import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chartclass extends Component {
  constructor(props) {
    super(props);

    const data = [
      {
        datavalue: 4,
        timespent: "00:24",
        image: "./pdf.png",
      },
      {
        datavalue: 1,
        timespent: "00:09",
        image: "./pdf.png",
      },
      {
        datavalue: 1,
        timespent: "00:34",
        image: "./pdf.png",
      },
      {
        datavalue: 1,
        timespent: "00:24",
        image: "./pdf.png",
      },
      {
        datavalue: 1,
        timespent: "00:49",
        image: "./pdf.png",
      },
      {
        datavalue: 7,
        timespent: "00:34",
        image: "./pdf.png",
      },
      {
        datavalue: 4,
        timespent: "00:39",
        image: "./pdf.png",
      },
      // {
      //   datavalue: 9,
      //   timespent: "00:39",
      //   image: "./pdf.png",
      // },
    ];

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: data.map((item, index) => index + 1),
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: 0,
                  to: 100,
                  color: "#fb7490",
                },
              ],
            },
          },
        },
        tooltip: {
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            const { datavalue, timespent, image } = data[dataPointIndex];
            const totalBars = data.length;
            const hoveredBarIndex = dataPointIndex + 1;
            let mid = Math.round(totalBars / 2);

            // Check if totalBars is even
            if (totalBars % 2 === 0) {
              mid += 1;
            }
            const tooltip = document.querySelector(".apexcharts-tooltip");
            if (tooltip) {
              if (hoveredBarIndex > mid) {
                console.log("i run");
                tooltip.style.marginLeft = "120px";
              } else {
                tooltip.style.marginLeft = "-120px";
              }
            }
            console.log(mid, "hoveredBarIndex");
            return `
            <div class="custom-tooltip"   >
              <div class = "tooltip-container">
                <img class = "img-pdf" src="${image}" alt="pdf" />
                <div class = "tooltip-text text-container">
                    <div class = "tooltip-index">
                        <p  class="text-heading"> PAGE </p>
                        <p class = "tooltip-text text-center">${hoveredBarIndex}/${totalBars} </p>
                    </div>
                    <div class = "tooltip-time">
                        <p class="text-heading"> TIME SPENT</p>
                        <p class = "tooltip-text text-end">${timespent} </p>
                    </div>
                </div>
              </div>
            </div>
            `;
          },
          enabled: true,
        },
      },
      series: [
        {
          name: "series-1",
          data: data.map((item) => item.datavalue),
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="600"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chartclass;
