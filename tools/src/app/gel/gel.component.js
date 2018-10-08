"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var app = require("application");
var GelComponent = /** @class */ (function () {
    function GelComponent(cdr) {
        var _this = this;
        this.cdr = cdr;
        this.data = [];
        this.onOrientationChanged = function (evt) {
            console.log(evt.eventName); // orientationChanged
            console.log(evt.newValue); //landscape or portrait
            if (evt.newValue === 'landscape') {
                _this.spanCount = '4';
            }
            else {
                _this.spanCount = '2';
            }
            console.log(_this.spanCount);
        };
        app.on("orientationChanged", this.onOrientationChanged);
    }
    Object.defineProperty(GelComponent.prototype, "dataItems", {
        get: function () {
            return this._dataItems;
        },
        enumerable: true,
        configurable: true
    });
    GelComponent.prototype.ngOnInit = function () {
        // this.cdr.detectChanges(); 
    };
    GelComponent.prototype.onGallertItemTap = function (escortID, escortName) {
        console.log('escortID', escortID);
    };
    GelComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes', changes); 
        if (changes.gelData.currentValue !== undefined) {
            this.data = changes.gelData.currentValue;
            console.log('profileInfo==', this.data);
            this._dataItems = new observable_array_1.ObservableArray(this.data);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GelComponent.prototype, "gelData", void 0);
    GelComponent = __decorate([
        core_1.Component({
            selector: "my-gel",
            moduleId: module.id,
            templateUrl: "./gel.component.html",
            styleUrls: ['./gel.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], GelComponent);
    return GelComponent;
}());
exports.GelComponent = GelComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0c7QUFDdEcsMkVBQXlFO0FBQ3pFLGlDQUFtQztBQVNuQztJQU9JLHNCQUFvQixHQUFzQjtRQUExQyxpQkFFQztRQUZtQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUpuQyxTQUFJLEdBQWUsRUFBRSxDQUFDO1FBZ0J0Qix5QkFBb0IsR0FBRyxVQUFDLEdBQUc7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyx1QkFBdUI7WUFFbEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUN2QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDdkIsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQTtRQXJCRyxHQUFHLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxzQkFBSSxtQ0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksNkJBQTZCO0lBQ2pDLENBQUM7SUFhRCx1Q0FBZ0IsR0FBaEIsVUFBaUIsUUFBZ0IsRUFBRSxVQUFrQjtRQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLG9DQUFvQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO0lBQ0wsQ0FBQztJQXJDUTtRQUFSLFlBQUssRUFBRTs7aURBQWE7SUFMWixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNyQyxDQUFDO3lDQVEyQix3QkFBaUI7T0FQakMsWUFBWSxDQTRDeEI7SUFBRCxtQkFBQztDQUFBLEFBNUNELElBNENDO0FBNUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgRGF0YUl0ZW0gfSBmcm9tIFwiLi4vbW9kZWwvZGF0YUl0ZW1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktZ2VsXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2dlbC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2dlbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgcHVibGljIF9kYXRhSXRlbXM6IE9ic2VydmFibGVBcnJheTxEYXRhSXRlbT47XG4gICAgcHVibGljIGRhdGE6IERhdGFJdGVtW10gPSBbXTtcbiAgICBwdWJsaWMgc3BhbkNvdW50OiBzdHJpbmc7IFxuICAgIEBJbnB1dCgpIGdlbERhdGE6IHt9O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICBhcHAub24oXCJvcmllbnRhdGlvbkNoYW5nZWRcIiwgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlZCk7XG4gICAgfVxuICAgIFxuICAgIGdldCBkYXRhSXRlbXMoKTogT2JzZXJ2YWJsZUFycmF5PERhdGFJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhSXRlbXM7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTsgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhldnQuZXZlbnROYW1lKTsgLy8gb3JpZW50YXRpb25DaGFuZ2VkXG4gICAgICAgICAgY29uc29sZS5sb2coZXZ0Lm5ld1ZhbHVlKTsgLy9sYW5kc2NhcGUgb3IgcG9ydHJhaXRcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZXZ0Lm5ld1ZhbHVlID09PSAnbGFuZHNjYXBlJykge1xuICAgICAgICAgICAgdGhpcy5zcGFuQ291bnQgPSAnNCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BhbkNvdW50ID0gJzInO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNwYW5Db3VudCk7XG4gICAgfVxuICAgIG9uR2FsbGVydEl0ZW1UYXAoZXNjb3J0SUQ6IHN0cmluZywgZXNjb3J0TmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlc2NvcnRJRCcsIGVzY29ydElEKTtcbiAgICAgXG4gICAgfVxuICAgIFxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZXMnLCBjaGFuZ2VzKTsgXG4gICAgICAgIGlmIChjaGFuZ2VzLmdlbERhdGEuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGNoYW5nZXMuZ2VsRGF0YS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncHJvZmlsZUluZm89PScsIHRoaXMuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLl9kYXRhSXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHRoaXMuZGF0YSk7ICBcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19