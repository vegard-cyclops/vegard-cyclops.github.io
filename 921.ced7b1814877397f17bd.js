"use strict";(self.webpackChunkfrontend_template=self.webpackChunkfrontend_template||[]).push([[921],{625:(e,t,n)=>{n.r(t);var a,i=n(294),r=n(935),o=n(168),c=n(558),l=n(163),s="#ffffff",d="#484444",m="#4a4a4a",u="16px",f="Glory, sans-serif";"".concat(576,"px"),"".concat(768,"px"),"".concat(960,"px"),"".concat(1440,"px");const p=(0,l.vJ)(a||(a=(0,o.Z)(["\n\n    html, body {\n      background-color: ",";\n      height: 100%;\n      margin: 0;\n      font-size: ",";\n      color: ",";\n    }\n    \n    .app-root {\n      height: 100%;\n    }\n    \n    * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n  \n    td, select, input, textarea, p, a, button, option, dd, dt, i, li, span {\n      font-family: ",";\n      font-size: ",";\n    }\n    \n    h1, h2, h3, h4 {\n      font-family: ",";\n      font-weight: 700;\n    }\n    \n    h1 {\n      font-size: ",";\n      color: ",";\n    }\n    \n    h2 {\n      font-size: ",";\n      color: ",";\n    }\n    \n    h3 {\n      font-size: ",";\n      color: ",";\n    }\n    \n    h4 {\n      font-size: ",";\n      color: ",";\n    }\n    \n    b, strong, th, label {\n      font-family: ",";\n      font-weight: 700;\n    }\n    \n    div, dt, dd, li, a, button, label, table td, table th, select, input, textarea, p {\n      font-size: ",";\n    }\n"])),s,u,d,f,u,f,"2.5rem",d,"2rem",d,"1.5rem",d,"1.2rem",d,f,u),h={"task.test.title":"Better safe than sorry!","task.test.text":"Quality assurance is key! Write the neccessary commands to automatically test your code. Each time you push new code to a specific branch, Github actions ought to run all unit tests in the code.","task.env.title":"Environmentally friendly","task.env.text":"Add an enviroment variable to the pipeline script to get this bagde","task.secret.title":"Mystery man","task.secret.text":"Don't let anyone listen in! Add a secret named PASSWORD to achieve this badge","task.lint.title":"Lint looks mint","task.lint.text":"Your code is looking clean and lint free!","task.deploy.title":"Deploy web page","task.deploy.text":"Whenever we push new code to a branch, and all the unit tests pass, we want to deploy the code immediately. Write commands to automatically deploy the new code once pushed to Github and sucessfully passed previously Github actions scripts.","task.clock.title":"Right on time!","task.clock.text":"Timing is everything! Successfully configure a timed deploy triggered by Github Actions","task.docker1.title":"Access granted!","task.docker1.text":"Use Secrets to log in to Docker","task.docker2.title":"Docker ready!","task.docker2.text":"Attach metadata to your Docker image","task.docker3.title":"Swoooosh!","task.docker3.text":"Your Docker image is locked and loaded, push it","task.conditional.title":"Condition Master","task.conditional.text":"Run a step when a specified condition is met using the if parameter.","task.hacker.title":"Fortress","task.hacker.text":"Automatically check your site for javascript vaulnerabilities in CI/CD to achieve this badge. Hint: is-website-vulnerable @ github marketplace","task.status.title":"Statistics Guru","task.status.text":"Statistics might be nerdy, but it can also be fun! You have become quite the master of Github Actions and added fun development statistic to your readme documenation.","task.mail.title":"You got mail!","task.mail.text":"Automatically send mails from CI/CD to your private account when the workflow fails and/or succeeds."};var g=n(379),b=n.n(g),k=n(237);b()(k.Z,{insert:"head",singleton:!1}),k.Z.locals;var v=n(841);const y=n.p+"78f8866f190e449213083f652f271ca7.svg";var w,x,E,P,Z,B,D,F,A,z,C,S,G=l.ZP.section(w||(w=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    padding: 1rem 10%;\n    margin-bottom: 2rem;\n"]))),O=l.ZP.div(x||(x=(0,o.Z)(["\n    display: flex;\n    justify-content: space-between;\n"]))),I=l.ZP.h1(E||(E=(0,o.Z)(["\n    font-size: 3rem;\n    line-height: 3rem;\n    margin-bottom: 1rem;\n"]))),T=l.ZP.h2(P||(P=(0,o.Z)(["\n    font-size: 2rem;\n    line-height: 2rem;\n"]))),Y=l.ZP.p(Z||(Z=(0,o.Z)(["\n    margin: 1rem 0;\n"]))),j=l.ZP.img(B||(B=(0,o.Z)(["\n    height: 2.5rem;\n"]))),R=function(e){return i.createElement(G,null,i.createElement(O,null,i.createElement(I,{"data-testid":"h1-title"},"This is the wrong title🤨"),i.createElement(j,{src:y})),i.createElement(Y,null,"GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. In this workshop you will setup different workflows describen in each their red box on this web page. Your task is to implement jobs in the worksflow which solves the tasks. Your changes should be pushed to the develop branch, this will start the workflow. If the workflow syntax is correct this web page will be updated with your new changes, and if you have implemented the correct actions to solve any of the tasks below they will turn green. This way you can keep track of your progress. The goal is to turn each box below green and unlock each badge. The workshop repo can be found"," ",i.createElement("a",{href:"https://github.com/acntech/workshop-github-actions"},"here"," ")),i.createElement(Y,null,"Remember to use the"," ",i.createElement("a",{href:"https://docs.github.com/en/actions"},"github actions "),"docs, it offers good help. Hint: there are examples of how to setup workflows to"," ",i.createElement("a",{href:"https://docs.github.com/en/actions/guides/building-and-testing-nodejs-or-python"},"test and build"," ")," ","node.js apps."),i.createElement(T,null,"You have ",e.tp||0," points!"))},W=n(106),H=l.ZP.section(D||(D=(0,o.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    padding: 1rem 20%;\n    box-shadow: 0px -1px 0px 0px ",";\n    background-color: ",";\n"])),m,(function(e){return e.completed?"#85CC7E":"#FEB264"})),N=l.ZP.div(F||(F=(0,o.Z)(["\n    display: flex;\n    width: 100%;\n    flex-direction: ",";\n    margin-top: 1rem;\n"])),(function(e){return e.reverseOrder?"row-reverse":"row"})),J=l.ZP.img(A||(A=(0,o.Z)(["\n    height: 10rem;\n    margin: ",";\n"])),(function(e){return e.reverseOrder?"0 0 0 1rem":"0 1rem 0 0"})),L=l.ZP.div(z||(z=(0,o.Z)(["\n    height: min-content;\n    align-self: center;\n"]))),M=l.ZP.h3(C||(C=(0,o.Z)(["\n    font-size: 2rem;\n    color: ",";\n    margin-bottom: 1.5rem;\n"])),m),_=l.ZP.p(S||(S=(0,o.Z)(["\n    color: ",";\n    margin: auto 0;\n"])),m),q=function(e){return i.createElement(H,{completed:e.completed,className:e.className},i.createElement(N,{reverseOrder:!e.isBadgeFirst},i.createElement(J,{reverseOrder:!e.isBadgeFirst,src:e.completed?e.img:e.imgPlaceholder}),i.createElement(L,null,i.createElement(M,{reverseOrder:!e.isBadgeFirst},i.createElement(W.Z,{id:"".concat(e.intlPrefix,".title")})),i.createElement(_,null,i.createElement(W.Z,{id:"".concat(e.intlPrefix,".text")})))))},Q=n(861),U=n(757),K=n.n(U),V=n(486),X={deploy:50,env:35,lint:50,secret:75,test:100,timedDeploy:110,docker1:60,docker2:40,docker3:100,hacker:90,conditional:45,stats:65,mail:85},$=function(){var e=(0,Q.Z)(K().mark((function e(){var t;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:return t=e.sent,e.abrupt("return",{deploy:ee(t,"uses: JamesIves/github-pages-deploy-action@4.1.4"),env:ee(t,"env:"),lint:ee(t,"run: npm run lint:ts")&&ee(t,"run: npm run lint:css"),secret:ee(t,"secrets.PASSWORD"),test:ee(t,"run: npm test"),timedDeploy:ee(t,"schedule:")&&ee(t,"- cron:"),docker1:ee(t,"docker/login-action"),docker2:ee(t,"docker/metadata-action"),docker3:ee(t,"docker/build-push-action"),hacker:ee(t,"lirantal/is-website-vulnerable")&&ee(t,".github.io"),conditional:ee(t,"if: "),mail:ee(t,"dawidd6/action-send-mail"),stats:ee(t,"anmol098/waka-readme-stats")});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e,t){return-1!==e.indexOf(t)},te=function(){var e=(0,Q.Z)(K().mark((function e(){var t;return K().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/build-pipeline.yml");case 3:return t=e.sent,e.next=6,t.text();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return","false");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();const ne=n.p+"c99421df743256e0526cc90dd5ff0c8d.svg",ae=n.p+"4456d8b9dd1da07746ae8a516f2a3ff5.svg",ie=n.p+"727f7a8107827ad05b4d1143cd1375b6.svg",re=n.p+"3427f4f80897691cb2173cc5accfc08f.svg",oe=n.p+"5bb1f6887a9966817d8cf397aefc2d94.svg",ce=n.p+"9aca32a734a94393101f9d4c61414037.svg",le=n.p+"acc66d61f5ed5828e074c240f51d96bf.svg",se=n.p+"b40a8623d3827919ddf8abf23d4196e7.svg",de=n.p+"64b6c7fdd2288a1b0e2cb39333396f8d.svg",me=n.p+"adacb3c18a3d3fa6dec9daa65020844c.svg",ue=n.p+"3d5938866235764922a93dfe2a2d71d0.svg",fe=n.p+"0346b4b4206362ab7f25a4aab6b61a70.svg",pe=n.p+"37b5647f4d012a331365c8206425ed88.svg",he=n.p+"8bf73f0a87206c2ea4ba9665cb567417.svg",ge=n.p+"f872ddb6c8af5bf24f7670424e7bf405.svg",be=n.p+"a514fc2fd44babea87a4e2aaa9500cae.svg",ke=n.p+"0e65e13a4fe0b9e70388e7ea4d2c660a.svg",ve=n.p+"ef5fe6473b8d62c990c1973de6bf9640.svg",ye=n.p+"e2c53b4dcd14853f9cb5885b2dc5d8de.svg",we=n.p+"9c5ba51cf73faaa7df055ebf4fa749cd.svg",xe=n.p+"9666b70cceb4ced18e552e7e51478ee9.svg",Ee=n.p+"14e18941005183edd6c7d2404716b94b.svg",Pe=n.p+"9b0185c3818e05c622773eab459ac7ea.svg",Ze=n.p+"0e5e012c7061ca9e1ef7c2b3d636db9a.svg",Be=n.p+"35487f8253946f248ba3841cfd5f4c4a.svg",De=n.p+"c6de63c53bbc850d1b44de0c51d5a026.svg";var Fe,Ae,ze=function(e){var t=i.useState(null),n=(0,v.Z)(t,2),a=n[0],r=n[1];return i.useEffect((function(){$().then((function(t){r(t),e.setTp(function(e){var t=0;return V.forEach(e,(function(e,n){e&&(t+=X[n])})),t}(t))}))}),[]),i.createElement(i.Fragment,null,i.createElement(q,{completed:null==a?void 0:a.deploy,img:ne,imgPlaceholder:ae,intlPrefix:"task.deploy",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.test,img:ye,imgPlaceholder:we,intlPrefix:"task.test"}),i.createElement(q,{completed:null==a?void 0:a.lint,img:ge,imgPlaceholder:be,intlPrefix:"task.lint",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.secret,img:ke,imgPlaceholder:ve,intlPrefix:"task.secret"}),i.createElement(q,{completed:null==a?void 0:a.env,img:ie,imgPlaceholder:re,intlPrefix:"task.env",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.timedDeploy,img:oe,imgPlaceholder:ce,intlPrefix:"task.clock"}),i.createElement(q,{completed:null==a?void 0:a.conditional,img:le,imgPlaceholder:se,intlPrefix:"task.conditional",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.docker1,img:de,imgPlaceholder:me,intlPrefix:"task.docker1"}),i.createElement(q,{completed:null==a?void 0:a.docker2,img:ue,imgPlaceholder:fe,intlPrefix:"task.docker2",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.docker3,img:pe,imgPlaceholder:he,intlPrefix:"task.docker3"}),i.createElement(q,{completed:null==a?void 0:a.hacker,img:xe,imgPlaceholder:Ee,intlPrefix:"task.hacker",isBadgeFirst:!0}),i.createElement(q,{completed:null==a?void 0:a.mail,img:Pe,imgPlaceholder:Ze,intlPrefix:"task.mail"}),i.createElement(q,{completed:null==a?void 0:a.stats,img:Be,imgPlaceholder:De,intlPrefix:"task.status",isBadgeFirst:!0}))},Ce=l.ZP.section(Fe||(Fe=(0,o.Z)(["\n    display: grid;\n    width: 100%;\n    grid-template-columns: 100%;\n    margin-top: 2rem;\n"]))),Se=function(){var e=i.useState(0),t=(0,v.Z)(e,2),n=t[0],a=t[1];return i.createElement(Ce,null,i.createElement(R,{tp:n}),i.createElement(ze,{setTp:a}))},Ge=l.ZP.main(Ae||(Ae=(0,o.Z)(["\n    display: flex;\n    height: 100%;\n    background: ",";\n    align-content: center;\n    justify-content: center;\n"])),s);Ge.displayName="App";const Oe=function(){return i.createElement(c.Z,{messages:h,locale:"en",defaultLocale:"en"},i.createElement(p,null),i.createElement(Ge,null,i.createElement(Se,null)))};r.render(i.createElement(Oe,null),document.getElementById("app-root"))},237:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(645),i=n.n(a)()((function(e){return e[1]}));i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Glory:ital,wght@0,400;0,600;0,800;1,400;1,600;1,800&display=swap);"]),i.push([e.id,"",""]);const r=i}}]);