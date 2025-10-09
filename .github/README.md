# 🚀 GitHub Actions CI/CD Pipeline

## 📋 Visão Geral

Este pipeline automatiza o processo de **Integração Contínua** e **Deploy Contínuo** para o CineSphere.

## 🔄 Fluxo do Pipeline

### 🎯 Triggers

- **Push** para `main` ou `develop`
- **Pull Request** para `main`

### 📊 Jobs do Pipeline

#### 1. 🧪 **Test & Code Quality**

- ✅ Testa em múltiplas versões do Node.js (16, 18, 20)
- 🔍 Executa linting (ESLint)
- 🧪 Roda testes unitários
- 🔗 Roda testes de integração
- 📊 Gera relatório de cobertura
- 📈 Envia coverage para Codecov

#### 2. 🏗️ **Build & Security**

- 🏗️ Build da aplicação
- 🔒 Auditoria de segurança
- 🛡️ Verificação de vulnerabilidades

#### 3. 🚀 **Deploy**

- 📦 Deploy para staging (apenas na `main`)
- 🌍 Deploy para produção (configurável)

#### 4. 📢 **Notifications**

- 📧 Notificações de status
- 📊 Relatórios de pipeline

## 🛠️ Scripts do Package.json

```bash
npm run test          # Todos os testes
npm run test:unit     # Testes unitários com coverage
npm run test:integration  # Testes de integração
npm run test:coverage # Relatório de cobertura
npm run lint          # Verificação de código
npm run build         # Build da aplicação
```

## 📊 Matriz de Testes

| Node.js | Status     |
| ------- | ---------- |
| 16.x    | ✅ Testado |
| 18.x    | ✅ Testado |
| 20.x    | ✅ Testado |

## 🔧 Configuração

### Secrets Necessários

- `CODECOV_TOKEN` - Token para upload de coverage

### Variáveis de Ambiente

- `NODE_VERSION: '18'` - Versão padrão do Node.js

## 📈 Badges para README

```markdown
![CI/CD Pipeline](https://github.com/Luana-ns/CineSphere/workflows/CI/CD%20Pipeline%20-%20CineSphere/badge.svg)
![Coverage](https://codecov.io/gh/Luana-ns/CineSphere/branch/main/graph/badge.svg)
![Node.js Version](https://img.shields.io/badge/node-%3E%3D16-brightgreen.svg)
```

## 🚀 Deploy

### Staging

- **Trigger**: Push para `main`
- **URL**: `https://cinesphere-staging.herokuapp.com`

### Produção

- **Trigger**: Tag de release
- **URL**: A ser configurado

## 🔍 Monitoramento

- ✅ Testes automatizados
- 📊 Coverage de código
- 🔒 Auditoria de segurança
- 📈 Métricas de qualidade

## 📝 Próximos Passos

1. ✅ Pipeline configurado
2. ⏳ Configurar ESLint
3. ⏳ Configurar Prettier
4. ⏳ Adicionar mais testes
5. ⏳ Configurar deploy real
6. ⏳ Adicionar notificações Slack/Discord
