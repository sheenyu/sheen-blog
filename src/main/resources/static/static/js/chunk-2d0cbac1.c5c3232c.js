(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cbac1"],{"4b52":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-full"},[i("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[i("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[i("span",[i("i",{staticClass:"fa fa fa-book"},[t._v(" 主题 / 更新主题")])])]),i("div",[i("el-form",{ref:"topic",staticClass:"demo-topic",attrs:{model:t.topic}},[i("el-form-item",{attrs:{prop:"title"}},[i("el-input",{attrs:{placeholder:"输入新的主题名称"},model:{value:t.topic.title,callback:function(e){t.$set(t.topic,"title",e)},expression:"topic.title"}})],1),i("div",{attrs:{id:"vditor"}}),i("el-form-item",{staticClass:"mt-3"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleUpdate()}}},[t._v("更新 ")]),i("el-button",{on:{click:function(e){return t.resetForm("topic")}}},[t._v("重置")])],1)],1)],1)])],1)])])},a=[],n=i("0fac"),s=i("ff41"),c=i.n(s),r=(i("2f2f"),{name:"TopicEdit",components:{},data:function(){return{topic:{},tags:{}}},created:function(){this.fetchTopic()},methods:{renderMarkdown:function(t){var e=this;this.contentEditor=new c.a("vditor",{height:460,placeholder:"输入要更新的内容",preview:{hljs:{style:"monokai"}},mode:"sv",after:function(){e.contentEditor.setValue(t)}})},fetchTopic:function(){var t=this;Object(n["d"])(this.$route.params.id).then((function(e){t.topic=e.data.topic,t.tags=e.data.tags,t.renderMarkdown(t.topic.content)}))},handleUpdate:function(){var t=this;this.topic.content=this.contentEditor.getValue(),console.log(this.topic),Object(n["f"])(this.topic).then((function(e){var i=e.data;console.log(i),setTimeout((function(){t.$router.push({name:"topic-detail",params:{id:i.id}})}),800)}))},resetForm:function(t){this.$refs[t].resetFields(),this.contentEditor.setValue(""),this.tags=""}}}),l=r,d=i("2877"),p=Object(d["a"])(l,o,a,!1,null,"313262ed",null);e["default"]=p.exports}}]);