let blogDocument = document.getElementById('blog');
const SERVER_URL = 'https://dot4msc-blog-server.onrender.com/';

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

  let blogUsername = document.createElement('input');
  blogUsername.type = 'text';
  blogUsername.placeholder = 'Your name (optional)';;
  let blogCommentBox = document.createElement('textarea');
  blogCommentBox.placeholder = 'Leave a comment...';
  let blogCommentButton = document.createElement('button');
  blogCommentButton.innerText = 'Post Comment';
  let blogCommentSection = document.createElement('div');

  blogCommentButton.onclick = function(e){
    e.preventDefault();
    if(blogCommentBox.value.trim() === ''){
      alert("Please add a comment if you want to send it... don't be a d*ck!");
      return;
    }

    let comment = blogCommentBox.value.trim();
    let username = blogUsername.value.trim() || 'Anonymous';

    let bodyData = {username, comment, postId: firstPost["id"],};

    fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    }).then(response => {
      if(!response.ok){
        alert("Server is down at the moment, please send your comment through Instagram to @dot4music as a DM if problem persists. Sorry :(");
        throw new Error('Network response was not ok');

      }
      
      if(username.toLowerCase() === 'lambda'){
        alert("Thanks dear,ILYSM and your secret is safe with me 🤫♥️");
      }
      else{
        alert("Thank you " + username + ". Nano has received your comment ♥️");
      }
      return response.json();
    })
  }

  blogUsername.className = 'blog-username';
  blogCommentBox.className = 'blog-comment-box';
  blogCommentButton.className = 'blog-comment-button';
  blogCommentSection.className = 'blog-comment-section';
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

  blogCommentSection.appendChild(blogUsername);
  blogCommentSection.appendChild(blogCommentBox);
  blogCommentSection.appendChild(blogCommentButton);
  
  blogContent.appendChild(blogTitle);
  blogContent.appendChild(blogDate);
  blogContent.appendChild(blogText);
  blogContent.appendChild(blogSong);
  blogContent.appendChild(blogCommentSection);
  
  blogPost.appendChild(blogContent);
  blogDocument.appendChild(blogPost);
})

