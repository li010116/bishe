"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[91],{9091:function(e,t,s){s.r(t),s.d(t,{default:function(){return o}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-card",{staticStyle:{width:"50%"}},[t("el-form",{staticStyle:{"padding-right":"50px"},attrs:{model:e.user,"label-width":"100px"}},[t("div",{staticStyle:{margin:"15px","text-align":"center"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$baseUrl+"/files/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess}},[e.user.avatar?t("img",{staticClass:"avatar",attrs:{src:e.user.avatar}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名",disabled:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),t("el-form-item",{attrs:{label:"店铺名",prop:"name"}},[t("el-input",{attrs:{placeholder:"店铺名"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-input",{attrs:{placeholder:"电话"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"邮箱"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),t("el-form-item",{attrs:{label:"介绍",prop:"description"}},[t("el-input",{attrs:{type:"textarea",placeholder:"店铺介绍"},model:{value:e.user.description,callback:function(t){e.$set(e.user,"description",t)},expression:"user.description"}})],1),t("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[t("el-input",{attrs:{placeholder:"审核状态",disabled:""},model:{value:e.user.status,callback:function(t){e.$set(e.user,"status",t)},expression:"user.status"}})],1),t("div",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("保 存")])],1)],1)],1)],1)},r=[],l={name:"AdminPerson",data(){return{user:JSON.parse(localStorage.getItem("xm-user")||"{}")}},created(){},methods:{update(){this.$request.put("/business/update",this.user).then((e=>{"200"===e.code?(this.$message.success("保存成功"),localStorage.setItem("xm-user",JSON.stringify(this.user)),this.$emit("update:user")):this.$message.error(e.msg)}))},handleAvatarSuccess(e,t,s){this.$set(this.user,"avatar",e.data)}}},u=l,i=s(1656),n=(0,i.A)(u,a,r,!1,null,"4cd5a2b1",null),o=n.exports}}]);
//# sourceMappingURL=91.81472ebd.js.map