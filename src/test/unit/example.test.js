// Teste de exemplo para o pipeline CI/CD
describe("CineSphere - Testes Básicos", () => {
  test("deve somar 2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("deve verificar se string contém CineSphere", () => {
    const projectName = "CineSphere API";
    expect(projectName).toContain("CineSphere");
  });

  test("deve verificar se array não está vazio", () => {
    const movies = ["Inception", "Matrix", "Interstellar"];
    expect(movies.length).toBeGreaterThan(0);
  });
});
