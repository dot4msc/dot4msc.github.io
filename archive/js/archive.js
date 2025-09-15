let blogDocument = document.getElementById('blog');

fetch('../blog-posts/posts.json').then(response => {
  if(!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}).then(data => {
  let blogPosts = data.posts;
  console.log(blogPosts);
  let followingPosts = blogPosts.slice(1);

  followingPosts.forEach(post => {

    let blogPost = document.createElement('div');
    let blogContent = document.createElement('div');
    let blogTitle = document.createElement('h2');
    let blogDate = document.createElement('p');
    let blogText = document.createElement('div');
    let blogSong = document.createElement('div');
  
    blogPost.className = 'blog-post';
    blogContent.className = 'blog-content';
    blogTitle.className = 'blog-title';
    blogDate.className = 'blog-date';
    blogText.className = 'blog-text';
    blogSong.className = 'blog-song';
  
    blogText.innerHTML = post["post"];
    blogTitle.innerText = post["title"];
    blogDate.innerText = post["date"];
    blogSong.innerHTML = post["song"];

    blogContent.appendChild(blogTitle);
    blogContent.appendChild(blogDate);
    blogContent.appendChild(blogText);
    blogContent.appendChild(blogSong);
  
    blogPost.appendChild(blogContent);
    blogDocument.appendChild(blogPost);
  });
})

