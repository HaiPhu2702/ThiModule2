import {Product} from "./Product";

export class ProductManager{
    ListProduct:Product[];

    constructor() {
        this.ListProduct=[];
    }

    showList(){
        return this.ListProduct
    }

    add(product:Product):void{
        this.ListProduct.push(product)
    }

    delete(index){
        if(this.searchID(index)==true){
            this.ListProduct.splice(index,1)
            return true
        }
        return false

    }

    update(index:number,Name:string,Type:string, Price: string, Number: number){

        if(this.searchID(index)==true){
            let product1=new Product(index,Name,Type,Price,Number)
            this.ListProduct[index]=product1;
            return true;
        }
        return false;
}

    searchID(Index:number){
        let find=0
        this.ListProduct.forEach((value,index1)=>{
            if(index1==Index){
                find++;
            }
        })
        if(find==1){
            return true
        }else {
            return false
        }
    }

    searchName(nameProduct:string){
        let find=0
        this.ListProduct.forEach((value,index)=>{
           if(value.Name==nameProduct){
               find++;
           }
        })

        if(find==1){
            return true
        }else {
            return false
        }

    }

}