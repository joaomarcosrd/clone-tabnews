export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#F3E4D1",
        backgroundImage:
          "linear-gradient(rgba(28, 26, 26, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 26, 26, 0.05) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        minHeight: "100vh",
        fontFamily: '"Courier New", Courier, monospace',
        color: "#1C1A1A",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #1C1A1A",
            boxShadow: "8px 8px 0px #1C1A1A",
            marginBottom: "40px",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "120px",
              background: "#FCE244",
              borderBottom: "4px solid #1C1A1A",
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(28,26,26,0.1) 10px, rgba(28,26,26,0.1) 20px)",
              display: "flex",
              alignItems: "flex-start",
              padding: "10px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                border: "2px solid #1C1A1A",
                background: "#FFFFFF",
                padding: "2px 8px",
                fontWeight: "bold",
                fontSize: "12px",
                boxShadow: "2px 2px 0px #1C1A1A",
              }}
            >
              C:\JOAO\PROFILE.EXE
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "20px",
              position: "relative",
              flexWrap: "wrap",
            }}
          >
            <div style={{ width: "160px", position: "relative" }}>
              <img
                src="/photo_2026-06-22_10-17-35.jpg"
                alt="João Marcos"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  border: "4px solid #1C1A1A",
                  boxShadow: "4px 4px 0px #1C1A1A",
                  objectFit: "cover",
                  position: "absolute",
                  top: "-80px",
                  background: "#FFFFFF",
                }}
              />
            </div>
            <div
              style={{
                flex: "1",
                paddingTop: "10px",
                paddingLeft: "10px",
                minWidth: "300px",
              }}
            >
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                  marginTop: "0",
                }}
              >
                João Marcos de Almeida Rodrigues
              </h1>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#FF6A3D",
                  marginBottom: "5px",
                }}
              >
                Desenvolvedor de Software
              </div>
              <div
                style={{
                  display: "inline-block",
                  background: "#1C1A1A",
                  color: "#FFFFFF",
                  padding: "4px 10px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginTop: "5px",
                }}
              >
                sys.update // dev_log
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "10px",
                alignItems: "flex-end",
              }}
            >
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-marcos-de-almeida-rodriques-4980b835b/"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#1C1A1A",
                  background: "#FFFFFF",
                  border: "3px solid #1C1A1A",
                  boxShadow: "3px 3px 0px #1C1A1A",
                  padding: "6px 12px",
                  fontWeight: "bold",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  width: "100px",
                }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/joaomarcosrd"
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#1C1A1A",
                  background: "#FFFFFF",
                  border: "3px solid #1C1A1A",
                  boxShadow: "3px 3px 0px #1C1A1A",
                  padding: "6px 12px",
                  fontWeight: "bold",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  width: "100px",
                }}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #1C1A1A",
            boxShadow: "8px 8px 0px #1C1A1A",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#1C1A1A",
              color: "#FFFFFF",
              padding: "8px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "4px solid #1C1A1A",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              &gt;_ quote.txt
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                  background: "#FF6A3D",
                }}
              ></span>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                }}
              ></span>
            </div>
          </div>
          <div style={{ padding: "24px", background: "#FCE244" }}>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: "1.5",
                padding: "20px",
                margin: "0",
              }}
            >
              "Primeiro diga a si mesmo quem você quer ser; depois faça o que
              deve ser feito."
              <br />
              <br />— Epicteto
            </p>
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #1C1A1A",
            boxShadow: "8px 8px 0px #1C1A1A",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#1C1A1A",
              color: "#FFFFFF",
              padding: "8px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "4px solid #1C1A1A",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              &gt;_ clone_tabnews.exe
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                  background: "#FF6A3D",
                }}
              ></span>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                }}
              ></span>
            </div>
          </div>
          <div style={{ padding: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FF6A3D",
                textTransform: "uppercase",
                marginBottom: "12px",
                marginTop: "0",
              }}
            >
              Proojeto Construção do Clone TabNews
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "justify",
                marginBottom: "16px",
              }}
            >
              Projeto focado em construir uma aplicação robusta do zero,
              aplicando as melhores práticas de Engenharia de Software. O
              objetivo é garantir a construção de uma base sólida, estruturada
              de forma limpa e escalável durante a minha evolução contínua como
              desenvolvedor.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "justify",
                marginBottom: "16px",
              }}
            >
              Até o momento, a aplicação já conta com: Gestão e padronização
              rigorosa (Git, Issues, Prettier); Arquitetura e compreensão de
              resolução DNS; Desenvolvimento Orientado a Testes (TDD); Criação
              de API versionada; Configuração de banco de dados via Docker e
              início do uso de Migrations.
            </p>
            <div>
              {["JavaScript", "Node.js", "PostgreSQL", "Docker", "TDD"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "#FF6A3D",
                      border: "2px solid #1C1A1A",
                      color: "#FFFFFF",
                      padding: "4px 10px",
                      fontWeight: "bold",
                      fontSize: "11px",
                      borderRadius: "16px",
                      marginRight: "6px",
                      marginTop: "5px",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            background: "#FFFFFF",
            border: "4px solid #1C1A1A",
            boxShadow: "8px 8px 0px #1C1A1A",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              background: "#1C1A1A",
              color: "#FFFFFF",
              padding: "8px 12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "4px solid #1C1A1A",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              &gt;_ infra_homelab.sys
            </div>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                  background: "#FF6A3D",
                }}
              ></span>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  marginLeft: "6px",
                }}
              ></span>
            </div>
          </div>
          <div style={{ padding: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#FF6A3D",
                textTransform: "uppercase",
                marginBottom: "12px",
                marginTop: "0",
              }}
            >
              Projeto Homelab &amp; Infraestrutura Local
            </h2>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "justify",
                marginBottom: "16px",
              }}
            >
              Arquitetura de um servidor doméstico auto-hospedado focado em
              centralizar ferramentas e automações. O ambiente roda em um
              sistema operacional leve, orquestrando múltiplos serviços em
              containers isolados de forma segura e eficiente.
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                textAlign: "justify",
                marginBottom: "16px",
              }}
            >
              A infraestrutura conta com bloqueio de anúncios e rastreadores a
              nível de rede, além de um proxy reverso responsável por distribuir
              o tráfego interno através de resolução de DNS customizada. Tudo
              operando 100% localmente, garantindo total privacidade, sem
              exposição de dados e sem dependência de nuvem.
            </p>
            <div>
              {["Lubuntu", "Docker", "Nginx Proxy", "AdGuard DNS"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "#FCE244",
                      border: "2px solid #1C1A1A",
                      color: "#1C1A1A",
                      padding: "4px 10px",
                      fontWeight: "bold",
                      fontSize: "11px",
                      borderRadius: "16px",
                      marginRight: "6px",
                      marginTop: "5px",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: "1",
              background: "#F3E4D1",
              border: "4px solid #1C1A1A",
              boxShadow: "6px 6px 0px #1C1A1A",
              padding: "20px",
              minWidth: "300px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "5px",
                borderBottom: "2px solid #1C1A1A",
                paddingBottom: "5px",
                marginTop: "0",
              }}
            >
              Desenvolvedor de Software
            </h3>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#FF6A3D",
                marginBottom: "10px",
              }}
            >
              Vision Control · Jan 2026 - Mai 2026
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "1.5",
                textAlign: "justify",
                margin: "0",
              }}
            >
              Atuação na manutenção e evolução de um sistema de gestão de
              veículos utilizado por transportadoras e empresas de coleta de
              resíduos. Implementação de sistema de auditoria/logs, refatoração
              de telas do frontend e correção de funcionalidades legadas.
            </p>
          </div>

          <div
            style={{
              flex: "1",
              background: "#F3E4D1",
              border: "4px solid #1C1A1A",
              boxShadow: "6px 6px 0px #1C1A1A",
              padding: "20px",
              minWidth: "300px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "uppercase",
                marginBottom: "5px",
                borderBottom: "2px solid #1C1A1A",
                paddingBottom: "5px",
                marginTop: "0",
              }}
            >
              Ass. de Marketing Digital
            </h3>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#FF6A3D",
                marginBottom: "10px",
              }}
            >
              Grupo Falcor · Mai 2025 - Dez 2025
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "1.5",
                textAlign: "justify",
                margin: "0",
              }}
            >
              Criação e gestão de anúncios em plataformas de e-commerce (Mercado
              Livre, Magalu). Responsável pela gestão de estoque e definição de
              estratégias de anúncio para os produtos das lojas online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
