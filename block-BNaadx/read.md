<%if(session) { %>
<a href="/articles/new" class="add">
<button class="btn-add">Add article</button>
</a>
<% } %> <%if(!session){%>
    <a href="/users/login" class="add">
      <button class="btn-add">Add article</button>
    </a>
    <%}%>

<!-- user -->

<% if(user){%>
    <div class="users">Welcom <%= user.fullName()%></div>
    <%}%>

<!-- likes -->

<%if(session) { %>

<div class="like">
<a href="/articles/<%= article.slug%>/like">
<button class="btn btn-like">like</button>
</a>
<a href="/articles/<%= article.slug%>/dislike">
<button class="btn btn-dislike">dislike</button>
</a>
</div>
<% } %>

<%if(!session) { %>

<div class="like">
<a href="/users/login">
<button class="btn btn-like">like</button>
</a>
<a href="/users/login">
<button class="btn btn-dislike">dislike</button>
</a>
</div>
<% } %>

         <%if(session) { %>
      <div>
        <a href="/articles/<%= article.id%>/edit">
          <button class="btn">edit</button>
        </a>
        <a href="/articles/<%= article.id%>/delete">
          <button class="btn">Delete</button>
        </a>
      </div>
      <% } %> <%if(!session) { %>
      <div>
        <a href="/users/login">
          <button class="btn">edit</button>
        </a>
        <a href="/users/login">
          <button class="btn">Delete</button>
        </a>
      </div>
      <% } %>

<%if(user) { %> <% if(user.isAdmin) {%>
    <a href="/items/new" class="add">
      <button class="btn-add">Add items</button>
    </a>
    <% } else (!user.isAdmin){%>
    <div></div>
    <%}} else{%>
    <a href="/users/login" class="add">
      <button class="btn-add">Add items</button>
    </a>
    <%}%>
