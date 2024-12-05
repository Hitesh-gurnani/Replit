import React from "react";
import { useCreateProject } from "../hooks/apis/mutation/useCreateProject";
import { Layout, Typography, Button, Row, Col, Card } from "antd";

const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

function CreateProject() {
  const { Header, Footer, Content } = Layout;
  const { createAsyncMutation, isPending } = useCreateProject();
  async function handleCreateProject(params) {
    console.log("going to create project");
    try {
      await createAsyncMutation();
      console.log("project created now we cshould ");
    } catch {
      console.log("error");
    }
  }
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header style={{ backgroundColor: "#001529", padding: "0 20px" }}>
        <div style={{ color: "#fff", fontSize: "24px", fontWeight: "bold" }}>
          CodeArena
        </div>
      </Header>
      <Content style={{ padding: "50px", backgroundColor: "#f9f9f9" }}>
        <Title level={2} style={{ color: "#333", marginBottom: "30px" }}>
          Playgrounds
        </Title>
        <Row gutter={[16, 16]}>
          <Col span={4}>
            <Button
              type="link"
              onClick={handleCreateProject}
              style={{
                border: "2px solid #4CAF50",
                width: "100%",
                height: "100%",
                backgroundImage: "linear-gradient(135deg, #4CAF50, #2E7D32)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              React
            </Button>
          </Col>
          <Col span={4}>
            <Button
              type="link"
              onClick={handleCreateProject}
              style={{
                border: "2px solid #2196F3",
                width: "100%",
                height: "100%",
                backgroundImage: "linear-gradient(135deg, #2196F3, #0D47A1)",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              Vue
            </Button>
          </Col>
          <Col span={4}>
            <Card
              title="Feature 3"
              bordered={false}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p style={{ color: "#555" }}>Description of feature 3.</p>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default CreateProject;
