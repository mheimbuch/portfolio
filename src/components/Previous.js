import React from "react";
import { previousPage } from "../utils";

export default class Previous extends React.Component {
  render() {
    const previous = previousPage(this.props.pageContext);

    if (previous) {
      return (
        <div className="page-navigation page-previous">
          <a
            href={previous.url}
            title={previous.frontmatter.title}
            className="icon fa-caret-left fa-5x"
          >
            <span class="label">To {previous.frontmatter.title}</span>
          </a>
        </div>
      );
    }

    return "";
  }
}
