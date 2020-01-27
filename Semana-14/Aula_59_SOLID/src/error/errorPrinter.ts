export class ErrorPrinter {
    constructor(public errorMessage: string, public date: string){}

    onError():void {
        console.log(`${this.errorMessage} - ${this.date}`);
    }
}