(function(){var t,e;t=function(t){var e,r;return e=t.trim().split(/\s+/g).length,r=200,Math.max(8e3,Math.ceil(6e4*e/r))},e="undefined"!=typeof exports&&null!==exports?exports:this,e.quoterr||(e.quoterr={}),e.quoterr.readTime=t}).call(this),function(){var t,e,r,o,n,u,i,a,l,s;i="undefined"!=typeof exports&&null!==exports?exports:this,i.quoterr||(i.quoterr={}),u=i.quoterr,r=$(".quote"),t=$(".author a"),e=$("#unique-link"),s=-1,l=0,o=null,a=function(n){l=0,r.html(n.quote),t.html(n.author),t.attr({href:n["author.link"]}),t.attr({title:"Read quotes by "+n.author}),e.attr({href:n["quote.link"]}),0===l&&(l=u.readTime(r.text())),o=new ProgressBar.Circle("#slideshow",{color:"#000",strokeWidth:12,fill:"transparent",duration:l}),o.animate(1,function(t){return function(){return o.destroy(),o=null}}(this)),$.ajax({data:{_format:"json"},url:"/",success:function(t){return function(t){return s=window.setTimeout(function(){a(t)},l)}}(this)})},n=function(n,u){null==n&&(n=!0),null==u&&(u=0),l=u,n?a({quote:r.text(),author:t.text(),"quote.link":e.attr("href"),"author.link":t.attr("href")}):(window.clearTimeout(s),o&&o.destroy())},u.quoteSlideShow=n}.call(this);
//# sourceMappingURL=app.js.map