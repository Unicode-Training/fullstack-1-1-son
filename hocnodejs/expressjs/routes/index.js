import { homeController } from "../controllers/home.controller.js";
import { userController } from "../controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.get("/", homeController.index);

router.get("/users", userController.index);

router.get("/users/:userId", userController.detail);

router.post("/users", userController.create);

export default router;
