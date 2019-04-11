export class Product {
    constructor(
        public name: string,
        public description: string,
        public category: string,
        public price: number,
        public priceType: string,
        public brand: string,
        public size: number,
        // public inventory?: number,
        public _id:string, 
        public sizeUnit?: string, //? after parameter name indicates that this parameter is optional
        public imageUrl?: string,

        ){}
}
