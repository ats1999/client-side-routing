const router = {
  init: () => {
    console.log("init");
    const links = document.querySelectorAll("a");
    Array.from(links).forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const route = link.getAttribute("href");
        router.go(route);
      });
    });
  },
  go: (route) => {
    console.log("go", route);
    pushStateToNavigationHistory(route);
    const container = document.getElementById("container");

    switch (route) {
      case "/":
        container.innerHTML = "<h1>Home Page</h1>";
        break;
      case "/about":
        container.innerHTML = "<h1>About Page</h1>";
        break;
      case "/user/rahul":
        container.innerHTML = "<h1>Hello, i am Rahul</h1>";
        break;
      case "/user/shani":
        container.innerHTML = "<h1>Hello, i am Shani</h1>";
        break;
      default:
        console.log("404 Page");
    }
  },
};

function pushStateToNavigationHistory(route) {
  history.pushState({ route }, "", route);
}

window.addEventListener("popstate", function (event) {
  const state = event.state;
  router.go(state.route);
});

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
  router.init();
  router.go(window.location.pathname);
});

// TODO: back arrow is not working
