import React, { Component, Fragment } from "react";

import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidMount() {
      axios.interceptors.request.use(
        (req) => {
          this.setState({ error: null });
          return req;
        },
        (err) => {
          this.setState({ error: null });
          return Promise.reject(err);
        }
      );

      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error });
          return Promise.reject(error);
        }
      );
    }
    handleConfirmError = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Fragment>
          <Modal
            ordered={this.state.error}
            clicked={this.state.handleConfirmError}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
