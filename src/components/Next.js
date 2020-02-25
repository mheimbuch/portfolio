import React from "react";
import { nextPage } from "../utils";

import styled from "styled-components"

const Container = styled.div`
    position: absolute;
    top: 50%;
    opacity: 0.8;
    right: 5%
`;

export default class Next extends React.Component {
  render() {
    const next = nextPage(this.props.pageContext);

    if (next) {
      return (
        <Container>
          <a
            href={next.url}
            title={next.frontmatter.title}
            className="icon fa-caret-right fa-5x"
          >
            <span class="label">To {next.frontmatter.title}</span>
          </a>
        </Container>
      );
    }

    return "";
  }
}
