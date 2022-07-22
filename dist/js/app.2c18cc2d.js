(function(){"use strict";var e={6170:function(e,t,n){var i=n(9242),s=n(3396);function a(e,t,n,i,a,o){const l=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(l)}var o={name:"App",components:{},data(){return{}}},l=n(89);const u=(0,l.Z)(o,[["render",a]]);var r=u,d=n(678);const c={id:"web-container"};function m(e,t,n,i,a,o){const l=(0,s.up)("CardLogin");return(0,s.wg)(),(0,s.iD)("div",c,[a.show?((0,s.wg)(),(0,s.j4)(l,{key:0})):(0,s.kq)("",!0)])}var h=n(7139);const _={class:"app-container"},g={class:"content-container"},p=["src"];function v(e,t,n,i,a,o){const l=(0,s.up)("Menu");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s.Wm)(l,{onPageItem:o.pageItem},null,8,["onPageItem"]),(0,s._)("div",g,[null!==a.data?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("h6",null,(0,h.zw)(a.data.subitem),1),(0,s._)("iframe",{width:"100%",height:"90%",src:a.data.iframe,frameborder:"0",allowFullScreen:"true"},null,8,p)],64)):(0,s.kq)("",!0)])])}const f=e=>((0,s.dD)("data-v-2953ff2b"),e=e(),(0,s.Cn)(),e),k={id:"menu"},w=f((()=>(0,s._)("div",{id:"logo-menu"},[(0,s._)("img",{src:"/img/company/age.png",alt:""})],-1))),b={class:"items-menu"},y={class:"item-menu"},D=f((()=>(0,s._)("span",null,"Setores",-1))),C=["onClick"],M=f((()=>(0,s._)("div",null,null,-1))),z=f((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-dashboard"})],-1))),q=f((()=>(0,s._)("span",null,"Dashboards disponíveis",-1))),A=["onClick"],T=f((()=>(0,s._)("div",null,null,-1))),E=f((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-dashboard"})],-1))),j={key:0},U=f((()=>(0,s._)("span",null,"Ações",-1))),$=f((()=>(0,s._)("li",null,[(0,s._)("div"),(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-settings-sliders"})]),(0,s._)("span",null,"Gerenciamento")],-1))),I=f((()=>(0,s._)("div",null,null,-1))),x=f((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-sign-out-alt"})],-1))),F=f((()=>(0,s._)("span",null,"Logout",-1))),P=[I,x,F];function S(e,t,n,i,a,o){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",k,[w,(0,s._)("div",b,[(0,s._)("div",y,[(0,s._)("nav",null,[0===a.step?((0,s.wg)(),(0,s.iD)("ul",{key:0,class:(0,h.C_)(["href-menu",{animation_right:!0===a.back}])},[D,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.menuItems,(e=>((0,s.wg)(),(0,s.iD)("li",{onClick:t=>o.subMenu(e.item_id)},[M,z,(0,s._)("span",null,(0,h.zw)(e.menu_items.item),1)],8,C)))),256))],2)):(0,s.kq)("",!0),1===a.step?((0,s.wg)(),(0,s.iD)("ul",{key:1,class:(0,h.C_)(["href-menu",{animation_left:!1===a.back}])},[(0,s._)("i",{class:"fi fi-rr-arrow-small-left",onClick:t[0]||(t[0]=e=>o.backMenu())}),q,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.subMenuItems,(e=>((0,s.wg)(),(0,s.iD)("li",{onClick:t=>o.pageTrade(e.sub_items.iframe,e.sub_items.subitem)},[T,E,(0,s._)("span",null,(0,h.zw)(e.sub_items.subitem),1)],8,A)))),256))],2)):(0,s.kq)("",!0)]),0===a.step?((0,s.wg)(),(0,s.iD)("nav",j,[(0,s._)("ul",{class:(0,h.C_)(["href-menu",{animation_right:!0===a.back}])},[U,"1"===a.privilege?((0,s.wg)(),(0,s.j4)(l,{key:0,to:"/gerenciamento"},{default:(0,s.w5)((()=>[$])),_:1})):(0,s.kq)("",!0),(0,s._)("li",{onClick:t[1]||(t[1]=e=>o.logout())},P)],2)])):(0,s.kq)("",!0)])])])}var L=n(6265),G=n.n(L),H={name:"Menu",data(){return{isActive:!0,step:0,menuItems:null,subMenuItems:null,back:null,privilege:$cookies.get("privilegio")}},methods:{getMenuItems:function(){G()({method:"GET",url:"/allowed/list_menu",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":$cookies.get("user_id")}}).then((e=>{this.menuItems=e.data,console.log(e.data)})).catch((e=>{}))},subMenu:function(e){G()({method:"GET",url:"/allowed/list_submenu",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":$cookies.get("user_id"),"item-id":e}}).then((e=>{this.step=1,this.back=!1,this.subMenuItems=e.data})).catch((e=>{}))},pageTrade:function(e,t){this.$emit("page-item",{data:{iframe:e,subitem:t}})},backMenu:function(){this.step=0,this.back=!0},logout:function(){$cookies.remove("user_id"),$cookies.remove("privelegio"),$cookies.remove("token"),$cookies.remove("email"),this.$router.replace("/")}},mounted(){this.getMenuItems()}};const Y=(0,l.Z)(H,[["render",S],["__scopeId","data-v-2953ff2b"]]);var O=Y,W={name:"Age",components:{Menu:O},data(){return{data:null,step:1}},methods:{pageItem:function(e){this.data=e.data,this.step=0}},created(){},mounted(){document.title="Indicadores - Age Telecom"}};const Z=(0,l.Z)(W,[["render",v],["__scopeId","data-v-400bb1ba"]]);var N=Z;const V=e=>((0,s.dD)("data-v-586b3348"),e=e(),(0,s.Cn)(),e),K={id:"card-login"},R=V((()=>(0,s._)("div",{id:"logo_company"},[(0,s._)("img",{src:"/img/company/age.png",alt:"age_telecom"})],-1))),B={key:0,class:"trigger"},J=V((()=>(0,s._)("div",{id:"divisor"},[(0,s._)("div")],-1))),Q={id:"forgot-password"},X=(0,s.Uk)("Esqueceu sua senha?");function ee(e,t,n,i,a,o){const l=(0,s.up)("FormLogin"),u=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",K,[R,!1===a.status?((0,s.wg)(),(0,s.iD)("div",B,(0,h.zw)(a.msg),1)):(0,s.kq)("",!0),(0,s.Wm)(l,{onAuthenticate:o.authentication},null,8,["onAuthenticate"]),J,(0,s._)("div",Q,[(0,s.Wm)(u,{id:"forgot-link",to:"/recuperar-senha"},{default:(0,s.w5)((()=>[X])),_:1})])])}function te(e,t,n,a,o,l){return(0,s.wg)(),(0,s.iD)("form",{action:"#",method:"post",onSubmit:t[3]||(t[3]=(0,i.iM)((()=>{}),["prevent"]))},[(0,s.wy)((0,s._)("input",{class:"input-form",type:"text",name:"username",id:"name",placeholder:"E-mail",autocomplete:"off","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e)},null,512),[[i.nr,o.email]]),(0,s.wy)((0,s._)("input",{class:"input-form",type:"password",name:"password",id:"password",placeholder:"Senha","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),autocomplete:"off"},null,512),[[i.nr,o.password]]),(0,s._)("input",{class:"btn-submit",type:"submit",value:"Entrar",onClick:t[2]||(t[2]=(...e)=>l.authentication&&l.authentication(...e))})],32)}var ne={name:"FormLogin",emits:["authenticate"],methods:{authentication:function(){this.$emit("authenticate",{data:{username:this.email,password:this.password}})}},data(){return{email:null,password:null}}};const ie=(0,l.Z)(ne,[["render",te],["__scopeId","data-v-d6a8a082"]]);var se=ie;const ae=G().create({baseURL:"http://v1.indicadores/api/"});var oe=ae,le=n(5269),ue=n.n(le),re={name:"CardLogin",props:{},components:{FormLogin:se},data(){return{msg:"Usuário ou senha incorretos!",status:!0}},methods:{authentication:function(e){const t=e.data;oe({method:"POST",url:"/login",headers:{"Content-Type":"application/json"},data:t}).then((e=>{const t=e.data;this.msg=t.msg,this.status=t.status,t.token&&($cookies.set("token",t.token,"1d"),$cookies.set("email",t.email,"1d"),$cookies.set("user_id",t.user_id,"1d"),$cookies.set("privilegio",t.privilege,"1d"),this.$router.replace("age"))})).catch((e=>{}))}}};const de=(0,l.Z)(re,[["render",ee],["__scopeId","data-v-586b3348"]]);var ce=de,me={name:"Web",components:{CardLogin:ce,App:N},data(){return{show:!0}},methods:{},created(){},mounted(){}};const he=(0,l.Z)(me,[["render",m],["__scopeId","data-v-2d681256"]]);var _e=he;const ge=(0,s.Uk)("Voltar"),pe=(0,s.Uk)(" Recuperar senha ");function ve(e,t,n,i,a,o){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(l,{to:"/"},{default:(0,s.w5)((()=>[ge])),_:1}),pe])}var fe={name:"ForgotPassword"};const ke=(0,l.Z)(fe,[["render",ve]]);var we=ke,be={auth(e,t,n){const i=$cookies.get("token");i?n():n("/")},authAdmin(e,t,n){const i=$cookies.get("privilegio");"0"!==i?n():n("/age")},login(e,t,n){const i=$cookies.get("token");i?n("/age"):n()}};const ye=e=>((0,s.dD)("data-v-a627e576"),e=e(),(0,s.Cn)(),e),De={class:"app-container"},Ce={class:"card-content"},Me={class:"menu-card"},ze={class:"content-card"},qe={class:"section-content"},Ae=ye((()=>(0,s._)("div",{class:"header-section"},[(0,s._)("i",{class:"fi fi-rr-eye"}),(0,s._)("span",null,"Visão geral")],-1))),Te={class:"main-section"},Ee={class:"card-main"},je=ye((()=>(0,s._)("i",{class:"fi fi-sr-user"},null,-1))),Ue=ye((()=>(0,s._)("span",null,"Usuários",-1))),$e={class:"card-main"},Ie=ye((()=>(0,s._)("i",{class:"fi fi-sr-apps"},null,-1))),xe=ye((()=>(0,s._)("span",null,"Menus",-1))),Fe={class:"card-main"},Pe=ye((()=>(0,s._)("i",{class:"fi fi-sr-chart-pie-alt"},null,-1))),Se=ye((()=>(0,s._)("span",null,"Dashboards",-1))),Le={class:"card-main"},Ge=ye((()=>(0,s._)("i",{class:"fi fi-sr-chart-histogram"},null,-1))),He=ye((()=>(0,s._)("span",null,"Visitas",-1))),Ye={class:"section-content-last-users"},Oe=ye((()=>(0,s._)("div",{class:"header-section",style:{"background-color":"#F5F6FA",padding:"2vh 2vw","border-bottom":"2px solid #cccccc60"}},[(0,s._)("span",{style:{color:"#51504F",padding:"0"}},"Últimos usuários cadastrados")],-1))),We={key:0},Ze=ye((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nome"),(0,s._)("th",null,"E-mail"),(0,s._)("th",null,"Entrou em")])],-1))),Ne=["onClick"];function Ve(e,t,n,i,a,o){const l=(0,s.up)("Menu"),u=(0,s.up)("Loading"),r=(0,s.up)("User");return(0,s.wg)(),(0,s.iD)("div",De,[(0,s._)("div",Ce,[(0,s._)("div",Me,[(0,s.Wm)(l)]),(0,s._)("div",ze,[(0,s._)("div",qe,[Ae,(0,s._)("div",Te,[(0,s._)("div",Ee,[!1===a.loading?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",null,[je,(0,s._)("span",null,(0,h.zw)(a.data.usuarios_contagem),1)]),Ue],64)):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)]),(0,s._)("div",$e,[!1===a.loading?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",null,[Ie,(0,s._)("span",null,(0,h.zw)(a.data.menu_contagem),1)]),xe],64)):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)]),(0,s._)("div",Fe,[!1===a.loading?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",null,[Pe,(0,s._)("span",null,(0,h.zw)(a.data.dashboard_contagem),1)]),Se],64)):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)]),(0,s._)("div",Le,[!1===a.loading?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("div",null,[Ge,(0,s._)("span",null,(0,h.zw)(a.data.visitas_contagem),1)]),He],64)):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)])])]),(0,s._)("div",Ye,[Oe,(0,s._)("div",null,[!1===a.loading?((0,s.wg)(),(0,s.iD)("table",We,[Ze,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data.usuarios,(e=>((0,s.wg)(),(0,s.iD)("tr",{onClick:t=>o.pageUser(e.id,1)},[(0,s._)("td",null,(0,h.zw)(e.nome)+" "+(0,h.zw)(e.sobrenome),1),(0,s._)("td",null,(0,h.zw)(e.email),1),(0,s._)("td",null,(0,h.zw)(e.registrado_em),1)],8,Ne)))),256))])])):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)])])])]),!0===a.user.status?((0,s.wg)(),(0,s.j4)(r,{key:0,id:a.user.id,onPageUser:t[0]||(t[0]=e=>o.pageUser(a.data))},null,8,["id"])):(0,s.kq)("",!0)])}const Ke=e=>((0,s.dD)("data-v-41e170ce"),e=e(),(0,s.Cn)(),e),Re={id:"menu"},Be={class:"card-menu"},Je=Ke((()=>(0,s._)("div",{class:"header-card"},[(0,s._)("i",{class:"fi fi-rr-settings"}),(0,s._)("span",null,"Gerenciamento")],-1))),Qe={class:"main-card"},Xe=Ke((()=>(0,s._)("li",null,[(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-eye"}),(0,s._)("span",null,"Visão geral")])],-1))),et=Ke((()=>(0,s._)("li",null,[(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-users-alt"}),(0,s._)("span",null,"Usuários")])],-1))),tt=Ke((()=>(0,s._)("li",null,[(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-chart-pie-alt"}),(0,s._)("span",null,"Dashboards")])],-1))),nt=Ke((()=>(0,s._)("li",null,[(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-arrow-alt-square-left"}),(0,s._)("span",null,"Retornar ao menu")])],-1)));function it(e,t,n,i,a,o){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",Re,[(0,s._)("div",Be,[Je,(0,s._)("div",Qe,[(0,s._)("nav",null,[(0,s._)("ul",null,[(0,s.Wm)(l,{to:"/gerenciamento","active-class":"activeClass"},{default:(0,s.w5)((()=>[Xe])),_:1}),(0,s.Wm)(l,{to:"/gerenciamento/usuarios","active-class":"activeClass"},{default:(0,s.w5)((()=>[et])),_:1}),(0,s.Wm)(l,{to:"/gerenciamento/dashboards","active-class":"activeClass"},{default:(0,s.w5)((()=>[tt])),_:1}),(0,s.Wm)(l,{to:"/age"},{default:(0,s.w5)((()=>[nt])),_:1})])])])])])}var st={name:"Menu"};const at=(0,l.Z)(st,[["render",it],["__scopeId","data-v-41e170ce"]]);var ot=at;const lt={class:"loading"},ut=(0,s._)("div",{class:"c-loader"},null,-1),rt=[ut];function dt(e,t,n,i,a,o){return(0,s.wg)(),(0,s.iD)("div",lt,rt)}var ct={name:"Loading"};const mt=(0,l.Z)(ct,[["render",dt]]);var ht=mt;const _t=e=>((0,s.dD)("data-v-9f7623f0"),e=e(),(0,s.Cn)(),e),gt={class:"modal"},pt={class:"card-modal"},vt={class:"btn-close"},ft={class:"content-card-modal"},kt={id:"menu-user"},wt={id:"menu"},bt={class:"card-menu"},yt=_t((()=>(0,s._)("div",{class:"header-card"},[(0,s._)("i",{class:"fi fi-rr-settings"}),(0,s._)("span",null,"Gerenciamento")],-1))),Dt={class:"main-card"},Ct=_t((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-id-badge"}),(0,s._)("span",null,"Dados gerais")],-1))),Mt=[Ct],zt=_t((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fi fi-rr-settings-sliders"}),(0,s._)("span",null,"Permissões")],-1))),qt=[zt],At={key:0,id:"content"},Tt={class:"section-content",style:{"min-height":"30vh"}},Et={key:0},jt=_t((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Status"),(0,s._)("th",null,"Nome")])],-1))),Ut={key:0},$t={key:1},It={key:1},xt=_t((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Nível de usuário"),(0,s._)("th",null,"Data do cadastro"),(0,s._)("th",null,"E-mail")])],-1))),Ft=(0,s.Uk)(" Administrador "),Pt=(0,s.Uk)(" Padrão "),St={key:1,id:"content"},Lt={class:"section-content",style:{"min-height":"67vh"}};function Gt(e,t,n,i,a,o){const l=(0,s.up)("Loading"),u=(0,s.up)("AllowedMenu");return(0,s.wg)(),(0,s.iD)("div",gt,[(0,s._)("div",pt,[(0,s._)("div",vt,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[0]||(t[0]=e=>o.close())})]),(0,s._)("div",ft,[(0,s._)("div",kt,[(0,s._)("div",wt,[(0,s._)("div",bt,[yt,(0,s._)("div",Dt,[(0,s._)("nav",null,[(0,s._)("ul",null,[(0,s._)("li",{class:(0,h.C_)({activeClass:1===a.step}),onClick:t[1]||(t[1]=e=>o.stepsMenu(1))},Mt,2),(0,s._)("li",{class:(0,h.C_)({activeClass:2===a.step}),onClick:t[2]||(t[2]=e=>o.stepsMenu(2))},qt,2)])])])])])]),1===a.step?((0,s.wg)(),(0,s.iD)("div",At,[(0,s._)("div",Tt,[!1===a.loading?((0,s.wg)(),(0,s.iD)("table",Et,[jt,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,(0,h.zw)(a.data.id),1),1===a.data.ativo?((0,s.wg)(),(0,s.iD)("td",Ut,"Ativo")):((0,s.wg)(),(0,s.iD)("td",$t,"Inativo")),(0,s._)("td",null,(0,h.zw)(a.data.nome)+" "+(0,h.zw)(a.data.sobrenome),1)])])])):(0,s.kq)("",!0),!1===a.loading?((0,s.wg)(),(0,s.iD)("table",It,[xt,(0,s._)("tbody",null,[(0,s._)("tr",null,[(0,s._)("td",null,[1===a.data.privilegio?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[Ft],64)):((0,s.wg)(),(0,s.iD)(s.HY,{key:1},[Pt],64))]),(0,s._)("td",null,(0,h.zw)(a.data.registrado_em),1),(0,s._)("td",null,(0,h.zw)(a.data.email),1)])])])):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(l,{key:2})):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),2===a.step?((0,s.wg)(),(0,s.iD)("div",St,[(0,s._)("div",Lt,[(0,s.Wm)(u,{id:a.data.id},null,8,["id"])])])):(0,s.kq)("",!0)]),!0===a.loading?((0,s.wg)(),(0,s.j4)(l,{key:0})):(0,s.kq)("",!0)])])}const Ht=e=>((0,s.dD)("data-v-1b054f2a"),e=e(),(0,s.Cn)(),e),Yt={key:0,id:"allowed-items"},Ot={class:"menu-allowed"},Wt=Ht((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Menu"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",null,"Ações")])],-1))),Zt={style:{"text-align":"center"}},Nt={class:"actions-table",style:{width:"100%"}},Vt=["onClick"],Kt=["onClick"],Rt=["onClick"],Bt={key:1,id:"allowed-items",style:{"flex-direction":"column",gap:"2rem"}},Jt={class:"menu-allowed"},Qt=Ht((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Menu"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",null,"Ações")])],-1))),Xt={style:{"text-align":"center"}},en={class:"actions-table",style:{width:"100%"}},tn=["onClick"],nn=["onClick"];function sn(e,t,n,i,a,o){const l=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)(s.HY,null,[!1===a.loading&&1===a.step?((0,s.wg)(),(0,s.iD)("div",Yt,[(0,s._)("div",Ot,[(0,s._)("table",null,[Wt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.data,(e=>((0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",null,(0,h.zw)(e.id),1),(0,s._)("td",null,(0,h.zw)(e.item),1),(0,s._)("td",Zt,[e.menu_allowed.length?((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,h.C_)({active:e.menu_allowed.length})}," Acessível ",2)):((0,s.wg)(),(0,s.iD)("span",{key:1,class:(0,h.C_)({inative:!e.menu_allowed.length})}," Inacessível ",2))]),(0,s._)("td",Nt,[e.menu_allowed.length?((0,s.wg)(),(0,s.iD)("i",{key:0,class:"fi fi-rr-cross-small",style:{color:"var(--color-red)","font-size":"2.6rem"},onClick:t=>o.alterAccess(e.id,"inative","menu")},null,8,Vt)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:"fi fi-rr-check",style:{color:"#4AD09E"},onClick:t=>o.alterAccess(e.id,"active","menu")},null,8,Kt)),(0,s._)("i",{class:"fi fi-rr-redo",onClick:t=>o.tradeMenu(e.id,2)},null,8,Rt)])])))),256))])])])])):(0,s.kq)("",!0),!1===a.loading&&2===a.step?((0,s.wg)(),(0,s.iD)("div",Bt,[(0,s._)("h6",null,"Dashboard "+(0,h.zw)(a.menu.menu.item),1),(0,s._)("div",Jt,[(0,s._)("table",null,[Qt,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.menu.submenu,(e=>((0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",null,(0,h.zw)(e.id),1),(0,s._)("td",null,(0,h.zw)(e.subitem),1),(0,s._)("td",Xt,[e.submenu_allowed.length?((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,h.C_)({active:e.submenu_allowed.length})}," Acessível ",2)):((0,s.wg)(),(0,s.iD)("span",{key:1,class:(0,h.C_)({inative:!e.submenu_allowed.length})}," Inacessível ",2))]),(0,s._)("td",en,[e.submenu_allowed.length?((0,s.wg)(),(0,s.iD)("i",{key:0,class:"fi fi-rr-cross-small",style:{color:"var(--color-red)","font-size":"2.6rem"},onClick:t=>o.alterAccess(e.id,"inative","submenu")},null,8,tn)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:"fi fi-rr-check",style:{color:"#4AD09E"},onClick:t=>o.alterAccess(e.id,"active","submenu")},null,8,nn))])])))),256))])])])])):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(l,{key:2})):(0,s.kq)("",!0)],64)}var an={name:"AllowedMenu",props:{id:{required:!0,type:Number}},components:{Loading:ht},data(){return{loading:!0,data:{},step:1,menu:{id:0,menu:{},submenu:{},submenu_id:0},permission:{},msg:""}},methods:{getMenus:function(){G()({method:"GET",url:"/allowed/menu_general",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id}}).then((e=>{this.data=e.data,this.loading=!1})).catch((e=>{}))},tradeMenu:function(e,t){this.step=t,this.menu.id=e,this.loading=!0,2===t&&this.getMenu(this.menu.id)},getMenu:function(e){G()({method:"GET",url:"/menu_items/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id}}).then((e=>{this.menu.menu=e.data,this.getSubMenus(this.menu.menu.id)})).catch((e=>{}))},getSubMenus:function(e){G()({method:"GET",url:"/allowed/menu_submenu_general/",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id,"item-id":e}}).then((e=>{this.loading=!1,this.menu.submenu=e.data})).catch((e=>{}))},alterAccess:function(e,t,n){"active"===t&&("menu"===n&&G()({method:"GET",url:"/menu-permissions/create",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id,"item-id":e}}).then((e=>{this.permission=e.data,!0===this.permission.status&&(this.msg=this.permission.msg,this.loading=!0,this.getMenus())})).catch((e=>{})),"submenu"===n&&G()({method:"GET",url:"/submenu-permissions/create",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id,"item-id":this.menu.id,"subitem-id":e}}).then((e=>{this.permission=e.data,!0===this.permission.status&&(this.msg=this.permission.msg,this.loading=!0,this.getMenu(this.menu.id))})).catch((e=>{}))),"inative"===t&&("menu"===n&&G()({method:"DELETE",url:"/menu-permissions/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id}}).then((e=>{this.permission=e.data,!0===this.permission.status&&(this.msg=this.permission.msg,this.loading=!0,this.getMenus())})).catch((e=>{})),"submenu"===n&&G()({method:"DELETE",url:"/submenu-permissions/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),"user-id":this.id,"subitem-id":e}}).then((e=>{this.permission=e.data,!0===this.permission.status&&(this.msg=this.permission.msg,this.loading=!0,this.getMenu(this.menu.id))})).catch((e=>{})))}},created(){this.getMenus(this.id)}};const on=(0,l.Z)(an,[["render",sn],["__scopeId","data-v-1b054f2a"]]);var ln=on,un={name:"User",props:{id:{required:!0,type:Number}},components:{Loading:ht,AllowedMenu:ln},data(){return{loading:!0,data:{},step:1}},methods:{close:function(){this.$emit("page-user",{data:0})},getUser:function(e){G()({method:"GET",url:"/users/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.data=e.data,this.loading=!1})).catch((e=>{}))},stepsMenu:function(e){this.step=e}},created(){this.getUser(this.id)},mounted(){}};const rn=(0,l.Z)(un,[["render",Gt],["__scopeId","data-v-9f7623f0"]]);var dn=rn,cn={name:"Management",components:{Menu:ot,Loading:ht,User:dn},data(){return{data:{},loading:!0,user:{status:!1,id:0}}},methods:{getInfo:function(){G()({method:"GET",url:"/info-geral",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.data=e.data,this.loading=!1,this.dateFormated()})).catch((e=>{}))},pageUser:function(e,t){1===t?(this.user.id=e,this.user.status=!0):(this.user.id=0,this.user.status=!1)},dateFormated:function(){}},created(){this.getInfo()},mounted(){}};const mn=(0,l.Z)(cn,[["render",Ve],["__scopeId","data-v-a627e576"]]);var hn=mn;const _n=e=>((0,s.dD)("data-v-5b5a8446"),e=e(),(0,s.Cn)(),e),gn={class:"app-container"},pn={class:"card-content"},vn={class:"menu-card"},fn={class:"content-card"},kn={class:"section-content-last-users"},wn=_n((()=>(0,s._)("div",{class:"header-section",style:{"background-color":"#F5F6FA",padding:"2vh 2vw","border-bottom":"2px solid #cccccc60"}},[(0,s._)("span",{style:{color:"#51504F",padding:"0"}},"Todos os usuários")],-1))),bn={style:{"overflow-y":"auto","max-height":"75vh"}},yn={key:0},Dn=_n((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Nome"),(0,s._)("th",null,"E-mail"),(0,s._)("th",null,"Ações")])],-1))),Cn={class:"actions-users"},Mn=["onClick"],zn=["onClick"],qn=["onClick"],An={key:0,class:"modal"},Tn={key:0,class:"card-modal"},En={class:"btn-close"},jn=_n((()=>(0,s._)("div",{class:"header-card-modal"},[(0,s._)("i",{class:"fi fi-sr-check",style:{color:"#4AD09E"}}),(0,s._)("span",null,[(0,s._)("b",null,"Atenção!"),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(" Essa ação irá desbloquear o usuário.")])],-1))),Un={style:{width:"100%",padding:"0 4vw"}},$n=_n((()=>(0,s._)("i",{class:"fi fi-sr-check"},null,-1))),In=_n((()=>(0,s._)("span",null,"Desbloquear o usuário",-1))),xn=[$n,In],Fn={key:1,class:"card-modal"},Pn={class:"btn-close"},Sn=_n((()=>(0,s._)("div",{class:"header-card-modal"},[(0,s._)("i",{class:"fi fi-sr-engine-warning"}),(0,s._)("span",null,[(0,s._)("b",null,"Atenção!"),(0,s.Uk)(),(0,s._)("br"),(0,s.Uk)(" Essa ação irá bloquear o usuário.")])],-1))),Ln={style:{width:"100%",padding:"0 4vw"}},Gn=_n((()=>(0,s._)("i",{class:"fi fi-rr-ban"},null,-1))),Hn=_n((()=>(0,s._)("span",null,"Bloquear o usuário",-1))),Yn=[Gn,Hn];function On(e,t,n,i,a,o){const l=(0,s.up)("Menu"),u=(0,s.up)("Loading"),r=(0,s.up)("User");return(0,s.wg)(),(0,s.iD)("div",gn,[(0,s._)("div",pn,[(0,s._)("div",vn,[(0,s.Wm)(l)]),(0,s._)("div",fn,[(0,s._)("div",kn,[wn,(0,s._)("div",bn,[!1===a.loading?((0,s.wg)(),(0,s.iD)("table",yn,[Dn,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.users,(e=>((0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",null,(0,h.zw)(e.id),1),(0,s._)("td",null,(0,h.zw)(e.nome)+" "+(0,h.zw)(e.sobrenome),1),(0,s._)("td",null,(0,h.zw)(e.email),1),(0,s._)("td",Cn,[(0,s._)("i",{class:"fi fi-rr-edit",onClick:t=>o.pageUser(e.id,1)},null,8,Mn),1===e.ativo?((0,s.wg)(),(0,s.iD)("i",{key:0,class:"fi fi-rr-ban",onClick:t=>o.modalActions(1,"delete",e.id)},null,8,zn)):((0,s.wg)(),(0,s.iD)("i",{key:1,class:"fi fi-rr-checkbox",onClick:t=>o.modalActions(1,"restore",e.id)},null,8,qn))])])))),256))])])):(0,s.kq)("",!0),!0===a.loading?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0)])])])]),!0===a.modal?((0,s.wg)(),(0,s.iD)("div",An,[1===a.action.step?((0,s.wg)(),(0,s.iD)("div",Tn,[(0,s._)("div",En,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[0]||(t[0]=e=>o.modalActions(0))})]),jn,(0,s._)("div",Un,[(0,s._)("div",{class:"btn-submit sucess",style:{"border-color":"#4AD09E",color:"#4AD09E"},onClick:t[1]||(t[1]=e=>o.updateUser("restore",a.action.id))},xn)])])):(0,s.kq)("",!0),2===a.action.step?((0,s.wg)(),(0,s.iD)("div",Fn,[(0,s._)("div",Pn,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[2]||(t[2]=e=>o.modalActions(0))})]),Sn,(0,s._)("div",Ln,[(0,s._)("div",{class:"btn-submit",onClick:t[3]||(t[3]=e=>o.updateUser("delete",a.action.id))},Yn)])])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),!0===a.user.status?((0,s.wg)(),(0,s.j4)(r,{key:1,id:a.user.id,onPageUser:t[4]||(t[4]=t=>o.pageUser(e.data))},null,8,["id"])):(0,s.kq)("",!0)])}var Wn={name:"Users",components:{Menu:ot,Loading:ht,User:dn},data(){return{loading:!0,users:{},modal:!1,action:{step:0,id:0},user:{status:!1,id:0}}},methods:{getUsers:function(){this.loading=!0,G()({method:"GET",url:"/users",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.loading=!1,this.users=e.data})).catch((e=>{}))},pageUser:function(e,t){1===t?(this.user.id=e,this.user.status=!0):(this.user.id=0,this.user.status=!1)},modalActions:function(e,t,n){0===e&&(this.modal=!1,this.action.step=0,this.action.id=0),"restore"===t&&(this.modal=!0,this.action.step=1,this.action.id=n),"delete"===t&&(this.modal=!0,this.action.step=2,this.action.id=n)},updateUser:function(e,t){"delete"===e&&G()({method:"DELETE",url:"/users/"+t,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.data=e.data,!0===this.data.status&&(this.getUsers(),this.modalActions(0))})).catch((e=>{})),"restore"===e&&G()({method:"PUT",url:"/users/restore/"+t,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.data=e.data,!0===this.data.status&&(this.getUsers(),this.modalActions(0))})).catch((e=>{}))}},created(){},mounted(){this.getUsers()}};const Zn=(0,l.Z)(Wn,[["render",On],["__scopeId","data-v-5b5a8446"]]);var Nn=Zn;const Vn=e=>((0,s.dD)("data-v-ceb2c74a"),e=e(),(0,s.Cn)(),e),Kn={class:"app-container"},Rn={class:"card-content"},Bn={class:"menu-card"},Jn={class:"content-card"},Qn={key:0,class:"section-content-last-users"},Xn=Vn((()=>(0,s._)("div",{class:"header-section",style:{"background-color":"#F5F6FA",padding:"2.5vh 2vw","border-bottom":"2px solid #cccccc60"}},[(0,s._)("span",{style:{color:"#51504F",padding:"0"}},"Todos os menus")],-1))),ei={class:"btn-new"},ti={style:{"overflow-y":"auto","max-height":"75vh"}},ni={key:0},ii=Vn((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Menu"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",null,"Ações")])],-1))),si={style:{"text-align":"center"}},ai={class:"actions-users"},oi=["onClick"],li=["onClick"],ui=["onClick"],ri={key:1,class:"section-content-last-users left"},di=Vn((()=>(0,s._)("i",{class:"fi fi-sr-arrow-left",style:{color:"#51504F","font-size":"2.2rem",cursor:"pointer"}},null,-1))),ci=Vn((()=>(0,s._)("span",{style:{color:"#51504F",padding:"0 0 .5vh 0",cursor:"pointer"}},"Voltar",-1))),mi=[di,ci],hi={class:"btn-new"},_i={style:{"overflow-y":"auto","max-height":"75vh"}},gi={key:0},pi=Vn((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"ID"),(0,s._)("th",null,"Dashboard"),(0,s._)("th",{style:{"text-align":"center"}},"Status"),(0,s._)("th",{style:{"text-align":"center"}},"Ações")])],-1))),vi={style:{"text-align":"center"}},fi={class:"actions-users",style:{"justify-content":"center"}},ki=["onClick"],wi=["onClick"],bi=["onClick"],yi={key:0,class:"modal"},Di={class:"card-modal"},Ci={class:"btn-close"},Mi={class:"content-card-modal"},zi={class:"form-card"},qi={class:"card-form"},Ai={for:"iframe"},Ti=Vn((()=>(0,s._)("span",null,"Antigo:",-1))),Ei=["value"],ji=Vn((()=>(0,s._)("span",null,"Novo:",-1))),Ui={class:"bi-represent"},$i=Vn((()=>(0,s._)("h6",null,"Pré visualização",-1))),Ii={class:"iframe-represent"},xi=["src"],Fi={key:1,class:"modal"},Pi={class:"card-modal",style:{width:"30vw",height:"20vw"}},Si={class:"new-item"},Li={class:"header-new-item"},Gi=Vn((()=>(0,s._)("h6",null,"Novo Menu",-1))),Hi={class:"btn-close",style:{width:"50%"}},Yi={class:"form-new-item"},Oi=Vn((()=>(0,s._)("label",{for:"menu"},"Nome",-1))),Wi={class:"btn-new",style:{padding:"2vh 0",width:"80%"}},Zi={key:2,class:"modal"},Ni={class:"card-modal",style:{width:"30vw",height:"25vw"}},Vi={class:"new-item"},Ki={class:"header-new-item"},Ri=Vn((()=>(0,s._)("h6",null,"Novo dashboard",-1))),Bi={class:"btn-close",style:{width:"50%"}},Ji={class:"form-new-item"},Qi=Vn((()=>(0,s._)("label",{for:"subitem"},"Nome",-1))),Xi=Vn((()=>(0,s._)("label",{for:"iframe"},"Iframe",-1))),es={class:"btn-new",style:{padding:"2vh 0",width:"80%"}};function ts(e,t,n,a,o,l){const u=(0,s.up)("Menu"),r=(0,s.up)("Loading");return(0,s.wg)(),(0,s.iD)("div",Kn,[(0,s._)("div",Rn,[(0,s._)("div",Bn,[(0,s.Wm)(u)]),(0,s._)("div",Jn,[1===o.step||4===o.step?((0,s.wg)(),(0,s.iD)("div",Qn,[Xn,(0,s._)("div",ei,[(0,s._)("button",{onClick:t[0]||(t[0]=e=>l.alterPage(4))},"Novo menu")]),(0,s._)("div",ti,[!1===o.loading?((0,s.wg)(),(0,s.iD)("table",ni,[ii,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.data,(e=>((0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",null,(0,h.zw)(e.id),1),(0,s._)("td",null,(0,h.zw)(e.item),1),(0,s._)("td",si,[e.deleted_at?((0,s.wg)(),(0,s.iD)("span",{key:1,class:(0,h.C_)({inative:e.deleted_at})}," Inacessível ",2)):((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,h.C_)({active:!e.deleted_at})}," Acessível ",2))]),(0,s._)("td",ai,[e.deleted_at?((0,s.wg)(),(0,s.iD)("i",{key:1,class:"fi fi-rr-checkbox",style:{color:"#4AD09E"},onClick:t=>l.alterAccess(e.id,"active","menu")},null,8,ui)):((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("i",{class:"fi fi-rr-ban",style:{color:"var(--color-red)"},onClick:t=>l.alterAccess(e.id,"inative","menu")},null,8,oi),(0,s._)("i",{class:"fi fi-rr-redo",onClick:t=>l.alterPage(2,e.id)},null,8,li)],64))])])))),256))])])):(0,s.kq)("",!0),!0===o.loading?((0,s.wg)(),(0,s.j4)(r,{key:1})):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),2===o.step||5===o.step?((0,s.wg)(),(0,s.iD)("div",ri,[(0,s._)("div",{class:"header-section",onClick:t[1]||(t[1]=e=>l.alterPage(1)),style:{"background-color":"#F5F6FA",padding:"2vh 2vw","border-bottom":"2px solid #cccccc60",display:"flex",gap:"1rem","align-items":"center"}},mi),(0,s._)("div",hi,[(0,s._)("button",{onClick:t[2]||(t[2]=e=>l.alterPage(5))},"Novo dashboard")]),(0,s._)("div",_i,[!1===o.loading?((0,s.wg)(),(0,s.iD)("table",gi,[pi,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.submenu,(e=>((0,s.wg)(),(0,s.iD)("tr",null,[(0,s._)("td",null,(0,h.zw)(e.id),1),(0,s._)("td",null,(0,h.zw)(e.subitem),1),(0,s._)("td",vi,[e.deleted_at?((0,s.wg)(),(0,s.iD)("span",{key:1,class:(0,h.C_)({inative:e.deleted_at})}," Inacessível ",2)):((0,s.wg)(),(0,s.iD)("span",{key:0,class:(0,h.C_)({active:!e.deleted_at})}," Acessível ",2))]),(0,s._)("td",fi,[e.deleted_at?((0,s.wg)(),(0,s.iD)("i",{key:1,class:"fi fi-rr-checkbox",style:{color:"#4AD09E"},onClick:t=>l.alterAccess(e.id,"active","submenu")},null,8,bi)):((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s._)("i",{class:"fi fi-rr-ban",style:{color:"var(--color-red)"},onClick:t=>l.alterAccess(e.id,"inative","submenu")},null,8,ki),(0,s._)("i",{class:"fi fi-rr-edit",onClick:t=>l.alterPage(3,e.id)},null,8,wi)],64))])])))),256))])])):(0,s.kq)("",!0),!0===o.loading?((0,s.wg)(),(0,s.j4)(r,{key:1})):(0,s.kq)("",!0)])])):(0,s.kq)("",!0)])]),3===o.step?((0,s.wg)(),(0,s.iD)("div",yi,[(0,s._)("div",Di,[(0,s._)("div",Ci,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[3]||(t[3]=e=>l.alterPage(2,o.item_id))})]),(0,s._)("div",Mi,[(0,s._)("div",zi,[(0,s._)("div",qi,[(0,s._)("label",Ai,"Link do iframe - "+(0,h.zw)(o.submenu_unique.subitem),1),Ti,(0,s._)("input",{type:"text",name:"iframe",id:"iframe",value:o.submenu_unique.iframe,disabled:""},null,8,Ei),ji,(0,s.wy)((0,s._)("input",{type:"text",name:"iframe",id:"iframe","onUpdate:modelValue":t[4]||(t[4]=e=>o.iframe=e)},null,512),[[i.nr,o.iframe]]),(0,s._)("input",{type:"submit",class:"btn-submit",value:"Salvar",onClick:t[5]||(t[5]=e=>l.alterIframe(o.submenu_unique.id))})])]),(0,s._)("div",Ui,[$i,(0,s._)("div",Ii,[(0,s._)("iframe",{width:"100%",height:"90%",src:o.iframe,frameborder:"0",allowFullScreen:"true"},null,8,xi)])])])])])):(0,s.kq)("",!0),4===o.step?((0,s.wg)(),(0,s.iD)("div",Fi,[(0,s._)("div",Pi,[(0,s._)("div",Si,[(0,s._)("div",Li,[Gi,(0,s._)("div",Hi,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[6]||(t[6]=e=>l.alterPage(1))})])]),(0,s._)("div",Yi,[Oi,(0,s.wy)((0,s._)("input",{type:"text",name:"menu",id:"menu","onUpdate:modelValue":t[7]||(t[7]=e=>this.new.menu.item=e),autocomplete:"off"},null,512),[[i.nr,this.new.menu.item]]),(0,s._)("div",Wi,[(0,s._)("button",{onClick:t[8]||(t[8]=e=>l.newMenu()),style:{padding:"1vh 0",width:"100%"}},"Cadastrar")])])])])])):(0,s.kq)("",!0),5===o.step?((0,s.wg)(),(0,s.iD)("div",Zi,[(0,s._)("div",Ni,[(0,s._)("div",Vi,[(0,s._)("div",Ki,[Ri,(0,s._)("div",Bi,[(0,s._)("i",{class:"fi fi-sr-cross-small",onClick:t[9]||(t[9]=e=>l.alterPage(2,o.item_id))})])]),(0,s._)("div",Ji,[Qi,(0,s.wy)((0,s._)("input",{type:"text",name:"subitem",id:"subitem","onUpdate:modelValue":t[10]||(t[10]=e=>this.new.submenu.subitem=e),autocomplete:"off"},null,512),[[i.nr,this.new.submenu.subitem]]),Xi,(0,s.wy)((0,s._)("input",{type:"text",name:"iframe",id:"iframe","onUpdate:modelValue":t[11]||(t[11]=e=>this.new.submenu.iframe=e),autocomplete:"off"},null,512),[[i.nr,this.new.submenu.iframe]]),(0,s._)("div",es,[(0,s._)("button",{onClick:t[12]||(t[12]=e=>l.newSubMenu()),style:{padding:"1vh 0",width:"100%"}},"Cadastrar")])])])])])):(0,s.kq)("",!0)])}var ns={name:"Dashboard",components:{Loading:ht,Menu:ot},data(){return{loading:!0,data:{},submenu:{},submenu_unique:{},response:null,msg:"",step:1,iframe:"",item_id:0,new:{menu:{item:""},submenu:{subitem:"",iframe:""}}}},methods:{getMenus:function(){G()({method:"GET",url:"/menu_items",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.data=e.data,this.loading=!1})).catch((e=>{}))},getSubMenus:function(e){G()({method:"GET",url:"/sub_menus/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((t=>{this.item_id=e,this.submenu=t.data,this.loading=!1})).catch((e=>{}))},getSubMenu:function(e){G()({method:"GET",url:"/sub_menu/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.submenu_unique=e.data,this.iframe=this.submenu_unique.iframe,this.loading=!1})).catch((e=>{}))},alterAccess:function(e,t,n){this.loading=!0,"active"===t&&("menu"===n&&G()({method:"GET",url:"/menu_items/create",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),item_id:e}}).then((e=>{this.response=e.data,this.msg=this.response.msg,this.getMenus()})).catch((e=>{})),"submenu"===n&&G()({method:"GET",url:"/sub_menus/create",headers:{"Content-Type":"application/json",authorization:$cookies.get("token"),subitem_id:e}}).then((e=>{this.getSubMenus(this.item_id)})).catch((e=>{}))),"inative"===t&&("menu"===n&&G()({method:"DELETE",url:"/menu_items/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.response=e.data,this.msg=this.response.msg,this.getMenus()})).catch((e=>{})),"submenu"===n&&G()({method:"DELETE",url:"/sub_menus/"+e,headers:{"Content-Type":"application/json",authorization:$cookies.get("token")}}).then((e=>{this.getSubMenus(this.item_id)})).catch((e=>{})))},alterPage:function(e,t){this.step=e,2===e&&(this.loading=!0,this.getSubMenus(t)),3===e&&(this.loading=!0,this.getSubMenu(t))},alterIframe:function(e){G()({method:"POST",url:"/sub_menu/iframe",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")},data:{iframe:this.iframe,subitem_id:this.submenu_unique.id}}).then((e=>{this.submenu_unique=e.data,this.loading=!1})).catch((e=>{}))},newMenu:function(){G()({method:"POST",url:"/menu_items",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")},data:{item:this.new.menu.item}}).then((e=>{this.msg=e.msg,!0===e.data.status&&(this.step=1,this.loading=!0,this.new.menu.item="",this.getMenus())})).catch((e=>{}))},newSubMenu:function(){G()({method:"POST",url:"/sub_menus",headers:{"Content-Type":"application/json",authorization:$cookies.get("token")},data:{subitem:this.new.submenu.subitem,iframe:this.new.submenu.iframe,item_id:this.item_id}}).then((e=>{this.msg=e.msg,console.log(e.data),!0===e.data.status&&(this.step=2,this.loading=!0,this.new.submenu.subitem="",this.new.submenu.iframe="",this.getSubMenus(e.data.item_id))})).catch((e=>{}))}},mounted(){this.getMenus()}};const is=(0,l.Z)(ns,[["render",ts],["__scopeId","data-v-ceb2c74a"]]);var ss=is;const as=[{path:"/",name:"Web",component:_e,beforeEnter:be.login},{path:"/age",name:"Age",component:N,beforeEnter:be.auth},{path:"/gerenciamento",name:"Management",component:hn,beforeEnter:be.authAdmin},{path:"/gerenciamento/usuarios",name:"Users",component:Nn,beforeEnter:be.authAdmin},{path:"/gerenciamento/dashboards",name:"Dashboard",component:ss,beforeEnter:be.authAdmin},{path:"/recuperar-senha",name:"ForgotPassword",component:we}],os=(0,d.p7)({history:(0,d.PO)("/"),routes:as});var ls=os,us=n(65),rs=(0,us.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(r).use(rs).use(ls).use(ue()).mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,a){if(!i){var o=1/0;for(d=0;d<e.length;d++){i=e[d][0],s=e[d][1],a=e[d][2];for(var l=!0,u=0;u<i.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[u])}))?i.splice(u--,1):(l=!1,a<o&&(o=a));if(l){e.splice(d--,1);var r=s();void 0!==r&&(t=r)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[i,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,a,o=i[0],l=i[1],u=i[2],r=0;if(o.some((function(t){return 0!==e[t]}))){for(s in l)n.o(l,s)&&(n.m[s]=l[s]);if(u)var d=u(n)}for(t&&t(i);r<o.length;r++)a=o[r],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},i=self["webpackChunkfront_agn_app"]=self["webpackChunkfront_agn_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(6170)}));i=n.O(i)})();
//# sourceMappingURL=app.2c18cc2d.js.map