<template>
  <div class="container-fluid" style="height: 910px; background-color: #292C3F">
    <div style="height: 120px"></div>
    <div style="text-align: center; width: 100%">
      <div class="not-found-jumbotron">
        <img class="not-found-img" src="./../../public/img/error.png">
        <h1 class="not-found-title">Oops! There is nothing here...</h1>
        <h4 class="not-found-description">It seems we can't find what you're looking for. Perhaps searching one of the links in the above menu, can help.</h4>
        <b-button pill type="submit" variant="primary" id="submit" href="/">GO TO HOMEPAGE</b-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NotFound',
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.not-found-jumbotron {
  width: 74vw;
  height: 670px;
  background-color: white;
  border-radius:10px;
  display:inline-block;
}
.not-found-img {
  margin-top: 140px;
}
.not-found-title {
  margin-top: 45px;
}
.not-found-description {
  margin: 20px 47px;
  font-size: 21px;
  font-weight: normal;
  color: #adb0b8;
}
#submit {
  margin: 40px 0px;
  padding: 10px 26px;
  background-color: #066eb7;
}
</style>