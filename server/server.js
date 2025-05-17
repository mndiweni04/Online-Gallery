const express = require('express');
const PORT = 5000;
const app = express();
const path = require('path');
const userRoutes = require('./routes/login.js')
const adminRoutes = require('./routes/admin.js') 

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'public/image')));

let imgPlants = [
    { id: 'Buddah-Belly_img', name: 'Buddah Belly Plant', img: '/images/Buddah-Belly-Plant.jpg' },
    { id: 'Daisies_img', name: 'Daisies', img: '/images/daisies.jpg' },
    { id: 'Dandelion_img', name: 'Dandelion', img: '/images/dandelion.jpg' },
    { id: 'Ivy_img', name: 'Ivy', img: '/images/ivy.jpg' },
    { id: 'Lily_img', name: 'Lily', img: '/images/lily.jpg' },
    { id: 'Lotus_img', name: 'Lotus', img: '/images/lotus.jpg' },
    { id: 'Maple-leaves_img', name: 'Maple Leaves', img: '/images/maple-leaves.jpg' },
    { id: 'Reeds_img', name: 'Reeds', img: '/images/reeds.jpg' },
    { id: 'Rose_img', name: 'Roses', img: '/images/rose.jpg'}
];

app.get('/api/images', (req, res) => {
  res.json(imgPlants);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));