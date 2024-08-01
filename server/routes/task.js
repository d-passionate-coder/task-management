import { Router } from "express";
import addNewTask from "../controllers/addNewTask.js";
import auth from "../middlewares/auth.js";
import handleEdit from "../controllers/handleEditTask.js";
import handleDelete from "../controllers/handleDeleteTask.js";
import handleUpdateMany from "../controllers/handleUpdateMany.js";
import getTasks from "../controllers/getTasks.js";
import addMultipleTasks from "../controllers/addMultipleTasks.js";

const router = Router();

router.use(auth);
router.post("/add/all", addMultipleTasks);
router.post("/add", addNewTask);
router.put("/edit/all", handleUpdateMany);
router.put("/edit", handleEdit);
router.delete("/:id", handleDelete);
router.get("/", getTasks);

export default router;
