(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"/pictures/Character.Wenda.jpg"},{id:2,image:"/pictures/Character.Odlaw.jpg"},{id:3,image:"/pictures/Character.Whitebeard.jpg"},{id:4,image:"/pictures/Character.Woof.jpg"},{id:5,image:"/pictures/J272610_J-WAL003.jpg"},{id:6,image:"/pictures/peeking-waldo.jpg"},{id:7,image:"/pictures/striped-waldo.jpg"},{id:8,image:"/pictures/waldo-cane.png"},{id:9,image:"/pictures/waldo-painting.jpeg"},{id:10,image:"/pictures/waldo-stamp.png"},{id:11,image:"/pictures/waldo-stuff.jpg"},{id:12,image:"/pictures/waving-waldo.jpg"},{id:13,image:"/pictures/wenda.jpg"},{id:14,image:"/pictures/whitebeard.jpeg"},{id:15,image:"/pictures/WilmaStamp.jpg"}]},,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),c=a.n(r),s=a(3),l=a(4),o=a(7),u=a(5),m=a(8);a(15);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(16);var g=function(e){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("h1",{className:"title"},"Which Waldo"),i.a.createElement("hr",null),i.a.createElement("p",{className:"instructions text-center"},"Click an image to watch your score increase, but make sure you don't click the same image twice! Click all for a Victory!"),e.children)};a(17);var p=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("span",{className:"d-flex justify-content-center align-middle"},"Which Waldo 2019 Clearplaid Creations"))};a(18);var f=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))},h=a(6),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={images:h,currentScore:0,bestScore:0,selected:[]},a.endGame=function(){return a.state.currentScore>a.state.bestScore?a.setState({bestScore:a.state.currentScore},function(){console.log(this.state.bestScore)}):a.setState({bestScore:a.state.bestScore},function(){console.log(this.state.bestScore)}),a.setState({selected:[],currentScore:0}),!0},a.randomizeImageCards=function(){return a.state.images.sort(function(){return Math.random()-.5}),!0},a.handleClick=function(e){a.state.selected.includes(e)?a.endGame():(a.setState(function(t){var a=t.selected.concat(e);return console.log(a),{selected:a}}),a.randomizeImageCards(),a.setState({currentScore:a.state.currentScore+1},function(){console.log(this.state.currentScore)}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(g,null,i.a.createElement("ul",{className:"score list-inline d-flex justify-content-center"},i.a.createElement("li",{className:"list-inline-item"},"Score:"),i.a.createElement("li",{className:"list-inline-item num"},this.state.currentScore),i.a.createElement("li",{className:"list-inline-item"},"Best Score:"),i.a.createElement("li",{className:"list-inline-item num"},this.state.bestScore))),i.a.createElement(d,null,this.state.images.map(function(t){return i.a.createElement(f,{handleClick:e.handleClick,id:t.id,key:t.id,image:t.image})})),i.a.createElement(p,null))}}]),t}(n.Component);a(19);c.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.1374ae41.chunk.js.map