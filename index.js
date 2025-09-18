import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;
const router = express.Router();

app.use(cors());
app.use(express.json());

const boasVindas = router.get("/", (req, res) => {
  res.send("Bem vindo a minha api de filmes!");
});

app.use(boasVindas);

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3000.");
});
