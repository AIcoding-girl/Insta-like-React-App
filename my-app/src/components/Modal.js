import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";

const PostModal = (props) => {
  const { createPost, className } = props;
  //   title, children and actions

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" className="mr-3" onClick={toggle}>
        Create New Post
        {createPost}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <p>
            {/* toggle={toggle} */}
            <strong>New Post</strong>
          </p>
          <FormGroup>
            <Label for="select-file">Choose file</Label>
            <InputGroup>
              <Input id="select-file" placeholder="File is not selected" />
              <InputGroupAddon addonType="append">
                <Button color="primary" type="submit">
                  Browse
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label for="select-title">Post title</Label>
            <InputGroup>
              <Input id="select-title" placeholder="Some title here" />
            </InputGroup>
          </FormGroup>
          <Button className="float-right" color="primary" onClick={toggle}>
            Create
          </Button>{" "}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default PostModal;
