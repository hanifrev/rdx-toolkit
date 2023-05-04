import { useState } from "react";
// import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import Location from "./features/location/Location";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <PostsList />
      <AddPostForm />
      <Location />
    </div>
  );
}

export default App;
