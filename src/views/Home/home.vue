<template>
  <div class="home">
    <div class="home-title">
      <h1>Welcome To My Blog</h1>
      <h2>Kimberle</h2>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Home',
};
</script>
<style>
.home {
  height: 100%;
  width: 100%;
  background-image: url(../../assets/images/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-title {
  margin-top: 15rem;
  width: 100%;
  height: 18rem;
  background-color: rgb(255, 255, 255, 0.9);
}

.home-title h1 {
  margin: 2rem 0;
  font-family: 'calligraphy';
  font-size: 4rem;
  letter-spacing: 0.5rem;
}

.home-title h2 {
  font-family: 'KageFont';
  font-size: 6rem;
  color: #000;
}
</style>
