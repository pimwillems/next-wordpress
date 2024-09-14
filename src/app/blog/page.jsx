// Fetch blog posts from WordPress API
async function fetchPosts() {
  const res = await fetch(
    "https://wordpress.pimwillems.dev/wp-json/wp/v2/posts"
  ); // Replace with your API endpoint
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json(); // Return the fetched posts
}

/**
 * BlogPage component that fetches and displays a list of blog posts.
 *
 * This asynchronous function retrieves blog posts using the `fetchPosts`
 * function and renders them in a structured format. Each post is displayed
 * with its title and content, where the content is rendered as HTML.
 *
 * @returns {JSX.Element} A JSX element containing the blog posts.
 */
export default async function BlogPage() {
  const posts = await fetchPosts(); // Fetch posts

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
