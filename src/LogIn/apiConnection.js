function submitLogin(login) {
  console.log("working");

  return fetch(
    
    //"http://192.168.31.53:8000/api/login",
    "https://www.autoncell.com/api/login",
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: login.email, password: login.password })
    }
  )
    .then(res => res.json())
    .then(res => {
      console.log("data is set in localstorage", res);
      localStorage.setItem("token", res.data.token);
      return res.data;
    });
}
export default submitLogin;