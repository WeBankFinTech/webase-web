(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GsGL:function(e,t,o){},LFHq:function(e,t,o){"use strict";var a=o("GsGL");o.n(a).a},VI5Z:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-content-head",{attrs:{headTitle:"节点管理"}}),e._v(" "),o("div",{staticClass:"module-wrapper"},[o("div",{staticClass:"search-part"},[o("div",{staticClass:"search-part-left"},[o("el-button",{staticClass:"search-part-left-btn",attrs:{type:"primary",disabled:e.disabled},on:{click:e.createNodes}},[e._v("新增节点")])],1),e._v(" "),o("div",{staticClass:"search-part-right"},[o("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入节点名称"},model:{value:e.nodeName,callback:function(t){e.nodeName=t},expression:"nodeName"}},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1)]),e._v(" "),o("div",{staticClass:"search-table"},[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"search-table-content",attrs:{data:e.nodeData}},[e._l(e.nodeHead,function(t){return o("el-table-column",{key:t.enName,attrs:{label:t.name,"show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["operate"!=t.enName?["nodeActive"===t.enName?o("span",[o("i",{staticClass:"wbs-icon-radio font-6",style:{color:e.textColor(a.row[t.enName])}}),e._v(" "+e._s(e.nodesStatus(a.row[t.enName]))+"\n                            ")]):"nodeIp"===t.enName?o("a",{class:[{"font-color-2956a3":1===a.row.nodeType},{"cursor-pointer":1===a.row.nodeType}],on:{click:function(t){return e.showDetail(a.row)}}},[e._v(e._s(a.row[t.enName]))]):o("span",[e._v(e._s(a.row[t.enName]))])]:void 0]}}],null,!0)})}),e._v(" "),o("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[o("i",{staticClass:"wbs-icon-radio font-6",style:{color:e.textColor(t.row.nodeActive)}}),e._v("\n                            "+e._s(e.nodesStatus(t.row.nodeActive))+"\n                        ")])]}}])})],2),e._v(" "),o("el-pagination",{staticClass:"page",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),e.nodesDialogVisible?o("el-dialog",{staticClass:"dialog-wrapper",attrs:{visible:e.nodesDialogVisible,title:e.nodesDialogTitle,width:"433px","append-to-body":!0,center:!0},on:{"update:visible":function(t){e.nodesDialogVisible=t}}},[o("v-nodesDialog",{attrs:{nodesDialogOptions:e.nodesDialogOptions},on:{success:e.success,close:e.close}})],1):e._e()],1)])],1)};a._withStripped=!0;var n=o("qse9"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-form",{ref:"nodesForm",staticClass:"demo-ruleForm",attrs:{model:e.nodesForm,rules:e.rules,"label-width":"108px"}},[o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"节点IP",prop:"nodeIp"}},[o("el-input",{attrs:{placeholder:"请输入IP",disabled:e.nodesForm.disabled},model:{value:e.nodesForm.nodeIp,callback:function(t){e.$set(e.nodesForm,"nodeIp",t)},expression:"nodesForm.nodeIp"}})],1),e._v(" "),e.nodesForm.dShow?o("el-form-item",{staticStyle:{width:"330px"},attrs:{label:"前置服务端口",prop:"frontPort"}},[o("el-input",{attrs:{placeholder:"请输入前置服务端口",disabled:e.nodesForm.disabled},model:{value:e.nodesForm.frontPort,callback:function(t){e.$set(e.nodesForm,"frontPort",t)},expression:"nodesForm.frontPort"}})],1):e._e()],1),e._v(" "),o("div",{staticClass:"dialog-footer"},[o("el-button",{on:{click:e.modelClose}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.submit("nodesForm")}}},[e._v("确 定")])],1)],1)};s._withStripped=!0;var i=o("P2sY"),r=o.n(i),d=o("mHBk"),l=(o("bCcq").sha256,{name:"nodesDialog",props:{nodesDialogOptions:{type:Object}},watch:{"nodesDialogOptions.type":{handler:function(e){switch(this.type=e,e){case"creat":this.nodesForm={nodeIp:"",org:"1",frontPort:"",disabled:!1,mDisabled:!1,dShow:!0};break;case"delete":this.nodesForm={nodeIp:this.nodesDialogOptions.data.nodeIp,nodeId:this.nodesDialogOptions.data.nodeId,disabled:!0,mDisabled:!0,dShow:!1}}},deep:!0,immediate:!0}},data:function(){return{type:this.nodesDialogOptions.type,loading:!1,nodesForm:{},rules:{nodeIp:[{required:!0,message:"请输入IP",trigger:"blur"},{pattern:/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,message:"IP格式不正确",trigger:"blur"}],frontPort:[{required:!0,message:"请输入端口",trigger:"blur"},{pattern:/^[1-9]\d*$/,message:"请输入正确端口号",trigger:"blur"},{min:1,max:12,message:"长度在 1 到 12 个字符",trigger:"blur"}]}}},mounted:function(){},methods:{modelClose:function(){this.nodesForm=r()({nodeIp:"",frontPort:""}),this.$emit("close",!1)},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.loading=!0,t.getAllAccountInfo()})},getAllAccountInfo:function(){switch(this.type){case"creat":this.getCreatNodesInfo();break;case"delete":this.getDeleteNodesInfo()}},getCreatNodesInfo:function(){var e=this,t={networkId:localStorage.getItem("networkId"),nodeIp:this.nodesForm.nodeIp,nodeType:this.nodesForm.org,frontPort:this.nodesForm.frontPort};Object(d.c)(t,{}).then(function(t){e.loading=!1,0===t.data.code?(e.$message({type:"success",message:"新增成功"}),e.modelClose(),e.$emit("success")):(e.modelClose(),e.$message({type:"error",message:e.errcode.errCode[t.data.code].cn}))}).catch(function(t){e.modelClose(),e.$message({type:"error",message:e.errcode.errCode[t.data.code].cn||"系统错误"})})},getDeleteNodesInfo:function(){var e=this;Object(d.h)(this.nodesForm.nodeId,{}).then(function(t){e.loading=!1,0===t.data.code?(e.$message({type:"success",message:"删除成功"}),e.modelClose(),e.$emit("success")):(e.modelClose(),e.$message({type:"error",message:e.errcode.errCode[t.data.code].cn}))}).catch(function(t){e.modelClose(),e.$message({type:"error",message:e.errcode.errCode[t.data.code].cn||"系统错误"})})}}}),c=(o("wEUD"),o("KHd+")),u=Object(c.a)(l,s,[],!1,null,"42f0e08a",null);u.options.__file="src/views/group/components/nodesDialog.vue";var p=u.exports,g=(o("DgvE"),o("p5Bo")),m={name:"group",components:{"v-content-head":n.a,"v-nodesDialog":p},watch:{$route:function(){this.urlQuery=this.$root.$route.query}},data:function(){return{nodeName:"",nodes:[],nodeData:[],currentPage:1,pageSize:10,total:0,loading:!1,nodesLoading:!1,nodesDialogVisible:!1,nodesDialogTitle:"",nodesDialogOptions:{},nodeHead:[{enName:"orgName",name:"机构名称"},{enName:"nodeName",name:"节点名称"},{enName:"blockNumber",name:"块高"},{enName:"pbftView",name:"pbftView"},{enName:"nodeIp",name:"ip"},{enName:"p2pPort",name:"p2p端口"},{enName:"rpcPort",name:"rpc端口"}],urlQuery:this.$root.$route.query,disabled:!1}},mounted:function(){this.getNodeTable(),"admin"===localStorage.getItem("root")?this.disabled=!1:this.disabled=!0},methods:{search:function(){this.getNodeTable()},getNodeTable:function(){var e=this;this.loading=!0;var t,o=localStorage.getItem("networkId"),a={networkId:o,pageNumber:this.currentPage,pageSize:this.pageSize};t={nodeName:this.nodeName.replace(/^\s+|\s+$/g,"")},Object(d.t)(a,t).then(function(t){0===t.data.code?(e.total=t.data.totalCount,e.nodeData=t.data.data||[],e.nodeData.forEach(function(e,t){0===e.status?e.value="运行":1===e.status&&(e.value="停止")}),e.loading=!1):(e.loading=!1,e.$message({message:g.a.errCode[t.data.code].cn,type:"error",duration:2e3}))}).catch(function(t){e.loading=!1,e.$message({message:"查询失败！",type:"error",duration:2e3})})},handleSizeChange:function(e){this.pageSize=e,this.currentPage=1,this.getNodeTable()},handleCurrentChange:function(e){this.currentPage=e,this.getNodeTable()},textColor:function(e){var t="";switch(e){case 1:t="#58cb7d";break;case 2:t="#ed5454"}return t},nodesStatus:function(e){var t="";switch(e){case 1:t="运行";break;case 2:t="停止"}return t},createNodes:function(){this.nodesDialogVisible=!0,this.nodesDialogTitle="创建节点",this.nodesDialogOptions={type:"creat",data:{nodeIp:""}}},deleteNodes:function(e,t){this.nodesDialogOptions={type:t,data:e},this.nodesDialogVisible=!0,this.nodesDialogTitle="删除节点"},success:function(){this.getNodeTable()},close:function(e){this.nodesDialogVisible=e},showDetail:function(e){2!==e.nodeType&&this.$router.push({path:"hostDetail",query:{nodeIp:e.nodeIp,nodeId:e.nodeId}})}}},h=(o("LFHq"),Object(c.a)(m,a,[],!1,null,"cb5a3176",null));h.options.__file="src/views/group/group.vue";t.default=h.exports},W10h:function(e,t,o){},wEUD:function(e,t,o){"use strict";var a=o("W10h");o.n(a).a}}]);