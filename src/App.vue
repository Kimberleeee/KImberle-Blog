<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  min-width: 1280px;
  min-height: 750px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body,
dl,
dd,
ul,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
p,
form,
header,
section,
article,
footer {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  text-decoration: none;
}
img {
  border: 0;
}
button,
input,
select,
textarea {
  outline: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th,
ul,
ol,
li {
  padding: 0;
}
li {
  list-style: none;
}
</style>
