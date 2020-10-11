<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Log In</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


  <style>
  .card{
    width: 300px;
    margin: 0 auto;
    margin-top: 75px;
  }

  .form-control{
    margin-bottom: 10px;
  }

  .card-body{
    padding-bottom: 10px;
  }
  </style>

  <script type="text/javascript" src="https://sdk.userbase.com/2/userbase.js"></script>

</head>

<body>

  <div class="card">
    <div class="card-header"><h5>Log in</h5></div>
          <form id="login-form">
    <div class="card-body">

      <div id="login-error"></div>

      <input id="login-username" type="text" required placeholder="Username" class="form-control">
      <input id="login-password" type="password" required placeholder="Password" class="form-control">

    </div>
    <div class="card-footer"><button type="submit" class="btn btn-primary w-100"><i class="fa fa-spinner fa-spin" id="loading" style="display: none;"></i> Log in</button></div>
      </form>
  </div>


  <script type="text/javascript">
    userbase.init({
      appId: '<?=USERBASE_APPID;?>'
    })

    const errorMsg = '<div class="alert alert-danger text-center">Your username or password is incorrect. Please try again.</div>';

    function handleLogin(e) {
      e.preventDefault()

      document.querySelector('#loading').style.display = 'inline-block';
      const username = document.getElementById('login-username').value
      const password = document.getElementById('login-password').value

      userbase.signIn({ username, password, rememberMe: 'session' })
        .then(function(user){

          let formData = new FormData()
          formData.append('username', username);

          fetch('login', {
            headers: {
              authorization: user.authToken,
            },
            body: formData,
            method: 'post',
          })
            .then(response => response.json())
            .then(res => {
              console.log('Success:', res)
              if(res.ok == true){
                document.querySelector('#loading').style.display = 'none';
                window.location = '/';

              }else{
                document.getElementById('login-error').innerHTML = errorMsg;
              }

            })
            .catch(error => {
              console.error('Error:', error)
            })

        })
        .catch(function(e){
          document.querySelector('#loading').style.display = 'none';
          document.getElementById('login-error').innerHTML = errorMsg;
          console.log(e);

      })
    }

  document.getElementById('login-form').addEventListener('submit', handleLogin)
  </script>

</body>

</html>
