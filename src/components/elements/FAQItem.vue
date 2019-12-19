<template>
  <div class="vc_toggle vc_toggle_simple vc_toggle_color_black  vc_toggle_size_lg"  :class="{ vc_toggle_active: show }">
    <div @click="show = !show" class="vc_toggle_title">
      <h4 style="font-size: 16px;text-align: left">{{ question }}
      </h4><i class="vc_toggle_icon"></i>
    </div>
    <div class="vc_toggle_content">
      <transition @enter="enter" @leave="leave" @after-enter="afterEnter" @after-leave="afterLeave">
          <span style="color: #333333;" v-if="show">{{ answer }}</span>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'faq-item',
    props: ['question', 'answer'],
    data: function () {
      return {
        show: false,
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vc_toggle_size_lg.vc_toggle_default .vc_toggle_content, .vc_toggle_size_lg.vc_toggle_default .vc_toggle_title, .vc_toggle_size_lg.vc_toggle_round .vc_toggle_content, .vc_toggle_size_lg.vc_toggle_round .vc_toggle_title, .vc_toggle_size_lg.vc_toggle_rounded .vc_toggle_content, .vc_toggle_size_lg.vc_toggle_rounded .vc_toggle_title, .vc_toggle_size_lg.vc_toggle_simple .vc_toggle_content, .vc_toggle_size_lg.vc_toggle_simple .vc_toggle_title, .vc_toggle_size_lg.vc_toggle_square .vc_toggle_content, .vc_toggle_size_lg.vc_toggle_square .vc_toggle_title {
  padding-left: 42px;
  margin-top: 20px;
}
.vc_toggle_title {
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 0;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 400;
}
.vc_toggle_title>h4 {
  display: inline;
}
.vc_toggle_size_lg.vc_toggle_default .vc_toggle_content .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_default .vc_toggle_title .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_round .vc_toggle_content .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_round .vc_toggle_title .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_rounded .vc_toggle_content .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_rounded .vc_toggle_title .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_simple .vc_toggle_content .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_simple .vc_toggle_title .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_square .vc_toggle_content .vc_toggle_icon, .vc_toggle_size_lg.vc_toggle_square .vc_toggle_title .vc_toggle_icon {
  position: absolute;
  left: 0;
  top: 50%;
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  -o-transform: translate(0,-50%);
  transform: translate(0,-50%);
}
.vc_toggle_color_black.vc_toggle_simple .vc_toggle_icon {
  background-color: transparent;
  border-color: transparent;
}
.vc_toggle_size_lg .vc_toggle_icon {
  height: 28px;
  width: 28px;
}
.vc_toggle_color_black.vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_color_black.vc_toggle_simple .vc_toggle_icon::before {
  background-color: #2A2A2A;
}
.vc_toggle_size_lg .vc_toggle_icon::before {
  height: 2px;
  width: 14px;
}
.vc_toggle_color_black .vc_toggle_icon::after, .vc_toggle_color_black .vc_toggle_icon::before {
  background-color: #FFF;
}
.vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_simple .vc_toggle_icon::before {
  content: '';
  display: block;
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transform: translate(-50%,-50%);
  background-color: #2A2A2A;
}
.vc_toggle_simple .vc_toggle_icon::before {
  height: 2px;
  width: 10px;
}
.vc_message_box-icon>*, .vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_simple .vc_toggle_icon::before {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
}
.vc_toggle_color_black.vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_color_black.vc_toggle_simple .vc_toggle_icon::before {
  background-color: #2A2A2A;
}
.vc_toggle_simple.vc_toggle_active .vc_toggle_icon::after {
  visibility: hidden;
}
.vc_toggle_size_lg .vc_toggle_icon::after {
  height: 14px;
  width: 2px;
}
.vc_toggle_color_black .vc_toggle_icon::after, .vc_toggle_color_black .vc_toggle_icon::before {
  background-color: #FFF;
}
.vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_simple .vc_toggle_icon::before {
  content: '';
  display: block;
  position: absolute;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transform: translate(-50%,-50%);
  background-color: #2A2A2A;
}
.vc_toggle_simple .vc_toggle_icon::after {
  height: 10px;
  width: 2px;
}
.vc_message_box-icon>*, .vc_toggle_simple .vc_toggle_icon::after, .vc_toggle_simple .vc_toggle_icon::before {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: opacity .2s
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: opacity .8s
}
.v-enter-to {
  opacity: 1;
}
</style>