(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Bulbasaur",image:"https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/600px-001Bulbasaur.png"},{id:2,name:"Charmander",image:"https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/600px-004Charmander.png"},{id:3,name:"Squirtle",image:"https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/600px-007Squirtle.png"},{id:4,name:"Butterfree",image:"https://cdn.bulbagarden.net/upload/d/d1/012Butterfree.png"},{id:5,name:"Pikachu",image:"https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"},{id:6,name:"Nidoking",image:"https://cdn.bulbagarden.net/upload/c/c6/034Nidoking.png"},{id:7,name:"Vulpix",image:"https://cdn.bulbagarden.net/upload/6/60/037Vulpix.png"},{id:8,name:"Ninetales",image:"https://cdn.bulbagarden.net/upload/0/05/038Ninetales.png"},{id:9,name:"Psyduck",image:"https://cdn.bulbagarden.net/upload/5/53/054Psyduck.png"},{id:10,name:"Growlithe",image:"https://cdn.bulbagarden.net/upload/3/3d/058Growlithe.png"},{id:11,name:"Arcanine",image:"https://cdn.bulbagarden.net/upload/b/b8/059Arcanine.png"},{id:12,name:"Dragonite",image:"https://cdn.bulbagarden.net/upload/8/8b/149Dragonite.png"},{id:13,name:"Mewtwo",image:"https://cdn.bulbagarden.net/upload/7/78/150Mewtwo.png"},{id:14,name:"Scyther",image:"https://cdn.bulbagarden.net/upload/b/ba/123Scyther.png"},{id:15,name:"Electrabuzz",image:"https://cdn.bulbagarden.net/upload/d/de/125Electabuzz.png"}]},,,function(e,a,n){e.exports=n(19)},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),l=n.n(i),c=n(3),d=n(4),u=n(7),m=n(5),p=n(8);n(15);var s=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:e.handleIncrement})))};n(16);var o=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},g=n(6);n(17);var b=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},"The Clicky Game!"),r.a.createElement("li",{className:"nav-item"}),r.a.createElement("li",{className:"nav-item"},"Score: ",e.score,' | Top Score: "0"'))))},h=(n(18),function(e){function a(){var e,n;Object(c.a)(this,a);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={tilesInfo:g,score:0,beenClicked:[]},n.handleIncrement=function(){n.setState({score:n.state.score+1})},n}return Object(p.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b,{score:this.state.score}),r.a.createElement(o,null,this.state.tilesInfo.map(function(a){return r.a.createElement(s,{id:a.id,key:a.id,image:a.image,handleIncrement:e.handleIncrement})})))}}]),a}(r.a.Component));l.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.97584133.chunk.js.map