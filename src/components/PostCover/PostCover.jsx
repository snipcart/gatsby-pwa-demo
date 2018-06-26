import React, { Component } from "react";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    const post = postNode.frontmatter;
    /* eslint no-undef: "off" */
    const coverUrl = post.cover.publicURL;
    const cover =
      coverUrl.substring(0, 1) === "/"
        ? __PATH_PREFIX__ + coverUrl
        : coverUrl;
    const coverHeight = mobile ? 180 : 400;
    return (
      <div
        style={{ backgroundImage: `url(${cover})`, height: `${coverHeight}px` }}
        className="md-grid md-cell--9 post-cover"
      />
    );
  }
}

export default PostCover;
