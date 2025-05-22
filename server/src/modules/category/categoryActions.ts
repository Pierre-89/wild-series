import CategoryRepository from "./itemRepository";

// Some data to make the trick
import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await CategoryRepository.readAll();

  res.json(categoriesFromDB);
};

export const read: RequestHandler = (req, res) => {
  const parseId = Number.parseInt(req.params.id);
  const category = categories.find((c) => c.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else

export default {
  browse,
  read,
};
