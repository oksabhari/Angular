
import { Component } from "@angular/core"
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.compontent.html',
    styleUrls: ['./product-list.compontent.css']

})
export class ProductListComponent {
    pageTitle: string = 'Sab Product List';
    showImage: boolean = false;
    imageSizeInPix: Number = 50;
    imageMarginInPix: Number = 2;


    _listfilterName: string;
    get listFilter(): string {
        return this._listfilterName;
    }
    set listFilter(value: string) {
        this._listfilterName = value;
        this.filterProducts = this.listFilter ? this.doFilter(this.listFilter) : this.products;

    }
    constructor(){
        this.filterProducts=this.products;
        this.listFilter='lap';
    }
    filterProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Laptop",
            "productCode": "Lap-123",
            "available": true,
            "price": 250,
            "rating": 3.5,
            "imageUrl": require("../icons/laptop.jpg")
        },
        {
            "productId": 2,
            "productName": "Desktop",
            "productCode": "Des-123",
            "available": false,
            "price": 500,
            "rating": 5,
            "imageUrl": require("../icons/desktop.png")
        },
        {
            "productId": 3,
            "productName": "Printer",
            "productCode": "Pri-123",
            "available": true,
            "price": 157.65,
            "rating": 1,
            "imageUrl": require("../icons/printer.png")
        }
    ];

    toggleButton(): void {

        this.showImage = !this.showImage;
    };

    doFilter(filterBy: string): IProduct[] {

        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product, Iproduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) != -1);
    }

}