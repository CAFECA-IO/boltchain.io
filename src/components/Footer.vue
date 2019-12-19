<template>
  <footer>
    <div class="footer-bar">
      <div class="text-center">
        <img width="150" height="36" src="https://boltchain.io/wp-content/uploads/2019/05/bolt_logo_7.png" class="footer-logo">
        <hr>
        <p style="text-align: center; font-size: 13px;">
          <span style="color: #999999;">Copyright © TideiSun. All rights reserved.
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "footer-bar",
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-bar {
    /* position: absolute; */
    width: 100%;
    background: rgb(68, 63, 84);
    left: 0px;
    padding-bottom: 40px;
}
.footer-logo {
  margin-top: 80px;
}
footer hr {
  margin-top: 20px;
  margin-bottom: 20px;
  border-color: #999999;
  width: 3.17%;
}

@media (max-width: 768px) {
  footer hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border-color: #999999;
    width: 9%;
  }
}
</style>