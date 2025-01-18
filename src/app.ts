import express, { Express } from "express";
import setupSwagger from "../config/swagger";

// Initialize Express application
const app: Express = express();

setupSwagger(app);

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
export default app;