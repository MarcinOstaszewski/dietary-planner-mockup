import { makeAutoObservable } from 'mobx';

class Store {
    maxWeek = 12;
    currentWeek: number = 7;
    proteinOptions = {
        vegetables: true,
        cheese: true,
        meat: true,
        fish: false,
        chicken: false
    }

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentWeek(change: number) {
        this.currentWeek = this.currentWeek + change;
    }
}

const store = new Store();

export default store;