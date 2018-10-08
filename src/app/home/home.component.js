"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.data = [];
        this.sliderValue1 = 15;
        this.sliderValue2 = 40;
        this.sliderValue3 = 800;
        this.sliderValue4 = 80;
        this.sliderValue5 = 100;
    }
    HomeComponent.prototype.ngOnInit = function () {
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
    };
    HomeComponent.prototype.onTap = function () {
        var alertView = "First Slider: " + this.sliderValue1 + "\n" +
            "Second Slider: " + this.sliderValue2 + "\n" +
            "Third Slider: " + this.sliderValue3 + "\n" +
            "Fourth Slider: " + this.sliderValue4 + "\n" +
            "Fifth Slider: " + this.sliderValue5;
        alert(alertView);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVFsRDtJQVNJO1FBUE8sU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztRQUNuQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBWSxHQUFHLEdBQUcsQ0FBQztJQUVYLENBQUM7SUFFaEIsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDUjtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2Y7WUFDRDtnQkFDSSxFQUFFLEVBQUUsR0FBRztnQkFDUCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsSUFBSSxFQUFFLE1BQU07YUFDZjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxHQUFHO2dCQUNQLElBQUksRUFBRSxVQUFVO2dCQUNoQixJQUFJLEVBQUUsTUFBTTthQUNmO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLFNBQVMsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7WUFDdkQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJO1lBQzVDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSTtZQUMzQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUk7WUFDNUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQXJEUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FzRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjsgXG5pbXBvcnQgeyBEYXRhSXRlbSB9IGZyb20gXCIuLi9tb2RlbC9kYXRhSXRlbVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBkYXRhOiBEYXRhSXRlbVtdID0gW107XG4gICAgcHVibGljIHNsaWRlclZhbHVlMSA9IDE1O1xuICAgIHB1YmxpYyBzbGlkZXJWYWx1ZTIgPSA0MDtcbiAgICBwdWJsaWMgc2xpZGVyVmFsdWUzID0gODAwO1xuICAgIHB1YmxpYyBzbGlkZXJWYWx1ZTQgPSA4MDtcbiAgICBwdWJsaWMgc2xpZGVyVmFsdWU1ID0gMTAwO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGEgPSBbIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnMScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dlbCBOYW1lJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnTDAwMidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR2VsIE5hbWUnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdMMDM1J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJzMnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdHZWwgTmFtZScsXG4gICAgICAgICAgICAgICAgY29kZTogJ0wwMDMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnNCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dlbCBOYW1lJyxcbiAgICAgICAgICAgICAgICBjb2RlOiAnTDA1OCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICc1JyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnR2VsIE5hbWUnLFxuICAgICAgICAgICAgICAgIGNvZGU6ICdMMDA0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJzYnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdHZWwgTmFtZScsXG4gICAgICAgICAgICAgICAgY29kZTogJ0wwMjcnXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgbGV0IGFsZXJ0VmlldyA9IFwiRmlyc3QgU2xpZGVyOiBcIiArIHRoaXMuc2xpZGVyVmFsdWUxICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIlNlY29uZCBTbGlkZXI6IFwiICsgdGhpcy5zbGlkZXJWYWx1ZTIgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwiVGhpcmQgU2xpZGVyOiBcIiArIHRoaXMuc2xpZGVyVmFsdWUzICsgXCJcXG5cIiArXG4gICAgICAgICAgICBcIkZvdXJ0aCBTbGlkZXI6IFwiICsgdGhpcy5zbGlkZXJWYWx1ZTQgKyBcIlxcblwiICtcbiAgICAgICAgICAgIFwiRmlmdGggU2xpZGVyOiBcIiArIHRoaXMuc2xpZGVyVmFsdWU1O1xuICAgICAgICBhbGVydChhbGVydFZpZXcpO1xuICAgIH1cbn1cbiJdfQ==