import React, { Component } from "react";

export default class RecentPosts extends Component {
  render() {
    return (
      <div className="recent-posts">
        <div className="recent-posts-wrapper">
          <div className="recent-posts-heading">
            Recent Posts
            <ul className="recent-posts-posts">
              <li>recent post 1</li>
              <li>recent post 2</li>
              <li>recent post 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
