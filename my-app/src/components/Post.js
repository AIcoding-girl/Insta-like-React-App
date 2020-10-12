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
  CardBody,
  // CardText,
  CardTitle,
  Button,
} from "reactstrap";
import "../styles/main.scss";
// import PostList from "./PostList";
// import PostImg from "./arc-img.jpg";
// import PostImg2 from "./switzerland.jpg";

const Post = ({ img, title, comment }) => {
  return (
    // "Show comments" button
    <section>
      <Container className="postContainer">
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Card className="post">
              <CardTitle className="p-3">
                <strong>{title}</strong>
              </CardTitle>
              <CardImg width="100%" src={img} alt="" />
              <CardBody>
                <Badge className="mr-2 mb-2 p-2" color="primary" pill>
                  JD
                </Badge>
                <Badge className="p-2">{comment}</Badge>

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
    </section>
  );
};
export default Post;
