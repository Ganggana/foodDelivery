import { Router } from "express";
import { createUser } from "../../controllers/user/create-user";

export const router = Router();
router.post("/signup", createUser);

export default router;
