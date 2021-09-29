import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterServices{
    inactiveToActive = 0;
    activeToInactive = 0;

    counterInactiveTOActive(){
        this.inactiveToActive++;
        console.log("Inactive to Active: " + this.inactiveToActive);  
    }

    counterActiveTOInactive(){
        this.activeToInactive++;
        console.log("Active to Inactive: " + this.activeToInactive);  
    }

}