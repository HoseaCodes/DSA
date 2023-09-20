function calculateTotalSalesWithTax(products, taxes) {
    let total = 0;
    for (let index = 0; index < products.length; index++) {
        const product = products[index];
        const price = product.price * product.quantity
        total += price;
    }
    const calculatedTaxes = total * (taxes / 100);
    return (parseFloat(total + calculatedTaxes))
}

module.exports = calculateTotalSalesWithTax;
