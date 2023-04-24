import React from 'react'

const Login = () => {
  return (
    <section>
      <form>
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' />
        <input type="submit" name="" id="" value="Login" />
      </form>
    </section>
  )
}

export default Login