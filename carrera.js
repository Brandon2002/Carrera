import Dado from "./dado.js";

const NUMBER = [1, 1, 3, 2, 2, 2];
export default class Carrera{
    constructor(){
        this._runnerA = 0;
        this._runnerB = 0;
        let da = new Dado();
        this._da = da;
    }

    getTurn(){
        for(let i = 0; i < 100; i++){
            if(this._runnerA < 100 && this._runnerB < 100){
                this._runnerA = this._runnerA + NUMBER[this._da.tirarDado() - 1];
                this._runnerB = this._runnerB + NUMBER[this._da.tirarDado() - 1];
                console.log('A:' + this._runnerA);
                console.log('B:' + this._runnerB);
            }
        }
        return [this._runnerA, this._runnerB];
    }

    getWho(value){
        if(value[0] > value[1]){
            return 'El corredor A es el ganador, ¡felicidades!';
        } 
        if(value [0] < value[1]){
            return 'El corredor B es el ganador, ¡felicidades!';
        }
        if(value[0] >= 100 && value[1] >= 100){
            return 'Hubo un empate';
        }
        
    }





}
