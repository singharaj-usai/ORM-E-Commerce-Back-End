const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//25-Ins_Literals

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
  const categoryData = await Category.findAll({
    include: [{ model: Product }, { attributes: ['id','product_name','price','stock'] }],
    attributes: ['id','category_name']
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Driver.findByPk(req.params.id, {
      include: [{ model: Product }, { attributes: ['id','product_name','price','stock'] }],
      attributes: ['id','category_name']
      });

    if (!categoryData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//11-ins_restful-routes

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({category_name: req.body});
    // 200 status code means the request is successful
    res.status(200).json(categoryData);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
