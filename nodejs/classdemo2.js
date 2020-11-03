 
   


           class Car{
            constructor(brand,price){
                this.brand = brand;
                this.price = price;
            }
            set details(discount){
                this.brand = (this.brand+"").toUpperCase();
                this.price = this.price-discount
            }
            get details(){
                return this.brand+" "+this.price;
            }
        }
        c= new Car('Honda','134234');
        console.log(c);
        c.details='100';
        console.log(c.details);