import { Router } from "express";
import { addMessage, getMessages } from "../controllers/MessageController.js";

const router = Router();

router.post("/add-message",addMessage);
router.get("/get-messages/:from/:to",getMessages);
// router.get("/add-message",function(){
//     console.log("add")
// });

export default router;
