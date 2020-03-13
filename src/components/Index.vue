<template>
  <div class="ls-slide-effects">
    <div class="fullwidth-container"
      style="height: 1042px; background: url(/img/homepage/shutterstock_697695823-1.jpg) no-repeat; background-size: 100% auto;">
      <div class="container center" style="padding:10px 15px;">
        <div class="pageTitle" style="text-align:center;">
          <img :src="$t('main.logo')" class="slide1-logo" alt="Boltchain_logo_white" />
          <h1 class="page_title"
            style="color: #ffffff; font-size: 52px; font-family: 'Roboto', 'Arial', 'sans-serif', sans-serif;font-weight: 500;margin-top: 20px;">
            {{ $t('main.title') }}</h1>
          <h1 class="subtitle"
            style="color: #ffffff; font-size: 26.7px; font-family: 'Roboto', 'Arial', 'sans-serif', sans-serif;font-weight: 500;margin-top: 20px;">
            {{ $t('main.description') }}</h1>
          <img src="/img/2018/06/Scroll-Down-icon-Home3.gif" class="ls-layer" alt=""
            style="text-align: center;top: 845.344px; left: 928.688px; text-align: initial; font-weight: 400; font-style: normal; text-decoration: none; opacity: 1; width: 50.6016px; height: 50.6016px; margin-top: 218px; z-index: auto; padding: 0px; border-width: 0px; border-radius: 0px;"
            data-ls="delayin:1000;easingin:easeInExpo;transitionout:false;" data-ls-slidein="1" data-ls-slideout="1" @click="scrollToOneAnchor('about')">
        </div>
      </div>
    </div>
    <div id="about" ref="about" name="about" class="page_content section_page-1513 container-fluid" data-section-title="什麼是 Boltchain">
      <div class="container">
        <div class="vc_row wpb_row vc_row-fluid">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div style="height: 120px;"></div>
                <div id="ultimate-heading-36475df992b78ad75"
                  class="uvc-heading ult-adjust-bottom-margin ultimate-heading-36475df992b78ad75 uvc-8158 "
                  data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                  <div class="uvc-heading-spacer no_spacer" style="top"></div>
                  <div class="uvc-main-heading ult-responsive"
                    data-ultimate-target=".uvc-heading.ultimate-heading-36475df992b78ad75 h1"
                    data-responsive-json-new="{font-size:desktop:42px;,line-height:}">
                    <h1 style="font-weight:normal;color:#066eb7;">{{ $t('main.about.title') }}</h1>
                  </div>
                  <div class="uvc-sub-heading ult-responsive"
                    data-ultimate-target=".uvc-heading.ultimate-heading-36475df992b78ad75 .uvc-sub-heading "
                    data-responsive-json-new="{font-size:,line-height:}" style="font-weight:normal;">
                    <p style="text-align: center; margin-top: -7px;; margin-bottom: 35px;color: #adb0b8;">__</p>
                  </div>
                </div>
                <div class="ult-spacer spacer-5df992b78ad9b" data-id="5df992b78ad9b" data-height="20"
                  data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                  data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                <div class="wpb_text_column wpb_content_element ">
                  <div class="wpb_wrapper">
                    <p style="text-align: center; color: #333333; font-size: 18px;" v-html="$t('main.about.description')"></p>
                  </div>
                </div>
                <div style="height: 120px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="why" ref="why" name="why" class="page_content section_page-12" :data-section-title="$t('main.hwy.title')">
      <div class="container-fluid">
        <div class="vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill" data-rtl="false"
          style="position: relative;background: rgb(247, 247, 247);"
          data-row-effect-mobile-disable="true">
          <div class="wpb_column vc_column_container vc_col-sm-12 vc_hidden-xs">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="ult-animation  ult-no-mobile " data-animate="infinite No Animation" data-animation-delay="0"
                  data-animation-duration="" data-animation-iteration="infinite" style="opacity: 1;">
                  <div class="ult-spacer spacer-5df992b78b38d animated infinite No Animation" data-id="5df992b78b38d"
                    data-height="120" data-height-mobile="50" data-height-tab="" data-height-tab-portrait=""
                    data-height-mobile-landscape="80"
                    style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;clear:both;display:block;">
                  </div>
                  <div id="ultimate-heading-86985df992b78b3ab"
                    class="uvc-heading ult-adjust-bottom-margin ultimate-heading-86985df992b78b3ab uvc-8193  animated infinite No Animation"
                    data-hspacer="no_spacer" data-halign="center"
                    style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;text-align:center">
                    <div style="height: 120px;"></div>
                    <h1 style="font-weight:normal;color:#066eb7;">{{ $t('main.why.title') }}</h1>
                    <div class="uvc-sub-heading ult-responsive"
                      data-ultimate-target=".uvc-heading.ultimate-heading-86985df992b78b3ab .uvc-sub-heading "
                      data-responsive-json-new="{font-size:,line-height:}" style="font-weight:normal;">
                      <p></p>
                      <p style="text-align: center; margin-top: -15px;; margin-bottom: 35px;color: #adb0b8;">__</p>
                      <p></p>
                    </div>
                  </div>
                  <div style="height: 80px"></div>
                  <div class="container">
                    <div class="row"
                      style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;test">
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1556258300978   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-1792" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-power"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-1792 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title1') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-1792 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description1') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1567392482070   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-5795" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-server"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-5795 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title2') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-5795 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description2') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1567392947659   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-4344" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-cable2"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-4344 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title3') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-4344 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description3') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
                    <div class="row"
                      style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;test">
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1566368439283   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-5952" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-earth-lock"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-5952 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title4') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-5952 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description4') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1566368445144   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-7879" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-teacup"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-7879 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title5') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-7879 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description5') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="vc_column-inner ">
                          <div class="wpb_wrapper">
                            <div class="aio-icon-component  vc_custom_1566368451300   style_1 upper_icon_index-0">
                              <div id="Info-box-wrap-4947" class="aio-icon-box top-icon" style="">
                                <div class="aio-icon-top">
                                  <div class="ult-just-icon-wrapper  ">
                                    <div class="align-icon" style="text-align:center;">
                                      <div class="aio-icon circle  animated fadeInUp delay-03" data-animation="fadeInUp"
                                        data-animation-delay="03"
                                        style="color:#ffffff;background:#066EB7;font-size:30px;display:inline-block;">
                                        <i class="linearicons-user-lock"></i></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="aio-icon-header">
                                  <h3 class="aio-icon-title ult-responsive"
                                    data-ultimate-target="#Info-box-wrap-4947 .aio-icon-title"
                                    data-responsive-json-new="{font-size:mobile_landscape:18px;mobile:18px;,line-height:}"
                                    style="">{{ $t('main.why.title6') }}</h3>
                                </div>
                                <div class="aio-icon-description ult-responsive"
                                  data-ultimate-target="#Info-box-wrap-4947 .aio-icon-description"
                                  data-responsive-json-new="{font-size:mobile_landscape:14px;mobile:14px;,line-height:mobile_landscape:24px;mobile:24px;}"
                                  style="color:#565656;">{{ $t('main.why.description6') }}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="height: 120px">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="case" ref="case" name="case" class="page_content section_page-1564" :data-section-title="$t('main.case.title')">
      <div class="container-fluid"
        style="background-size: cover; background-repeat: repeat; background-color: rgba(0, 0, 0, 0); background-image: url(/img/2018/09/app_bg-3.jpg); background-attachment: scroll;">
        <div class="vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill" data-rtl="false"
          style="position: relative;" data-row-effect-mobile-disable="true" data-img-parallax-mobile-disable="true">
          <div class="wpb_column vc_column_container vc_col-sm-12 vc_hidden-sm vc_hidden-xs">
            <div class="vc_column-inner ">
              <div style="height: 120px"></div>
              <div class="uvc-main-heading ult-responsive text-center"
                data-ultimate-target=".uvc-heading.ultimate-heading-84245df9c02b0d9a0 h1"
                data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:42px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                <h1 style="font-weight:normal;color:#ffffff;">{{ $t('main.case.title') }}</h1>
              </div>
              <div class="uvc-sub-heading ult-responsive"
                data-ultimate-target=".uvc-heading.ultimate-heading-84245df9c02b0d9a0 .uvc-sub-heading "
                data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}"
                style="font-weight:normal;">
                <p></p>
                <p style="text-align: center; margin-top: -15px;; margin-bottom: 80px;color: #adb0b8;">__</p>
                <p></p>
              </div>
              <div class="wpb_wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_left">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="550"
                                  :src="$t('main.case.image1')"
                                  class="vc_single_image-img attachment-full" id="img1" alt=""></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <h2
                            style="font-size: 32px;color: #ffffff;text-align: left; margin-top: 40px; margin-bottom: 10px;"
                            class="vc_custom_heading">{{ $t('main.case.title1') }}</h2>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p style="line-height: 1.5; color: #fff;" v-html="$t('main.case.description1')"></p>
                            </div>
                          </div>
                          <div style="height: 14px"></div>
                          <b-button pill type="submit" variant="primary" id="submit"
                            style="padding: 8px 19px;background-color: #00355b; border: 1px solid transparent;color: #ffffff;"
                            href="/bolt-trust">{{ $t('main.case.linkTitle') }}</b-button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                    <span class="vc_sep_holder vc_sep_holder_l"><span style="border-color:#494949;"
                        class="vc_sep_line"></span></span></div>
                  <div style="height: 40px;"></div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <h2 style="font-size: 32px;color: #ffffff;text-align: left; margin: 10px 0px;"
                            class="vc_custom_heading">{{ $t('main.case.title2') }}</h2>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p style="line-height: 2; color: #fff;">{{ $t('main.case.description2') }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_left">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="550"
                                  :src="$t('main.case.image2')"
                                  class="vc_single_image-img attachment-full" alt="" id="img2"
                                  sizes="(max-width: 550px) 100vw, 550px"></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                    <span class="vc_sep_holder vc_sep_holder_l"><span style="border-color:#494949;"
                        class="vc_sep_line"></span></span></div>
                  <div style="height: 40px;"></div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_left">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="550"
                                  :src="$t('main.case.image3')"
                                  class="vc_single_image-img attachment-full" alt="" id="img3"
                                  sizes="(max-width: 550px) 100vw, 550px"></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <h2 style="font-size: 32px;color: #ffffff;text-align: left; margin: 10px 0px;"
                            class="vc_custom_heading">{{ $t('main.case.title3') }}</h2>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p style="line-height: 2; color: #fff;">{{ $t('main.case.description3') }}</p>
                            </div>
                          </div>
                          <div style="height: 14px"></div>
                          <div class="vc_btn3-container vc_btn3-inline vc_custom_1552371038759" style="float:left;">
                            <link rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                            <i class="fa fa-apple"
                              style="padding-left: 20px;;position: absolute;padding-top: 32px;color: white;"></i>
                            <b-button pill type="submit" variant="primary" id="submit"
                              style="padding: 8px 19px 8px 45px;background-color: #00355b; border: 1px solid transparent;color: #ffffff;"
                              href="https://itunes.apple.com/us/app/pingpay/id1436669171?mt=8" target="_blank">{{ $t('main.case.linkTitle2') }}</b-button>
                          </div>
                          <div class="vc_btn3-container vc_btn3-inline" style="float:left; margin-left: 20px;">
                            <i class="fa fa-android"
                              style="padding-left: 20px;;position: absolute;padding-top: 32px;color: white;"></i>
                            <b-button pill type="submit" variant="primary" id="submit"
                              style="padding: 8px 19px 8px 45px;background-color: #00355b; border: 1px solid transparent;color: #ffffff;"
                              href="https://play.google.com/store/apps/details?id=com.isuncloud.pingpaywallet"
                              target="_blank">{{ $t('main.case.linkTitle3') }}</b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                    <span class="vc_sep_holder vc_sep_holder_l"><span style="border-color:#494949;"
                        class="vc_sep_line"></span></span></div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div style="height: 40px"></div>
                          <h2 style="font-size: 32px;color: #ffffff;text-align: left; margin: 10px 0px"
                            class="vc_custom_heading">{{ $t('main.case.title4') }}</h2>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p style="line-height: 2; color: #fff;" v-html="$t('main.case.description4')"></p>
                            </div>
                          </div>
                          <div style="height: 14px"></div>
                          <div class="vc_btn3-container vc_btn3-inline vc_custom_1552371038759" style="float:left;">
                            <i class="fa fa-apple"
                              style="padding-left: 20px;;position: absolute;padding-top: 32px;color: white;"></i>
                            <b-button pill type="submit" variant="primary" id="submit"
                              style="padding: 8px 19px 8px 45px;background-color: #00355b; border: 1px solid transparent;color: #ffffff;"
                              href="https://itunes.apple.com/tw/app/rockme-%E5%85%A8%E6%96%B0%E6%B6%88%E8%B2%BB%E9%AB%94%E9%A9%97%E5%84%AA%E6%83%A0%E5%B9%B3%E5%8F%B0/id1450221445?mt=8"
                              target="_blank">{{ $t('main.case.linkTitle2') }}</b-button>
                          </div>
                          <div class="vc_btn3-container vc_btn3-inline" style="float:left; margin-left: 20px;">
                            <i class="fa fa-android"
                              style="padding-left: 20px;;position: absolute;padding-top: 32px;color: white;"></i>
                            <b-button pill type="submit" variant="primary" id="submit"
                              style="padding: 8px 19px 8px 45px;background-color: #00355b; border: 1px solid transparent;color: #ffffff;"
                              href="https://play.google.com/store/apps/details?id=com.isuncloud.rockme" target="_blank">
                              {{ $t('main.case.linkTitle3') }}</b-button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_left">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="550"
                                  :src="$t('main.case.image4')"
                                  class="vc_single_image-img attachment-full" alt="" id="img4"
                                  sizes="(max-width: 550px) 100vw, 550px"></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text">
                    <span class="vc_sep_holder vc_sep_holder_l"><span style="border-color:#494949;"
                        class="vc_sep_line"></span></span></div>
                  <div style="height: 40px"></div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_left">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey"><img width="550"
                                  :src="$t('main.case.image5')"
                                  class="vc_single_image-img attachment-full" alt="" id="img5"></div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="vc_column-inner ">
                        <div class="wpb_wrapper">
                          <h2 style="font-size: 32px;color: #ffffff;text-align: left; margin: 10px 0px;"
                            class="vc_custom_heading">{{ $t('main.case.title5') }}</h2>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p style="line-height: 2; color: #fff;">{{ $t('main.case.description5') }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="height: 120px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="news" ref="news" name="news" class="page_content section_page-577" :data-section-title="$t('main.news.title')">
      <div class="container">
        <p></p>
        <div class="vc_row wpb_row vc_row-fluid">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div class="ult-animation  ult-no-mobile " data-animate="infinite No Animation" data-animation-delay="0"
                  data-animation-duration="" data-animation-iteration="infinite" style="">
                  <div id="ultimate-heading-84245df9c02b0d9a0"
                    class="uvc-heading ult-adjust-bottom-margin ultimate-heading-84245df9c02b0d9a0 uvc-2543  animated infinite No Animation"
                    data-hspacer="no_spacer" data-halign="center"
                    style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;text-align:center">
                    <div style="height: 120px;"></div>
                    <div class="uvc-main-heading ult-responsive"
                      data-ultimate-target=".uvc-heading.ultimate-heading-84245df9c02b0d9a0 h1"
                      data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:42px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                      <h1 style="font-weight:normal;color:#066eb7;">{{ $t('main.news.title') }}</h1>
                    </div>
                    <div class="uvc-sub-heading ult-responsive"
                      data-ultimate-target=".uvc-heading.ultimate-heading-84245df9c02b0d9a0 .uvc-sub-heading "
                      data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}"
                      style="font-weight:normal;">
                      <p></p>
                      <p style="text-align: center; margin-top: -15px;; margin-bottom: 80px;color: #adb0b8;">__</p>
                      <p></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0d9c1 animated infinite No Animation" data-id="5df9c02b0d9c1"
                    data-height="80" data-height-mobile="20" data-height-tab="" data-height-tab-portrait=""
                    data-height-mobile-landscape="30"
                    style="opacity:1;-webkit-animation-delay:0s;-webkit-animation-duration:s;-webkit-animation-iteration-count:infinite; -moz-animation-delay:0s;-moz-animation-duration:s;-moz-animation-iteration-count:infinite; animation-delay:0s;animation-duration:s;animation-iteration-count:infinite;clear:both;display:block;">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  <div class="wpb_single_image wpb_content_element vc_align_left">
                    <figure class="wpb_wrapper vc_figure"> <a
                        :href="$t('main.news.post1.link')"
                        target="_blank" class="vc_single_image-wrapper   vc_box_border_grey"><img width="360"
                          height="270" :src="$t('main.news.post1.image')"
                          class="vc_single_image-img attachment-full" alt=""
                          sizes="(max-width: 480px) 100vw, 480px"></a></figure>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0dfa8" data-id="5df9c02b0dfa8" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><span style="color: #808080; font-size: 12px;">{{ $t('main.news.post1.time') }}</span></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e023" data-id="5df9c02b0e023" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><strong><a
                            :href="$t('main.news.post1.link')"
                            target="_blank" rel="noopener"><span style="color: #000000; font-size: 18px;">{{ $t('main.news.post1.title') }}</span></a></strong></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e093" data-id="5df9c02b0e093" data-height="20"
                    data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 vc_hidden-sm vc_hidden-xs">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  <div class="wpb_single_image wpb_content_element vc_align_left">
                    <figure class="wpb_wrapper vc_figure"> <a
                        :href="$t('main.news.post2.link')"
                        target="_blank" class="vc_single_image-wrapper   vc_box_border_grey"><img width="360"
                          height="270" :src="$t('main.news.post2.image')"
                          class="vc_single_image-img attachment-full" alt=""
                          sizes="(max-width: 480px) 100vw, 480px"></a></figure>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e4a4" data-id="5df9c02b0e4a4" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><span style="color: #808080; font-size: 12px;">{{ $t('main.news.post2.time') }}</span></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e51f" data-id="5df9c02b0e51f" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><strong><a
                            :href="$t('main.news.post2.link')"
                            target="_blank" rel="noopener"><span
                              style="color: #000000; font-size: 18px;">{{ $t('main.news.post2.title') }}</span></a></strong></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e5a7" data-id="5df9c02b0e5a7" data-height="20"
                    data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  <div class="wpb_single_image wpb_content_element vc_align_left">
                    <figure class="wpb_wrapper vc_figure"> <a
                        :href="$t('main.news.post3.link')"
                        target="_blank" class="vc_single_image-wrapper   vc_box_border_grey"><img width="360"
                          height="270" :src="$t('main.news.post3.image')"
                          class="vc_single_image-img attachment-full" alt=""
                          sizes="(max-width: 480px) 100vw, 480px"></a></figure>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0e9d3" data-id="5df9c02b0e9d3" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><span style="color: #808080; font-size: 12px;">{{ $t('main.news.post3.time') }}</span></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0ea56" data-id="5df9c02b0ea56" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><strong><a
                            :href="$t('main.news.post3.link')"
                            target="_blank" rel="noopener"><span style="color: #000000; font-size: 18px;">{{ $t('main.news.post3.title') }}</span></a></strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: 100%;"
              data-top-bottom="top: 0%;" style="height: 0%; top: 100%;"></div>
          </div>
          <div class="row">
            <div class="col-lg-4 vc_hidden-sm vc_hidden-xs">
              <div class="vc_column-inner ">
                <div class="wpb_wrapper">
                  <div class="wpb_single_image wpb_content_element vc_align_left">
                    <figure class="wpb_wrapper vc_figure"> <a
                        :href="$t('main.news.post4.link')"
                        target="_blank" class="vc_single_image-wrapper   vc_box_border_grey"><img width="360"
                          height="270" :src="$t('main.news.post4.image')"
                          class="vc_single_image-img attachment-full" alt=""
                          sizes="(max-width: 480px) 100vw, 480px"></a></figure>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0efc1" data-id="5df9c02b0efc1" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><span style="color: #808080; font-size: 12px;">{{ $t('main.news.post4.time') }}</span></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0f06c" data-id="5df9c02b0f06c" data-height="10"
                    data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                  <div class="wpb_text_column wpb_content_element ">
                    <div class="wpb_wrapper">
                      <p><strong><a
                            :href="$t('main.news.post4.link')"
                            target="_blank" rel="noopener"><span style="color: #000000; font-size: 18px;">{{ $t('main.news.post4.title') }}</span></a></strong></p>
                    </div>
                  </div>
                  <div class="ult-spacer spacer-5df9c02b0f0d8" data-id="5df9c02b0f0d8" data-height="20"
                    data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                    data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 120px"></div>
    <div id="team" ref="team" name="team" class="page_content section_page-1520" :data-section-title="$t('main.team.title')">
      <div class="container-fluid" style="background: rgb(33, 33, 33);">
        <div class="vc_row wpb_row vc_row-fluid ult-vc-hide-row vc_row-has-fill" data-rtl="false"
          data-row-effect-mobile-disable="true" style="position: relative;">
          <div class="wpb_column vc_column_container vc_col-sm-12">
            <div class="vc_column-inner ">
              <div class="wpb_wrapper">
                <div style="height: 120px"></div>
                <div id="ultimate-heading-89455df9defae0596"
                  class="uvc-heading ult-adjust-bottom-margin ultimate-heading-89455df9defae0596 uvc-1466 "
                  data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                  <div class="uvc-main-heading ult-responsive"
                    data-ultimate-target=".uvc-heading.ultimate-heading-89455df9defae0596 h1"
                    data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:42px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                    <h1 style="font-weight:normal;color:#ffffff;">{{ $t('main.team.title') }}</h1>
                  </div>
                  <div class="uvc-sub-heading ult-responsive"
                    data-ultimate-target=".uvc-heading.ultimate-heading-84245df9c02b0d9a0 .uvc-sub-heading "
                    data-responsive-json-new="{&quot;font-size&quot;:&quot;&quot;,&quot;line-height&quot;:&quot;&quot;}"
                    style="font-weight:normal;">
                    <p></p>
                    <p style="text-align: center; margin-top: -15px;; margin-bottom: 80px;color: #adb0b8;">__</p>
                    <p></p>
                  </div>
                </div>
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377879884">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member1.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae13dd" data-id="5df9defae13dd" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-8045df9defae140c"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-8045df9defae140c uvc-2522 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-8045df9defae140c h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member1.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae1427" data-id="5df9defae1427" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member1.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae14a9" data-id="5df9defae14a9" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span
                                  style="color: #fff; font-size: 14px; letter-spacing: 1px;">{{ $t('main.team.member1.description') }}</span>
                              </p>
                            </div>
                          </div>
                          <div style="height: 40px;"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377887760">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member2.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae1938" data-id="5df9defae1938" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-40295df9defae1958"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-40295df9defae1958 uvc-1900 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-40295df9defae1958 h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member2.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae1973" data-id="5df9defae1973" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member2.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae1a14" data-id="5df9defae1a14" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span
                                  style="color: #fff; font-size: 14px;">{{ $t('main.team.member2.description') }}</span>
                              </p>
                            </div>
                          </div>
                          <div style="height: 40px;"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377894509">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member3.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae2352" data-id="5df9defae2352" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-99905df9defae2373"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-99905df9defae2373 uvc-9536 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-99905df9defae2373 h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member3.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae238d" data-id="5df9defae238d" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member3.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae241b" data-id="5df9defae241b" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span
                                  style="color: #fff; font-size: 14px;">{{ $t('main.team.member3.description') }}</span>
                              </p>
                            </div>
                          </div>
                          <div style="height: 40px;"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377903577">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member4.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae3fb2" data-id="5df9defae3fb2" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-12405df9defae3fe7"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-12405df9defae3fe7 uvc-897 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-12405df9defae3fe7 h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member4.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae4002" data-id="5df9defae4002" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member4.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae409c" data-id="5df9defae409c" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span
                                  style="color: #fff; font-size: 14px;">{{ $t('main.team.member4.description') }}</span>
                              </p>
                            </div>
                          </div>
                          <div style="height: 40px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style="height: 80px"></div>
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377879884">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member5.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae4662" data-id="5df9defae4662" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-72535df9defae4682"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-72535df9defae4682 uvc-907 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-72535df9defae4682 h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member5.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae469c" data-id="5df9defae469c" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member5.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae4735" data-id="5df9defae4735" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span style="color: #fff; font-size: 14px; letter-spacing: 1px;">{{ $t('main.team.member5.description') }}</span></p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae47a0" data-id="5df9defae47a0" data-height="40"
                            data-height-mobile="40" data-height-tab="40" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3">
                      <div class="vc_column-inner vc_custom_1566377887760">
                        <div class="wpb_wrapper">
                          <div class="wpb_single_image wpb_content_element vc_align_center">
                            <figure class="wpb_wrapper vc_figure">
                              <div class="vc_single_image-wrapper   vc_box_border_grey text-center"><img width="242.5" height="242.5"
                                  :src="$t('main.team.member6.image')"
                                  class="vc_single_image-img attachment-full" alt=""></div>
                            </figure>
                          </div>
                          <div class="ult-spacer spacer-5df9defae57a5" data-id="5df9defae57a5" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div id="ultimate-heading-56585df9defae57c7"
                            class="uvc-heading ult-adjust-bottom-margin ultimate-heading-56585df9defae57c7 uvc-4311 "
                            data-hspacer="no_spacer" data-halign="center" style="text-align:center">
                            <div class="uvc-heading-spacer no_spacer" style="top"></div>
                            <div class="team-header"
                              data-ultimate-target=".uvc-heading.ultimate-heading-56585df9defae57c7 h2"
                              data-responsive-json-new="{&quot;font-size&quot;:&quot;desktop:18px;&quot;,&quot;line-height&quot;:&quot;&quot;}">
                              <h2 style="font-weight:bold;color:#ffffff;">{{ $t('main.team.member6.name') }}</h2>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae57e1" data-id="5df9defae57e1" data-height="5"
                            data-height-mobile="5" data-height-tab="5" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p class="p1" style="text-align: center; color: #fff; font-size: 13px;">{{ $t('main.team.member6.title') }}</p>
                            </div>
                          </div>
                          <div class="ult-spacer spacer-5df9defae5867" data-id="5df9defae5867" data-height="20"
                            data-height-mobile="20" data-height-tab="20" data-height-tab-portrait=""
                            data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                          <div class="wpb_text_column wpb_content_element ">
                            <div class="wpb_wrapper">
                              <p><span style="color: #fff; font-size: 14px;">{{ $t('main.team.member6.description') }}</span></p>
                            </div>
                          </div>
                          <div style="height: 40px;"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 120px;"></div>
      </div>
    </div>
    <div id="contact" ref="contact" name="contact" class="container-fluid">
      <div class="upb_row_bg" data-bg-override="ex-full"
        style="background-image: url('./../img/2018/06/shutterstock_519133078.jpg'); height: 874px;">
        <div style="height: 120px"></div>
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div class="ult-spacer spacer-5df8d2bd7363a" data-id="5df8d2bd7363a" data-height="120"
                data-height-mobile="40" data-height-tab="" data-height-tab-portrait=""
                data-height-mobile-landscape="40" style="clear:both;display:block;"></div>
              <h3 style="color: #000000;text-align: center" class="custom_header">{{ $t('main.contact.title') }}</h3>
              <div class="wpb_text_column wpb_content_element ">
                <div class="wpb_wrapper">
                  <p style="text-align: center; margin-top: 10px; margin-bottom: 5px; color: #adb0b8;">__</p>
                </div>
              </div>
              <div class="vc_empty_space" style="height: 40px"><span class="vc_empty_space_inner"></span></div>
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <h1 style="font-size: 18px;color: #066EB7;text-align: left" class="custom_header">{{ $t('main.contact.contactTitle') }}
                        </h1>
                        <div class="ult-spacer spacer-5df8d2bd739f7" data-id="5df8d2bd739f7" data-height="10"
                          data-height-mobile="10" data-height-tab="10" data-height-tab-portrait=""
                          data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                        <div class="wpb_text_column wpb_content_element ">
                          <div class="wpb_wrapper">
                            <p>{{ $t('main.contact.address') }}</p>
                          </div>
                        </div>
                        <div class="wpb_text_column wpb_content_element ">
                          <div class="wpb_wrapper">
                            <p><span style="color: #67656f;">{{ $t('main.contact.phone') }}</span></p>
                          </div>
                        </div>
                        <div class="wpb_text_column wpb_content_element ">
                          <div class="wpb_wrapper">
                            <p>{{ $t('main.contact.email') }}</p>
                          </div>
                        </div>
                        <div
                          class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_10 vc_sep_pos_align_left vc_separator_no_text">
                          <span class="vc_sep_holder vc_sep_holder_l">
                            <span style="border-color:#67656f;" class="vc_sep_line contact-line"></span>
                          </span>
                        </div>
                        <div class="wpb_raw_code wpb_content_element wpb_raw_html">
                          <div class="wpb_wrapper">
                            <link rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                            <a :href="$t('main.contact.link.facebook')" class="fa fa-facebook fa-footer" target="_blank"></a> 
                            <a :href="$t('main.contact.link.github')" class="fa fa-github-alt fa-footer" target="_blank"></a> 
                            <a :href="$t('main.contact.link.medium')" class="fa fa-medium fa-footer" target="_blank"></a></div>
                        </div>
                        <div class="ult-spacer spacer-5df8d2bd73c8b" data-id="5df8d2bd73c8b" data-height="30"
                          data-height-mobile="30" data-height-tab="30" data-height-tab-portrait=""
                          data-height-mobile-landscape="" style="clear:both;display:block;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="vc_column-inner ">
                      <div class="wpb_wrapper">
                        <div><p>{{ $t('main.contact.form.info') }}</p></div>
                        <div style="height: 10px;"></div>
                        <b-form @submit="onSubmit" id="contact">
                          <b-form-group id="input-group-2">
                            <b-form-input
                              id="your-name"
                              v-model="form.name"
                              required
                              :placeholder="$t('main.contact.form.name')"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-2">
                            <b-form-input
                              id="your-phone"
                              v-model="form.phone"
                              required
                              :placeholder="$t('main.contact.form.phone')"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-2">
                            <b-form-input
                              id="your-email"
                              v-model="form.email"
                              :placeholder="$t('main.contact.form.email')"
                            ></b-form-input>
                          </b-form-group>

                          <b-form-group id="input-group-2">
                            <b-form-textarea
                              id="your-message"
                              v-model="form.message"
                              pressed.sync="true"
                              required
                              :placeholder="$t('main.contact.form.message')"
                            ></b-form-textarea>
                          </b-form-group>
                          <b-button pill type="submit" variant="primary" id="submit">{{ $t('main.contact.form.button') }}</b-button>
                        </b-form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style="height: 120px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        form: {
          name: '',
          phone: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        this.form.message = this.form.message.replace(/\n/g,"%0D%0A");
        window.open(`mailto:service@boltchain.io?subject=企業詢問&body=name: ${this.form.name}%0D%0Aphone: ${this.form.phone}%0D%0Aemail: ${this.form.email}%0D%0Amessage: %0D%0A${this.form.message}`, "_blank");
      },
      scrollToOneAnchor(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
  }
</script>
<style scoped>
@import './../../public/img/smile_fonts/linearicons/linearicons.css';
.container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
}
.pageTitle {
  padding-top: 250px;
}
.slide1-logo {
  width: 21.21%;
}
.aio-icon i {
  line-height: inherit;
}
.linearicons-power:before {
  content: "\e7b9";
}
.aio-icon,
.vc_row .aio-icon {
  display: inline-block;
  font-size: 32px;
  height: 2em;
  width: 2em;
  text-align: center;
  line-height: 2em;
  -moz-box-sizing: content-box !important;
  -webkit-box-sizing: content-box !important;
  box-sizing: content-box !important;
}
.aio-icon.circle {
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
[class^="linearicons-"],
[class*=" linearicons-"] {
  font-family: 'linearicons' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.aio-icon-title {
  font-size: 16px;
  margin: 25px 0px 15px;
  text-align: center;
}
.aio-icon-description {
  text-align: center;
  color: #565656;
  font-size: 14px;
}
.aio-icon-box {
  margin-top: 41px;
}
.fa-apple:before {
  content: "\f179";
}
.vc_btn3.vc_btn3-size-md.vc_btn3-icon-left:not(.vc_btn3-o-empty) .vc_btn3-icon {
  left: 20px;
}
.vc_btn3.vc_btn3-size-md .vc_btn3-icon {
  font-size: 16px;
  height: 14px;
  line-height: 14px;
}
.vc_btn3.vc_btn3-icon-left .vc_btn3-icon,
.vc_btn3.vc_btn3-icon-right .vc_btn3-icon {
  display: block;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  -o-transform: translate(0, -50%);
  transform: translate(0, -50%);
}
.vc_general.vc_btn3 .vc_btn3-icon {
  vertical-align: top;
  height: 14px;
  line-height: 1;
  font-size: 16px;
}
.team-header h2 {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
}
.col-sm-3 {
  padding: 0px 25px;
}
body, p, .lovepost a, .widget ul li a, .widget p, .widget span, .widget ul li, .the_content ul li, .the_content ol li, #recentcomments li, .custom-widget h4, .widget.des_cubeportfolio_widget h4, .widget.des_recent_posts_widget h4, .custom-widget ul li a, .aio-icon-description, li:not(.testimonials-slide), .smile_icon_list li .icon_description p {
  font-family: 'Roboto','Arial','sans-serif',sans-serif;
  font-weight: normal;
  font-size: 15px;
  color: #adb0b8;
  margin-bottom: 6px;
}
.contact-line {
  width: 30px;
  margin-top: 20px;
  margin-bottom: 30px;
}
.fa.fa-footer {
  background: #595959;
  color: white;
  font-size: 15px;
}
.fa-footer {
  font-size: 10px;
  height: 40px;
  padding: 12px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
  margin-right: 10px;
}
#input-group-2 input, textarea {
  position: relative;
  float: left;
  width: 100%;
  padding: 22px 20px;
  outline: 0;
  margin: 5px 0;
  background: #f9f9f9;
  border-radius: 30px !important;
  border: 1px solid #e4e4e4;
  color: #C7C7C7 !important;
  font-size: 14px !important;
  letter-spacing: 0;
  font-weight: 500;
}
#input-group-2 textarea {
  height: 200px;
}
#input-group-2 input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { /* Edge */
  color: #8F8F8F;
}
#input-group-2 input:-ms-input-placeholder, textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #8F8F8F;
}
#input-group-2 input::placeholder, textarea::placeholder {
  color: #8F8F8F;
}
.form-group {
  margin: 10px 0px;
}
#submit {
  margin-top: 20px;
  background-color: #066eb7;
  font-size: 15px;
  padding: 6px 15px;
  font-weight: normal;
}
@media (max-width: 992px) {
  #input-group-2 textarea {
    height: 36px;
  }
  #img1, #img2, #img3, #img4, #img5 {
    max-width: 100%;
    height: auto;
  } 
}
</style>