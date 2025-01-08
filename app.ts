import express, { Request, Response } from 'express';

// Initialize the Express app
const app = express();

// Define a basic route (GET request)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// Define another route (GET request)
app.get('/about', (req: Request, res: Response) => {
  res.send('This is the about page.');
});

// Define a route with a route parameter (GET request)
app.get('/user/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});

// Set the server to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
