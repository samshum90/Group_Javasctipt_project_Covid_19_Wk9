<template>
  <div  class="login">
    <form action="http://localhost:3000/api/users" method="post">
  
  <div class="container">
    <label for="name"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="name" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <button type="submit">Login</button>
    
  </div>

</form>
  </div>
</template>

<script>
export default {
    name:"login-form"
}

</script>

<style>



</style>