import React from "react";
import { nextPage } from "../utils";

export default class Next extends React.Component {
  render() {
    const next = nextPage(this.props.pageContext);

    if (next) {
      return (
        <div className="page-navigation page-next">
          <a
            href={next.url}
            title={next.frontmatter.title}
            className="icon fa-caret-right fa-5x"
          >
            <span class="label">To {next.frontmatter.title}</span>
          </a>
        </div>
      );
    }

    return "";
  }
}
