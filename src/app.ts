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

app.get("/api/v1/health", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});