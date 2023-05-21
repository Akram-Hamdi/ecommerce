const Personnel = require('../../model/Personnel');

const addPersonnel = async (req, res) => {
  try {
    const { name, position, department, salary, image } = req.body;

    // Create a new personnel object
    const personnel = new Personnel({
      name,
      position,
      department,
      salary,
      image,
    });

    // Save the personnel to the database
    await personnel.save();

    res.send('Personnel added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = addPersonnel;