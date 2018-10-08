import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as app from "application";
import { DataItem } from "../model/dataItem";

@Component({
    selector: "my-gel",
    moduleId: module.id,
    templateUrl: "./gel.component.html",
    styleUrls: ['./gel.component.css']
})
export class GelComponent implements OnInit, OnChanges {

    public _dataItems: ObservableArray<DataItem>;
    public data: DataItem[] = [];
    public spanCount: string; 
    @Input() gelData: {};
    
    constructor(private cdr: ChangeDetectorRef) {
        app.on("orientationChanged", this.onOrientationChanged);
    }
    
    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit(): void {
        // this.cdr.detectChanges(); 
    }
    
    public onOrientationChanged = (evt) => {
          console.log(evt.eventName); // orientationChanged
          console.log(evt.newValue); //landscape or portrait
          
          if (evt.newValue === 'landscape') {
            this.spanCount = '4';
          } else {
            this.spanCount = '2';
          }
          console.log(this.spanCount);
    }
    onGallertItemTap(escortID: string, escortName: string): void {
        console.log('escortID', escortID);
     
    }
    
    ngOnChanges(changes: SimpleChanges) {
        // console.log('changes', changes); 
        if (changes.gelData.currentValue !== undefined) {
            this.data = changes.gelData.currentValue;
            console.log('profileInfo==', this.data);
            this._dataItems = new ObservableArray(this.data);  
        }
    }

}
