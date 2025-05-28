
import { render } from "ejs";
import { Router } from "express";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },

  {
    text: "Hello World",
    user: "Charles",
    added: new Date()
  }
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form")
});

indexRouter.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
  });

  res.redirect("/")
})

indexRouter.get("/messages/:id", (req, res) => {
  const id = Number(req.params.id);
  const message = messages[id];

  if(!message) {
    return res.status(404).send("Message not found");
  }

  res.render('message', { message })
})

export default indexRouter;
