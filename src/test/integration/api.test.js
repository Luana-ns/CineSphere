// Teste de integração de exemplo
const request = require("supertest");
const express = require("express");

// Simula uma versão básica da aplicação para teste
const createTestApp = () => {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Bem vindo a minha api de filmes!" });
  });

  app.get("/health", (req, res) => {
    res.json({ status: "OK", service: "CineSphere" });
  });

  return app;
};

describe("CineSphere - Testes de Integração", () => {
  let app;

  beforeEach(() => {
    app = createTestApp();
  });

  test("GET / deve retornar mensagem de boas-vindas", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Bem vindo a minha api de filmes!");
  });

  test("GET /health deve retornar status OK", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
    expect(response.body.service).toBe("CineSphere");
  });
});
