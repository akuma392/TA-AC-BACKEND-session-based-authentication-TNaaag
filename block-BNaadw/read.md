 <div id="comment">
        <% comment.forEach((elm)=>{ %>

        <h2><%= elm.content%></h2>
        <p>Likes: <%= elm.likes%></p>
        <div class="like-comment">
          <a href="/comments/<%= elm.id%>/like">
            <button class="btn btn-like">like</button>
          </a>
          <a href="/comments/<%= elm.id%>/dislike">
            <button class="btn btn-dislike">dislike</button>
          </a>
        </div>
        <a href="/comments/<%= elm.id%>/edit">
          <button class="btn">edit</button>
        </a>
        <a href="/comments/<%= elm.id%>/delete">
          <button class="btn">Delete</button>
        </a>
        <% }) %>
      </div>

  <div id="comment">
        <%if(event.remarks.length) { %> <% event.remarks.forEach(remark => { %>
        <h2><%= elm.content%></h2>

      <a href="/comments/<%= elm.id%>/edit">
          <button class="btn">edit</button>
        </a>
        <a href="/comments/<%= elm.id%>/delete">
          <button class="btn">Delete</button>
        </a>
        <% }) %>else {%>
          <h2 class="no-remark">No remarks is added yet</h2>
        </li>
        <% }%>
      </div>
