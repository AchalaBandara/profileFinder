$(document).ready(function() {
  $("#searchUser").on("keyup", function(e) {
    let username = e.target.value;

    //make request to github
    $.ajax({
      url: "https://api.github.com/users/" + username,
      data: {
        client_id: "e3eb647677d7cd31f1c6",
        client_secret: "b42ec4108094aa0312e4eb51c6bb150516382538"
      }
    }).done(function(user) {
      $("#profile").html(`
      <div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
    <div class="row">
        <div class="col-md-3">
            <img class="thumbnail avatar" src="${user.avatar_url}">
            <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
        </div>
        <div class="col-md-9">

        </div>
    </div>
  </div>
</div>
      
      `);
    });
  });
});
