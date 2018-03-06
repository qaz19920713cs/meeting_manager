<template>
    <div>
        <ul class="meeting_list clear">
            <li class="list_color1">
                基本信息
            </li>
            <li class="list_color2 list_last_child1">
                <a href="" class="list_last_childA">保存</a>
            </li>
            <li class="list_color2 list_last_child">
                <a href="" class="list_last_childA">取消</a>
            </li>
        </ul>
        <ul class="meeting_set_main">
            <li class="left main_left_li">
                <div class="content scroll_content">
                    <ul class="set_main_left">
                        <li>
                            <span>会议名称</span>
                            <span class="span_style1">
                            <input type="text" placeholder="周浩的会议">
                        </span>
                        </li>
                        <li>
                            <span>会议日期</span>
                            <span>
                            <span class=" main_left_span3">
                                <input type="text" id="datepicker" value="">
                            </span>
                            <span class="main_left_span1 relative">
                                <select>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                    <option value="">10:00</option>
                                </select>
                                <span class="main_left_span2 "></span>
                            </span>
                        </span>
                        </li>
                        <li>
                            <span>会议时长</span>
                            <span>
                                <span class="main_left_span1 relative">
                                    <select>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                    </select>
                                    <span class="main_left_span2 "></span>
                                </span>
                                <span>小时</span>
                                <span class="main_left_span1 relative">
                                    <select>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                        <option value="">10:00</option>
                                    </select>
                                    <span class="main_left_span2 "></span>
                                </span>
                                <span>分钟</span>
                        </span>
                        </li>
                        <li>
                            <span></span>
                            <span>
                                <span class="span_style_checkout radio_open"></span>
                                <span class="span_style8">重复</span>
                            </span>
                        </li>
                        <li>
                            <span>视频会议</span>
                            <span>
                                <span class="span_style_close" id="span_open"></span>
                            </span>
                        </li>
                        <li>
                            <span class="span_style9">会议室</span>
                            <span id="append_meetingroom">
                                <span class="span_style4 span_style10" id="seach_meetingroom">查找会议室</span>
                            </span>
                        </li>
                        <li>
                            <span></span>
                            <div class="span_style_area">
                                <p class="style_area_p">推荐会议室</p>
                                <div class="content scroll_content2 ">
                                    <div class="have_meetingroom">
                                        <ul class="have_meetingroom_ul" id="select_meetingroom">
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室1</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室2</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室3</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室4</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室5</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室6</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室7</span>
                                            </li>
                                            <li>
                                                <span class="span_style_checkout"></span>
                                                <span class="span_style8">视讯4F-会议室8</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="no_meetingroom">
                                        <span>
                                            <span class="style_area_content1"></span>
                                            <span class="style_area_content2">当前时间段暂无会议室可用，请选择其他时间段</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>联系方式</span>
                            <span>
                                <input type="text" placeholder="手机号码" class="span_style5">
                                <input type="text" placeholder="分机号码" class="span_style12">
                                <span class="span_style11">（必填一项）</span>
                        </span>
                        </li>
                        <li>
                            <span class="span_style6">会议概要</span>
                            <span>
                            <textarea name="" id=""  class="textarea_style" maxlength="500"></textarea>
                            <span class="span_style7">最多可输入500字</span>
                        </span>
                        </li>
                        <li>
                            <span class="span_style9">通知方式</span>
                            <span class="span_style3">
                            <span class="span_style_checkout radio_open" ></span>
                            <span class="span_style8">邮件通知</span>
                            <span class="span_style_checkout radio_open" ></span>
                            <span class="span_style8">短信通知</span>
                        </span>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="right main_right_li">
                <div class="meeting_people_nav">
                    <ul class="main_right_ul clear" id="meeting_people_nav">
                        <li class="left active_background static_background" data="meeting_people_list">与会人员列表</li>
                        <li class="left static_background main_right_li_style1" data="meeting_people_add">常用参会人</li>
                    </ul>
                </div>
                <div class="meeting_people_div"  data="meeting_people_list">
                    <ul class="main_right_ul_bottom" id="meeting_people">
                        <li class="relative seach_add_people">
                            <input type="text" placeholder="搜索已添加的与会人员" class="righ_li_input">
                            <span class="meeting_man_seach"></span>
                        </li>
                        <li class="seach_add_people cursor_pointer" id="add_meeting_people">
                            <span class="seach_add_meeting_people"></span>
                            <span>添加与会人员</span>
                        </li>
                        <li>
                            <div class="content scroll_content3">
                                <ul id="partake_meeting_alr">
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="meeting_content_div" data="meeting_people_add">
                    <div class="content scroll_content4">
                        <ul id="partake_meeting">
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧1</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧2</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧3</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧4</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧5</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧6</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧7</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧8</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧9</span>
                                <span class="add_people"></span>
                            </li>
                            <li class="meeting_people relative">
                                <img src="../../static/images/create_meeting1.jpg" alt="" class="add_meeting_people" >
                                <span>陈晓慧10</span>
                                <span class="add_people"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped>
    @import '../../static/css/single_page/meetinglist_createmeeting.css';
</style>