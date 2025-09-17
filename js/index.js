let blogDocument = document.getElementById('blog');

fetch('./blog-posts/posts.json').then(response => {
  if(!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}).then(data => {
  let blogPosts = data.posts;
  let firstPost = blogPosts[0];

  
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

  blogText.innerHTML = firstPost["post"];
  blogTitle.innerText = firstPost["title"];
  blogDate.innerText = firstPost["date"];
  blogSong.innerHTML = firstPost["song"];
  blogContent.id = firstPost["id"];

  blogContent.appendChild(blogTitle);
  blogContent.appendChild(blogDate);
  blogContent.appendChild(blogText);
  blogContent.appendChild(blogSong);

  blogPost.appendChild(blogContent);
  blogDocument.appendChild(blogPost);
})

