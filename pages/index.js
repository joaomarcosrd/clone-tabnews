export default function Home() {
  return (
    <>
      <style>{`
        .main-wrapper {
          padding: 40px 20px;
        }
        @media (max-width: 600px) {
          .main-wrapper {
            padding: 20px 10px !important;
          }
          .profile-area {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding-top: 0 !important;
          }
          .pic-container {
            width: 100% !important;
            height: auto !important;
            display: flex !important;
            justify-content: center !important;
            margin-bottom: 10px !important;
          }
          .pic-img {
            position: static !important;
            margin-top: -70px !important;
          }
          .info-container {
            padding-left: 0 !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
            min-width: 100% !important;
          }
          .btn-container {
            flex-direction: row !important;
            width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
          }
          .btn-container a {
            flex: 1 !important;
          }
          .window-top {
            flex-direction: column !important;
            gap: 10px !important;
            text-align: center !important;
          }
          .diagram-row {
            flex-direction: column !important;
          }
          .diagram-arrow {
            transform: rotate(90deg) !important;
            margin: 10px 0 !important;
          }
          .exp-box {
            min-width: 100% !important;
          }
          .text-box {
            padding: 16px !important;
          }
        }
      `}</style>

      <div
        className="main-wrapper"
        style={{
          backgroundColor: "#F3E4D1",
          backgroundImage:
            "linear-gradient(rgba(28, 26, 26, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 26, 26, 0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          minHeight: "100vh",
          fontFamily: '"Courier New", Courier, monospace',
          color: "#1C1A1A",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
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
              className="profile-area"
              style={{
                display: "flex",
                padding: "20px",
                position: "relative",
                flexWrap: "wrap",
              }}
            >
              <div
                className="pic-container"
                style={{ width: "160px", position: "relative" }}
              >
                <img
                  className="pic-img"
                  src="/perfil.jpg"
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
                className="info-container"
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
                className="btn-container"
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
              className="window-top"
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
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FCE244",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FF6A3D",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
              </div>
            </div>
            <div
              className="text-box"
              style={{ padding: "24px", background: "#FCE244" }}
            >
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
              className="window-top"
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
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FCE244",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FF6A3D",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
              </div>
            </div>
            <div className="text-box" style={{ padding: "24px" }}>
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
                Construção do Clone TabNews
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
                de forma limpa e escalável durante a minha evolução contínua
                como desenvolvedor.
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
              className="window-top"
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
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FCE244",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    border: "2px solid #FFFFFF",
                    background: "#FF6A3D",
                    boxShadow: "2px 2px 0px #000",
                    borderRadius: "50%",
                  }}
                ></span>
              </div>
            </div>
            <div className="text-box" style={{ padding: "24px" }}>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#FF6A3D",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                  marginTop: "0",
                }}
              >
                Homelab & Infraestrutura Local
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  textAlign: "justify",
                  marginBottom: "16px",
                }}
              >
                A infraestrutura foi arquitetada do zero reaproveitando um
                notebook antigo equipado com processador Intel Celeron e 4GB de
                RAM. Como sistema operacional, optei pelo Lubuntu Linux pelo seu
                baixo footprint de memória, visando a máxima eficiência do
                hardware limitado. Para garantir isolamento e organização dos
                serviços, adotei uma abordagem 100% containerizada com Docker,
                orquestrando ferramentas de automação, rede e até modelos de IA
                local. O roteamento e a segurança da rede foram projetados
                centralizando a resolução de nomes em um servidor DNS próprio
                (AdGuard Home) integrado a uma camada de Proxy Reverso (Nginx
                Proxy Manager), permitindo acesso simplificado aos serviços
                internos via domínios customizados.
              </p>

              <div
                style={{
                  border: "3px dashed #1C1A1A",
                  padding: "16px",
                  marginBottom: "20px",
                  background: "#F3E4D1",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "16px",
                    fontSize: "12px",
                    color: "#1C1A1A",
                  }}
                >
                  DOCKER ENGINE — ORQUESTRAÇÃO
                </div>

                <div
                  className="diagram-row"
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "16px",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="exp-box"
                    style={{
                      flex: "1",
                      border: "3px solid #1C1A1A",
                      background: "#FCE244",
                      padding: "12px",
                      minWidth: "220px",
                      boxShadow: "4px 4px 0px #1C1A1A",
                    }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      AdGuard Home
                    </div>
                    <div style={{ fontSize: "11px", marginBottom: "6px" }}>
                      DNS :53 | adguard.home
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        background: "#1C1A1A",
                        color: "#FFF",
                        display: "inline-block",
                        padding: "3px 6px",
                      }}
                    >
                      DNS rewrite dinâmico
                    </div>
                  </div>

                  <div
                    className="diagram-arrow"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontWeight: "bold",
                      color: "#FF6A3D",
                      fontSize: "20px",
                    }}
                  >
                    &gt;
                  </div>

                  <div
                    className="exp-box"
                    style={{
                      flex: "1",
                      border: "3px solid #1C1A1A",
                      background: "#FF6A3D",
                      color: "#FFF",
                      padding: "12px",
                      minWidth: "220px",
                      boxShadow: "4px 4px 0px #1C1A1A",
                    }}
                  >
                    <div style={{ fontWeight: "bold", fontSize: "14px" }}>
                      Nginx Proxy Manager
                    </div>
                    <div style={{ fontSize: "11px", marginBottom: "6px" }}>
                      HTTP :80 | HTTPS :443
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        background: "#1C1A1A",
                        color: "#FFF",
                        display: "inline-block",
                        padding: "3px 6px",
                      }}
                    >
                      roteia domínios para containers
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    margin: "16px 0",
                    color: "#1C1A1A",
                    fontSize: "12px",
                  }}
                >
                  TRÁFEGO REVERSO ISOLADO
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid #1C1A1A",
                      background: "#FFF",
                      padding: "10px",
                      textAlign: "center",
                      boxShadow: "3px 3px 0px #1C1A1A",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#FF6A3D",
                      }}
                    >
                      n8n
                    </div>
                    <div style={{ fontSize: "10px", color: "#555" }}>
                      Automação
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid #1C1A1A",
                      background: "#FFF",
                      padding: "10px",
                      textAlign: "center",
                      boxShadow: "3px 3px 0px #1C1A1A",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#2f81f7",
                      }}
                    >
                      Portainer
                    </div>
                    <div style={{ fontSize: "10px", color: "#555" }}>
                      Docker UI
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid #1C1A1A",
                      background: "#FFF",
                      padding: "10px",
                      textAlign: "center",
                      boxShadow: "3px 3px 0px #1C1A1A",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#3fb950",
                      }}
                    >
                      Beszel Hub
                    </div>
                    <div style={{ fontSize: "10px", color: "#555" }}>
                      Monitoramento
                    </div>
                  </div>
                  <div
                    style={{
                      border: "2px solid #1C1A1A",
                      background: "#FFF",
                      padding: "10px",
                      textAlign: "center",
                      boxShadow: "3px 3px 0px #1C1A1A",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#2f81f7",
                      }}
                    >
                      Homepage
                    </div>
                    <div style={{ fontSize: "10px", color: "#555" }}>
                      Dashboard
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    border: "3px solid #1C1A1A",
                    background: "#FFFFFF",
                    padding: "12px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    alignItems: "center",
                    boxShadow: "4px 4px 0px #1C1A1A",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      width: "100%",
                      color: "#1C1A1A",
                    }}
                  >
                    Infraestrutura de IA Local
                  </div>
                  <div
                    style={{
                      flex: 1,
                      border: "2px solid #a5a0f5",
                      padding: "8px",
                      fontSize: "12px",
                      textAlign: "center",
                      minWidth: "120px",
                    }}
                  >
                    <strong>Open WebUI</strong>
                    <br />
                    (Interface de Chat)
                  </div>
                  <div
                    className="diagram-arrow"
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      color: "#a5a0f5",
                      margin: "0 auto",
                    }}
                  >
                    &gt; API &gt;
                  </div>
                  <div
                    style={{
                      flex: 1,
                      border: "2px solid #d29922",
                      padding: "8px",
                      fontSize: "12px",
                      textAlign: "center",
                      minWidth: "120px",
                    }}
                  >
                    <strong>Ollama</strong>
                    <br />
                    (LLMs: Llama, Gemma)
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "1.6",
                  textAlign: "justify",
                  marginBottom: "16px",
                }}
              >
                A nível de rede, implementei regras de interceptação DNS para
                roteamento interno (sufixo .home), ocultando a complexidade da
                infraestrutura e garantindo que o tráfego permaneça estritamente
                isolado da internet pública. Para assegurar a estabilidade do
                sistema sob carga contínua, integrei uma stack de monitoramento
                ativo. As métricas de telemetria demonstram alta eficiência da
                arquitetura, mantendo o uso de CPU equilibrado e operando em
                margens térmicas altamente seguras, provando a viabilidade de
                hospedar LLMs (Ollama) e automações complexas em hardware
                restrito.
              </p>

              <div>
                {[
                  "Lubuntu",
                  "Docker Compose",
                  "Nginx Proxy",
                  "DNS / AdGuard",
                  "Redes / TCP-IP",
                  "Observabilidade",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "inline-block",
                      background: "#1C1A1A",
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
                ))}
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
              className="exp-box"
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
                resíduos. Implementação de sistema de auditoria/logs,
                refatoração de telas do frontend e correção de funcionalidades
                legadas.
              </p>
            </div>

            <div
              className="exp-box"
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
                Criação e gestão de anúncios em plataformas de e-commerce
                (Mercado Livre, Magalu). Responsável pela gestão de estoque e
                definição de estratégias de anúncio para os produtos das lojas
                online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
