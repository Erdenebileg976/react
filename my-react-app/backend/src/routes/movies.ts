import { Router } from "express";
import {
  getMovies,
  getMovieById,
  getMovieGenre,
  // getMovieComment,
  // postMovieComment,
} from "../controllers/movieController";

const router = Router();

router.get("/", getMovies);
router.get("/genre", getMovieGenre);
router.get("/:id", getMovieById);
//router.get(":/comment", getMovieComment);
//router.post(":/post", postMovieComment);

export default router;
