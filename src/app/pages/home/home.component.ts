import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PBData} from '../shared/pb.model';
import {PBApiService} from '../shared/pb-api.service';
import {Router} from '@angular/router';
import {RoundProgressEase} from 'angular-svg-round-progressbar/dist';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{

    private barColors = [
        '#f0b778',
        '#e17d5e',
        '#b44332',
    ];

    pbData: PBData;
    pbBars: any = {
        tiles: []
    };
    apiRaw: any;
    selectedBar = -1;
    selectedBarBgcolor = '#fef2e3';
    // progress bar default settings
    max = 0;
    stroke = 25;
    radius = 100;
    semicircle = true;
    rounded = false;
    responsive = false;
    clockwise = true;
    background = '#eaeaea';
    duration = 800;
    animations: string[] = [];
    animation = 'easeOutElastic';// 'easeOutCubic';
    animationDelay = 0;

    constructor(private pbApiService: PBApiService, private router: Router, private _ease: RoundProgressEase) {
        if(_ease){
            for (const prop in _ease) {
                if (prop.toLowerCase().indexOf('ease') > -1) {
                    this.animations.push(prop);
                };
            }
        }
    }

    ngOnInit() {
       this.initLoad();
    }

    private initLoad(): void{
        this.pbApiService.getPBEndpoints().subscribe((data: PBData) => {

            this.pbData = data;
            this.max = data.limit;
            this.pbData.buttons = this.customerSorter(data.buttons);
            this.apiRaw = {
                currentBar: JSON.stringify(this.pbData.buttons),
                endPoint: JSON.stringify(data)
            };
            const barsLen = this.pbData.bars.length;
            for (let i=0; i < barsLen; i++) {
                const b = {
                    idx: i,
                    text: (i+1),
                    cols: (barsLen % 2) ? barsLen-1 : 1,
                    rows: 1,
                    bgcolor: '#f9f8f7',
                    dynamicValue: this.pbComposerSettings(this.pbData.bars[i], this.max),
                    controllDisabled: false
                };

                this.pbBars.tiles.push(b);
            }

        });
    }
 
    increment(amount = 1) {
        const realCurrent = this.pbBars.tiles[this.selectedBar].dynamicValue.realCurrent += amount;
        const current = this.pbBars.tiles[this.selectedBar].dynamicValue.current;
        if (current >= this.max && realCurrent >= this.max) {
            return;
        }
        this.pbBars.tiles[this.selectedBar].dynamicValue.current += amount;

        if(current < 0 || realCurrent < 0){
            this.pbBars.tiles[this.selectedBar].dynamicValue.realCurrent = 0;
            this.pbBars.tiles[this.selectedBar].dynamicValue.current = 0;
            this.pbBars.tiles[this.selectedBar].dynamicValue.controllDisabled = true;
        }

        this.pbBars.tiles[this.selectedBar].dynamicValue.color = this.setBarColor(realCurrent, this.max);
    }
    

   
    getOverlayStyle() {
         const transform = (this.semicircle ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': this.semicircle ? '58%' /*'auto' */: '50%',
            'bottom': this.semicircle ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 3.8 + 'px'
        };
    }


    
    getBarTitleStyle() {
        const transform = 'translateY(-190%) ' + 'translateX(-50%)';
        return {
            'bottom': '75%', 
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
        };
    }

    getBarPercentage(n1: number, n2: number): number{
        return Math.floor((n1 / n2) * 100);
    }

    reload(): void{
        this.reset();
        this.initLoad(); 
    }


    buttonLabel(value: number): string{
        return (value >= 0) ? '+ '+value : '- '+ Math.abs(value);
    }
    
    
    private customerSorter(array: Array<any>): Array<any>{
        array.sort((a: any, b: any) => {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
    
    private reset(): void{
        this.pbData = undefined;
        this.pbBars = {
            tiles: []
        };
        this.apiRaw = {};
        this.selectedBar = -1;
        this.selectedBarBgcolor =  '#fef2e3';

    }
    
    private pbComposerSettings(current: number, max: number): any {
        return {
            current: current,
            color: this.setBarColor(current, max),
            realCurrent: current
        };
    }

   

    private setBarColor(value: number, maxValue: number){
        const pVal: number = Math.floor(maxValue / 2);
        let result = this.barColors[0];

        if(value === 0 || value < pVal){
            result= this.barColors[0];
        } 
        if(value > pVal && value !== maxValue){
            result= this.barColors[1];
        } 
        if(value >= maxValue){
            result= this.barColors[2];
        }

        return result;
    }
    
    
}
