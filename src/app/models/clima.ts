export class Clima {
    temp:string;
    feels_like:string;
    temp_min:string;
    temp_max:string;
    pressure:string;
    humidity:string;
    speed:string;
    Clima(temp?:string,feels_like?:string,temp_min?:string,temp_max?:string,pressure?:string,humidity?:string,speed?:string){
        this.temp=temp;
        this.feels_like=feels_like;
        this.temp_min=temp_min;
        this.temp_max=temp_max;
        this.pressure=pressure;
        this.humidity=humidity;
        this.speed=speed;
    }
}
