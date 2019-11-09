import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  dates: string[] = ['January','February', 'March','April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
  @ViewChild("doughnutCanvas",{static: true}) doughnutCanvas: ElementRef;


  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;

  ngOnInit() {
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Visual Acuity", "Eye Movement", "Pupiliary Reflex"],
        datasets: [
          {
            label: "# of Votes",
            data: [100, 100, 100],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  }
  onDateChange(date){
    console.log(date);
  }
  constructor() {}

}
