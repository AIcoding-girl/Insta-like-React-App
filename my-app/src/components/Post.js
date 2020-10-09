import React from "react";
import {
  Badge,
  InputGroup,
  Input,
  InputGroupAddon,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  //   CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import "../styles/main.scss";
import PostImg from "./arc-img.jpg";

function Post() {
  return (
    // "Show comments" button
    <div>
      <Container className="postContainer">
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Card className="postCard">
              <CardTitle>Beautiful picture</CardTitle>
              <CardImg width="100%" src={PostImg} alt="Architecture" />
              <CardBody>
                <h2>
                  <Badge color="secondary">Masterpiece</Badge>
                </h2>
                <InputGroup>
                  <Input placeholder="Write a comment ..." />
                  <InputGroupAddon addonType="append">
                    <Button color="primary" type="submit">
                      Submit
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Post;
