import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class AppModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : this.props.modal
    };

    this.toggle = this.toggle.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.toggle();
    window.location.reload();
  }

  toggle() {
    this.setState({
      modal : !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Thanks for submiting your request</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.refresh}>
              Continue
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
