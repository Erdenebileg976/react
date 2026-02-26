import { Router } from "express";
import { getMovieComment } from "../controllers/movieController";

const router = Router();

router.get("/:id", getMovieComment);

export default router;
