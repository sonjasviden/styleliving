import React from "react";

const InstagramFeed = () => {
  return (
    <div className="instagram-feed">
      <iframe
        src="https://cdn.lightwidget.com/widgets/56d42277c80a581389f9a44ae2acc006.html"
        allowTransparency
        className="lightwidget-widget"
        style={{ width: "100%", border: 0, overflow: "hidden" }}
        title="Instagram Feed"
      />
    </div>
  );
};

export default InstagramFeed;
