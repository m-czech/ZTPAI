const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', (req, res) => {
    // mockuje dane
    const products = [
        { id: 1, name: 'Laptop Dell XPS 13', price: 4999.99, inStock: true, tags: ['elektronika', 'komputer'] },
        { id: 2, name: 'Klawiatura mechaniczna', price: 299.50, inStock: false, tags: ['akcesoria', 'gaming'] },
        { id: 3, name: 'Mysz bezprzewodowa Logitech', price: 89.99, inStock: true, tags: ['akcesoria', 'biuro'] },
        { id: 4, name: 'Monitor 27" 4K', price: 1499.00, inStock: true, tags: ['elektronika', 'wyświetlacz'] },
        { id: 5, name: 'Słuchawki Sony WH-1000XM5', price: 1299.99, inStock: true, tags: ['audio', 'premium'] },
        { id: 6, name: 'Pendrive 128GB', price: 45.00, inStock: true, tags: ['akcesoria', 'pamięć'] }
    ];

    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    // mockuje dane
    const products = [
        { id: 1, name: 'Laptop Dell XPS 13', price: 4999.99, inStock: true, tags: ['elektronika', 'komputer'] },
        { id: 2, name: 'Klawiatura mechaniczna', price: 299.50, inStock: false, tags: ['akcesoria', 'gaming'] },
        { id: 3, name: 'Mysz bezprzewodowa Logitech', price: 89.99, inStock: true, tags: ['akcesoria', 'biuro'] },
        { id: 4, name: 'Monitor 27" 4K', price: 1499.00, inStock: true, tags: ['elektronika', 'wyświetlacz'] },
        { id: 5, name: 'Słuchawki Sony WH-1000XM5', price: 1299.99, inStock: true, tags: ['audio', 'premium'] },
        { id: 6, name: 'Pendrive 128GB', price: 45.00, inStock: true, tags: ['akcesoria', 'pamięć'] }
    ];

    const productId = parseInt(req.params.id);
    
    if (isNaN(productId) || productId < 1) {
        return res.status(400).json({ error: 'Invalid product ID' });
    }

    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Product not found' });
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})