
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.post('/api/products/value', (req, res) => {
    const products = req.body.products;

    if (!Array.isArray(products)) {
        return res.status(400).json({ error: 'Invalid input, expected an array of products.' });
    }

    let totalValue = 0;

    products.forEach(product => {
        const { price, quality } = product;
        
        
        if (typeof price !== 'number' || typeof quality !== 'number') {
            return res.status(400).json({ error: 'Product must contain numeric price and quality.' });
        }

        totalValue += price * quality; 
    });  

    res.json({ totalValue });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
