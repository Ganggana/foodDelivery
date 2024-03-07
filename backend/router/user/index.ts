import { Router } from "express";
import { createUser } from "../../controllers/user/create-user";
import { loginUserService } from "../../controllers/user/loginUser";

export const router = Router();
router.post("/signup", createUser);
router.post("/login", loginUserService);

export default router;
