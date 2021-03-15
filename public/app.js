"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const country_1 = __importDefault(require("./routers/country"));
const counties_1 = __importDefault(require("./routers/counties"));
const app = express_1.default();
app.get("/", (req, res) => {
    return res.json({ test: "Server is running" });
});
app.use("/api/v1/country", country_1.default);
app.use("/api/v1/counties", counties_1.default);
exports.default = app;
