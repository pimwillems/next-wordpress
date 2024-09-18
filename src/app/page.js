"use client";

import { useState, useEffect } from "react";

const Homepage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(
          "https://wordpress.pimwillems.dev/wp-json/wp/v2/pages/13" // Replace with your API endpoint, the "13" is the ID of the page in Wordpress (you can find that in the URL when editing it)
        );
        const data = await response.json();
        setContent(data.content.rendered);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Homepage;

// You can also only get the page and not the whole content by changing the API endpoint to:
