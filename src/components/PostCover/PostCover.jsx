import React, { Component } from "react";
import "./PostCover.scss";

class PostCover extends Component {
  render() {
    const { postNode, mobile } = this.props;
    const post = postNode.frontmatter;
    /* eslint no-undef: "off" */
    const coverUrl = post.cover.publicURL;
    const coverHeight = mobile ? 180 : 400;
    return (
      <div
        style={{ backgroundImage: `url(${post.cover.publicURL})`, height: `${coverHeight}px` }}
        className="md-grid md-cell--9 post-cover"
      />
    );
  }
}

export default PostCover;
