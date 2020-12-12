import React from "react";
import { previousPage } from "../utils";

import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    top: 50%;
    opacity: 0.8;
    left: 5%;
`;

export default class Previous extends React.Component {
  render() {
    const previous = previousPage(this.props.pageContext);

    if (previous) {
      return (
        <Container>
          <a
            href={previous.url}
            title={previous.frontmatter.title}
            className="icon fa-caret-left fa-5x"
          >
            <span className="label">To {previous.frontmatter.title}</span>
          </a>
        </Container>
      );
    }

    return "";
  }
}
