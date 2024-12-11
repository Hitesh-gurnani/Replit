import React, { useState, useEffect } from "react";
import { useCreateProject } from "../hooks/apis/mutation/useCreateProject";
import { Layout, Typography, Button, Row, Col, Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

function CreateProject() {
  const navigate = useNavigate();
  const { createAsyncMutation } = useCreateProject();

  async function handleCreateProject() {
    console.log("going to create project");
    try {
      const res = await createAsyncMutation();
      console.log("project created now we should navigate");
      navigate(`/project/${res.data}`);
    } catch {
      console.log("error");
    }
  }

  const [reactHover, setReactHover] = useState(false);
  const [vueHover, setVueHover] = useState(false);
  const [headerHover, setHeaderHover] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setContentVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const layoutStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 15s ease infinite",
  };

  const heroOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(rgba(15,23,42,0.7), rgba(17,24,39,0.7))",
    zIndex: 1,
  };

  const heroContentStyle = {
    position: "relative",
    zIndex: 2,
    opacity: contentVisible ? 1 : 0,
    transition: "opacity 1.5s ease-in-out",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const heroTitleStyle = {
    fontSize: "3rem",
    lineHeight: "1.2",
    fontWeight: "900",
    marginBottom: "20px",
    color: "#fff",
  };

  const heroGradientTextStyle = {
    background: "linear-gradient(to right, #4CAF50, #2E7D32)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const heroSubtitleStyle = {
    fontSize: "1.5rem",
    lineHeight: "1.5",
    color: "#cbd5e1",
    marginBottom: "40px",
  };

  const headerStyle = {
    backgroundColor: "transparent",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    padding: "20px",
    justifyContent: "space-between",
    transition: "transform 0.3s ease",
    transform: headerHover ? "scale(1.02)" : "none",
  };

  const headerTextStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    transform: headerHover ? "scale(1.05)" : "none",
  };

  // Content / Main Section
  const mainContentWrapperStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
    opacity: contentVisible ? 1 : 0,
    transition: "opacity 1.5s ease-in-out",
  };

  const sectionTitleStyle = {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: "2rem",
    marginBottom: "30px",
  };

  const sectionParagraphStyle = {
    color: "#cbd5e1",
    textAlign: "center",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    maxWidth: "700px",
    margin: "0 auto 50px auto",
  };

  // Buttons
  const buttonBaseStyle = {
    width: "100%",
    height: "100%",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    transition: "transform 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    padding: "20px 0",
    margin: "0 auto",
  };

  const reactButtonStyle = {
    ...buttonBaseStyle,
    border: "2px solid #4CAF50",
    backgroundImage: "linear-gradient(135deg, #4CAF50, #2E7D32)",
    transform: reactHover ? "scale(1.05)" : "scale(1)",
  };

  const vueButtonStyle = {
    ...buttonBaseStyle,
    border: "2px solid #2196F3",
    backgroundImage: "linear-gradient(135deg, #2196F3, #0D47A1)",
    transform: vueHover ? "scale(1.05)" : "scale(1)",
  };

  // Cards
  const cardStyle = {
    border: "1px solid #2d3748",
    borderRadius: "8px",
    backgroundColor: "#1e293b",
    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
    padding: "30px",
    textAlign: "center",
    color: "#e2e8f0",
    transition: "transform 0.3s ease",
  };

  return (
    <Layout style={layoutStyle} className="dark min-h-screen flex flex-col">
      <Header
        style={headerStyle}
      >
        <div style={headerTextStyle}>CodeLab</div>
      </Header>

      <div style={heroSectionStyle} className="relative">
        <div style={heroOverlayStyle}></div>
        <div style={heroContentStyle}>
          <h1 style={heroTitleStyle} className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Welcome to <span style={heroGradientTextStyle}>CodeLab</span>
          </h1>
          <p style={heroSubtitleStyle} className="max-w-lg mx-auto">
            Where code comes to life. Experiment, learn, and build amazing projects faster than ever before.
          </p>
        </div>
      </div>

      <Content style={mainContentWrapperStyle} id="playgrounds">
        <Title level={2} style={sectionTitleStyle}>
          Choose Your Playground
        </Title>
        <Paragraph style={sectionParagraphStyle}>
          Instantly launch a coding environment optimized for modern frameworks. CodeArena provides you with a ready-to-go setup, letting you focus on creativity and innovation instead of configuration.
        </Paragraph>
        <Row gutter={[32, 32]} justify="center" className="mt-8">
          <Col xs={24} sm={12} md={6}>
            <Button
              type="link"
              onClick={handleCreateProject}
              style={reactButtonStyle}
              onMouseEnter={() => setReactHover(true)}
              onMouseLeave={() => setReactHover(false)}
              className="transition-transform duration-300"
            >
              React
            </Button>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default CreateProject;
