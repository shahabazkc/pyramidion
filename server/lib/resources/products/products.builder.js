class ProductBuilder {
    constructor(product) {
        this.product = product;
    }

    validate() {    
        if(!this.product) throw 'Product not valid';
        if(!this.product?.name || this.product?.name?.length < 5) throw 'Product name should be greater than 5';
        if(!this.product?.category || this.product?.category?.length <= 3) throw 'Product category should be greater than 3';
        if(!this.product?.description || this.product?.description?.length <= 20) throw 'Product description should be greater than 20';
        if(!this.product?.short_description || this.product?.short_description?.length <= 12) throw 'Product short_description should be greater than 12';
        if(!this.product?.seller || this.product?.seller?.length < 4) throw 'Product seller name should be greater than 3';
        if(!this.product?.price || isNaN(this.product?.price) || this.product <= 100 ) throw 'Product price should be greater than 100';
        return this.product;
    }
}

module.exports = ProductBuilder