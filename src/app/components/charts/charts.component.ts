import { Component } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.less"],
})
export default class ChartsComponent {
  Highcharts: typeof Highcharts = Highcharts;

  columnChartOptions: Highcharts.Options = this.getColumnChartOptions();

  lineChartOptions: Highcharts.Options = this.getLineChartOptions();

  pieChartOptions: Highcharts.Options = this.getPieChartOptions();

  getColumnChartOptions(): Highcharts.Options {
    return {
      chart: {
        type: "column",
      },
      title: {
        text: "Column chart with negative values",
      },
      xAxis: {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: "column",
          name: "John",
          data: [5, 3, 4, 7, 2],
        },
        {
          type: "column",
          name: "Jane",
          data: [2, -2, -3, 2, 1],
        },
        {
          type: "column",
          name: "Joe",
          data: [3, 4, 4, -2, 5],
        },
      ],
    };
  }

  getLineChartOptions(): Highcharts.Options {
    return {
      chart: {
        type: "line",
      },
      title: {
        text: "Monthly Average Temperature",
      },
      subtitle: {
        text: "Source: WorldClimate.com",
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        title: {
          text: "Temperature (°C)",
        },
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          type: "line",
          name: "Tokyo",
          data: [
            7.0,
            6.9,
            9.5,
            14.5,
            18.4,
            21.5,
            25.2,
            26.5,
            23.3,
            18.3,
            13.9,
            9.6,
          ],
        },
        {
          type: "line",
          name: "London",
          data: [
            3.9,
            4.2,
            5.7,
            8.5,
            11.9,
            15.2,
            17.0,
            16.6,
            14.2,
            10.3,
            6.6,
            4.8,
          ],
        },
      ],
    };
  }

  getPieChartOptions(): Highcharts.Options {
    return {
      chart: {
        plotBackgroundColor: "",
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: "Browser<br>shares<br>2017",
        align: "center",
        verticalAlign: "middle",
        y: 60,
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: "bold",
              color: "white",
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ["50%", "75%"],
          size: "110%",
        },
      },
      series: [
        {
          type: "pie",
          name: "Browser share",
          innerSize: "50%",
          data: [
            ["Chrome", 58.9],
            ["Firefox", 13.29],
            ["Internet Explorer", 13],
            ["Edge", 3.78],
            ["Safari", 3.42],
            {
              name: "Other",
              y: 7.61,
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    };
  }
}
