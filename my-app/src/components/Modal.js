import React, { useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  //   ModalFooter,
} from "reactstrap";

const PostModal = (props) => {
  const { createPost, className } = props;
  //   title, children and actions.

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>
        Create New Post
        {createPost}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <strong>New Post</strong>
        </ModalHeader>
        <ModalBody>
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
        {/* <Button color="primary" onClick={toggle}>
            Cancel
          </Button> */}
      </Modal>
    </div>
  );
};

export default PostModal;
