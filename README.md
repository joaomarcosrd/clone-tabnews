# Clone TabNews 📰

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

---

## Sobre o Projeto:

O Clone do TabNews é um projeto focado em construir uma aplicação robusta do zero, aplicando as melhores práticas de Engenharia de Software. Durante a minha evolução contínua como desenvolvedor júnior, o objetivo deste repositório não é apenas fazer o código funcionar, mas garantir a construção de uma base sólida, estruturada de forma limpa, organizada e escalável.

O projeto consolida conceitos fundamentais de desenvolvimento web e infraestrutura. Até a etapa atual de desenvolvimento, a aplicação já implementa:

- **Gestão e Padronização:** Uso estratégico do Git, organização de fluxo de trabalho por Issues e Milestones no GitHub, e padronização rigorosa de código utilizando EditorConfig e Prettier.
- **Arquitetura e Redes:** Definição de uma arquitetura de pastas eficiente e compreensão de resolução de DNS para configuração de domínios.
- **Testes e Protocolos:** Aplicação de Desenvolvimento Orientado a Testes (TDD), manuseio direto do protocolo HTTP e criação de uma API versionada (endpoint `/status`).
- **Infraestrutura de Dados:** Configuração de banco de dados local através do Docker, controle seguro de variáveis de ambiente e o início da estruturação de banco de dados para produção utilizando Migrations.

As próximas etapas do projeto englobam a finalização do controle de versão do banco de dados (Migrations) e a construção completa do sistema de usuários, incluindo criptografia de senhas, autenticação, autorização e infraestrutura de envio de emails.

---

### Funcionalidades

<table>
  <tr>
    <td width="60%" valign="top">
      <ul>
        <li><b>Endpoint de Status:</b> API versionada (<code>/status</code>) para monitoramento da saúde da aplicação.</li>
        <li><b>Arquitetura Limpa:</b> Separação clara de responsabilidades (models, infra, pages).</li>
        <li><b>Padronização:</b> Configuração rigorosa de EditorConfig e Prettier para consistência de código.</li>
        <li><b>Gestão de Projeto:</b> Uso de Milestones e Issues para rastreabilidade de cada etapa.</li>
        <li><b>Banco de Dados:</b> Estrutura preparada para migrations e múltiplos ambientes (staging/production).</li>
      </ul>
    </td>
    <td width="40%" align="center" valign="center">
      <img src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif" alt="Terminal Rodando Comandos" width="100%" style="border-radius: 8px;" />
    </td>
  </tr>
</table>
---

## Tecnologias Utilizadas:

- **Backend / Infraestrutura:** Node.js | PostgreSQL | Migrations
- **Frontend:** JavaScript | React | Next.js
- **Ferramentas de Qualidade:** Prettier | EditorConfig | Git | GitHub

---

## Estrutura:

<table>
  <tr>
    <td width="70%">
      <pre>
root/
├── pages/
│   └── index.js
├── models/
│   ├── users.js
│   ├── content.js
│   └── password.js
├── infra/
│   ├── database.js
│   ├── migrations/
│   ├── provisioning/
│   ├── staging/
│   └── production/
└── tests/
      </pre>
    </td>
    <td width="30%" align="center">
      <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" alt="Mascote Apontando" width="150" />
    </td>
  </tr>
</table>

---

## Instalação e Execução:

Clone o repositório:

```bash
git clone [https://github.com/joaomarcosrd/clone-tabnews.git](https://github.com/joaomarcosrd/clone-tabnews.git)
```
