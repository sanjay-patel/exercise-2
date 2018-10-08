import { Component, OnInit } from "@angular/core"; 
import { DataItem } from "../model/dataItem";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public data: DataItem[] = [];
    public sliderValue1 = 15;
    public sliderValue2 = 40;
    public sliderValue3 = 800;
    public sliderValue4 = 80;
    public sliderValue5 = 100;
    
    constructor() {}

    ngOnInit(): void {
        this.data = [ 
            {
                id: '1',
                name: 'Gel Name',
                code: 'L002'
            },
            {
                id: '2',
                name: 'Gel Name',
                code: 'L035'
            },
            {
                id: '3',
                name: 'Gel Name',
                code: 'L003'
            },
            {
                id: '4',
                name: 'Gel Name',
                code: 'L058'
            },
            {
                id: '5',
                name: 'Gel Name',
                code: 'L004'
            },
            {
                id: '6',
                name: 'Gel Name',
                code: 'L027'
            }
        ];
    }
    
    public onTap() {
        let alertView = "First Slider: " + this.sliderValue1 + "\n" +
            "Second Slider: " + this.sliderValue2 + "\n" +
            "Third Slider: " + this.sliderValue3 + "\n" +
            "Fourth Slider: " + this.sliderValue4 + "\n" +
            "Fifth Slider: " + this.sliderValue5;
        alert(alertView);
    }
}
