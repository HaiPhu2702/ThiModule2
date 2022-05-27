export class Product {

    private _ID:number;
     _Name:string;
    private _Type:string;
    private _Price:string;
    private _Number:number;


    constructor(ID: number, Name: string, Type: string, Price: string, Number: number) {
        this._ID = ID;
        this._Name = Name;
        this._Type = Type;
        this._Price = Price;
        this._Number = Number;

    }


    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Type(): string {
        return this._Type;
    }

    set Type(value: string) {
        this._Type = value;
    }


    get Number(): number {
        return this._Number;
    }

    set Number(value: number) {
        this._Number = value;
    }


}
