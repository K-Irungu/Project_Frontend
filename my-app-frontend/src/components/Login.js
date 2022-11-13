function Login() {
    return (
<div class ="bg-light">
        <section class =" login bg-danger rounded" >
        <form >
            <div class="mb-3">
                <label class="form-label" for="email">Email address</label>
                <input class="form-control" type="email" id="email" required />
            </div>
            <div class="mb-3">
                <label  for="password">Password</label>
                <input class="form-control" type="password" id="password" required />   
            </div>
            <div class="mb-3">
                <input class="form-check-input" type="checkbox" id="check" />
                <label class="form-check-label" for="check">Remember me</label>
            </div>

            <div  class="mb-3">
                <button class="btn btn-light" type="submit">Login</button></div>
        </form>
        </section>

        </div>        

    );
}
export default Login;

{/* <div class="login  "> */}