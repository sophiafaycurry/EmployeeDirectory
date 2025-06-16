// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Placeholder employee data
const employees = [
  { id: 1, name: 'Alice Johnson', position: 'Manager' },
  { id: 2, name: 'Bob Smith', position: 'Engineer' },
  { id: 3, name: 'Carol Lee', position: 'Designer' },
  { id: 4, name: 'David Kim', position: 'Product Manager' },
  { id: 5, name: 'Evelyn Martinez', position: 'HR Specialist' }
];

// GET / => Sends "Hello employees"
app.get('/', (req, res) => {
  res.send('Hello employees');
});

// GET /employees => Sends the array of employees
app.get('/employees', (req, res) => {
  res.json(employees);
});

// GET /employees/:id => Sends the employee with the given id
app.get('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employees.find(emp => emp.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).json({ message: 'Employee not found' });
  }
});

// GET /employees/random => Sends a random employee
app.get('/employees/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  res.json(employees[randomIndex]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
