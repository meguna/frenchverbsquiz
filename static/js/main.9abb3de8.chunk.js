(this.webpackJsonpfr1=this.webpackJsonpfr1||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),s=t(3),a=t.n(s),c=(t(14),t(4)),u=t(5),i=t(7),m=t(6),l=t(1),d=t(8),p=(t(15),{dormir:["dors","dors","dort","dormons","dormez","dorment"],servir:["sers","sers","sert","servons","servez","servent"],sentir:["sens","sens","sent","sentons","sentez","sentent"],courir:["cours","cours","court","courons","courez","courent"],partir:["pars","pars","part","partons","partez","partent"],sortir:["sors","sors","sort","sortons","sortez","sortent"],boire:["bois","bois","boit","buvons","buvez","boivent"],prendre:["prends","prends","prend","prenons","prenez","prennent"],apprendre:["apprends","apprends","apprend","apprenons","apprenez","apprennent"],comprendre:["comprends","comprends","comprend","comprenons","comprenez","comprennent"],avoir:["ai","as","a","avons","avez","ont"],"\xeatre":["suis","es","est","sommes","\xeates","sont"],faire:["fais","fais","fait","faisons","faites","font"],aller:["vais","vas","va","allons","allez","vont"],adorer:["adore","adores","adore","adorons","adorez","adorent"],"\xe9tudier":["\xe9tudie","\xe9tudies","\xe9tudie","\xe9tudions","\xe9tudiez","\xe9tudient"],manger:["mange","manges","mange","mangeons","mangez","mangent"],commencer:["commence","commences","commence","commen\xe7ons","commencez","commencent"]}),h=["je","tu","il","elle","on","nous","vous","ils","elles"],v=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(i.a)(this,Object(m.a)(n).call(this,e))).state={currWord:"",currWordForms:{},currPronoun:"",answer:"",result:-1,wrongCount:0,correctCount:0},t.onSubmit=t.onSubmit.bind(Object(l.a)(t)),t.onAnswerChange=t.onAnswerChange.bind(Object(l.a)(t)),t.setRandom=t.setRandom.bind(Object(l.a)(t)),t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setRandom()}},{key:"setRandom",value:function(){var e=Math.floor(Math.random()*Object.keys(p).length),n=Math.floor(Math.random()*h.length),t=Object.keys(p)[e];this.setState({currWord:t,currWordForms:p[t],currPronoun:h[n],answer:"",result:-1})}},{key:"getCorrectAnswer",value:function(){var e=this.state,n=e.currPronoun,t=e.currWordForms;return"elle"===n||"il"===n||"on"===n?t[2]:"elles"===n||"ils"===n?t[5]:"vous"===n?t[4]:"nous"===n?t[3]:t[h.indexOf(n)]}},{key:"onSubmit",value:function(e){e.preventDefault(),this.getCorrectAnswer()===this.state.answer?(this.setState((function(e){return{result:1,correctCount:e.correctCount+1}})),setTimeout(this.setRandom,1e3)):(this.setState((function(e){return{result:0,wrongCount:e.wrongCount+1}})),setTimeout(this.setRandom,1e3))}},{key:"onAnswerChange",value:function(e){this.setState({answer:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.currWord,t=e.currPronoun,r=e.answer,s=e.result,a=e.correctCount,c=e.wrongCount,u=t;return"je"!==t||""===r||"a"!==r[0]&&"e"!==r[0]&&"i"!==r[0]&&"o"!==r[0]&&"u"!==r[0]||(u="j'"),o.a.createElement("div",null,o.a.createElement("p",{className:"test-word"},n),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("span",{className:"test-pronoun"},u),o.a.createElement("input",{className:"text-input",type:"text",placeholder:"type answer here",value:r,onChange:this.onAnswerChange})),o.a.createElement("div",null,1===s&&o.a.createElement("p",{className:"correct-header"},"Correct"),0===s&&o.a.createElement("p",{className:"wrong-header"},"Wrong! Answer: ",this.getCorrectAnswer())),o.a.createElement("p",null,a," / ",a+c," correct"))}}]),n}(r.Component);t(16);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"title"},"French Verbs Quiz"),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.9abb3de8.chunk.js.map