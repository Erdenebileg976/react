import { Request, Response } from "express";
import Movie from "../models/Movie";
import { Comments } from "../models/Comment";
import { generateKey } from "node:crypto";

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = Math.max(1, parseInt(req.query.page as string) || 1);
    const limit = Math.max(1, parseInt(req.query.limit as string) || 12);
    const skip = (page - 1) * limit;

    const filter: Record<string, unknown> = {};

    if (req.query.search) {
      filter.title = { $regex: req.query.search as string, $options: "i" };
    }

    if (req.query.genre) {
      filter.genres = req.query.genre as string;
    }

    const [movies, total] = await Promise.all([
      Movie.find(filter)
        .skip(skip)
        .limit(limit)
        .select(
          "title year runtime genres directors cast plot poster rated imdb awards type",
        ),
      Movie.countDocuments(filter),
    ]);

    res.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      movies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMovieById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }

    res.json(movie);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMovieGenre = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const movies = await Movie.distinct("genres");

    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "error" });
  }
};

export const getMovieComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    if (!id) {
    }
    const comments = await Comments.find({ movieId: id });
    res.status(200).json(comments);
  } catch (err) {
    console.error("aldaaaaaaaaaa");
  }
};
