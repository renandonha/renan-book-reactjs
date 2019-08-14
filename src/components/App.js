import React, { Component } from "react";

import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: "Renan Donha",
        avatar: "https://avatars3.githubusercontent.com/u/27256290?s=460&v=4",
        time: "há 15 min.",
        body: "Texto teste Renan"
      },
      {
        id: 2,
        name: "Rafaela Provençale",
        avatar:
          "https://scontent.fvcp2-1.fna.fbcdn.net/v/t1.0-9/48172997_2006059519484461_3959820483813179392_n.jpg?_nc_cat=109&_nc_oc=AQl3A88-Gky1bhjvTJakAscIdFr5UHs7SlrRP_4CqgxfSFPhWJVaA_iutCiVigXUUuhMJCPU9rrJhaQEmcs_9QAP&_nc_ht=scontent.fvcp2-1.fna&oh=54d41a506a5297adabbb8229873554ea&oe=5DC7F779",
        time: " há 1 min",
        body: "Texto Rafaela"
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
