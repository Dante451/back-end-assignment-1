import express, { Request, Response } from 'express';
import setupSwagger from "../config/swagger";

// Initialize the Express app
const app = express();
export default app;

setupSwagger(app);

/**
 * @openapi
 * /tasks:
 *   get:
 *     summary: Retrieve a list of tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: A list of tasks
 */
app.get("/tasks", (req, res) => {
	res.send("Retrieve tasks");
});

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
