export class Product {
    constructor(
        public name: string,
        public description: string,
        public category: string,
        public price: number,
        public priceType: string,
        public brand: string,
        public size: number,
        public sizeUnit?: string,
        public imageUrl?: string,
        public id?:number, //? after parameter name indicates that this parameter is optional

        ){}
}
