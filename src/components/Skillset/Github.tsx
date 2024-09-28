import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const username = "sabari-vr";

  return (
    <center>
      <div
        style={{
          paddingBottom: "50px",
          paddingTop: "30px",
        }}
      >
        <h2 style={{ paddingBottom: "20px" }}>My GitHub Contributions</h2>
        <GitHubCalendar username={username} />
      </div>
    </center>
  );
};

export default Github;
