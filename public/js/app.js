"classList"in document.createElement("_")||!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;e>d;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",-1!==i(this,a)},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",-1===i(this,a)&&(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=i(this,a);-1!==b;)this.splice(b,1),f=!0,b=i(this,a);while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){-2146823252===n.number&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(self),function(a){"use strict";if(a.URL=a.URL||a.webkitURL,a.Blob&&a.URL)try{return void new Blob}catch(b){}var c=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||function(a){var b=function(a){return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]},c=function(){this.data=[]},d=function(a,b,c){this.data=a,this.size=a.length,this.type=b,this.encoding=c},e=c.prototype,f=d.prototype,g=a.FileReaderSync,h=function(a){this.code=this[this.name=a]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),j=i.length,k=a.URL||a.webkitURL||a,l=k.createObjectURL,m=k.revokeObjectURL,n=k,o=a.btoa,p=a.atob,q=a.ArrayBuffer,r=a.Uint8Array,s=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(d.fake=f.fake=!0;j--;)h.prototype[i[j]]=j+1;return k.createObjectURL||(n=a.URL=function(a){var b,c=document.createElementNS("http://www.w3.org/1999/xhtml","a");return c.href=a,"origin"in c||("data:"===c.protocol.toLowerCase()?c.origin=null:(b=a.match(s),c.origin=b&&b[1])),c}),n.createObjectURL=function(a){var b,c=a.type;return null===c&&(c="application/octet-stream"),a instanceof d?(b="data:"+c,"base64"===a.encoding?b+";base64,"+a.data:"URI"===a.encoding?b+","+decodeURIComponent(a.data):o?b+";base64,"+o(a.data):b+","+encodeURIComponent(a.data)):l?l.call(k,a):void 0},n.revokeObjectURL=function(a){"data:"!==a.substring(0,5)&&m&&m.call(k,a)},e.append=function(a){var c=this.data;if(r&&(a instanceof q||a instanceof r)){for(var e="",f=new r(a),i=0,j=f.length;j>i;i++)e+=String.fromCharCode(f[i]);c.push(e)}else if("Blob"===b(a)||"File"===b(a)){if(!g)throw new h("NOT_READABLE_ERR");var k=new g;c.push(k.readAsBinaryString(a))}else a instanceof d?"base64"===a.encoding&&p?c.push(p(a.data)):"URI"===a.encoding?c.push(decodeURIComponent(a.data)):"raw"===a.encoding&&c.push(a.data):("string"!=typeof a&&(a+=""),c.push(unescape(encodeURIComponent(a))))},e.getBlob=function(a){return arguments.length||(a=null),new d(this.data.join(""),a,"raw")},e.toString=function(){return"[object BlobBuilder]"},f.slice=function(a,b,c){var e=arguments.length;return 3>e&&(c=null),new d(this.data.slice(a,e>1?b:this.data.length),c,this.encoding)},f.toString=function(){return"[object Blob]"},f.close=function(){this.size=0,delete this.data},c}(a);a.Blob=function(a,b){var d=b?b.type||"":"",e=new c;if(a)for(var f=0,g=a.length;g>f;f++)Uint8Array&&a[f]instanceof Uint8Array?e.append(a[f].buffer):e.append(a[f]);var h=e.getBlob(d);return!h.slice&&h.webkitSlice&&(h.slice=h.webkitSlice),h};var d=Object.getPrototypeOf||function(a){return a.__proto__};a.Blob.prototype=d(new a.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this),function(a,b){"use strict";"object"==typeof module?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):a.MediumEditor=b}(this,function(){"use strict";function a(a,b){return this.init(a,b)}return a.extensions={},function(b){function c(a,b){var c,d=Array.prototype.slice.call(arguments,2);b=b||{};for(var e=0;e<d.length;e++){var f=d[e];if(f)for(c in f)f.hasOwnProperty(c)&&"undefined"!=typeof f[c]&&(a||b.hasOwnProperty(c)===!1)&&(b[c]=f[c])}return b}var d=!1;try{var e=document.createElement("div"),f=document.createTextNode(" ");e.appendChild(f),d=e.contains(f)}catch(g){}var h={isIE:"Microsoft Internet Explorer"===navigator.appName||"Netscape"===navigator.appName&&null!==new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(navigator.userAgent),isEdge:null!==/Edge\/\d+/.exec(navigator.userAgent),isFF:navigator.userAgent.toLowerCase().indexOf("firefox")>-1,isMac:b.navigator.platform.toUpperCase().indexOf("MAC")>=0,keyCode:{BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,DELETE:46,K:75,M:77,V:86},isMetaCtrlKey:function(a){return!!(h.isMac&&a.metaKey||!h.isMac&&a.ctrlKey)},isKey:function(a,b){var c=h.getKeyCode(a);return!1===Array.isArray(b)?c===b:-1!==b.indexOf(c)},getKeyCode:function(a){var b=a.which;return null===b&&(b=null!==a.charCode?a.charCode:a.keyCode),b},blockContainerElementNames:["p","h1","h2","h3","h4","h5","h6","blockquote","pre","ul","li","ol","address","article","aside","audio","canvas","dd","dl","dt","fieldset","figcaption","figure","footer","form","header","hgroup","main","nav","noscript","output","section","video","table","thead","tbody","tfoot","tr","th","td"],emptyElementNames:["br","col","colgroup","hr","img","input","source","wbr"],extend:function(){var a=[!0].concat(Array.prototype.slice.call(arguments));return c.apply(this,a)},defaults:function(){var a=[!1].concat(Array.prototype.slice.call(arguments));return c.apply(this,a)},createLink:function(a,b,c,d){var e=a.createElement("a");return h.moveTextRangeIntoElement(b[0],b[b.length-1],e),e.setAttribute("href",c),d&&e.setAttribute("target",d),e},findOrCreateMatchingTextNodes:function(a,b,c){for(var d=a.createTreeWalker(b,NodeFilter.SHOW_ALL,null,!1),e=[],f=0,g=!1,i=null,j=null;null!==(i=d.nextNode());)if(!(i.nodeType>3))if(3===i.nodeType){if(!g&&c.start<f+i.nodeValue.length&&(g=!0,j=h.splitStartNodeIfNeeded(i,c.start,f)),g&&h.splitEndNodeIfNeeded(i,j,c.end,f),g&&f===c.end)break;if(g&&f>c.end+1)throw new Error("PerformLinking overshot the target!");g&&e.push(j||i),f+=i.nodeValue.length,null!==j&&(f+=j.nodeValue.length,d.nextNode()),j=null}else"img"===i.tagName.toLowerCase()&&(!g&&c.start<=f&&(g=!0),g&&e.push(i));return e},splitStartNodeIfNeeded:function(a,b,c){return b!==c?a.splitText(b-c):null},splitEndNodeIfNeeded:function(a,b,c,d){var e,f;e=d+(b||a).nodeValue.length+(b?a.nodeValue.length:0)-1,f=(b||a).nodeValue.length-(e+1-c),e>=c&&d!==e&&0!==f&&(b||a).splitText(f)},splitByBlockElements:function(b){if(3!==b.nodeType&&1!==b.nodeType)return[];var c=[],d=a.util.blockContainerElementNames.join(",");if(3===b.nodeType||0===b.querySelectorAll(d).length)return[b];for(var e=0;e<b.childNodes.length;e++){var f=b.childNodes[e];if(3===f.nodeType)c.push(f);else if(1===f.nodeType){var g=f.querySelectorAll(d);0===g.length?c.push(f):c=c.concat(a.util.splitByBlockElements(f))}}return c},findAdjacentTextNodeWithContent:function(a,b,c){var d,e=!1,f=c.createNodeIterator(a,NodeFilter.SHOW_TEXT,null,!1);for(d=f.nextNode();d;){if(d===b)e=!0;else if(e&&3===d.nodeType&&d.nodeValue&&d.nodeValue.trim().length>0)break;d=f.nextNode()}return d},findPreviousSibling:function(a){if(!a||h.isMediumEditorElement(a))return!1;for(var b=a.previousSibling;!b&&!h.isMediumEditorElement(a.parentNode);)a=a.parentNode,b=a.previousSibling;return b},isDescendant:function(a,b,c){if(!a||!b)return!1;if(a===b)return!!c;if(1!==a.nodeType)return!1;if(d||3!==b.nodeType)return a.contains(b);for(var e=b.parentNode;null!==e;){if(e===a)return!0;e=e.parentNode}return!1},isElement:function(a){return!(!a||1!==a.nodeType)},throttle:function(a,b){var c,d,e,f=50,g=null,h=0,i=function(){h=Date.now(),g=null,e=a.apply(c,d),g||(c=d=null)};return b||0===b||(b=f),function(){var f=Date.now(),j=b-(f-h);return c=this,d=arguments,0>=j||j>b?(g&&(clearTimeout(g),g=null),h=f,e=a.apply(c,d),g||(c=d=null)):g||(g=setTimeout(i,j)),e}},traverseUp:function(a,b){if(!a)return!1;do{if(1===a.nodeType){if(b(a))return a;if(h.isMediumEditorElement(a))return!1}a=a.parentNode}while(a);return!1},htmlEntities:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},insertHTMLCommand:function(b,c){var d,e,f,g,i,j,k,l=!1,m=["insertHTML",!1,c];if(!a.util.isEdge&&b.queryCommandSupported("insertHTML"))try{return b.execCommand.apply(b,m)}catch(n){}if(d=b.getSelection(),d.rangeCount){if(e=d.getRangeAt(0),k=e.commonAncestorContainer,h.isMediumEditorElement(k)&&!k.firstChild)e.selectNode(k.appendChild(b.createTextNode("")));else if(3===k.nodeType&&0===e.startOffset&&e.endOffset===k.nodeValue.length||3!==k.nodeType&&k.innerHTML===e.toString()){for(;!h.isMediumEditorElement(k)&&k.parentNode&&1===k.parentNode.childNodes.length&&!h.isMediumEditorElement(k.parentNode);)k=k.parentNode;e.selectNode(k)}for(e.deleteContents(),f=b.createElement("div"),f.innerHTML=c,g=b.createDocumentFragment();f.firstChild;)i=f.firstChild,j=g.appendChild(i);e.insertNode(g),j&&(e=e.cloneRange(),e.setStartAfter(j),e.collapse(!0),a.selection.selectRange(b,e)),l=!0}return b.execCommand.callListeners&&b.execCommand.callListeners(m,l),l},execFormatBlock:function(b,c){var d,e=h.getTopBlockContainer(a.selection.getSelectionStart(b));if("blockquote"===c){if(e&&(d=Array.prototype.slice.call(e.childNodes),d.some(function(a){return h.isBlockContainer(a)})))return b.execCommand("outdent",!1,null);if(h.isIE)return b.execCommand("indent",!1,c)}if(e&&c===e.nodeName.toLowerCase()&&(c="p"),h.isIE&&(c="<"+c+">"),e&&"blockquote"===e.nodeName.toLowerCase()){if(h.isIE&&"<p>"===c)return b.execCommand("outdent",!1,c);if((h.isFF||h.isEdge)&&"p"===c)return d=Array.prototype.slice.call(e.childNodes),d.some(function(a){return!h.isBlockContainer(a)})&&b.execCommand("formatBlock",!1,c),b.execCommand("outdent",!1,c)}return b.execCommand("formatBlock",!1,c)},setTargetBlank:function(a,b){var c,d=b||!1;if("a"===a.nodeName.toLowerCase())a.target="_blank";else for(a=a.getElementsByTagName("a"),c=0;c<a.length;c+=1)!1!==d&&d!==a[c].attributes.href.value||(a[c].target="_blank")},removeTargetBlank:function(a,b){var c;if("a"===a.nodeName.toLowerCase())a.removeAttribute("target");else for(a=a.getElementsByTagName("a"),c=0;c<a.length;c+=1)b===a[c].attributes.href.value&&a[c].removeAttribute("target")},addClassToAnchors:function(a,b){var c,d,e=b.split(" ");if("a"===a.nodeName.toLowerCase())for(d=0;d<e.length;d+=1)a.classList.add(e[d]);else for(a=a.getElementsByTagName("a"),c=0;c<a.length;c+=1)for(d=0;d<e.length;d+=1)a[c].classList.add(e[d])},isListItem:function(a){if(!a)return!1;if("li"===a.nodeName.toLowerCase())return!0;for(var b=a.parentNode,c=b.nodeName.toLowerCase();"li"===c||!h.isBlockContainer(b)&&"div"!==c;){if("li"===c)return!0;if(b=b.parentNode,!b)return!1;c=b.nodeName.toLowerCase()}return!1},cleanListDOM:function(b,c){if("li"===c.nodeName.toLowerCase()){var d=c.parentElement;"p"===d.parentElement.nodeName.toLowerCase()&&(h.unwrap(d.parentElement,b),a.selection.moveCursor(b,c.firstChild,c.firstChild.textContent.length))}},splitOffDOMTree:function(a,b,c){for(var d=b,e=null,f=!c;d!==a;){var g,h=d.parentNode,i=h.cloneNode(!1),j=f?d:h.firstChild;for(e&&(f?i.appendChild(e):g=e),e=i;j;){var k=j.nextSibling;j===d?(j.hasChildNodes()?j=j.cloneNode(!1):j.parentNode.removeChild(j),j.textContent&&e.appendChild(j),j=f?k:null):(j.parentNode.removeChild(j),(j.hasChildNodes()||j.textContent)&&e.appendChild(j),j=k)}g&&e.appendChild(g),d=h}return e},moveTextRangeIntoElement:function(a,b,c){if(!a||!b)return!1;var d=h.findCommonRoot(a,b);if(!d)return!1;if(b===a){var e=a.parentNode,f=a.nextSibling;return e.removeChild(a),c.appendChild(a),f?e.insertBefore(c,f):e.appendChild(c),c.hasChildNodes()}for(var g,i,j,k=[],l=0;l<d.childNodes.length;l++)if(j=d.childNodes[l],g){if(h.isDescendant(j,b,!0)){i=j;break}k.push(j)}else h.isDescendant(j,a,!0)&&(g=j);var m=i.nextSibling,n=d.ownerDocument.createDocumentFragment();return g===a?(g.parentNode.removeChild(g),n.appendChild(g)):n.appendChild(h.splitOffDOMTree(g,a)),k.forEach(function(a){a.parentNode.removeChild(a),n.appendChild(a)}),i===b?(i.parentNode.removeChild(i),n.appendChild(i)):n.appendChild(h.splitOffDOMTree(i,b,!0)),c.appendChild(n),i.parentNode===d?d.insertBefore(c,i):m?d.insertBefore(c,m):d.appendChild(c),c.hasChildNodes()},depthOfNode:function(a){for(var b=0,c=a;null!==c.parentNode;)c=c.parentNode,b++;return b},findCommonRoot:function(a,b){for(var c=h.depthOfNode(a),d=h.depthOfNode(b),e=a,f=b;c!==d;)c>d?(e=e.parentNode,c-=1):(f=f.parentNode,d-=1);for(;e!==f;)e=e.parentNode,f=f.parentNode;return e},isElementAtBeginningOfBlock:function(a){for(var b,c;!h.isBlockContainer(a)&&!h.isMediumEditorElement(a);){for(c=a;c=c.previousSibling;)if(b=3===c.nodeType?c.nodeValue:c.textContent,b.length>0)return!1;a=a.parentNode}return!0},isMediumEditorElement:function(a){return a&&a.getAttribute&&!!a.getAttribute("data-medium-editor-element")},getContainerEditorElement:function(a){return h.traverseUp(a,function(a){return h.isMediumEditorElement(a)})},isBlockContainer:function(a){return a&&3!==a.nodeType&&-1!==h.blockContainerElementNames.indexOf(a.nodeName.toLowerCase())},getClosestBlockContainer:function(a){return h.traverseUp(a,function(a){return h.isBlockContainer(a)||h.isMediumEditorElement(a)})},getTopBlockContainer:function(a){var b=h.isBlockContainer(a)?a:!1;return h.traverseUp(a,function(a){return h.isBlockContainer(a)&&(b=a),!b&&h.isMediumEditorElement(a)?(b=a,!0):!1}),b},getFirstSelectableLeafNode:function(a){for(;a&&a.firstChild;)a=a.firstChild;if(a=h.traverseUp(a,function(a){return-1===h.emptyElementNames.indexOf(a.nodeName.toLowerCase())}),"table"===a.nodeName.toLowerCase()){var b=a.querySelector("th, td");b&&(a=b)}return a},getFirstTextNode:function(a){return h.warn("getFirstTextNode is deprecated and will be removed in version 6.0.0"),h._getFirstTextNode(a)},_getFirstTextNode:function(a){if(3===a.nodeType)return a;for(var b=0;b<a.childNodes.length;b++){var c=h._getFirstTextNode(a.childNodes[b]);if(null!==c)return c}return null},ensureUrlHasProtocol:function(a){return-1===a.indexOf("://")?"http://"+a:a},warn:function(){void 0!==b.console&&"function"==typeof b.console.warn&&b.console.warn.apply(b.console,arguments)},deprecated:function(a,b,c){var d=a+" is deprecated, please use "+b+" instead.";c&&(d+=" Will be removed in "+c),h.warn(d)},deprecatedMethod:function(a,b,c,d){h.deprecated(a,b,d),"function"==typeof this[b]&&this[b].apply(this,c)},cleanupAttrs:function(a,b){b.forEach(function(b){a.removeAttribute(b)})},cleanupTags:function(a,b){b.forEach(function(b){a.nodeName.toLowerCase()===b&&a.parentNode.removeChild(a)})},getClosestTag:function(a,b){return h.traverseUp(a,function(a){return a.nodeName.toLowerCase()===b.toLowerCase()})},unwrap:function(a,b){for(var c=b.createDocumentFragment(),d=Array.prototype.slice.call(a.childNodes),e=0;e<d.length;e++)c.appendChild(d[e]);c.childNodes.length?a.parentNode.replaceChild(c,a):a.parentNode.removeChild(a)},guid:function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}};a.util=h}(window),function(){var b=function(b){a.util.extend(this,b)};b.extend=function(b){var c,d=this;c=b&&b.hasOwnProperty("constructor")?b.constructor:function(){return d.apply(this,arguments)},a.util.extend(c,d);var e=function(){this.constructor=c};return e.prototype=d.prototype,c.prototype=new e,b&&a.util.extend(c.prototype,b),c},b.prototype={init:function(){},base:void 0,name:void 0,checkState:void 0,destroy:void 0,queryCommandState:void 0,isActive:void 0,isAlreadyApplied:void 0,setActive:void 0,setInactive:void 0,getInteractionElements:void 0,window:void 0,document:void 0,getEditorElements:function(){return this.base.elements},getEditorId:function(){return this.base.id},getEditorOption:function(a){return this.base.options[a]}},["execAction","on","off","subscribe","trigger"].forEach(function(a){b.prototype[a]=function(){return this.base[a].apply(this.base,arguments)}}),a.Extension=b}(),function(){function b(b){return a.util.isBlockContainer(b)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}var c={findMatchingSelectionParent:function(b,c){var d,e,f=c.getSelection();return 0===f.rangeCount?!1:(d=f.getRangeAt(0),e=d.commonAncestorContainer,a.util.traverseUp(e,b))},getSelectionElement:function(b){return this.findMatchingSelectionParent(function(b){return a.util.isMediumEditorElement(b)},b)},exportSelection:function(a,b){if(!a)return null;var c=null,d=b.getSelection();if(d.rangeCount>0){var e,f=d.getRangeAt(0),g=f.cloneRange();g.selectNodeContents(a),g.setEnd(f.startContainer,f.startOffset),e=g.toString().length,c={start:e,end:e+f.toString().length},this.doesRangeStartWithImages(f,b)&&(c.startsWithImage=!0);var h=this.getTrailingImageCount(a,c,f.endContainer,f.endOffset);if(h&&(c.trailingImageCount=h),0!==e){var i=this.getIndexRelativeToAdjacentEmptyBlocks(b,a,f.startContainer,f.startOffset);-1!==i&&(c.emptyBlocksIndex=i)}}return c},importSelection:function(a,b,c,d){if(a&&b){var e=c.createRange();e.setStart(b,0),e.collapse(!0);var f,g=b,h=[],i=0,j=!1,k=!1,l=0,m=!1,n=!1,o=null;for((d||a.startsWithImage||"undefined"!=typeof a.emptyBlocksIndex)&&(n=!0);!m&&g;)if(g.nodeType>3)g=h.pop();else{if(3!==g.nodeType||k){if(a.trailingImageCount&&k&&("img"===g.nodeName.toLowerCase()&&l++,l===a.trailingImageCount)){for(var p=0;g.parentNode.childNodes[p]!==g;)p++;e.setEnd(g.parentNode,p+1),m=!0}if(!m&&1===g.nodeType)for(var q=g.childNodes.length-1;q>=0;)h.push(g.childNodes[q]),q-=1}else f=i+g.length,!j&&a.start>=i&&a.start<=f&&(n||a.start<f?(e.setStart(g,a.start-i),j=!0):o=g),j&&a.end>=i&&a.end<=f&&(a.trailingImageCount?k=!0:(e.setEnd(g,a.end-i),m=!0)),i=f;m||(g=h.pop())}!j&&o&&(e.setStart(o,o.length),e.setEnd(o,o.length)),"undefined"!=typeof a.emptyBlocksIndex&&(e=this.importSelectionMoveCursorPastBlocks(c,b,a.emptyBlocksIndex,e)),d&&(e=this.importSelectionMoveCursorPastAnchor(a,e)),this.selectRange(c,e)}},importSelectionMoveCursorPastAnchor:function(b,c){var d=function(a){return"a"===a.nodeName.toLowerCase()};if(b.start===b.end&&3===c.startContainer.nodeType&&c.startOffset===c.startContainer.nodeValue.length&&a.util.traverseUp(c.startContainer,d)){for(var e=c.startContainer,f=c.startContainer.parentNode;null!==f&&"a"!==f.nodeName.toLowerCase();)f.childNodes[f.childNodes.length-1]!==e?f=null:(e=f,f=f.parentNode);if(null!==f&&"a"===f.nodeName.toLowerCase()){for(var g=null,h=0;null===g&&h<f.parentNode.childNodes.length;h++)f.parentNode.childNodes[h]===f&&(g=h);c.setStart(f.parentNode,g+1),c.collapse(!0)}}return c},importSelectionMoveCursorPastBlocks:function(c,d,e,f){var g,h,i=c.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b,!1),j=f.startContainer,k=0;for(e=e||1,g=3===j.nodeType&&a.util.isBlockContainer(j.previousSibling)?j.previousSibling:a.util.getClosestBlockContainer(j);i.nextNode();)if(h){if(h=i.currentNode,k++,k===e)break;if(h.textContent.length>0)break}else g===i.currentNode&&(h=i.currentNode);return h||(h=g),f.setStart(a.util.getFirstSelectableLeafNode(h),0),f},getIndexRelativeToAdjacentEmptyBlocks:function(c,d,e,f){if(e.textContent.length>0&&f>0)return-1;var g=e;if(3!==g.nodeType&&(g=e.childNodes[f]),g){if(!a.util.isElementAtBeginningOfBlock(g))return-1;var h=a.util.findPreviousSibling(g);if(!h)return-1;if(h.nodeValue)return-1}for(var i=a.util.getClosestBlockContainer(e),j=c.createTreeWalker(d,NodeFilter.SHOW_ELEMENT,b,!1),k=0;j.nextNode();){var l=""===j.currentNode.textContent;if((l||k>0)&&(k+=1),j.currentNode===i)return k;l||(k=0)}return k},doesRangeStartWithImages:function(a,b){if(0!==a.startOffset||1!==a.startContainer.nodeType)return!1;if("img"===a.startContainer.nodeName.toLowerCase())return!0;var c=a.startContainer.querySelector("img");if(!c)return!1;for(var d=b.createTreeWalker(a.startContainer,NodeFilter.SHOW_ALL,null,!1);d.nextNode();){var e=d.currentNode;if(e===c)break;if(e.nodeValue)return!1}return!0},getTrailingImageCount:function(a,b,c,d){if(0===d||1!==c.nodeType)return 0;if("img"!==c.nodeName.toLowerCase()&&!c.querySelector("img"))return 0;for(var e=c.childNodes[d-1];e.hasChildNodes();)e=e.lastChild;for(var f,g=a,h=[],i=0,j=!1,k=!1,l=!1,m=0;!l&&g;)if(g.nodeType>3)g=h.pop();else{if(3!==g.nodeType||k){if("img"===g.nodeName.toLowerCase()&&m++,g===e)l=!0;else if(1===g.nodeType)for(var n=g.childNodes.length-1;n>=0;)h.push(g.childNodes[n]),n-=1}else m=0,f=i+g.length,!j&&b.start>=i&&b.start<=f&&(j=!0),j&&b.end>=i&&b.end<=f&&(k=!0),i=f;l||(g=h.pop())}return m},selectionContainsContent:function(a){var b=a.getSelection();if(!b||b.isCollapsed||!b.rangeCount)return!1;if(""!==b.toString().trim())return!0;var c=this.getSelectedParentElement(b.getRangeAt(0));return!(!c||!("img"===c.nodeName.toLowerCase()||1===c.nodeType&&c.querySelector("img")))},selectionInContentEditableFalse:function(a){var b,c=this.findMatchingSelectionParent(function(a){var c=a&&a.getAttribute("contenteditable");return"true"===c&&(b=!0),"#text"!==a.nodeName&&"false"===c},a);return!b&&c},getSelectionHtml:function(a){var b,c,d,e="",f=a.getSelection();if(f.rangeCount){for(d=a.createElement("div"),b=0,c=f.rangeCount;c>b;b+=1)d.appendChild(f.getRangeAt(b).cloneContents());e=d.innerHTML}return e},getCaretOffsets:function(a,b){var c,d;return b||(b=window.getSelection().getRangeAt(0)),c=b.cloneRange(),d=b.cloneRange(),c.selectNodeContents(a),c.setEnd(b.endContainer,b.endOffset),d.selectNodeContents(a),d.setStart(b.endContainer,b.endOffset),{left:c.toString().length,right:d.toString().length}},rangeSelectsSingleNode:function(a){var b=a.startContainer;return b===a.endContainer&&b.hasChildNodes()&&a.endOffset===a.startOffset+1},getSelectedParentElement:function(a){return a?this.rangeSelectsSingleNode(a)&&3!==a.startContainer.childNodes[a.startOffset].nodeType?a.startContainer.childNodes[a.startOffset]:3===a.startContainer.nodeType?a.startContainer.parentNode:a.startContainer:null},getSelectedElements:function(a){var b,c,d,e=a.getSelection();if(!e.rangeCount||e.isCollapsed||!e.getRangeAt(0).commonAncestorContainer)return[];if(b=e.getRangeAt(0),3===b.commonAncestorContainer.nodeType){for(c=[],d=b.commonAncestorContainer;d.parentNode&&1===d.parentNode.childNodes.length;)c.push(d.parentNode),d=d.parentNode;return c}return[].filter.call(b.commonAncestorContainer.getElementsByTagName("*"),function(a){return"function"==typeof e.containsNode?e.containsNode(a,!0):!0})},selectNode:function(a,b){var c=b.createRange();c.selectNodeContents(a),this.selectRange(b,c)},select:function(a,b,c,d,e){var f=a.createRange();return f.setStart(b,c),d?f.setEnd(d,e):f.collapse(!0),this.selectRange(a,f),f},clearSelection:function(a,b){b?a.getSelection().collapseToStart():a.getSelection().collapseToEnd()},moveCursor:function(a,b,c){this.select(a,b,c)},getSelectionRange:function(a){var b=a.getSelection();return 0===b.rangeCount?null:b.getRangeAt(0)},selectRange:function(a,b){var c=a.getSelection();c.removeAllRanges(),c.addRange(b)},getSelectionStart:function(a){var b=a.getSelection().anchorNode,c=b&&3===b.nodeType?b.parentNode:b;return c}};a.selection=c}(),function(){function b(b,c){return b.some(function(b){if("function"!=typeof b.getInteractionElements)return!1;var d=b.getInteractionElements();return d?(Array.isArray(d)||(d=[d]),d.some(function(b){return a.util.isDescendant(b,c,!0)})):!1})}var c=function(a){this.base=a,this.options=this.base.options,this.events=[],this.disabledEvents={},this.customEvents={},this.listeners={}};c.prototype={InputEventOnContenteditableSupported:!a.util.isIE&&!a.util.isEdge,attachDOMEvent:function(b,c,d,e){b=a.util.isElement(b)||[window,document].indexOf(b)>-1?[b]:b,Array.prototype.forEach.call(b,function(a){a.addEventListener(c,d,e),this.events.push([a,c,d,e])}.bind(this))},detachDOMEvent:function(b,c,d,e){var f,g;b=a.util.isElement(b)||[window,document].indexOf(b)>-1?[b]:b,Array.prototype.forEach.call(b,function(a){f=this.indexOfListener(a,c,d,e),-1!==f&&(g=this.events.splice(f,1)[0],g[0].removeEventListener(g[1],g[2],g[3]))}.bind(this))},indexOfListener:function(a,b,c,d){var e,f,g;for(e=0,f=this.events.length;f>e;e+=1)if(g=this.events[e],g[0]===a&&g[1]===b&&g[2]===c&&g[3]===d)return e;return-1},detachAllDOMEvents:function(){for(var a=this.events.pop();a;)a[0].removeEventListener(a[1],a[2],a[3]),a=this.events.pop()},detachAllEventsFromElement:function(a){for(var b=this.events.filter(function(b){return b&&b[0].getAttribute&&b[0].getAttribute("medium-editor-index")===a.getAttribute("medium-editor-index")}),c=0,d=b.length;d>c;c++){var e=b[c];this.detachDOMEvent(e[0],e[1],e[2],e[3])}},attachAllEventsToElement:function(a){this.listeners.editableInput&&(this.contentCache[a.getAttribute("medium-editor-index")]=a.innerHTML),this.eventsCache&&this.eventsCache.forEach(function(b){this.attachDOMEvent(a,b.name,b.handler.bind(this))},this)},enableCustomEvent:function(a){void 0!==this.disabledEvents[a]&&delete this.disabledEvents[a]},disableCustomEvent:function(a){this.disabledEvents[a]=!0},attachCustomEvent:function(a,b){this.setupListener(a),this.customEvents[a]||(this.customEvents[a]=[]),this.customEvents[a].push(b)},detachCustomEvent:function(a,b){var c=this.indexOfCustomListener(a,b);-1!==c&&this.customEvents[a].splice(c,1)},indexOfCustomListener:function(a,b){return this.customEvents[a]&&this.customEvents[a].length?this.customEvents[a].indexOf(b):-1},detachAllCustomEvents:function(){this.customEvents={}},triggerCustomEvent:function(a,b,c){this.customEvents[a]&&!this.disabledEvents[a]&&this.customEvents[a].forEach(function(a){a(b,c)})},destroy:function(){this.detachAllDOMEvents(),this.detachAllCustomEvents(),this.detachExecCommand(),this.base.elements&&this.base.elements.forEach(function(a){a.removeAttribute("data-medium-focused")})},attachToExecCommand:function(){this.execCommandListener||(this.execCommandListener=function(a){this.handleDocumentExecCommand(a)}.bind(this),this.wrapExecCommand(),this.options.ownerDocument.execCommand.listeners.push(this.execCommandListener))},detachExecCommand:function(){var a=this.options.ownerDocument;if(this.execCommandListener&&a.execCommand.listeners){var b=a.execCommand.listeners.indexOf(this.execCommandListener);-1!==b&&a.execCommand.listeners.splice(b,1),a.execCommand.listeners.length||this.unwrapExecCommand()}},wrapExecCommand:function(){var a=this.options.ownerDocument;if(!a.execCommand.listeners){var b=function(b,c){a.execCommand.listeners&&a.execCommand.listeners.forEach(function(a){a({command:b[0],value:b[2],args:b,result:c})})},c=function(){var c=a.execCommand.orig.apply(this,arguments);if(!a.execCommand.listeners)return c;var d=Array.prototype.slice.call(arguments);return b(d,c),c};c.orig=a.execCommand,c.listeners=[],c.callListeners=b,a.execCommand=c}},unwrapExecCommand:function(){var a=this.options.ownerDocument;a.execCommand.orig&&(a.execCommand=a.execCommand.orig)},setupListener:function(a){if(!this.listeners[a]){switch(a){case"externalInteraction":this.attachDOMEvent(this.options.ownerDocument.body,"mousedown",this.handleBodyMousedown.bind(this),!0),this.attachDOMEvent(this.options.ownerDocument.body,"click",this.handleBodyClick.bind(this),!0),this.attachDOMEvent(this.options.ownerDocument.body,"focus",this.handleBodyFocus.bind(this),!0);break;case"blur":this.setupListener("externalInteraction");break;case"focus":this.setupListener("externalInteraction");break;case"editableInput":this.contentCache={},this.base.elements.forEach(function(a){this.contentCache[a.getAttribute("medium-editor-index")]=a.innerHTML},this),this.InputEventOnContenteditableSupported&&this.attachToEachElement("input",this.handleInput),this.InputEventOnContenteditableSupported||(this.setupListener("editableKeypress"),this.keypressUpdateInput=!0,this.attachDOMEvent(document,"selectionchange",this.handleDocumentSelectionChange.bind(this)),this.attachToExecCommand());break;case"editableClick":this.attachToEachElement("click",this.handleClick);break;case"editableBlur":this.attachToEachElement("blur",this.handleBlur);break;case"editableKeypress":this.attachToEachElement("keypress",this.handleKeypress);break;case"editableKeyup":this.attachToEachElement("keyup",this.handleKeyup);break;case"editableKeydown":this.attachToEachElement("keydown",this.handleKeydown);break;case"editableKeydownSpace":this.setupListener("editableKeydown");break;case"editableKeydownEnter":this.setupListener("editableKeydown");break;case"editableKeydownTab":this.setupListener("editableKeydown");break;case"editableKeydownDelete":this.setupListener("editableKeydown");break;case"editableMouseover":this.attachToEachElement("mouseover",this.handleMouseover);break;case"editableDrag":this.attachToEachElement("dragover",this.handleDragging),this.attachToEachElement("dragleave",this.handleDragging);break;case"editableDrop":this.attachToEachElement("drop",this.handleDrop);break;case"editablePaste":this.attachToEachElement("paste",this.handlePaste)}this.listeners[a]=!0}},attachToEachElement:function(a,b){this.eventsCache||(this.eventsCache=[]),this.base.elements.forEach(function(c){this.attachDOMEvent(c,a,b.bind(this))},this),this.eventsCache.push({name:a,handler:b})},cleanupElement:function(a){var b=a.getAttribute("medium-editor-index");b&&(this.detachAllEventsFromElement(a),this.contentCache&&delete this.contentCache[b])},focusElement:function(a){a.focus(),this.updateFocus(a,{target:a,type:"focus"})},updateFocus:function(c,d){var e,f=this.base.getFocusedElement();f&&"click"===d.type&&this.lastMousedownTarget&&(a.util.isDescendant(f,this.lastMousedownTarget,!0)||b(this.base.extensions,this.lastMousedownTarget))&&(e=f),e||this.base.elements.some(function(b){return!e&&a.util.isDescendant(b,c,!0)&&(e=b),!!e},this);var g=!a.util.isDescendant(f,c,!0)&&!b(this.base.extensions,c);e!==f&&(f&&g&&(f.removeAttribute("data-medium-focused"),this.triggerCustomEvent("blur",d,f)),e&&(e.setAttribute("data-medium-focused",!0),this.triggerCustomEvent("focus",d,e))),g&&this.triggerCustomEvent("externalInteraction",d)},updateInput:function(a,b){if(this.contentCache){var c=a.getAttribute("medium-editor-index"),d=a.innerHTML;d!==this.contentCache[c]&&this.triggerCustomEvent("editableInput",b,a),this.contentCache[c]=d}},handleDocumentSelectionChange:function(b){if(b.currentTarget&&b.currentTarget.activeElement){var c,d=b.currentTarget.activeElement;this.base.elements.some(function(b){return a.util.isDescendant(b,d,!0)?(c=b,!0):!1},this),c&&this.updateInput(c,{target:d,currentTarget:c})}},handleDocumentExecCommand:function(){var a=this.base.getFocusedElement();a&&this.updateInput(a,{target:a,currentTarget:a})},handleBodyClick:function(a){this.updateFocus(a.target,a)},handleBodyFocus:function(a){this.updateFocus(a.target,a)},handleBodyMousedown:function(a){this.lastMousedownTarget=a.target},handleInput:function(a){this.updateInput(a.currentTarget,a)},handleClick:function(a){this.triggerCustomEvent("editableClick",a,a.currentTarget)},handleBlur:function(a){this.triggerCustomEvent("editableBlur",a,a.currentTarget)},handleKeypress:function(a){if(this.triggerCustomEvent("editableKeypress",a,a.currentTarget),this.keypressUpdateInput){var b={target:a.target,currentTarget:a.currentTarget};setTimeout(function(){this.updateInput(b.currentTarget,b)}.bind(this),0)}},handleKeyup:function(a){
this.triggerCustomEvent("editableKeyup",a,a.currentTarget)},handleMouseover:function(a){this.triggerCustomEvent("editableMouseover",a,a.currentTarget)},handleDragging:function(a){this.triggerCustomEvent("editableDrag",a,a.currentTarget)},handleDrop:function(a){this.triggerCustomEvent("editableDrop",a,a.currentTarget)},handlePaste:function(a){this.triggerCustomEvent("editablePaste",{currentTarget:a.currentTarget,target:a.target},a.currentTarget)},handleKeydown:function(b){return this.triggerCustomEvent("editableKeydown",b,b.currentTarget),a.util.isKey(b,a.util.keyCode.SPACE)?this.triggerCustomEvent("editableKeydownSpace",b,b.currentTarget):a.util.isKey(b,a.util.keyCode.ENTER)||b.ctrlKey&&a.util.isKey(b,a.util.keyCode.M)?this.triggerCustomEvent("editableKeydownEnter",b,b.currentTarget):a.util.isKey(b,a.util.keyCode.TAB)?this.triggerCustomEvent("editableKeydownTab",b,b.currentTarget):a.util.isKey(b,[a.util.keyCode.DELETE,a.util.keyCode.BACKSPACE])?this.triggerCustomEvent("editableKeydownDelete",b,b.currentTarget):void 0}},a.Events=c}(),function(){var b=a.Extension.extend({action:void 0,aria:void 0,tagNames:void 0,style:void 0,useQueryState:void 0,contentDefault:void 0,contentFA:void 0,classList:void 0,attrs:void 0,constructor:function(c){b.isBuiltInButton(c)?a.Extension.call(this,this.defaults[c]):a.Extension.call(this,c)},init:function(){a.Extension.prototype.init.apply(this,arguments),this.button=this.createButton(),this.on(this.button,"click",this.handleClick.bind(this))},getButton:function(){return this.button},getAction:function(){return"function"==typeof this.action?this.action(this.base.options):this.action},getAria:function(){return"function"==typeof this.aria?this.aria(this.base.options):this.aria},getTagNames:function(){return"function"==typeof this.tagNames?this.tagNames(this.base.options):this.tagNames},createButton:function(){var a=this.document.createElement("button"),b=this.contentDefault,c=this.getAria(),d=this.getEditorOption("buttonLabels");return a.classList.add("medium-editor-action"),a.classList.add("medium-editor-action-"+this.name),this.classList&&this.classList.forEach(function(b){a.classList.add(b)}),a.setAttribute("data-action",this.getAction()),c&&(a.setAttribute("title",c),a.setAttribute("aria-label",c)),this.attrs&&Object.keys(this.attrs).forEach(function(b){a.setAttribute(b,this.attrs[b])},this),"fontawesome"===d&&this.contentFA&&(b=this.contentFA),a.innerHTML=b,a},handleClick:function(a){a.preventDefault(),a.stopPropagation();var b=this.getAction();b&&this.execAction(b)},isActive:function(){return this.button.classList.contains(this.getEditorOption("activeButtonClass"))},setInactive:function(){this.button.classList.remove(this.getEditorOption("activeButtonClass")),delete this.knownState},setActive:function(){this.button.classList.add(this.getEditorOption("activeButtonClass")),delete this.knownState},queryCommandState:function(){var a=null;return this.useQueryState&&(a=this.base.queryCommandState(this.getAction())),a},isAlreadyApplied:function(a){var b,c,d=!1,e=this.getTagNames();return this.knownState===!1||this.knownState===!0?this.knownState:(e&&e.length>0&&(d=-1!==e.indexOf(a.nodeName.toLowerCase())),!d&&this.style&&(b=this.style.value.split("|"),c=this.window.getComputedStyle(a,null).getPropertyValue(this.style.prop),b.forEach(function(a){this.knownState||(d=-1!==c.indexOf(a),(d||"text-decoration"!==this.style.prop)&&(this.knownState=d))},this)),d)}});b.isBuiltInButton=function(b){return"string"==typeof b&&a.extensions.button.prototype.defaults.hasOwnProperty(b)},a.extensions.button=b}(),function(){a.extensions.button.prototype.defaults={bold:{name:"bold",action:"bold",aria:"bold",tagNames:["b","strong"],style:{prop:"font-weight",value:"700|bold"},useQueryState:!0,contentDefault:"<b>B</b>",contentFA:'<i class="fa fa-bold"></i>'},italic:{name:"italic",action:"italic",aria:"italic",tagNames:["i","em"],style:{prop:"font-style",value:"italic"},useQueryState:!0,contentDefault:"<b><i>I</i></b>",contentFA:'<i class="fa fa-italic"></i>'},underline:{name:"underline",action:"underline",aria:"underline",tagNames:["u"],style:{prop:"text-decoration",value:"underline"},useQueryState:!0,contentDefault:"<b><u>U</u></b>",contentFA:'<i class="fa fa-underline"></i>'},strikethrough:{name:"strikethrough",action:"strikethrough",aria:"strike through",tagNames:["strike"],style:{prop:"text-decoration",value:"line-through"},useQueryState:!0,contentDefault:"<s>A</s>",contentFA:'<i class="fa fa-strikethrough"></i>'},superscript:{name:"superscript",action:"superscript",aria:"superscript",tagNames:["sup"],contentDefault:"<b>x<sup>1</sup></b>",contentFA:'<i class="fa fa-superscript"></i>'},subscript:{name:"subscript",action:"subscript",aria:"subscript",tagNames:["sub"],contentDefault:"<b>x<sub>1</sub></b>",contentFA:'<i class="fa fa-subscript"></i>'},image:{name:"image",action:"image",aria:"image",tagNames:["img"],contentDefault:"<b>image</b>",contentFA:'<i class="fa fa-picture-o"></i>'},orderedlist:{name:"orderedlist",action:"insertorderedlist",aria:"ordered list",tagNames:["ol"],useQueryState:!0,contentDefault:"<b>1.</b>",contentFA:'<i class="fa fa-list-ol"></i>'},unorderedlist:{name:"unorderedlist",action:"insertunorderedlist",aria:"unordered list",tagNames:["ul"],useQueryState:!0,contentDefault:"<b>&bull;</b>",contentFA:'<i class="fa fa-list-ul"></i>'},indent:{name:"indent",action:"indent",aria:"indent",tagNames:[],contentDefault:"<b>&rarr;</b>",contentFA:'<i class="fa fa-indent"></i>'},outdent:{name:"outdent",action:"outdent",aria:"outdent",tagNames:[],contentDefault:"<b>&larr;</b>",contentFA:'<i class="fa fa-outdent"></i>'},justifyCenter:{name:"justifyCenter",action:"justifyCenter",aria:"center justify",tagNames:[],style:{prop:"text-align",value:"center"},contentDefault:"<b>C</b>",contentFA:'<i class="fa fa-align-center"></i>'},justifyFull:{name:"justifyFull",action:"justifyFull",aria:"full justify",tagNames:[],style:{prop:"text-align",value:"justify"},contentDefault:"<b>J</b>",contentFA:'<i class="fa fa-align-justify"></i>'},justifyLeft:{name:"justifyLeft",action:"justifyLeft",aria:"left justify",tagNames:[],style:{prop:"text-align",value:"left"},contentDefault:"<b>L</b>",contentFA:'<i class="fa fa-align-left"></i>'},justifyRight:{name:"justifyRight",action:"justifyRight",aria:"right justify",tagNames:[],style:{prop:"text-align",value:"right"},contentDefault:"<b>R</b>",contentFA:'<i class="fa fa-align-right"></i>'},removeFormat:{name:"removeFormat",aria:"remove formatting",action:"removeFormat",contentDefault:"<b>X</b>",contentFA:'<i class="fa fa-eraser"></i>'},quote:{name:"quote",action:"append-blockquote",aria:"blockquote",tagNames:["blockquote"],contentDefault:"<b>&ldquo;</b>",contentFA:'<i class="fa fa-quote-right"></i>'},pre:{name:"pre",action:"append-pre",aria:"preformatted text",tagNames:["pre"],contentDefault:"<b>0101</b>",contentFA:'<i class="fa fa-code fa-lg"></i>'},h1:{name:"h1",action:"append-h1",aria:"header type one",tagNames:["h1"],contentDefault:"<b>H1</b>",contentFA:'<i class="fa fa-header"><sup>1</sup>'},h2:{name:"h2",action:"append-h2",aria:"header type two",tagNames:["h2"],contentDefault:"<b>H2</b>",contentFA:'<i class="fa fa-header"><sup>2</sup>'},h3:{name:"h3",action:"append-h3",aria:"header type three",tagNames:["h3"],contentDefault:"<b>H3</b>",contentFA:'<i class="fa fa-header"><sup>3</sup>'},h4:{name:"h4",action:"append-h4",aria:"header type four",tagNames:["h4"],contentDefault:"<b>H4</b>",contentFA:'<i class="fa fa-header"><sup>4</sup>'},h5:{name:"h5",action:"append-h5",aria:"header type five",tagNames:["h5"],contentDefault:"<b>H5</b>",contentFA:'<i class="fa fa-header"><sup>5</sup>'},h6:{name:"h6",action:"append-h6",aria:"header type six",tagNames:["h6"],contentDefault:"<b>H6</b>",contentFA:'<i class="fa fa-header"><sup>6</sup>'}}}(),function(){var b=a.extensions.button.extend({init:function(){a.extensions.button.prototype.init.apply(this,arguments)},formSaveLabel:"&#10003;",formCloseLabel:"&times;",activeClass:"medium-editor-toolbar-form-active",hasForm:!0,getForm:function(){},isDisplayed:function(){return this.hasForm?this.getForm().classList.contains(this.activeClass):!1},showForm:function(){this.hasForm&&this.getForm().classList.add(this.activeClass)},hideForm:function(){this.hasForm&&this.getForm().classList.remove(this.activeClass)},showToolbarDefaultActions:function(){var a=this.base.getExtensionByName("toolbar");a&&a.showToolbarDefaultActions()},hideToolbarDefaultActions:function(){var a=this.base.getExtensionByName("toolbar");a&&a.hideToolbarDefaultActions()},setToolbarPosition:function(){var a=this.base.getExtensionByName("toolbar");a&&a.setToolbarPosition()}});a.extensions.form=b}(),function(){var b=a.extensions.form.extend({customClassOption:null,customClassOptionText:"Button",linkValidation:!1,placeholderText:"Paste or type a link",targetCheckbox:!1,targetCheckboxText:"Open in new window",name:"anchor",action:"createLink",aria:"link",tagNames:["a"],contentDefault:"<b>#</b>",contentFA:'<i class="fa fa-link"></i>',init:function(){a.extensions.form.prototype.init.apply(this,arguments),this.subscribe("editableKeydown",this.handleKeydown.bind(this))},handleClick:function(b){b.preventDefault(),b.stopPropagation();var c=a.selection.getSelectionRange(this.document);return"a"===c.startContainer.nodeName.toLowerCase()||"a"===c.endContainer.nodeName.toLowerCase()||a.util.getClosestTag(a.selection.getSelectedParentElement(c),"a")?this.execAction("unlink"):(this.isDisplayed()||this.showForm(),!1)},handleKeydown:function(b){a.util.isKey(b,a.util.keyCode.K)&&a.util.isMetaCtrlKey(b)&&!b.shiftKey&&this.handleClick(b)},getForm:function(){return this.form||(this.form=this.createForm()),this.form},getTemplate:function(){var a=['<input type="text" class="medium-editor-toolbar-input" placeholder="',this.placeholderText,'">'];return a.push('<a href="#" class="medium-editor-toolbar-save">',"fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':this.formSaveLabel,"</a>"),a.push('<a href="#" class="medium-editor-toolbar-close">',"fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':this.formCloseLabel,"</a>"),this.targetCheckbox&&a.push('<div class="medium-editor-toolbar-form-row">','<input type="checkbox" class="medium-editor-toolbar-anchor-target">',"<label>",this.targetCheckboxText,"</label>","</div>"),this.customClassOption&&a.push('<div class="medium-editor-toolbar-form-row">','<input type="checkbox" class="medium-editor-toolbar-anchor-button">',"<label>",this.customClassOptionText,"</label>","</div>"),a.join("")},isDisplayed:function(){return a.extensions.form.prototype.isDisplayed.apply(this)},hideForm:function(){a.extensions.form.prototype.hideForm.apply(this),this.getInput().value=""},showForm:function(b){var c=this.getInput(),d=this.getAnchorTargetCheckbox(),e=this.getAnchorButtonCheckbox();if(b=b||{value:""},"string"==typeof b&&(b={value:b}),this.base.saveSelection(),this.hideToolbarDefaultActions(),a.extensions.form.prototype.showForm.apply(this),this.setToolbarPosition(),c.value=b.value,c.focus(),d&&(d.checked="_blank"===b.target),e){var f=b.buttonClass?b.buttonClass.split(" "):[];e.checked=-1!==f.indexOf(this.customClassOption)}},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},getFormOpts:function(){var a=this.getAnchorTargetCheckbox(),b=this.getAnchorButtonCheckbox(),c={value:this.getInput().value.trim()};return this.linkValidation&&(c.value=this.checkLinkFormat(c.value)),c.target="_self",a&&a.checked&&(c.target="_blank"),b&&b.checked&&(c.buttonClass=this.customClassOption),c},doFormSave:function(){var a=this.getFormOpts();this.completeFormSave(a)},completeFormSave:function(a){this.base.restoreSelection(),this.execAction(this.action,a),this.base.checkSelection()},checkLinkFormat:function(a){var b=/^([a-z]+:)?\/\/|^(mailto|tel|maps):/i,c=/^\+?\s?\(?(?:\d\s?\-?\)?){3,20}$/;return c.test(a)?"tel:"+a:(b.test(a)?"":"http://")+encodeURI(a)},doFormCancel:function(){this.base.restoreSelection(),this.base.checkSelection()},attachFormEvents:function(a){var b=a.querySelector(".medium-editor-toolbar-close"),c=a.querySelector(".medium-editor-toolbar-save"),d=a.querySelector(".medium-editor-toolbar-input");this.on(a,"click",this.handleFormClick.bind(this)),this.on(d,"keyup",this.handleTextboxKeyup.bind(this)),this.on(b,"click",this.handleCloseClick.bind(this)),this.on(c,"click",this.handleSaveClick.bind(this),!0)},createForm:function(){var a=this.document,b=a.createElement("div");return b.className="medium-editor-toolbar-form",b.id="medium-editor-toolbar-form-anchor-"+this.getEditorId(),b.innerHTML=this.getTemplate(),this.attachFormEvents(b),b},getInput:function(){return this.getForm().querySelector("input.medium-editor-toolbar-input")},getAnchorTargetCheckbox:function(){return this.getForm().querySelector(".medium-editor-toolbar-anchor-target")},getAnchorButtonCheckbox:function(){return this.getForm().querySelector(".medium-editor-toolbar-anchor-button")},handleTextboxKeyup:function(b){return b.keyCode===a.util.keyCode.ENTER?(b.preventDefault(),void this.doFormSave()):void(b.keyCode===a.util.keyCode.ESCAPE&&(b.preventDefault(),this.doFormCancel()))},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.anchor=b}(),function(){var b=a.Extension.extend({name:"anchor-preview",hideDelay:500,previewValueSelector:"a",showWhenToolbarIsVisible:!1,showOnEmptyLinks:!0,init:function(){this.anchorPreview=this.createPreview(),this.getEditorOption("elementsContainer").appendChild(this.anchorPreview),this.attachToEditables()},getInteractionElements:function(){return this.getPreviewElement()},getPreviewElement:function(){return this.anchorPreview},createPreview:function(){var a=this.document.createElement("div");return a.id="medium-editor-anchor-preview-"+this.getEditorId(),a.className="medium-editor-anchor-preview",a.innerHTML=this.getTemplate(),this.on(a,"click",this.handleClick.bind(this)),a},getTemplate:function(){return'<div class="medium-editor-toolbar-anchor-preview" id="medium-editor-toolbar-anchor-preview">    <a class="medium-editor-toolbar-anchor-preview-inner"></a></div>'},destroy:function(){this.anchorPreview&&(this.anchorPreview.parentNode&&this.anchorPreview.parentNode.removeChild(this.anchorPreview),delete this.anchorPreview)},hidePreview:function(){this.anchorPreview.classList.remove("medium-editor-anchor-preview-active"),this.activeAnchor=null},showPreview:function(a){return this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")||a.getAttribute("data-disable-preview")?!0:(this.previewValueSelector&&(this.anchorPreview.querySelector(this.previewValueSelector).textContent=a.attributes.href.value,this.anchorPreview.querySelector(this.previewValueSelector).href=a.attributes.href.value),this.anchorPreview.classList.add("medium-toolbar-arrow-over"),this.anchorPreview.classList.remove("medium-toolbar-arrow-under"),this.anchorPreview.classList.contains("medium-editor-anchor-preview-active")||this.anchorPreview.classList.add("medium-editor-anchor-preview-active"),this.activeAnchor=a,this.positionPreview(),this.attachPreviewHandlers(),this)},positionPreview:function(a){a=a||this.activeAnchor;var b,c,d=this.anchorPreview.offsetHeight,e=a.getBoundingClientRect(),f=(e.left+e.right)/2,g=this.diffLeft,h=this.diffTop;b=this.anchorPreview.offsetWidth/2;var i=this.base.getExtensionByName("toolbar");i&&(g=i.diffLeft,h=i.diffTop),c=g-b,this.anchorPreview.style.top=Math.round(d+e.bottom-h+this.window.pageYOffset-this.anchorPreview.offsetHeight)+"px",this.anchorPreview.style.right="initial",b>f?(this.anchorPreview.style.left=c+b+"px",this.anchorPreview.style.right="initial"):this.window.innerWidth-f<b?(this.anchorPreview.style.left="auto",this.anchorPreview.style.right=0):(this.anchorPreview.style.left=c+f+"px",this.anchorPreview.style.right="initial")},attachToEditables:function(){this.subscribe("editableMouseover",this.handleEditableMouseover.bind(this)),this.subscribe("positionedToolbar",this.handlePositionedToolbar.bind(this))},handlePositionedToolbar:function(){this.showWhenToolbarIsVisible||this.hidePreview()},handleClick:function(a){var b=this.base.getExtensionByName("anchor"),c=this.activeAnchor;b&&c&&(a.preventDefault(),this.base.selectElement(this.activeAnchor),this.base.delay(function(){if(c){var a={value:c.attributes.href.value,target:c.getAttribute("target"),buttonClass:c.getAttribute("class")};b.showForm(a),c=null}}.bind(this))),this.hidePreview()},handleAnchorMouseout:function(){this.anchorToPreview=null,this.off(this.activeAnchor,"mouseout",this.instanceHandleAnchorMouseout),this.instanceHandleAnchorMouseout=null},handleEditableMouseover:function(b){var c=a.util.getClosestTag(b.target,"a");if(!1!==c){if(!this.showOnEmptyLinks&&(!/href=["']\S+["']/.test(c.outerHTML)||/href=["']#\S+["']/.test(c.outerHTML)))return!0;var d=this.base.getExtensionByName("toolbar");if(!this.showWhenToolbarIsVisible&&d&&d.isDisplayed&&d.isDisplayed())return!0;this.activeAnchor&&this.activeAnchor!==c&&this.detachPreviewHandlers(),this.anchorToPreview=c,this.instanceHandleAnchorMouseout=this.handleAnchorMouseout.bind(this),this.on(this.anchorToPreview,"mouseout",this.instanceHandleAnchorMouseout),this.base.delay(function(){this.anchorToPreview&&this.showPreview(this.anchorToPreview)}.bind(this))}},handlePreviewMouseover:function(){this.lastOver=(new Date).getTime(),this.hovering=!0},handlePreviewMouseout:function(a){a.relatedTarget&&/anchor-preview/.test(a.relatedTarget.className)||(this.hovering=!1)},updatePreview:function(){if(this.hovering)return!0;var a=(new Date).getTime()-this.lastOver;a>this.hideDelay&&this.detachPreviewHandlers()},detachPreviewHandlers:function(){clearInterval(this.intervalTimer),this.instanceHandlePreviewMouseover&&(this.off(this.anchorPreview,"mouseover",this.instanceHandlePreviewMouseover),this.off(this.anchorPreview,"mouseout",this.instanceHandlePreviewMouseout),this.activeAnchor&&(this.off(this.activeAnchor,"mouseover",this.instanceHandlePreviewMouseover),this.off(this.activeAnchor,"mouseout",this.instanceHandlePreviewMouseout))),this.hidePreview(),this.hovering=this.instanceHandlePreviewMouseover=this.instanceHandlePreviewMouseout=null},attachPreviewHandlers:function(){this.lastOver=(new Date).getTime(),this.hovering=!0,this.instanceHandlePreviewMouseover=this.handlePreviewMouseover.bind(this),this.instanceHandlePreviewMouseout=this.handlePreviewMouseout.bind(this),this.intervalTimer=setInterval(this.updatePreview.bind(this),200),this.on(this.anchorPreview,"mouseover",this.instanceHandlePreviewMouseover),this.on(this.anchorPreview,"mouseout",this.instanceHandlePreviewMouseout),this.on(this.activeAnchor,"mouseover",this.instanceHandlePreviewMouseover),this.on(this.activeAnchor,"mouseout",this.instanceHandlePreviewMouseout)}});a.extensions.anchorPreview=b}(),function(){function b(b){return!a.util.getClosestTag(b,"a")}var c,d,e,f;c=[" ","	","\n","\r"," "," "," "," "," ","\u2028","\u2029"],d="com|net|org|edu|gov|mil|aero|asia|biz|cat|coop|info|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|ja|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw",e="(((?:(https?://|ftps?://|nntp://)|www\\d{0,3}[.]|[a-z0-9.\\-]+[.]("+d+")\\/)\\S+(?:[^\\s`!\\[\\]{};:'\".,?«»“”‘’])))|(([a-z0-9\\-]+\\.)?[a-z0-9\\-]+\\.("+d+"))",f=new RegExp("^("+d+")$","i");var g=a.Extension.extend({init:function(){a.Extension.prototype.init.apply(this,arguments),this.disableEventHandling=!1,this.subscribe("editableKeypress",this.onKeypress.bind(this)),this.subscribe("editableBlur",this.onBlur.bind(this)),this.document.execCommand("AutoUrlDetect",!1,!1)},isLastInstance:function(){for(var a=0,b=0;b<this.window._mediumEditors.length;b++){var c=this.window._mediumEditors[b];null!==c&&void 0!==c.getExtensionByName("autoLink")&&a++}return 1===a},destroy:function(){this.document.queryCommandSupported("AutoUrlDetect")&&this.isLastInstance()&&this.document.execCommand("AutoUrlDetect",!1,!0)},onBlur:function(a,b){this.performLinking(b)},onKeypress:function(b){this.disableEventHandling||a.util.isKey(b,[a.util.keyCode.SPACE,a.util.keyCode.ENTER])&&(clearTimeout(this.performLinkingTimeout),this.performLinkingTimeout=setTimeout(function(){try{var a=this.base.exportSelection();this.performLinking(b.target)&&this.base.importSelection(a,!0)}catch(c){window.console&&window.console.error("Failed to perform linking",c),this.disableEventHandling=!0}}.bind(this),0))},performLinking:function(b){var c=a.util.splitByBlockElements(b),d=!1;0===c.length&&(c=[b]);for(var e=0;e<c.length;e++)d=this.removeObsoleteAutoLinkSpans(c[e])||d,d=this.performLinkingWithinElement(c[e])||d;return this.base.events.updateInput(b,{target:b,currentTarget:b}),d},removeObsoleteAutoLinkSpans:function(c){if(!c||3===c.nodeType)return!1;for(var d=c.querySelectorAll('span[data-auto-link="true"]'),e=!1,f=0;f<d.length;f++){var g=d[f].textContent;if(-1===g.indexOf("://")&&(g=a.util.ensureUrlHasProtocol(g)),d[f].getAttribute("data-href")!==g&&b(d[f])){e=!0;var h=g.replace(/\s+$/,"");if(d[f].getAttribute("data-href")===h){var i=g.length-h.length,j=a.util.splitOffDOMTree(d[f],this.splitTextBeforeEnd(d[f],i));d[f].parentNode.insertBefore(j,d[f].nextSibling)}else a.util.unwrap(d[f],this.document)}}return e},splitTextBeforeEnd:function(a,b){for(var c=this.document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1),d=!0;d;)d=null!==c.lastChild();for(var e,f,g;b>0&&null!==g;)e=c.currentNode,f=e.nodeValue,f.length>b?(g=e.splitText(f.length-b),b=0):(g=c.previousNode(),b-=f.length);return g},performLinkingWithinElement:function(b){for(var c=this.findLinkableText(b),d=!1,e=0;e<c.length;e++){var f=a.util.findOrCreateMatchingTextNodes(this.document,b,c[e]);this.shouldNotLink(f)||this.createAutoLink(f,c[e].href)}return d},shouldNotLink:function(b){for(var c=!1,d=0;d<b.length&&c===!1;d++)c=!!a.util.traverseUp(b[d],function(a){return"a"===a.nodeName.toLowerCase()||a.getAttribute&&"true"===a.getAttribute("data-auto-link")});return c},findLinkableText:function(a){for(var b=new RegExp(e,"gi"),d=a.textContent,g=null,h=[];null!==(g=b.exec(d));){var i=!0,j=g.index+g[0].length;i=!(0!==g.index&&-1===c.indexOf(d[g.index-1])||j!==d.length&&-1===c.indexOf(d[j])),i=i&&(-1!==g[0].indexOf("/")||f.test(g[0].split(".").pop().split("?").shift())),i&&h.push({href:g[0],start:g.index,end:j})}return h},createAutoLink:function(b,c){c=a.util.ensureUrlHasProtocol(c);var d=a.util.createLink(this.document,b,c,this.getEditorOption("targetBlank")?"_blank":null),e=this.document.createElement("span");for(e.setAttribute("data-auto-link","true"),e.setAttribute("data-href",c),d.insertBefore(e,d.firstChild);d.childNodes.length>1;)e.appendChild(d.childNodes[1])}});a.extensions.autoLink=g}(),function(){function b(b){var d=a.util.getContainerEditorElement(b),e=Array.prototype.slice.call(d.parentElement.querySelectorAll("."+c));e.forEach(function(a){a.classList.remove(c)})}var c="medium-editor-dragover",d=a.Extension.extend({name:"fileDragging",allowedTypes:["image"],init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableDrag",this.handleDrag.bind(this)),this.subscribe("editableDrop",this.handleDrop.bind(this))},handleDrag:function(a){a.preventDefault(),a.dataTransfer.dropEffect="copy";var d=a.target.classList?a.target:a.target.parentElement;b(d),"dragover"===a.type&&d.classList.add(c)},handleDrop:function(a){a.preventDefault(),a.stopPropagation(),this.base.selectElement(a.target);var c=this.base.exportSelection();c.start=c.end,this.base.importSelection(c),a.dataTransfer.files&&Array.prototype.slice.call(a.dataTransfer.files).forEach(function(a){this.isAllowedFile(a)&&a.type.match("image")&&this.insertImageFile(a)},this),b(a.target)},isAllowedFile:function(a){return this.allowedTypes.some(function(b){return!!a.type.match(b)})},insertImageFile:function(b){if("function"==typeof FileReader){var c=new FileReader;c.readAsDataURL(b),c.addEventListener("load",function(b){var c=this.document.createElement("img");c.src=b.target.result,a.util.insertHTMLCommand(this.document,c.outerHTML)}.bind(this))}}});a.extensions.fileDragging=d}(),function(){var b=a.Extension.extend({name:"keyboard-commands",commands:[{command:"bold",key:"B",meta:!0,shift:!1,alt:!1},{command:"italic",key:"I",meta:!0,shift:!1,alt:!1},{command:"underline",key:"U",meta:!0,shift:!1,alt:!1}],init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableKeydown",this.handleKeydown.bind(this)),this.keys={},this.commands.forEach(function(a){var b=a.key.charCodeAt(0);this.keys[b]||(this.keys[b]=[]),this.keys[b].push(a)},this)},handleKeydown:function(b){var c=a.util.getKeyCode(b);if(this.keys[c]){var d=a.util.isMetaCtrlKey(b),e=!!b.shiftKey,f=!!b.altKey;this.keys[c].forEach(function(a){a.meta!==d||a.shift!==e||a.alt!==f&&void 0!==a.alt||(b.preventDefault(),b.stopPropagation(),"function"==typeof a.command?a.command.apply(this):!1!==a.command&&this.execAction(a.command))},this)}}});a.extensions.keyboardCommands=b}(),function(){var b=a.extensions.form.extend({name:"fontname",action:"fontName",aria:"change font name",contentDefault:"&#xB1;",contentFA:'<i class="fa fa-font"></i>',fonts:["","Arial","Verdana","Times New Roman"],init:function(){a.extensions.form.prototype.init.apply(this,arguments)},handleClick:function(a){if(a.preventDefault(),a.stopPropagation(),!this.isDisplayed()){var b=this.document.queryCommandValue("fontName")+"";this.showForm(b)}return!1},getForm:function(){return this.form||(this.form=this.createForm()),this.form},isDisplayed:function(){return"block"===this.getForm().style.display},hideForm:function(){this.getForm().style.display="none",this.getSelect().value=""},showForm:function(a){var b=this.getSelect();this.base.saveSelection(),this.hideToolbarDefaultActions(),this.getForm().style.display="block",this.setToolbarPosition(),b.value=a||"",b.focus()},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},doFormSave:function(){this.base.restoreSelection(),this.base.checkSelection()},doFormCancel:function(){this.base.restoreSelection(),this.clearFontName(),this.base.checkSelection()},createForm:function(){var a,b=this.document,c=b.createElement("div"),d=b.createElement("select"),e=b.createElement("a"),f=b.createElement("a");c.className="medium-editor-toolbar-form",c.id="medium-editor-toolbar-form-fontname-"+this.getEditorId(),this.on(c,"click",this.handleFormClick.bind(this));for(var g=0;g<this.fonts.length;g++)a=b.createElement("option"),a.innerHTML=this.fonts[g],a.value=this.fonts[g],d.appendChild(a);return d.className="medium-editor-toolbar-select",c.appendChild(d),this.on(d,"change",this.handleFontChange.bind(this)),f.setAttribute("href","#"),f.className="medium-editor-toobar-save",f.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':"&#10003;",c.appendChild(f),this.on(f,"click",this.handleSaveClick.bind(this),!0),e.setAttribute("href","#"),e.className="medium-editor-toobar-close",e.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':"&times;",c.appendChild(e),this.on(e,"click",this.handleCloseClick.bind(this)),c},getSelect:function(){return this.getForm().querySelector("select.medium-editor-toolbar-select")},clearFontName:function(){a.selection.getSelectedElements(this.document).forEach(function(a){"font"===a.nodeName.toLowerCase()&&a.hasAttribute("face")&&a.removeAttribute("face")})},handleFontChange:function(){var a=this.getSelect().value;""===a?this.clearFontName():this.execAction("fontName",{value:a})},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.fontName=b}(),function(){var b=a.extensions.form.extend({name:"fontsize",action:"fontSize",aria:"increase/decrease font size",contentDefault:"&#xB1;",contentFA:'<i class="fa fa-text-height"></i>',init:function(){a.extensions.form.prototype.init.apply(this,arguments)},handleClick:function(a){if(a.preventDefault(),a.stopPropagation(),!this.isDisplayed()){var b=this.document.queryCommandValue("fontSize")+"";this.showForm(b)}return!1},getForm:function(){return this.form||(this.form=this.createForm()),this.form},isDisplayed:function(){return"block"===this.getForm().style.display},hideForm:function(){this.getForm().style.display="none",this.getInput().value=""},showForm:function(a){var b=this.getInput();this.base.saveSelection(),this.hideToolbarDefaultActions(),this.getForm().style.display="block",this.setToolbarPosition(),b.value=a||"",b.focus()},destroy:function(){return this.form?(this.form.parentNode&&this.form.parentNode.removeChild(this.form),void delete this.form):!1},doFormSave:function(){this.base.restoreSelection(),this.base.checkSelection()},doFormCancel:function(){this.base.restoreSelection(),this.clearFontSize(),this.base.checkSelection()},createForm:function(){var a=this.document,b=a.createElement("div"),c=a.createElement("input"),d=a.createElement("a"),e=a.createElement("a");return b.className="medium-editor-toolbar-form",b.id="medium-editor-toolbar-form-fontsize-"+this.getEditorId(),this.on(b,"click",this.handleFormClick.bind(this)),c.setAttribute("type","range"),c.setAttribute("min","1"),c.setAttribute("max","7"),c.className="medium-editor-toolbar-input",b.appendChild(c),this.on(c,"change",this.handleSliderChange.bind(this)),e.setAttribute("href","#"),e.className="medium-editor-toobar-save",e.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-check"></i>':"&#10003;",b.appendChild(e),this.on(e,"click",this.handleSaveClick.bind(this),!0),d.setAttribute("href","#"),d.className="medium-editor-toobar-close",d.innerHTML="fontawesome"===this.getEditorOption("buttonLabels")?'<i class="fa fa-times"></i>':"&times;",b.appendChild(d),this.on(d,"click",this.handleCloseClick.bind(this)),b},getInput:function(){return this.getForm().querySelector("input.medium-editor-toolbar-input")},clearFontSize:function(){a.selection.getSelectedElements(this.document).forEach(function(a){"font"===a.nodeName.toLowerCase()&&a.hasAttribute("size")&&a.removeAttribute("size")})},handleSliderChange:function(){var a=this.getInput().value;"4"===a?this.clearFontSize():this.execAction("fontSize",{value:a})},handleFormClick:function(a){a.stopPropagation()},handleSaveClick:function(a){a.preventDefault(),this.doFormSave()},handleCloseClick:function(a){a.preventDefault(),this.doFormCancel()}});a.extensions.fontSize=b}(),function(){function b(){return[[new RegExp(/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g),""],[new RegExp(/<!--StartFragment-->|<!--EndFragment-->/g),""],[new RegExp(/<br>$/i),""],[new RegExp(/<[^>]*docs-internal-guid[^>]*>/gi),""],[new RegExp(/<\/b>(<br[^>]*>)?$/gi),""],[new RegExp(/<span class="Apple-converted-space">\s+<\/span>/g)," "],[new RegExp(/<br class="Apple-interchange-newline">/g),"<br>"],[new RegExp(/<span[^>]*(font-style:italic;font-weight:bold|font-weight:bold;font-style:italic)[^>]*>/gi),'<span class="replace-with italic bold">'],[new RegExp(/<span[^>]*font-style:italic[^>]*>/gi),'<span class="replace-with italic">'],[new RegExp(/<span[^>]*font-weight:bold[^>]*>/gi),'<span class="replace-with bold">'],[new RegExp(/&lt;(\/?)(i|b|a)&gt;/gi),"<$1$2>"],[new RegExp(/&lt;a(?:(?!href).)+href=(?:&quot;|&rdquo;|&ldquo;|"|“|”)(((?!&quot;|&rdquo;|&ldquo;|"|“|”).)*)(?:&quot;|&rdquo;|&ldquo;|"|“|”)(?:(?!&gt;).)*&gt;/gi),'<a href="$1">'],[new RegExp(/<\/p>\n+/gi),"</p>"],[new RegExp(/\n+<p/gi),"<p"],[new RegExp(/<\/?o:[a-z]*>/gi),""],[new RegExp(/<!\[if !supportLists\]>(((?!<!).)*)<!\[endif]\>/gi),"$1"]];
}function c(a,b,c){var d=a.clipboardData||b.clipboardData||c.dataTransfer,e={};if(!d)return e;if(d.getData){var f=d.getData("Text");f&&f.length>0&&(e["text/plain"]=f)}if(d.types)for(var g=0;g<d.types.length;g++){var h=d.types[g];e[h]=d.getData(h)}return e}var d="%ME_PASTEBIN%",e=null,f=null,g=function(a){a.stopPropagation()},h=a.Extension.extend({forcePlainText:!0,cleanPastedHTML:!1,preCleanReplacements:[],cleanReplacements:[],cleanAttrs:["class","style","dir"],cleanTags:["meta"],init:function(){a.Extension.prototype.init.apply(this,arguments),(this.forcePlainText||this.cleanPastedHTML)&&(this.subscribe("editablePaste",this.handlePaste.bind(this)),this.subscribe("editableKeydown",this.handleKeydown.bind(this)))},destroy:function(){(this.forcePlainText||this.cleanPastedHTML)&&this.removePasteBin()},handlePaste:function(a,b){if(!a.defaultPrevented){var d=c(a,this.window,this.document),e=d["text/html"],f=d["text/plain"];this.window.clipboardData&&void 0===a.clipboardData&&!e&&(e=f),(e||f)&&(a.preventDefault(),this.doPaste(e,f,b))}},doPaste:function(b,c,d){var e,f,g="";if(this.cleanPastedHTML&&b)return this.cleanPaste(b);if(this.getEditorOption("disableReturn")||d&&d.getAttribute("data-disable-return"))g=a.util.htmlEntities(c);else if(e=c.split(/[\r\n]+/g),e.length>1)for(f=0;f<e.length;f+=1)""!==e[f]&&(g+="<p>"+a.util.htmlEntities(e[f])+"</p>");else g=a.util.htmlEntities(e[0]);a.util.insertHTMLCommand(this.document,g)},handlePasteBinPaste:function(a){if(a.defaultPrevented)return void this.removePasteBin();var b=c(a,this.window,this.document),d=b["text/html"],e=b["text/plain"],g=f;return!this.cleanPastedHTML||d?(a.preventDefault(),this.removePasteBin(),this.doPaste(d,e,g),void this.trigger("editablePaste",{currentTarget:g,target:g},g)):void setTimeout(function(){this.cleanPastedHTML&&(d=this.getPasteBinHtml()),this.removePasteBin(),this.doPaste(d,e,g),this.trigger("editablePaste",{currentTarget:g,target:g},g)}.bind(this),0)},handleKeydown:function(b,c){a.util.isKey(b,a.util.keyCode.V)&&a.util.isMetaCtrlKey(b)&&(b.stopImmediatePropagation(),this.removePasteBin(),this.createPasteBin(c))},createPasteBin:function(b){var c,h=a.selection.getSelectionRange(this.document),i=this.window.pageYOffset;f=b,h&&(c=h.getClientRects(),i+=c.length?c[0].top:h.startContainer.getBoundingClientRect().top),e=h;var j=this.document.createElement("div");j.id=this.pasteBinId="medium-editor-pastebin-"+ +Date.now(),j.setAttribute("style","border: 1px red solid; position: absolute; top: "+i+"px; width: 10px; height: 10px; overflow: hidden; opacity: 0"),j.setAttribute("contentEditable",!0),j.innerHTML=d,this.document.body.appendChild(j),this.on(j,"focus",g),this.on(j,"focusin",g),this.on(j,"focusout",g),j.focus(),a.selection.selectNode(j,this.document),this.boundHandlePaste||(this.boundHandlePaste=this.handlePasteBinPaste.bind(this)),this.on(j,"paste",this.boundHandlePaste)},removePasteBin:function(){null!==e&&(a.selection.selectRange(this.document,e),e=null),null!==f&&(f=null);var b=this.getPasteBin();b&&b&&(this.off(b,"focus",g),this.off(b,"focusin",g),this.off(b,"focusout",g),this.off(b,"paste",this.boundHandlePaste),b.parentElement.removeChild(b))},getPasteBin:function(){return this.document.getElementById(this.pasteBinId)},getPasteBinHtml:function(){var a=this.getPasteBin();if(!a)return!1;if(a.firstChild&&"mcepastebin"===a.firstChild.id)return!1;var b=a.innerHTML;return b&&b!==d?b:!1},cleanPaste:function(a){var c,d,e,f,g=/<p|<br|<div/.test(a),h=[].concat(this.preCleanReplacements||[],b(),this.cleanReplacements||[]);for(c=0;c<h.length;c+=1)a=a.replace(h[c][0],h[c][1]);if(!g)return this.pasteHTML(a);for(e=this.document.createElement("div"),e.innerHTML="<p>"+a.split("<br><br>").join("</p><p>")+"</p>",d=e.querySelectorAll("a,p,div,br"),c=0;c<d.length;c+=1)switch(f=d[c],f.innerHTML=f.innerHTML.replace(/\n/gi," "),f.nodeName.toLowerCase()){case"p":case"div":this.filterCommonBlocks(f);break;case"br":this.filterLineBreak(f)}this.pasteHTML(e.innerHTML)},pasteHTML:function(b,c){c=a.util.defaults({},c,{cleanAttrs:this.cleanAttrs,cleanTags:this.cleanTags});var d,e,f,g,h=this.document.createDocumentFragment();for(h.appendChild(this.document.createElement("body")),g=h.querySelector("body"),g.innerHTML=b,this.cleanupSpans(g),d=g.querySelectorAll("*"),f=0;f<d.length;f+=1)e=d[f],"a"===e.nodeName.toLowerCase()&&this.getEditorOption("targetBlank")&&a.util.setTargetBlank(e),a.util.cleanupAttrs(e,c.cleanAttrs),a.util.cleanupTags(e,c.cleanTags);a.util.insertHTMLCommand(this.document,g.innerHTML.replace(/&nbsp;/g," "))},isCommonBlock:function(a){return a&&("p"===a.nodeName.toLowerCase()||"div"===a.nodeName.toLowerCase())},filterCommonBlocks:function(a){/^\s*$/.test(a.textContent)&&a.parentNode&&a.parentNode.removeChild(a)},filterLineBreak:function(a){this.isCommonBlock(a.previousElementSibling)?this.removeWithParent(a):!this.isCommonBlock(a.parentNode)||a.parentNode.firstChild!==a&&a.parentNode.lastChild!==a?a.parentNode&&1===a.parentNode.childElementCount&&""===a.parentNode.textContent&&this.removeWithParent(a):this.removeWithParent(a)},removeWithParent:function(a){a&&a.parentNode&&(a.parentNode.parentNode&&1===a.parentNode.childElementCount?a.parentNode.parentNode.removeChild(a.parentNode):a.parentNode.removeChild(a))},cleanupSpans:function(b){var c,d,e,f=b.querySelectorAll(".replace-with"),g=function(a){return a&&"#text"!==a.nodeName&&"false"===a.getAttribute("contenteditable")};for(c=0;c<f.length;c+=1)d=f[c],e=this.document.createElement(d.classList.contains("bold")?"b":"i"),d.classList.contains("bold")&&d.classList.contains("italic")?e.innerHTML="<i>"+d.innerHTML+"</i>":e.innerHTML=d.innerHTML,d.parentNode.replaceChild(e,d);for(f=b.querySelectorAll("span"),c=0;c<f.length;c+=1){if(d=f[c],a.util.traverseUp(d,g))return!1;a.util.unwrap(d,this.document)}}});a.extensions.paste=h}(),function(){var b=a.Extension.extend({name:"placeholder",text:"Type your text",hideOnClick:!0,init:function(){a.Extension.prototype.init.apply(this,arguments),this.initPlaceholders(),this.attachEventHandlers()},initPlaceholders:function(){this.getEditorElements().forEach(function(a){a.getAttribute("data-placeholder")||a.setAttribute("data-placeholder",this.text),this.updatePlaceholder(a)},this)},destroy:function(){this.getEditorElements().forEach(function(a){a.getAttribute("data-placeholder")===this.text&&a.removeAttribute("data-placeholder")},this)},showPlaceholder:function(a){a&&a.classList.add("medium-editor-placeholder")},hidePlaceholder:function(a){a&&a.classList.remove("medium-editor-placeholder")},updatePlaceholder:function(a,b){return a.querySelector("img, blockquote, ul, ol")||""!==a.textContent.replace(/^\s+|\s+$/g,"")?this.hidePlaceholder(a):void(b||this.showPlaceholder(a))},attachEventHandlers:function(){this.hideOnClick&&this.subscribe("focus",this.handleFocus.bind(this)),this.subscribe("editableInput",this.handleInput.bind(this)),this.subscribe("blur",this.handleBlur.bind(this))},handleInput:function(a,b){var c=this.hideOnClick&&b===this.base.getFocusedElement();this.updatePlaceholder(b,c)},handleFocus:function(a,b){this.hidePlaceholder(b)},handleBlur:function(a,b){this.updatePlaceholder(b)}});a.extensions.placeholder=b}(),function(){var b=a.Extension.extend({name:"toolbar",align:"center",allowMultiParagraphSelection:!0,buttons:["bold","italic","underline","anchor","h2","h3","quote"],diffLeft:0,diffTop:-10,firstButtonClass:"medium-editor-button-first",lastButtonClass:"medium-editor-button-last",standardizeSelectionStart:!1,"static":!1,sticky:!1,stickyTopOffset:0,updateOnEmptySelection:!1,relativeContainer:null,init:function(){a.Extension.prototype.init.apply(this,arguments),this.initThrottledMethods(),this.relativeContainer?this.relativeContainer.appendChild(this.getToolbarElement()):this.getEditorOption("elementsContainer").appendChild(this.getToolbarElement())},forEachExtension:function(a,b){return this.base.extensions.forEach(function(c){return c!==this?a.apply(b||this,arguments):void 0},this)},createToolbar:function(){var a=this.document.createElement("div");return a.id="medium-editor-toolbar-"+this.getEditorId(),a.className="medium-editor-toolbar",this["static"]?a.className+=" static-toolbar":this.relativeContainer?a.className+=" medium-editor-relative-toolbar":a.className+=" medium-editor-stalker-toolbar",a.appendChild(this.createToolbarButtons()),this.forEachExtension(function(b){b.hasForm&&a.appendChild(b.getForm())}),this.attachEventHandlers(),a},createToolbarButtons:function(){var b,c,d,e,f,g,h=this.document.createElement("ul");return h.id="medium-editor-toolbar-actions"+this.getEditorId(),h.className="medium-editor-toolbar-actions",h.style.display="block",this.buttons.forEach(function(d){"string"==typeof d?(f=d,g=null):(f=d.name,g=d),e=this.base.addBuiltInExtension(f,g),e&&"function"==typeof e.getButton&&(c=e.getButton(this.base),b=this.document.createElement("li"),a.util.isElement(c)?b.appendChild(c):b.innerHTML=c,h.appendChild(b))},this),d=h.querySelectorAll("button"),d.length>0&&(d[0].classList.add(this.firstButtonClass),d[d.length-1].classList.add(this.lastButtonClass)),h},destroy:function(){this.toolbar&&(this.toolbar.parentNode&&this.toolbar.parentNode.removeChild(this.toolbar),delete this.toolbar)},getInteractionElements:function(){return this.getToolbarElement()},getToolbarElement:function(){return this.toolbar||(this.toolbar=this.createToolbar()),this.toolbar},getToolbarActionsElement:function(){return this.getToolbarElement().querySelector(".medium-editor-toolbar-actions")},initThrottledMethods:function(){this.throttledPositionToolbar=a.util.throttle(function(){this.base.isActive&&this.positionToolbarIfShown()}.bind(this))},attachEventHandlers:function(){this.subscribe("blur",this.handleBlur.bind(this)),this.subscribe("focus",this.handleFocus.bind(this)),this.subscribe("editableClick",this.handleEditableClick.bind(this)),this.subscribe("editableKeyup",this.handleEditableKeyup.bind(this)),this.on(this.document.documentElement,"mouseup",this.handleDocumentMouseup.bind(this)),this["static"]&&this.sticky&&this.on(this.window,"scroll",this.handleWindowScroll.bind(this),!0),this.on(this.window,"resize",this.handleWindowResize.bind(this))},handleWindowScroll:function(){this.positionToolbarIfShown()},handleWindowResize:function(){this.throttledPositionToolbar()},handleDocumentMouseup:function(b){return b&&b.target&&a.util.isDescendant(this.getToolbarElement(),b.target)?!1:void this.checkState()},handleEditableClick:function(){setTimeout(function(){this.checkState()}.bind(this),0)},handleEditableKeyup:function(){this.checkState()},handleBlur:function(){clearTimeout(this.hideTimeout),clearTimeout(this.delayShowTimeout),this.hideTimeout=setTimeout(function(){this.hideToolbar()}.bind(this),1)},handleFocus:function(){this.checkState()},isDisplayed:function(){return this.getToolbarElement().classList.contains("medium-editor-toolbar-active")},showToolbar:function(){clearTimeout(this.hideTimeout),this.isDisplayed()||(this.getToolbarElement().classList.add("medium-editor-toolbar-active"),this.trigger("showToolbar",{},this.base.getFocusedElement()))},hideToolbar:function(){this.isDisplayed()&&(this.getToolbarElement().classList.remove("medium-editor-toolbar-active"),this.trigger("hideToolbar",{},this.base.getFocusedElement()))},isToolbarDefaultActionsDisplayed:function(){return"block"===this.getToolbarActionsElement().style.display},hideToolbarDefaultActions:function(){this.isToolbarDefaultActionsDisplayed()&&(this.getToolbarActionsElement().style.display="none")},showToolbarDefaultActions:function(){this.hideExtensionForms(),this.isToolbarDefaultActionsDisplayed()||(this.getToolbarActionsElement().style.display="block"),this.delayShowTimeout=this.base.delay(function(){this.showToolbar()}.bind(this))},hideExtensionForms:function(){this.forEachExtension(function(a){a.hasForm&&a.isDisplayed()&&a.hideForm()})},multipleBlockElementsSelected:function(){var b=/<[^\/>][^>]*><\/[^>]+>/gim,c=new RegExp("<("+a.util.blockContainerElementNames.join("|")+")[^>]*>","g"),d=a.selection.getSelectionHtml(this.document).replace(b,""),e=d.match(c);return!!e&&e.length>1},modifySelection:function(){var b=this.window.getSelection(),c=b.getRangeAt(0);if(this.standardizeSelectionStart&&c.startContainer.nodeValue&&c.startOffset===c.startContainer.nodeValue.length){var d=a.util.findAdjacentTextNodeWithContent(a.selection.getSelectionElement(this.window),c.startContainer,this.document);if(d){for(var e=0;0===d.nodeValue.substr(e,1).trim().length;)e+=1;c=a.selection.select(this.document,d,e,c.endContainer,c.endOffset)}}},checkState:function(){if(!this.base.preventSelectionUpdates){if(!this.base.getFocusedElement()||a.selection.selectionInContentEditableFalse(this.window))return this.hideToolbar();var b=a.selection.getSelectionElement(this.window);return!b||-1===this.getEditorElements().indexOf(b)||b.getAttribute("data-disable-toolbar")?this.hideToolbar():this.updateOnEmptySelection&&this["static"]?this.showAndUpdateToolbar():!a.selection.selectionContainsContent(this.document)||this.allowMultiParagraphSelection===!1&&this.multipleBlockElementsSelected()?this.hideToolbar():void this.showAndUpdateToolbar()}},showAndUpdateToolbar:function(){this.modifySelection(),this.setToolbarButtonStates(),this.trigger("positionToolbar",{},this.base.getFocusedElement()),this.showToolbarDefaultActions(),this.setToolbarPosition()},setToolbarButtonStates:function(){this.forEachExtension(function(a){"function"==typeof a.isActive&&"function"==typeof a.setInactive&&a.setInactive()}),this.checkActiveButtons()},checkActiveButtons:function(){var b,c=[],d=null,e=a.selection.getSelectionRange(this.document),f=function(a){"function"==typeof a.checkState?a.checkState(b):"function"==typeof a.isActive&&"function"==typeof a.isAlreadyApplied&&"function"==typeof a.setActive&&!a.isActive()&&a.isAlreadyApplied(b)&&a.setActive()};if(e&&(this.forEachExtension(function(a){return"function"==typeof a.queryCommandState&&(d=a.queryCommandState(),null!==d)?void(d&&"function"==typeof a.setActive&&a.setActive()):void c.push(a)}),b=a.selection.getSelectedParentElement(e),this.getEditorElements().some(function(c){return a.util.isDescendant(c,b,!0)})))for(;b&&(c.forEach(f),!a.util.isMediumEditorElement(b));)b=b.parentNode},positionToolbarIfShown:function(){this.isDisplayed()&&this.setToolbarPosition()},setToolbarPosition:function(){var a=this.base.getFocusedElement(),b=this.window.getSelection();return a?void(!this["static"]&&b.isCollapsed||(this.showToolbar(),this.relativeContainer||(this["static"]?this.positionStaticToolbar(a):this.positionToolbar(b)),this.trigger("positionedToolbar",{},this.base.getFocusedElement()))):this},positionStaticToolbar:function(a){this.getToolbarElement().style.left="0";var b,c=this.document.documentElement&&this.document.documentElement.scrollTop||this.document.body.scrollTop,d=this.window.innerWidth,e=this.getToolbarElement(),f=a.getBoundingClientRect(),g=f.top+c,h=f.left+f.width/2,i=e.offsetHeight,j=e.offsetWidth,k=j/2;switch(this.sticky?c>g+a.offsetHeight-i-this.stickyTopOffset?(e.style.top=g+a.offsetHeight-i+"px",e.classList.remove("medium-editor-sticky-toolbar")):c>g-i-this.stickyTopOffset?(e.classList.add("medium-editor-sticky-toolbar"),e.style.top=this.stickyTopOffset+"px"):(e.classList.remove("medium-editor-sticky-toolbar"),e.style.top=g-i+"px"):e.style.top=g-i+"px",this.align){case"left":b=f.left;break;case"right":b=f.right-j;break;case"center":b=h-k}0>b?b=0:b+j>d&&(b=d-Math.ceil(j)-1),e.style.left=b+"px"},positionToolbar:function(a){this.getToolbarElement().style.left="0",this.getToolbarElement().style.right="initial";var b=a.getRangeAt(0),c=b.getBoundingClientRect();(!c||0===c.height&&0===c.width&&b.startContainer===b.endContainer)&&(c=1===b.startContainer.nodeType&&b.startContainer.querySelector("img")?b.startContainer.querySelector("img").getBoundingClientRect():b.startContainer.getBoundingClientRect());var d=this.window.innerWidth,e=(c.left+c.right)/2,f=this.getToolbarElement(),g=f.offsetHeight,h=f.offsetWidth,i=h/2,j=50,k=this.diffLeft-i;c.top<j?(f.classList.add("medium-toolbar-arrow-over"),f.classList.remove("medium-toolbar-arrow-under"),f.style.top=j+c.bottom-this.diffTop+this.window.pageYOffset-g+"px"):(f.classList.add("medium-toolbar-arrow-under"),f.classList.remove("medium-toolbar-arrow-over"),f.style.top=c.top+this.diffTop+this.window.pageYOffset-g+"px"),i>e?(f.style.left=k+i+"px",f.style.right="initial"):i>d-e?(f.style.left="auto",f.style.right=0):(f.style.left=k+e+"px",f.style.right="initial")}});a.extensions.toolbar=b}(),function(){var b=a.Extension.extend({init:function(){a.Extension.prototype.init.apply(this,arguments),this.subscribe("editableDrag",this.handleDrag.bind(this)),this.subscribe("editableDrop",this.handleDrop.bind(this))},handleDrag:function(a){var b="medium-editor-dragover";a.preventDefault(),a.dataTransfer.dropEffect="copy","dragover"===a.type?a.target.classList.add(b):"dragleave"===a.type&&a.target.classList.remove(b)},handleDrop:function(b){var c,d="medium-editor-dragover";b.preventDefault(),b.stopPropagation(),b.dataTransfer.files&&(c=Array.prototype.slice.call(b.dataTransfer.files,0),c.some(function(b){if(b.type.match("image")){var c,d;c=new FileReader,c.readAsDataURL(b),d="medium-img-"+ +new Date,a.util.insertHTMLCommand(this.document,'<img class="medium-editor-image-loading" id="'+d+'" />'),c.onload=function(){var a=this.document.getElementById(d);a&&(a.removeAttribute("id"),a.removeAttribute("class"),a.src=c.result)}.bind(this)}}.bind(this))),b.target.classList.remove(d)}});a.extensions.imageDragging=b}(),function(){function b(b){var c=a.selection.getSelectionStart(this.options.ownerDocument),d=c.textContent,e=a.selection.getCaretOffsets(c);(void 0===d[e.left-1]||""===d[e.left-1].trim()||void 0!==d[e.left]&&""===d[e.left].trim())&&b.preventDefault()}function c(b,c){if(this.options.disableReturn||c.getAttribute("data-disable-return"))b.preventDefault();else if(this.options.disableDoubleReturn||c.getAttribute("data-disable-double-return")){var d=a.selection.getSelectionStart(this.options.ownerDocument);(d&&""===d.textContent.trim()&&"li"!==d.nodeName.toLowerCase()||d.previousElementSibling&&"br"!==d.previousElementSibling.nodeName.toLowerCase()&&""===d.previousElementSibling.textContent.trim())&&b.preventDefault()}}function d(b){var c=a.selection.getSelectionStart(this.options.ownerDocument),d=c&&c.nodeName.toLowerCase();"pre"===d&&(b.preventDefault(),a.util.insertHTMLCommand(this.options.ownerDocument,"    ")),a.util.isListItem(c)&&(b.preventDefault(),b.shiftKey?this.options.ownerDocument.execCommand("outdent",!1,null):this.options.ownerDocument.execCommand("indent",!1,null))}function e(b){var c,d=a.selection.getSelectionStart(this.options.ownerDocument),e=d.nodeName.toLowerCase(),f=/^(\s+|<br\/?>)?$/i,g=/h\d/i;a.util.isKey(b,[a.util.keyCode.BACKSPACE,a.util.keyCode.ENTER])&&d.previousElementSibling&&g.test(e)&&0===a.selection.getCaretOffsets(d).left?a.util.isKey(b,a.util.keyCode.BACKSPACE)&&f.test(d.previousElementSibling.innerHTML)?(d.previousElementSibling.parentNode.removeChild(d.previousElementSibling),b.preventDefault()):!this.options.disableDoubleReturn&&a.util.isKey(b,a.util.keyCode.ENTER)&&(c=this.options.ownerDocument.createElement("p"),c.innerHTML="<br>",d.previousElementSibling.parentNode.insertBefore(c,d),b.preventDefault()):a.util.isKey(b,a.util.keyCode.DELETE)&&d.nextElementSibling&&d.previousElementSibling&&!g.test(e)&&f.test(d.innerHTML)&&g.test(d.nextElementSibling.nodeName.toLowerCase())?(a.selection.moveCursor(this.options.ownerDocument,d.nextElementSibling),d.previousElementSibling.parentNode.removeChild(d),b.preventDefault()):a.util.isKey(b,a.util.keyCode.BACKSPACE)&&"li"===e&&f.test(d.innerHTML)&&!d.previousElementSibling&&!d.parentElement.previousElementSibling&&d.nextElementSibling&&"li"===d.nextElementSibling.nodeName.toLowerCase()?(c=this.options.ownerDocument.createElement("p"),c.innerHTML="<br>",d.parentElement.parentElement.insertBefore(c,d.parentElement),a.selection.moveCursor(this.options.ownerDocument,c),d.parentElement.removeChild(d),b.preventDefault()):a.util.isKey(b,a.util.keyCode.BACKSPACE)&&a.util.getClosestTag(d,"blockquote")!==!1&&0===a.selection.getCaretOffsets(d).left&&(b.preventDefault(),a.util.execFormatBlock(this.options.ownerDocument,"p"))}function f(b){var c,d=a.selection.getSelectionStart(this.options.ownerDocument);d&&(a.util.isMediumEditorElement(d)&&0===d.children.length&&!a.util.isBlockContainer(d)&&this.options.ownerDocument.execCommand("formatBlock",!1,"p"),!a.util.isKey(b,a.util.keyCode.ENTER)||a.util.isListItem(d)||a.util.isBlockContainer(d)||(c=d.nodeName.toLowerCase(),"a"===c?this.options.ownerDocument.execCommand("unlink",!1,null):b.shiftKey||b.ctrlKey||this.options.ownerDocument.execCommand("formatBlock",!1,"p")))}function g(a,b){var c=b.parentNode.querySelector('textarea[medium-editor-textarea-id="'+b.getAttribute("medium-editor-textarea-id")+'"]');c&&(c.value=b.innerHTML.trim())}function h(a){a._mediumEditors||(a._mediumEditors=[null]),this.id||(this.id=a._mediumEditors.length),a._mediumEditors[this.id]=this}function i(a){a._mediumEditors&&a._mediumEditors[this.id]&&(a._mediumEditors[this.id]=null)}function j(b,c,d){var e=[];if(b||(b=[]),"string"==typeof b&&(b=c.querySelectorAll(b)),a.util.isElement(b)&&(b=[b]),d)for(var f=0;f<b.length;f++){var g=b[f];!a.util.isElement(g)||g.getAttribute("data-medium-editor-element")||g.getAttribute("medium-editor-textarea-id")||e.push(g)}else e=Array.prototype.slice.apply(b);return e}function k(a){var b=a.parentNode.querySelector('textarea[medium-editor-textarea-id="'+a.getAttribute("medium-editor-textarea-id")+'"]');b&&(b.classList.remove("medium-editor-hidden"),b.removeAttribute("medium-editor-textarea-id")),a.parentNode&&a.parentNode.removeChild(a)}function l(a,b){return Object.keys(b).forEach(function(c){void 0===a[c]&&(a[c]=b[c])}),a}function m(a,b,c){var d={window:c.options.contentWindow,document:c.options.ownerDocument,base:c};return a=l(a,d),"function"==typeof a.init&&a.init(),a.name||(a.name=b),a}function n(){return this.elements.every(function(a){return!!a.getAttribute("data-disable-toolbar")})?!1:this.options.toolbar!==!1}function o(){return n.call(this)?this.options.anchorPreview!==!1:!1}function p(){return this.options.placeholder!==!1}function q(){return this.options.autoLink!==!1}function r(){return this.options.imageDragging!==!1}function s(){return this.options.keyboardCommands!==!1}function t(){return!this.options.extensions.imageDragging}function u(a){for(var b=this.options.ownerDocument.createElement("div"),c=Date.now(),d="medium-editor-"+c,e=a.attributes;this.options.ownerDocument.getElementById(d);)c++,d="medium-editor-"+c;b.className=a.className,b.id=d,b.innerHTML=a.value,a.setAttribute("medium-editor-textarea-id",d);for(var f=0,g=e.length;g>f;f++)b.hasAttribute(e[f].nodeName)||b.setAttribute(e[f].nodeName,e[f].nodeValue);return a.form&&this.on(a.form,"reset",function(a){a.defaultPrevented||this.resetContent(this.options.ownerDocument.getElementById(d))}.bind(this)),a.classList.add("medium-editor-hidden"),a.parentNode.insertBefore(b,a),b}function v(b,d){if(!b.getAttribute("data-medium-editor-element")){"textarea"===b.nodeName.toLowerCase()&&(b=u.call(this,b),this.instanceHandleEditableInput||(this.instanceHandleEditableInput=g.bind(this),this.subscribe("editableInput",this.instanceHandleEditableInput))),this.options.disableEditing||b.getAttribute("data-disable-editing")||(b.setAttribute("contentEditable",!0),b.setAttribute("spellcheck",this.options.spellcheck)),this.instanceHandleEditableKeydownEnter||(b.getAttribute("data-disable-return")||b.getAttribute("data-disable-double-return"))&&(this.instanceHandleEditableKeydownEnter=c.bind(this),this.subscribe("editableKeydownEnter",this.instanceHandleEditableKeydownEnter)),this.options.disableReturn||b.getAttribute("data-disable-return")||this.on(b,"keyup",f.bind(this));var e=a.util.guid();b.setAttribute("data-medium-editor-element",!0),b.setAttribute("role","textbox"),b.setAttribute("aria-multiline",!0),b.setAttribute("data-medium-editor-editor-index",d),b.setAttribute("medium-editor-index",e),B[e]=b.innerHTML,this.events.attachAllEventsToElement(b)}return b}function w(){this.subscribe("editableKeydownTab",d.bind(this)),this.subscribe("editableKeydownDelete",e.bind(this)),this.subscribe("editableKeydownEnter",e.bind(this)),this.options.disableExtraSpaces&&this.subscribe("editableKeydownSpace",b.bind(this)),this.instanceHandleEditableKeydownEnter||(this.options.disableReturn||this.options.disableDoubleReturn)&&(this.instanceHandleEditableKeydownEnter=c.bind(this),this.subscribe("editableKeydownEnter",this.instanceHandleEditableKeydownEnter))}function x(){if(this.extensions=[],Object.keys(this.options.extensions).forEach(function(a){"toolbar"!==a&&this.options.extensions[a]&&this.extensions.push(m(this.options.extensions[a],a,this))},this),t.call(this)){var b=this.options.fileDragging;b||(b={},r.call(this)||(b.allowedTypes=[])),this.addBuiltInExtension("fileDragging",b)}var c={paste:!0,"anchor-preview":o.call(this),autoLink:q.call(this),keyboardCommands:s.call(this),placeholder:p.call(this)};Object.keys(c).forEach(function(a){c[a]&&this.addBuiltInExtension(a)},this);var d=this.options.extensions.toolbar;if(!d&&n.call(this)){var e=a.util.extend({},this.options.toolbar,{allowMultiParagraphSelection:this.options.allowMultiParagraphSelection});d=new a.extensions.toolbar(e)}d&&this.extensions.push(m(d,"toolbar",this))}function y(b,c){var d=[["allowMultiParagraphSelection","toolbar.allowMultiParagraphSelection"]];return c&&d.forEach(function(b){c.hasOwnProperty(b[0])&&void 0!==c[b[0]]&&a.util.deprecated(b[0],b[1],"v6.0.0")}),a.util.defaults({},c,b)}function z(b,c){var d,e,f=/^append-(.+)$/gi,g=/justify([A-Za-z]*)$/g;if(d=f.exec(b))return a.util.execFormatBlock(this.options.ownerDocument,d[1]);if("fontSize"===b)return c.size&&a.util.deprecated(".size option for fontSize command",".value","6.0.0"),e=c.value||c.size,this.options.ownerDocument.execCommand("fontSize",!1,e);if("fontName"===b)return c.name&&a.util.deprecated(".name option for fontName command",".value","6.0.0"),e=c.value||c.name,this.options.ownerDocument.execCommand("fontName",!1,e);if("createLink"===b)return this.createLink(c);if("image"===b){var h=this.options.contentWindow.getSelection().toString().trim();return this.options.ownerDocument.execCommand("insertImage",!1,h)}if(g.exec(b)){var i=this.options.ownerDocument.execCommand(b,!1,null),j=a.selection.getSelectedParentElement(a.selection.getSelectionRange(this.options.ownerDocument));return j&&A.call(this,a.util.getTopBlockContainer(j)),i}return e=c&&c.value,this.options.ownerDocument.execCommand(b,!1,e)}function A(b){if(b){var c,d=Array.prototype.slice.call(b.childNodes).filter(function(a){var b="div"===a.nodeName.toLowerCase();return b&&!c&&(c=a.style.textAlign),b});d.length&&(this.saveSelection(),d.forEach(function(b){if(b.style.textAlign===c){var d=b.lastChild;if(d){a.util.unwrap(b,this.options.ownerDocument);var e=this.options.ownerDocument.createElement("BR");d.parentNode.insertBefore(e,d.nextSibling)}}},this),b.style.textAlign=c,this.restoreSelection())}}var B={};a.prototype={init:function(a,b){return this.options=y.call(this,this.defaults,b),this.origElements=a,this.options.elementsContainer||(this.options.elementsContainer=this.options.ownerDocument.body),this.setup()},setup:function(){this.isActive||(h.call(this,this.options.contentWindow),this.events=new a.Events(this),this.elements=[],this.addElements(this.origElements),0!==this.elements.length&&(this.isActive=!0,x.call(this),w.call(this)))},destroy:function(){this.isActive&&(this.isActive=!1,this.extensions.forEach(function(a){"function"==typeof a.destroy&&a.destroy()},this),this.events.destroy(),this.elements.forEach(function(a){this.options.spellcheck&&(a.innerHTML=a.innerHTML),a.removeAttribute("contentEditable"),a.removeAttribute("spellcheck"),a.removeAttribute("data-medium-editor-element"),a.removeAttribute("role"),a.removeAttribute("aria-multiline"),a.removeAttribute("medium-editor-index"),a.removeAttribute("data-medium-editor-editor-index"),a.getAttribute("medium-editor-textarea-id")&&k(a)},this),this.elements=[],this.instanceHandleEditableKeydownEnter=null,this.instanceHandleEditableInput=null,i.call(this,this.options.contentWindow))},on:function(a,b,c,d){return this.events.attachDOMEvent(a,b,c,d),this},off:function(a,b,c,d){return this.events.detachDOMEvent(a,b,c,d),this},subscribe:function(a,b){return this.events.attachCustomEvent(a,b),this},unsubscribe:function(a,b){return this.events.detachCustomEvent(a,b),this},trigger:function(a,b,c){return this.events.triggerCustomEvent(a,b,c),this},delay:function(a){var b=this;return setTimeout(function(){b.isActive&&a()},this.options.delay)},serialize:function(){var a,b,c={},d=this.elements.length;for(a=0;d>a;a+=1)b=""!==this.elements[a].id?this.elements[a].id:"element-"+a,c[b]={value:this.elements[a].innerHTML.trim()};return c},getExtensionByName:function(a){var b;return this.extensions&&this.extensions.length&&this.extensions.some(function(c){return c.name===a?(b=c,!0):!1}),b},addBuiltInExtension:function(b,c){var d,e=this.getExtensionByName(b);if(e)return e;switch(b){case"anchor":d=a.util.extend({},this.options.anchor,c),e=new a.extensions.anchor(d);break;case"anchor-preview":e=new a.extensions.anchorPreview(this.options.anchorPreview);break;case"autoLink":e=new a.extensions.autoLink;break;case"fileDragging":e=new a.extensions.fileDragging(c);break;case"fontname":e=new a.extensions.fontName(this.options.fontName);break;case"fontsize":e=new a.extensions.fontSize(c);break;case"keyboardCommands":e=new a.extensions.keyboardCommands(this.options.keyboardCommands);break;case"paste":e=new a.extensions.paste(this.options.paste);break;case"placeholder":e=new a.extensions.placeholder(this.options.placeholder);break;default:a.extensions.button.isBuiltInButton(b)&&(c?(d=a.util.defaults({},c,a.extensions.button.prototype.defaults[b]),e=new a.extensions.button(d)):e=new a.extensions.button(b))}return e&&this.extensions.push(m(e,b,this)),e},stopSelectionUpdates:function(){this.preventSelectionUpdates=!0},startSelectionUpdates:function(){this.preventSelectionUpdates=!1},checkSelection:function(){var a=this.getExtensionByName("toolbar");return a&&a.checkState(),this},queryCommandState:function(a){var b,c=/^full-(.+)$/gi,d=null;b=c.exec(a),b&&(a=b[1]);try{d=this.options.ownerDocument.queryCommandState(a)}catch(e){d=null}return d},execAction:function(b,c){var d,e,f=/^full-(.+)$/gi;return d=f.exec(b),d?(this.saveSelection(),this.selectAllContents(),e=z.call(this,d[1],c),this.restoreSelection()):e=z.call(this,b,c),"insertunorderedlist"!==b&&"insertorderedlist"!==b||a.util.cleanListDOM(this.options.ownerDocument,this.getSelectedParentElement()),this.checkSelection(),e},getSelectedParentElement:function(b){return void 0===b&&(b=this.options.contentWindow.getSelection().getRangeAt(0)),a.selection.getSelectedParentElement(b)},selectAllContents:function(){var b=a.selection.getSelectionElement(this.options.contentWindow);if(b){for(;1===b.children.length;)b=b.children[0];this.selectElement(b)}},selectElement:function(b){a.selection.selectNode(b,this.options.ownerDocument);var c=a.selection.getSelectionElement(this.options.contentWindow);c&&this.events.focusElement(c)},getFocusedElement:function(){var a;return this.elements.some(function(b){return!a&&b.getAttribute("data-medium-focused")&&(a=b),!!a},this),a},exportSelection:function(){var b=a.selection.getSelectionElement(this.options.contentWindow),c=this.elements.indexOf(b),d=null;return c>=0&&(d=a.selection.exportSelection(b,this.options.ownerDocument)),null!==d&&0!==c&&(d.editableElementIndex=c),d},saveSelection:function(){this.selectionState=this.exportSelection()},importSelection:function(b,c){if(b){var d=this.elements[b.editableElementIndex||0];a.selection.importSelection(b,d,this.options.ownerDocument,c)}},restoreSelection:function(){
this.importSelection(this.selectionState)},createLink:function(b){var c,d=a.selection.getSelectionElement(this.options.contentWindow),e={};if(-1!==this.elements.indexOf(d)){try{if(this.events.disableCustomEvent("editableInput"),b.url&&a.util.deprecated(".url option for createLink",".value","6.0.0"),c=b.url||b.value,c&&c.trim().length>0){var f=this.options.contentWindow.getSelection();if(f){var g,h,i,j,k=f.getRangeAt(0),l=k.commonAncestorContainer;if(3===k.endContainer.nodeType&&3!==k.startContainer.nodeType&&0===k.startOffset&&k.startContainer.firstChild===k.endContainer&&(l=k.endContainer),h=a.util.getClosestBlockContainer(k.startContainer),i=a.util.getClosestBlockContainer(k.endContainer),3!==l.nodeType&&0!==l.textContent.length&&h===i){var m=h||d,n=this.options.ownerDocument.createDocumentFragment();this.execAction("unlink"),g=this.exportSelection(),n.appendChild(m.cloneNode(!0)),d===m?a.selection.select(this.options.ownerDocument,m.firstChild,0,m.lastChild,3===m.lastChild.nodeType?m.lastChild.nodeValue.length:m.lastChild.childNodes.length):a.selection.select(this.options.ownerDocument,m,0,m,m.childNodes.length);var o=this.exportSelection();j=a.util.findOrCreateMatchingTextNodes(this.options.ownerDocument,n,{start:g.start-o.start,end:g.end-o.start,editableElementIndex:g.editableElementIndex}),0===j.length&&(n=this.options.ownerDocument.createDocumentFragment(),n.appendChild(l.cloneNode(!0)),j=[n.firstChild.firstChild,n.firstChild.lastChild]),a.util.createLink(this.options.ownerDocument,j,c.trim());var p=(n.firstChild.innerHTML.match(/^\s+/)||[""])[0].length;a.util.insertHTMLCommand(this.options.ownerDocument,n.firstChild.innerHTML.replace(/^\s+/,"")),g.start-=p,g.end-=p,this.importSelection(g)}else this.options.ownerDocument.execCommand("createLink",!1,c);this.options.targetBlank||"_blank"===b.target?a.util.setTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument),c):a.util.removeTargetBlank(a.selection.getSelectionStart(this.options.ownerDocument),c),b.buttonClass&&a.util.addClassToAnchors(a.selection.getSelectionStart(this.options.ownerDocument),b.buttonClass)}}if(this.options.targetBlank||"_blank"===b.target||b.buttonClass){e=this.options.ownerDocument.createEvent("HTMLEvents"),e.initEvent("input",!0,!0,this.options.contentWindow);for(var q=0,r=this.elements.length;r>q;q+=1)this.elements[q].dispatchEvent(e)}}finally{this.events.enableCustomEvent("editableInput")}this.events.triggerCustomEvent("editableInput",e,d)}},cleanPaste:function(a){this.getExtensionByName("paste").cleanPaste(a)},pasteHTML:function(a,b){this.getExtensionByName("paste").pasteHTML(a,b)},setContent:function(a,b){if(b=b||0,this.elements[b]){var c=this.elements[b];c.innerHTML=a,this.checkContentChanged(c)}},getContent:function(a){return a=a||0,this.elements[a]?this.elements[a].innerHTML.trim():null},checkContentChanged:function(b){b=b||a.selection.getSelectionElement(this.options.contentWindow),this.events.updateInput(b,{target:b,currentTarget:b})},resetContent:function(a){if(a){var b=this.elements.indexOf(a);return void(-1!==b&&this.setContent(B[a.getAttribute("medium-editor-index")],b))}this.elements.forEach(function(a,b){this.setContent(B[a.getAttribute("medium-editor-index")],b)},this)},addElements:function(a){var b=j(a,this.options.ownerDocument,!0);return 0===b.length?!1:void b.forEach(function(a){a=v.call(this,a,this.id),this.elements.push(a)},this)},removeElements:function(a){var b=j(a,this.options.ownerDocument),c=b.map(function(a){return a.getAttribute("medium-editor-textarea-id")&&a.parentNode?a.parentNode.querySelector('div[medium-editor-textarea-id="'+a.getAttribute("medium-editor-textarea-id")+'"]'):a});this.elements=this.elements.filter(function(a){return-1!==c.indexOf(a)?(this.events.cleanupElement(a),a.getAttribute("medium-editor-textarea-id")&&k(a),!1):!0},this)}},a.getEditorFromElement=function(a){var b=a.getAttribute("data-medium-editor-editor-index"),c=a&&a.ownerDocument&&(a.ownerDocument.defaultView||a.ownerDocument.parentWindow);return c&&c._mediumEditors&&c._mediumEditors[b]?c._mediumEditors[b]:null}}(),function(){a.prototype.defaults={activeButtonClass:"medium-editor-button-active",buttonLabels:!1,delay:0,disableReturn:!1,disableDoubleReturn:!1,disableExtraSpaces:!1,disableEditing:!1,autoLink:!1,elementsContainer:!1,contentWindow:window,ownerDocument:document,targetBlank:!1,extensions:{},spellcheck:!0}}(),a.parseVersionString=function(a){var b=a.split("-"),c=b[0].split("."),d=b.length>1?b[1]:"";return{major:parseInt(c[0],10),minor:parseInt(c[1],10),revision:parseInt(c[2],10),preRelease:d,toString:function(){return[c[0],c[1],c[2]].join(".")+(d?"-"+d:"")}}},a.version=a.parseVersionString.call(this,{version:"5.20.0"}.version),a}());
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(17),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(18),p=e(o),q=c(19),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(6),j=c(14),k=c(16),l=e(k),m="4.0.5";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return a||0===a?p(a)&&0===a.length?!0:!1:!0}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===n.call(a):!1};b.isArray=p},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(7),g=e(f),h=c(8),i=e(h),j=c(9),k=e(j),l=c(10),m=e(l),n=c(11),o=e(n),p=c(12),q=e(p),r=c(13),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;l>h;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(15),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;c>f;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(c>b){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!==f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!g)throw new q["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return g&&b!==g[0]&&(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var d=void 0;if(c.fn&&c.fn!==i&&(c.data=r.createFrame(c.data),d=c.data["partial-block"]=c.fn,d.partials&&(c.partials=o.extend({},c.partials,d.partials))),void 0===a&&d&&(a=d),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}var l=c(1)["default"],m=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var n=c(4),o=l(n),p=c(5),q=m(p),r=c(3)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
!function(d,B,m,f){function v(a,b){var c=Math.max(0,a[0]-b[0],b[0]-a[1]),e=Math.max(0,a[2]-b[1],b[1]-a[3]);return c+e}function w(a,b,c,e){var k=a.length;e=e?"offset":"position";for(c=c||0;k--;){var g=a[k].el?a[k].el:d(a[k]),l=g[e]();l.left+=parseInt(g.css("margin-left"),10);l.top+=parseInt(g.css("margin-top"),10);b[k]=[l.left-c,l.left+g.outerWidth()+c,l.top-c,l.top+g.outerHeight()+c]}}function p(a,b){var c=b.offset();return{left:a.left-c.left,top:a.top-c.top}}function x(a,b,c){b=[b.left,b.top];c=
c&&[c.left,c.top];for(var e,k=a.length,d=[];k--;)e=a[k],d[k]=[k,v(e,b),c&&v(e,c)];return d=d.sort(function(a,b){return b[1]-a[1]||b[2]-a[2]||b[0]-a[0]})}function q(a){this.options=d.extend({},n,a);this.containers=[];this.options.rootGroup||(this.scrollProxy=d.proxy(this.scroll,this),this.dragProxy=d.proxy(this.drag,this),this.dropProxy=d.proxy(this.drop,this),this.placeholder=d(this.options.placeholder),a.isValidTarget||(this.options.isValidTarget=f))}function t(a,b){this.el=a;this.options=d.extend({},
z,b);this.group=q.get(this.options);this.rootGroup=this.options.rootGroup||this.group;this.handle=this.rootGroup.options.handle||this.rootGroup.options.itemSelector;var c=this.rootGroup.options.itemPath;this.target=c?this.el.find(c):this.el;this.target.on(r.start,this.handle,d.proxy(this.dragInit,this));this.options.drop&&this.group.containers.push(this)}var r,z={drag:!0,drop:!0,exclude:"",nested:!0,vertical:!0},n={afterMove:function(a,b,c){},containerPath:"",containerSelector:"ol, ul",distance:0,
delay:0,handle:"",itemPath:"",itemSelector:"li",bodyClass:"dragging",draggedClass:"dragged",isValidTarget:function(a,b){return!0},onCancel:function(a,b,c,e){},onDrag:function(a,b,c,e){a.css(b)},onDragStart:function(a,b,c,e){a.css({height:a.outerHeight(),width:a.outerWidth()});a.addClass(b.group.options.draggedClass);d("body").addClass(b.group.options.bodyClass)},onDrop:function(a,b,c,e){a.removeClass(b.group.options.draggedClass).removeAttr("style");d("body").removeClass(b.group.options.bodyClass)},
onMousedown:function(a,b,c){if(!c.target.nodeName.match(/^(input|select|textarea)$/i))return c.preventDefault(),!0},placeholderClass:"placeholder",placeholder:'<li class="placeholder"></li>',pullPlaceholder:!0,serialize:function(a,b,c){a=d.extend({},a.data());if(c)return[b];b[0]&&(a.children=b);delete a.subContainers;delete a.sortable;return a},tolerance:0},s={},y=0,A={left:0,top:0,bottom:0,right:0};r={start:"touchstart.sortable mousedown.sortable",drop:"touchend.sortable touchcancel.sortable mouseup.sortable",
drag:"touchmove.sortable mousemove.sortable",scroll:"scroll.sortable"};q.get=function(a){s[a.group]||(a.group===f&&(a.group=y++),s[a.group]=new q(a));return s[a.group]};q.prototype={dragInit:function(a,b){this.$document=d(b.el[0].ownerDocument);var c=d(a.target).closest(this.options.itemSelector);c.length&&(this.item=c,this.itemContainer=b,!this.item.is(this.options.exclude)&&this.options.onMousedown(this.item,n.onMousedown,a)&&(this.setPointer(a),this.toggleListeners("on"),this.setupDelayTimer(),
this.dragInitDone=!0))},drag:function(a){if(!this.dragging){if(!this.distanceMet(a)||!this.delayMet)return;this.options.onDragStart(this.item,this.itemContainer,n.onDragStart,a);this.item.before(this.placeholder);this.dragging=!0}this.setPointer(a);this.options.onDrag(this.item,p(this.pointer,this.item.offsetParent()),n.onDrag,a);a=this.getPointer(a);var b=this.sameResultBox,c=this.options.tolerance;(!b||b.top-c>a.top||b.bottom+c<a.top||b.left-c>a.left||b.right+c<a.left)&&!this.searchValidTarget()&&
(this.placeholder.detach(),this.lastAppendedItem=f)},drop:function(a){this.toggleListeners("off");this.dragInitDone=!1;if(this.dragging){if(this.placeholder.closest("html")[0])this.placeholder.before(this.item).detach();else this.options.onCancel(this.item,this.itemContainer,n.onCancel,a);this.options.onDrop(this.item,this.getContainer(this.item),n.onDrop,a);this.clearDimensions();this.clearOffsetParent();this.lastAppendedItem=this.sameResultBox=f;this.dragging=!1}},searchValidTarget:function(a,b){a||
(a=this.relativePointer||this.pointer,b=this.lastRelativePointer||this.lastPointer);for(var c=x(this.getContainerDimensions(),a,b),e=c.length;e--;){var d=c[e][0];if(!c[e][1]||this.options.pullPlaceholder)if(d=this.containers[d],!d.disabled){if(!this.$getOffsetParent()){var g=d.getItemOffsetParent();a=p(a,g);b=p(b,g)}if(d.searchValidTarget(a,b))return!0}}this.sameResultBox&&(this.sameResultBox=f)},movePlaceholder:function(a,b,c,e){var d=this.lastAppendedItem;if(e||!d||d[0]!==b[0])b[c](this.placeholder),
this.lastAppendedItem=b,this.sameResultBox=e,this.options.afterMove(this.placeholder,a,b)},getContainerDimensions:function(){this.containerDimensions||w(this.containers,this.containerDimensions=[],this.options.tolerance,!this.$getOffsetParent());return this.containerDimensions},getContainer:function(a){return a.closest(this.options.containerSelector).data(m)},$getOffsetParent:function(){if(this.offsetParent===f){var a=this.containers.length-1,b=this.containers[a].getItemOffsetParent();if(!this.options.rootGroup)for(;a--;)if(b[0]!=
this.containers[a].getItemOffsetParent()[0]){b=!1;break}this.offsetParent=b}return this.offsetParent},setPointer:function(a){a=this.getPointer(a);if(this.$getOffsetParent()){var b=p(a,this.$getOffsetParent());this.lastRelativePointer=this.relativePointer;this.relativePointer=b}this.lastPointer=this.pointer;this.pointer=a},distanceMet:function(a){a=this.getPointer(a);return Math.max(Math.abs(this.pointer.left-a.left),Math.abs(this.pointer.top-a.top))>=this.options.distance},getPointer:function(a){var b=
a.originalEvent||a.originalEvent.touches&&a.originalEvent.touches[0];return{left:a.pageX||b.pageX,top:a.pageY||b.pageY}},setupDelayTimer:function(){var a=this;this.delayMet=!this.options.delay;this.delayMet||(clearTimeout(this._mouseDelayTimer),this._mouseDelayTimer=setTimeout(function(){a.delayMet=!0},this.options.delay))},scroll:function(a){this.clearDimensions();this.clearOffsetParent()},toggleListeners:function(a){var b=this;d.each(["drag","drop","scroll"],function(c,e){b.$document[a](r[e],b[e+
"Proxy"])})},clearOffsetParent:function(){this.offsetParent=f},clearDimensions:function(){this.traverse(function(a){a._clearDimensions()})},traverse:function(a){a(this);for(var b=this.containers.length;b--;)this.containers[b].traverse(a)},_clearDimensions:function(){this.containerDimensions=f},_destroy:function(){s[this.options.group]=f}};t.prototype={dragInit:function(a){var b=this.rootGroup;!this.disabled&&!b.dragInitDone&&this.options.drag&&this.isValidDrag(a)&&b.dragInit(a,this)},isValidDrag:function(a){return 1==
a.which||"touchstart"==a.type&&1==a.originalEvent.touches.length},searchValidTarget:function(a,b){var c=x(this.getItemDimensions(),a,b),e=c.length,d=this.rootGroup,g=!d.options.isValidTarget||d.options.isValidTarget(d.item,this);if(!e&&g)return d.movePlaceholder(this,this.target,"append"),!0;for(;e--;)if(d=c[e][0],!c[e][1]&&this.hasChildGroup(d)){if(this.getContainerGroup(d).searchValidTarget(a,b))return!0}else if(g)return this.movePlaceholder(d,a),!0},movePlaceholder:function(a,b){var c=d(this.items[a]),
e=this.itemDimensions[a],k="after",g=c.outerWidth(),f=c.outerHeight(),h=c.offset(),h={left:h.left,right:h.left+g,top:h.top,bottom:h.top+f};this.options.vertical?b.top<=(e[2]+e[3])/2?(k="before",h.bottom-=f/2):h.top+=f/2:b.left<=(e[0]+e[1])/2?(k="before",h.right-=g/2):h.left+=g/2;this.hasChildGroup(a)&&(h=A);this.rootGroup.movePlaceholder(this,c,k,h)},getItemDimensions:function(){this.itemDimensions||(this.items=this.$getChildren(this.el,"item").filter(":not(."+this.group.options.placeholderClass+
", ."+this.group.options.draggedClass+")").get(),w(this.items,this.itemDimensions=[],this.options.tolerance));return this.itemDimensions},getItemOffsetParent:function(){var a=this.el;return"relative"===a.css("position")||"absolute"===a.css("position")||"fixed"===a.css("position")?a:a.offsetParent()},hasChildGroup:function(a){return this.options.nested&&this.getContainerGroup(a)},getContainerGroup:function(a){var b=d.data(this.items[a],"subContainers");if(b===f){var c=this.$getChildren(this.items[a],
"container"),b=!1;c[0]&&(b=d.extend({},this.options,{rootGroup:this.rootGroup,group:y++}),b=c[m](b).data(m).group);d.data(this.items[a],"subContainers",b)}return b},$getChildren:function(a,b){var c=this.rootGroup.options,e=c[b+"Path"],c=c[b+"Selector"];a=d(a);e&&(a=a.find(e));return a.children(c)},_serialize:function(a,b){var c=this,e=this.$getChildren(a,b?"item":"container").not(this.options.exclude).map(function(){return c._serialize(d(this),!b)}).get();return this.rootGroup.options.serialize(a,
e,b)},traverse:function(a){d.each(this.items||[],function(b){(b=d.data(this,"subContainers"))&&b.traverse(a)});a(this)},_clearDimensions:function(){this.itemDimensions=f},_destroy:function(){var a=this;this.target.off(r.start,this.handle);this.el.removeData(m);this.options.drop&&(this.group.containers=d.grep(this.group.containers,function(b){return b!=a}));d.each(this.items||[],function(){d.removeData(this,"subContainers")})}};var u={enable:function(){this.traverse(function(a){a.disabled=!1})},disable:function(){this.traverse(function(a){a.disabled=
!0})},serialize:function(){return this._serialize(this.el,!0)},refresh:function(){this.traverse(function(a){a._clearDimensions()})},destroy:function(){this.traverse(function(a){a._destroy()})}};d.extend(t.prototype,u);d.fn[m]=function(a){var b=Array.prototype.slice.call(arguments,1);return this.map(function(){var c=d(this),e=c.data(m);if(e&&u[a])return u[a].apply(e,b)||this;e||a!==f&&"object"!==typeof a||c.data(m,new t(c,a));return this})}}(jQuery,window,"sortable");

/*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if ( typeof exports === "object" ) {

		// Node/CommonJS
		factory( require( "jquery" ) );

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));

/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*! 
 * medium-editor-insert-plugin v2.3.2 - jQuery insert plugin for MediumEditor
 *
 * http://linkesch.com/medium-editor-insert-plugin
 * 
 * Copyright (c) 2014 Pavel Linkesch (http://linkesch.com)
 * Released under the MIT license
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery","handlebars/runtime","medium-editor","blueimp-file-upload","jquery-sortable"],a):"object"==typeof module&&module.exports?module.exports=function(b){if("undefined"==typeof window)throw new Error("medium-editor-insert-plugin runs only in a browser.");return void 0===b&&(b=require("jquery")),window.jQuery=b,Handlebars=require("handlebars/runtime"),MediumEditor=require("medium-editor"),require("jquery-sortable"),require("blueimp-file-upload"),a(b,Handlebars,MediumEditor),b}:a(jQuery,Handlebars,MediumEditor)}(function(a,b,c){this.MediumInsert=this.MediumInsert||{},this.MediumInsert.Templates=this.MediumInsert.Templates||{},this.MediumInsert.Templates["src/js/templates/core-buttons.hbs"]=b.template({1:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'            <li><a data-addon="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'" data-action="add" class="medium-insert-action">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</a></li>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<div class="medium-insert-buttons" contenteditable="false" style="display: none">\n    <a class="medium-insert-buttons-show">+</a>\n    <ul class="medium-insert-buttons-addons" style="display: none">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.addons:b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"    </ul>\n</div>\n"},useData:!0}),this.MediumInsert.Templates["src/js/templates/core-caption.hbs"]=b.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return'<figcaption contenteditable="true" class="medium-insert-caption-placeholder" data-placeholder="'+a.escapeExpression((f=null!=(f=c.placeholder||(null!=b?b.placeholder:b))?f:c.helperMissing,"function"==typeof f?f.call(null!=b?b:{},{name:"placeholder",hash:{},data:e}):f))+'"></figcaption>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/core-empty-line.hbs"]=b.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return"<p><br></p>\n"},useData:!0}),this.MediumInsert.Templates["src/js/templates/embeds-toolbar.hbs"]=b.template({1:function(a,b,c,d,e){var f;return'    <div class="medium-insert-embeds-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.styles:b,{name:"each",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"        </ul>\n    </div>\n"},2:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:""},3:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'                    <li>\n                        <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n                    </li>\n"},5:function(a,b,c,d,e){var f;return'    <div class="medium-insert-embeds-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n        <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.actions:b,{name:"each",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"        </ul>\n    </div>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g=null!=b?b:{};return(null!=(f=c["if"].call(g,null!=b?b.styles:b,{name:"if",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"\n"+(null!=(f=c["if"].call(g,null!=b?b.actions:b,{name:"if",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")},useData:!0}),this.MediumInsert.Templates["src/js/templates/embeds-wrapper.hbs"]=b.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g;return'<div class="medium-insert-embeds" contenteditable="false">\n	<figure>\n		<div class="medium-insert-embed">\n			'+(null!=(g=null!=(g=c.html||(null!=b?b.html:b))?g:c.helperMissing,f="function"==typeof g?g.call(null!=b?b:{},{name:"html",hash:{},data:e}):g)?f:"")+'\n		</div>\n	</figure>\n	<div class="medium-insert-embeds-overlay"></div>\n</div>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-fileupload.hbs"]=b.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return'<input type="file" multiple>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-image.hbs"]=b.template({1:function(a,b,c,d,e){return'        <div class="medium-insert-images-progress"></div>\n'},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g,h=null!=b?b:{};return'<figure contenteditable="false">\n    <img src="'+a.escapeExpression((g=null!=(g=c.img||(null!=b?b.img:b))?g:c.helperMissing,"function"==typeof g?g.call(h,{name:"img",hash:{},data:e}):g))+'" alt="" />\n'+(null!=(f=c["if"].call(h,null!=b?b.progress:b,{name:"if",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"</figure>\n"},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-progressbar.hbs"]=b.template({compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){return'<progress min="0" max="100" value="0">0</progress>'},useData:!0}),this.MediumInsert.Templates["src/js/templates/images-toolbar.hbs"]=b.template({1:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:""},2:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'                <li>\n                    <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n                </li>\n"},4:function(a,b,c,d,e){var f;return'	<div class="medium-insert-images-toolbar2 medium-editor-toolbar medium-editor-toolbar-active">\n		<ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(null!=b?b:{},null!=b?b.actions:b,{name:"each",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")+"    	</ul>\n    </div>\n"},5:function(a,b,c,d,e){var f;return null!=(f=c["if"].call(null!=b?b:{},null!=b?b.label:b,{name:"if",hash:{},fn:a.program(6,e,0),inverse:a.noop,data:e}))?f:""},6:function(a,b,c,d,e){var f,g,h=null!=b?b:{},i=c.helperMissing,j="function";return'        	        <li>\n        	            <button class="medium-editor-action" data-action="'+a.escapeExpression((g=null!=(g=c.key||e&&e.key)?g:i,typeof g===j?g.call(h,{name:"key",hash:{},data:e}):g))+'">'+(null!=(g=null!=(g=c.label||(null!=b?b.label:b))?g:i,f=typeof g===j?g.call(h,{name:"label",hash:{},data:e}):g)?f:"")+"</button>\n        	        </li>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f,g=null!=b?b:{};return'<div class="medium-insert-images-toolbar medium-editor-toolbar medium-toolbar-arrow-under medium-editor-toolbar-active">\n    <ul class="medium-editor-toolbar-actions clearfix">\n'+(null!=(f=c.each.call(g,null!=b?b.styles:b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+"    </ul>\n</div>\n\n"+(null!=(f=c["if"].call(g,null!=b?b.actions:b,{name:"if",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?f:"")},useData:!0}),function(a,b,c,d){"use strict";function e(a){return a.charAt(0).toUpperCase()+a.slice(1)}function f(c,e){var f;this.el=c,this.$el=a(c),this.templates=b.MediumInsert.Templates,e&&(f=e.editor,e.editor=null),this.options=a.extend(!0,{},h,e),this.options.editor=f,this._defaults=h,this._name=g,this.options&&this.options.editor&&(this.options.editor._serialize===d&&(this.options.editor._serialize=this.options.editor.serialize),this.options.editor._destroy===d&&(this.options.editor._destroy=this.options.editor.destroy),this.options.editor._setup===d&&(this.options.editor._setup=this.options.editor.setup),this.options.editor._hideInsertButtons=this.hideButtons,this.options.editor.serialize=this.editorSerialize,this.options.editor.destroy=this.editorDestroy,this.options.editor.setup=this.editorSetup,this.options.editor.getExtensionByName("placeholder")!==d&&(this.options.editor.getExtensionByName("placeholder").updatePlaceholder=this.editorUpdatePlaceholder))}var g="mediumInsert",h={editor:null,enabled:!0,addons:{images:!0,embeds:!0}};f.prototype.init=function(){this.$el.addClass("medium-editor-insert-plugin"),("object"!=typeof this.options.addons||0===Object.keys(this.options.addons).length)&&this.disable(),this.initAddons(),this.clean(),this.events()},f.prototype.events=function(){var c=this;this.$el.on("dragover drop",function(a){a.preventDefault()}).on("keyup click",a.proxy(this,"toggleButtons")).on("selectstart mousedown",".medium-insert, .medium-insert-buttons",a.proxy(this,"disableSelection")).on("click",".medium-insert-buttons-show",a.proxy(this,"toggleAddons")).on("click",".medium-insert-action",a.proxy(this,"addonAction")).on("paste",".medium-insert-caption-placeholder",function(b){a.proxy(c,"removeCaptionPlaceholder")(a(b.target))}),a(b).on("resize",a.proxy(this,"positionButtons",null))},f.prototype.getEditor=function(){return this.options.editor},f.prototype.editorSerialize=function(){var b=this._serialize();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-buttons").remove(),d.find("[data-embed-code]").each(function(){var b=a(this);b.html(b.attr("data-embed-code"))}),b[c].value=d.html()}),b},f.prototype.editorDestroy=function(){a.each(this.elements,function(b,c){a(c).data("plugin_"+g)instanceof f&&a(c).data("plugin_"+g).disable()}),this._destroy()},f.prototype.editorSetup=function(){this._setup(),a.each(this.elements,function(b,c){a(c).data("plugin_"+g)instanceof f&&a(c).data("plugin_"+g).enable()})},f.prototype.editorUpdatePlaceholder=function(b,c){var d=a(b).children().not(".medium-insert-buttons").contents();c||1!==d.length||"br"!==d[0].nodeName.toLowerCase()?this.hidePlaceholder(b):(this.showPlaceholder(b),this.base._hideInsertButtons(a(b)))},f.prototype.triggerInput=function(){this.getEditor()&&this.getEditor().trigger("editableInput",null,this.el)},f.prototype.deselect=function(){c.getSelection().removeAllRanges()},f.prototype.disable=function(){this.options.enabled=!1,this.$el.find(".medium-insert-buttons").addClass("hide")},f.prototype.enable=function(){this.options.enabled=!0,this.$el.find(".medium-insert-buttons").removeClass("hide")},f.prototype.disableSelection=function(b){var c=a(b.target);(c.is("img")===!1||c.hasClass("medium-insert-buttons-show"))&&b.preventDefault()},f.prototype.initAddons=function(){var b=this;this.options.addons&&0!==this.options.addons.length&&a.each(this.options.addons,function(a,c){var d=g+e(a);return c===!1?void delete b.options.addons[a]:(b.$el[d](c),void(b.options.addons[a]=b.$el.data("plugin_"+d).options))})},f.prototype.clean=function(){var b,c,d,e=this;this.options.enabled!==!1&&(0===this.$el.children().length&&this.$el.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),d=this.$el.contents().filter(function(){return"#text"===this.nodeName&&""!==a.trim(a(this).text())||"br"===this.nodeName.toLowerCase()}),d.each(function(){a(this).wrap("<p />"),e.moveCaret(a(this).parent(),a(this).text().length)}),this.addButtons(),b=this.$el.find(".medium-insert-buttons"),c=b.prev(),c.attr("class")&&c.attr("class").match(/medium\-insert(?!\-active)/)&&b.before(this.templates["src/js/templates/core-empty-line.hbs"]().trim()))},f.prototype.getButtons=function(){return this.options.enabled!==!1?this.templates["src/js/templates/core-buttons.hbs"]({addons:this.options.addons}).trim():void 0},f.prototype.addButtons=function(){0===this.$el.find(".medium-insert-buttons").length&&this.$el.append(this.getButtons())},f.prototype.toggleButtons=function(c){var d,e,f,g,h=a(c.target),i=b.getSelection(),j=this;this.options.enabled!==!1&&(i&&0!==i.rangeCount?(d=i.getRangeAt(0),e=a(d.commonAncestorContainer)):e=h,e.hasClass("medium-editor-insert-plugin")&&(e=e.find("p:first")),f=e.is("p")?e:e.closest("p"),this.clean(),h.hasClass("medium-editor-placeholder")===!1&&0===h.closest(".medium-insert-buttons").length&&0===e.closest(".medium-insert-buttons").length&&(this.$el.find(".medium-insert-active").removeClass("medium-insert-active"),a.each(this.options.addons,function(a){return h.closest(".medium-insert-"+a).length&&(e=h),e.closest(".medium-insert-"+a).length?(f=e.closest(".medium-insert-"+a),void(g=a)):void 0}),f.length&&(""===f.text().trim()&&!g||"images"===g)?(f.addClass("medium-insert-active"),setTimeout(function(){j.positionButtons(g),j.showButtons(g)},g?100:0)):this.hideButtons()))},f.prototype.showButtons=function(a){var b=this.$el.find(".medium-insert-buttons");b.show(),b.find("li").show(),a&&(b.find("li").hide(),b.find('a[data-addon="'+a+'"]').parent().show())},f.prototype.hideButtons=function(a){a=a||this.$el,a.find(".medium-insert-buttons").hide(),a.find(".medium-insert-buttons-addons").hide(),a.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},f.prototype.positionButtons=function(a){var b,c,d=this.$el.find(".medium-insert-buttons"),e=this.$el.find(".medium-insert-active"),f=e.find("figure:first").length?e.find("figure:first"):e;e.length&&(b=e.position().left-parseInt(d.find(".medium-insert-buttons-addons").css("left"),10)-parseInt(d.find(".medium-insert-buttons-addons a:first").css("margin-left"),10),b=0>b?e.position().left:b,c=e.position().top+parseInt(e.css("margin-top"),10),a&&(e.position().left!==f.position().left&&(b=f.position().left),c+=e.height()+15),d.css({left:b,top:c}))},f.prototype.toggleAddons=function(){this.$el.find(".medium-insert-buttons-addons").fadeToggle(),this.$el.find(".medium-insert-buttons-show").toggleClass("medium-insert-buttons-rotate")},f.prototype.hideAddons=function(){this.$el.find(".medium-insert-buttons-addons").hide(),this.$el.find(".medium-insert-buttons-show").removeClass("medium-insert-buttons-rotate")},f.prototype.addonAction=function(b){var c=a(b.target).is("a")?a(b.target):a(b.target).closest("a"),d=c.data("addon"),f=c.data("action");this.$el.data("plugin_"+g+e(d))[f]()},f.prototype.moveCaret=function(a,d){var e,f,g,h;d=d||0,e=c.createRange(),f=b.getSelection(),g=a.get(0),g.childNodes.length||(h=c.createTextNode(" "),g.appendChild(h)),e.setStart(g.childNodes[0],d),e.collapse(!0),f.removeAllRanges(),f.addRange(e)},f.prototype.addCaption=function(a,b){var c=a.find("figcaption");0===c.length&&a.append(this.templates["src/js/templates/core-caption.hbs"]({placeholder:b}))},f.prototype.removeCaptions=function(b){var c=this.$el.find("figcaption");b&&(c=c.not(b)),c.each(function(){(a(this).hasClass("medium-insert-caption-placeholder")||""===a(this).text().trim())&&a(this).remove()})},f.prototype.removeCaptionPlaceholder=function(a){var b=a.is("figcaption")?a:a.find("figcaption");b.length&&b.removeClass("medium-insert-caption-placeholder").removeAttr("data-placeholder")},a.fn[g]=function(b){return this.each(function(){var c,d=this;a(d).is("textarea")&&(c=a(d).attr("medium-editor-textarea-id"),d=a(d).siblings('[medium-editor-textarea-id="'+c+'"]').get(0)),a.data(d,"plugin_"+g)?"string"==typeof b&&a.data(d,"plugin_"+g)[b]&&a.data(d,"plugin_"+g)[b]():(a.data(d,"plugin_"+g,new f(d,b)),a.data(d,"plugin_"+g).init())})}}(jQuery,window,document),function(a,b,c,d){"use strict";function e(c,d){this.el=c,this.$el=a(c),this.templates=b.MediumInsert.Templates,this.core=this.$el.data("plugin_"+f),this.options=a.extend(!0,{},h,d),this._defaults=h,this._name=f,this.core.getEditor()&&(this.core.getEditor()._serializePreEmbeds=this.core.getEditor().serialize,this.core.getEditor().serialize=this.editorSerialize),this.init()}var f="mediumInsert",g="Embeds",h={label:'<span class="fa fa-youtube-play"></span>',placeholder:"Paste a YouTube, Vimeo, Facebook, Twitter or Instagram link and press Enter",oembedProxy:"http://medium.iframe.ly/api/oembed?iframe=1",captions:!0,captionPlaceholder:"Type caption (optional)",styles:{wide:{label:'<span class="fa fa-align-justify"></span>'},left:{label:'<span class="fa fa-align-left"></span>'},right:{label:'<span class="fa fa-align-right"></span>'}},actions:{remove:{label:'<span class="fa fa-times"></span>',clicked:function(){var b=a.Event("keydown");b.which=8,a(c).trigger(b)}}},parseOnPaste:!1};e.prototype.init=function(){var b=this.$el.find(".medium-insert-embeds");b.attr("contenteditable",!1),b.each(function(){0===a(this).find(".medium-insert-embeds-overlay").length&&a(this).append(a("<div />").addClass("medium-insert-embeds-overlay"))}),this.events(),this.backwardsCompatibility()},e.prototype.events=function(){a(c).on("click",a.proxy(this,"unselectEmbed")).on("keydown",a.proxy(this,"removeEmbed")).on("click",".medium-insert-embeds-toolbar .medium-editor-action",a.proxy(this,"toolbarAction")).on("click",".medium-insert-embeds-toolbar2 .medium-editor-action",a.proxy(this,"toolbar2Action")),this.$el.on("keyup click paste",a.proxy(this,"togglePlaceholder")).on("keydown",a.proxy(this,"processLink")).on("click",".medium-insert-embeds-overlay",a.proxy(this,"selectEmbed")).on("contextmenu",".medium-insert-embeds-placeholder",a.proxy(this,"fixRightClickOnPlaceholder")),this.options.parseOnPaste&&this.$el.on("paste",a.proxy(this,"processPasted"))},e.prototype.backwardsCompatibility=function(){var b=this;this.$el.find(".mediumInsert-embeds").removeClass("mediumInsert-embeds").addClass("medium-insert-embeds"),this.$el.find(".medium-insert-embeds").each(function(){0===a(this).find(".medium-insert-embed").length&&(a(this).after(b.templates["src/js/templates/embeds-wrapper.hbs"]({html:a(this).html()})),a(this).remove())})},e.prototype.editorSerialize=function(){var b=this._serializePreEmbeds();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-embeds").removeAttr("contenteditable"),d.find(".medium-insert-embeds-overlay").remove(),b[c].value=d.html()}),b},e.prototype.add=function(){var a=this.$el.find(".medium-insert-active");a.html(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),a.is("p")&&(a.replaceWith('<div class="medium-insert-active">'+a.html()+"</div>"),a=this.$el.find(".medium-insert-active"),this.core.moveCaret(a)),a.addClass("medium-insert-embeds medium-insert-embeds-input medium-insert-embeds-active"),this.togglePlaceholder({target:a.get(0)}),a.click(),this.core.hideButtons()},e.prototype.togglePlaceholder=function(c){var d,e,f,g=a(c.target),h=b.getSelection();h&&0!==h.rangeCount&&(d=h.getRangeAt(0),e=a(d.commonAncestorContainer),e.hasClass("medium-insert-embeds-active")?g=e:e.closest(".medium-insert-embeds-active").length&&(g=e.closest(".medium-insert-embeds-active")),g.hasClass("medium-insert-embeds-active")?(f=g.text().trim(),""===f&&g.hasClass("medium-insert-embeds-placeholder")===!1?g.addClass("medium-insert-embeds-placeholder").attr("data-placeholder",this.options.placeholder):""!==f&&g.hasClass("medium-insert-embeds-placeholder")&&g.removeClass("medium-insert-embeds-placeholder").removeAttr("data-placeholder")):this.$el.find(".medium-insert-embeds-active").remove())},e.prototype.fixRightClickOnPlaceholder=function(b){this.core.moveCaret(a(b.target))},e.prototype.processLink=function(a){var b,c=this.$el.find(".medium-insert-embeds-active");if(c.length)return b=c.text().trim(),""===b&&-1!==[8,46,13].indexOf(a.which)?void c.remove():void(13===a.which&&(a.preventDefault(),a.stopPropagation(),this.options.oembedProxy?this.oembed(b):this.parseUrl(b)))},e.prototype.processPasted=function(b){var c,d;a(".medium-insert-embeds-active").length||(c=b.originalEvent.clipboardData.getData("text"),d=new RegExp("^(http(s?):)?//","i"),d.test(c)&&(this.options.oembedProxy?this.oembed(c,!0):this.parseUrl(c,!0)))},e.prototype.oembed=function(c,d){var e=this;a.support.cors=!0,a.ajax({crossDomain:!0,cache:!1,url:this.options.oembedProxy,dataType:"json",data:{url:c},success:function(b){var f=b&&b.html;return b&&!f&&"photo"===b.type&&b.url&&(f='<img src="'+b.url+'" alt="">'),f?void(d?a.proxy(e,"embed",f,c)():a.proxy(e,"embed",f)()):void a.proxy(e,"convertBadEmbed",c)()},error:function(d,f,g){var h=function(){try{return JSON.parse(d.responseText)}catch(a){}}();"undefined"!=typeof b.console?b.console.log(h&&h.error||d.status||g.message):b.alert("Error requesting media from "+e.options.oembedProxy+" to insert: "+g+" (response status: "+d.status+")"),a.proxy(e,"convertBadEmbed",c)()}})},e.prototype.parseUrl=function(b,c){var d;return new RegExp(["youtube","youtu.be","vimeo","instagram","twitter","facebook"].join("|")).test(b)?(d=b.replace(/\n?/g,"").replace(/^((http(s)?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/(watch\?v=|v\/)?)([a-zA-Z0-9\-_]+)(.*)?$/,'<div class="video video-youtube"><iframe width="420" height="315" src="//www.youtube.com/embed/$7" frameborder="0" allowfullscreen></iframe></div>').replace(/^https?:\/\/vimeo\.com(\/.+)?\/([0-9]+)$/,'<div class="video video-vimeo"><iframe src="//player.vimeo.com/video/$2" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>').replace(/^https:\/\/twitter\.com\/(\w+)\/status\/(\d+)\/?$/,'<blockquote class="twitter-tweet" align="center" lang="en"><a href="https://twitter.com/$1/statuses/$2"></a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>').replace(/^(https:\/\/www\.facebook\.com\/(.*))$/,'<script src="//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.2" async></script><div class="fb-post" data-href="$1"><div class="fb-xfbml-parse-ignore"><a href="$1">Loading Facebook post...</a></div></div>').replace(/^https?:\/\/instagram\.com\/p\/(.+)\/?$/,'<span class="instagram"><iframe src="//instagram.com/p/$1/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"></iframe></span>'),/<("[^"]*"|'[^']*'|[^'">])*>/.test(d)===!1?(a.proxy(this,"convertBadEmbed",b)(),!1):void(c?this.embed(d,b):this.embed(d))):(a.proxy(this,"convertBadEmbed",b)(),!1)},e.prototype.embed=function(b,c){var d,e=this.$el.find(".medium-insert-embeds-active");return b?(b.indexOf("</script>")>-1&&(d=a("<div>").attr("data-embed-code",b).html(b),b=a("<div>").append(d).html()),c?(e=this.$el.find(":not(iframe, script, style)").contents().filter(function(){return 3===this.nodeType&&this.textContent.indexOf(c)>-1}).parent(),e.after(this.templates["src/js/templates/embeds-wrapper.hbs"]({html:b})),e.text(e.text().replace(c,""))):(e.after(this.templates["src/js/templates/embeds-wrapper.hbs"]({html:b})),e.remove()),this.core.triggerInput(),-1!==b.indexOf("facebook")&&"undefined"!=typeof FB&&setTimeout(function(){FB.XFBML.parse()},2e3),void 0):(alert("Incorrect URL format specified"),!1)},e.prototype.convertBadEmbed=function(b){var c,d,e,f=this.templates["src/js/templates/core-empty-line.hbs"]().trim();c=this.$el.find(".medium-insert-embeds-active"),e=a(f),c.before(e),c.remove(),e.html(b),d=a(f),e.after(d),this.core.triggerInput(),this.core.moveCaret(d)},e.prototype.selectEmbed=function(b){var c,d=this;this.core.options.enabled&&(c=a(b.target).hasClass("medium-insert-embeds")?a(b.target):a(b.target).closest(".medium-insert-embeds"),c.addClass("medium-insert-embeds-selected"),setTimeout(function(){d.addToolbar(),d.options.captions&&d.core.addCaption(c.find("figure"),d.options.captionPlaceholder)},50))},e.prototype.unselectEmbed=function(b){var c=a(b.target).hasClass("medium-insert-embeds")?a(b.target):a(b.target).closest(".medium-insert-embeds"),d=this.$el.find(".medium-insert-embeds-selected");return c.hasClass("medium-insert-embeds-selected")?(d.not(c).removeClass("medium-insert-embeds-selected"),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),this.core.removeCaptions(c.find("figcaption")),void((a(b.target).is(".medium-insert-caption-placeholder")||a(b.target).is("figcaption"))&&(c.removeClass("medium-insert-embeds-selected"),this.core.removeCaptionPlaceholder(c.find("figure"))))):(d.removeClass("medium-insert-embeds-selected"),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),void(a(b.target).is(".medium-insert-caption-placeholder")?this.core.removeCaptionPlaceholder(c.find("figure")):a(b.target).is("figcaption")===!1&&this.core.removeCaptions()))},e.prototype.removeEmbed=function(b){var c,d;(8===b.which||46===b.which)&&(c=this.$el.find(".medium-insert-embeds-selected"),c.length&&(b.preventDefault(),a(".medium-insert-embeds-toolbar, .medium-insert-embeds-toolbar2").remove(),d=a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),c.before(d),c.remove(),this.core.hideAddons(),this.core.moveCaret(d),this.core.triggerInput()))},e.prototype.addToolbar=function(){var b,c,d,e,f,g=this.$el.find(".medium-insert-embeds-selected"),h=!1;0!==g.length&&(e=this.core.getEditor(),f=e.options.elementsContainer||"body",a(f).append(this.templates["src/js/templates/embeds-toolbar.hbs"]({styles:this.options.styles,actions:this.options.actions}).trim()),b=a(".medium-insert-embeds-toolbar"),c=a(".medium-insert-embeds-toolbar2"),d=g.offset().top-b.height()-8-2-5,0>d&&(d=0),b.css({top:d,left:g.offset().left+g.width()/2-b.width()/2}).show(),c.css({top:g.offset().top+2,left:g.offset().left+g.width()-c.width()-4}).show(),b.find("button").each(function(){g.hasClass("medium-insert-embeds-"+a(this).data("action"))&&(a(this).addClass("medium-editor-button-active"),h=!0)}),h===!1&&b.find("button").first().addClass("medium-editor-button-active"))},e.prototype.toolbarAction=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=c.closest("li"),e=d.closest("ul"),f=e.find("li"),g=this.$el.find(".medium-insert-embeds-selected"),h=this;c.addClass("medium-editor-button-active"),d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"),f.find("button").each(function(){var b="medium-insert-embeds-"+a(this).data("action");a(this).hasClass("medium-editor-button-active")?(g.addClass(b),h.options.styles[a(this).data("action")].added&&h.options.styles[a(this).data("action")].added(g)):(g.removeClass(b),h.options.styles[a(this).data("action")].removed&&h.options.styles[a(this).data("action")].removed(g))}),this.core.triggerInput()},e.prototype.toolbar2Action=function(b){var c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=this.options.actions[c.data("action")].clicked;d&&d(this.$el.find(".medium-insert-embeds-selected")),this.core.triggerInput()},a.fn[f+g]=function(b){return this.each(function(){a.data(this,"plugin_"+f+g)||a.data(this,"plugin_"+f+g,new e(this,b))})}}(jQuery,window,document),function(a,b,d,e,f){"use strict";function g(c,d){this.el=c,this.$el=a(c),this.$currentImage=null,this.templates=b.MediumInsert.Templates,this.core=this.$el.data("plugin_"+h),this.options=a.extend(!0,{},j,d),this._defaults=j,this._name=h,this.options.preview&&!b.FileReader&&(this.options.preview=!1),this.core.getEditor()&&(this.core.getEditor()._serializePreImages=this.core.getEditor().serialize,this.core.getEditor().serialize=this.editorSerialize),this.init()}var h="mediumInsert",i="Images",j={label:'<span class="fa fa-camera"></span>',deleteMethod:"POST",deleteScript:"delete.php",preview:!0,captions:!0,captionPlaceholder:"Type caption for image (optional)",autoGrid:3,fileUploadOptions:{url:"upload.php",acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i},fileDeleteOptions:{},styles:{wide:{label:'<span class="fa fa-align-justify"></span>'},left:{label:'<span class="fa fa-align-left"></span>'},right:{label:'<span class="fa fa-align-right"></span>'},grid:{label:'<span class="fa fa-th"></span>'}},actions:{remove:{label:'<span class="fa fa-times"></span>',clicked:function(){var b=a.Event("keydown");b.which=8,a(d).trigger(b)}}},sorting:function(){var b=this;a(".medium-insert-images").sortable({group:"medium-insert-images",containerSelector:".medium-insert-images",itemSelector:"figure",placeholder:'<figure class="placeholder">',handle:"img",nested:!1,vertical:!1,afterMove:function(){b.core.triggerInput()}})},messages:{acceptFileTypesError:"This file is not in a supported format: ",maxFileSizeError:"This file is too big: "}};g.prototype.init=function(){var a=this.$el.find(".medium-insert-images");a.find("figcaption").attr("contenteditable",!0),a.find("figure").attr("contenteditable",!1),this.events(),this.backwardsCompatibility(),this.sorting()},g.prototype.events=function(){a(d).on("click",a.proxy(this,"unselectImage")).on("keydown",a.proxy(this,"removeImage")).on("click",".medium-insert-images-toolbar .medium-editor-action",a.proxy(this,"toolbarAction")).on("click",".medium-insert-images-toolbar2 .medium-editor-action",a.proxy(this,"toolbar2Action")),this.$el.on("click",".medium-insert-images img",a.proxy(this,"selectImage"))},g.prototype.backwardsCompatibility=function(){this.$el.find(".mediumInsert").removeClass("mediumInsert").addClass("medium-insert-images"),this.$el.find(".medium-insert-images.small").removeClass("small").addClass("medium-insert-images-left")},g.prototype.editorSerialize=function(){var b=this._serializePreImages();return a.each(b,function(c){var d=a("<div />").html(b[c].value);d.find(".medium-insert-images").find("figcaption, figure").removeAttr("contenteditable"),b[c].value=d.html()}),b},g.prototype.add=function(){var b=this,c=a(this.templates["src/js/templates/images-fileupload.hbs"]()),d={dataType:"json",add:function(c,d){a.proxy(b,"uploadAdd",c,d)()},done:function(c,d){a.proxy(b,"uploadDone",c,d)()}};(new XMLHttpRequest).upload&&(d.progress=function(c,d){a.proxy(b,"uploadProgress",c,d)()},d.progressall=function(c,d){a.proxy(b,"uploadProgressall",c,d)()}),c.fileupload(a.extend(!0,{},this.options.fileUploadOptions,d)),c.click()},g.prototype.uploadAdd=function(b,c){var d,e=this.$el.find(".medium-insert-active"),f=this,g=[],h=c.files[0],i=this.options.fileUploadOptions.acceptFileTypes,j=this.options.fileUploadOptions.maxFileSize;return i&&!i.test(h.type)?g.push(this.options.messages.acceptFileTypesError+h.name):j&&h.size>j&&g.push(this.options.messages.maxFileSizeError+h.name),g.length>0?void alert(g.join("\n")):(this.core.hideButtons(),e.is("p")&&(e.replaceWith('<div class="medium-insert-active">'+e.html()+"</div>"),e=this.$el.find(".medium-insert-active"),e.next().is("p")?this.core.moveCaret(e.next()):(e.after("<p><br></p>"),this.core.moveCaret(e.next()))),e.addClass("medium-insert-images"),this.options.preview===!1&&0===e.find("progress").length&&(new XMLHttpRequest).upload&&e.append(this.templates["src/js/templates/images-progressbar.hbs"]()),void((c.autoUpload||c.autoUpload!==!1&&a(b.target).fileupload("option","autoUpload"))&&c.process().done(function(){f.options.preview?(d=new FileReader,d.onload=function(b){a.proxy(f,"showImage",b.target.result,c)()},d.readAsDataURL(c.files[0])):c.submit()})))},g.prototype.uploadProgressall=function(a,b){var c,d;this.options.preview===!1&&(c=parseInt(b.loaded/b.total*100,10),d=this.$el.find(".medium-insert-active").find("progress"),d.attr("value",c).text(c),100===c&&d.remove())},g.prototype.uploadProgress=function(a,b){var c,d;this.options.preview&&(c=100-parseInt(b.loaded/b.total*100,10),d=b.context.find(".medium-insert-images-progress"),d.css("width",c+"%"),0===c&&d.remove())},g.prototype.uploadDone=function(b,c){a.proxy(this,"showImage",c.result.files[0].url,c)(),this.core.clean(),this.sorting()},g.prototype.showImage=function(b,c){var d,e,f=this.$el.find(".medium-insert-active");return f.click(),e=this,this.options.preview&&c.context?(d=this.getDOMImage(),d.onload=function(){c.context.find("img").attr("src",d.src),this.options.uploadCompleted&&this.options.uploadCompleted(c.context,c),e.core.triggerInput()}.bind(this),d.src=b):(c.context=a(this.templates["src/js/templates/images-image.hbs"]({
img:b,progress:this.options.preview})).appendTo(f),f.find("br").remove(),this.options.autoGrid&&f.find("figure").length>=this.options.autoGrid&&(a.each(this.options.styles,function(a,b){var c="medium-insert-images-"+a;f.removeClass(c),b.removed&&b.removed(f)}),f.addClass("medium-insert-images-grid"),this.options.styles.grid.added&&this.options.styles.grid.added(f)),this.options.preview?c.submit():this.options.uploadCompleted&&this.options.uploadCompleted(c.context,c)),this.core.triggerInput(),c.context},g.prototype.getDOMImage=function(){return new b.Image},g.prototype.selectImage=function(b){var c,d=this;this.core.options.enabled&&(c=a(b.target),this.$currentImage=c,this.$el.blur(),c.addClass("medium-insert-image-active"),c.closest(".medium-insert-images").addClass("medium-insert-active"),setTimeout(function(){d.addToolbar(),d.options.captions&&d.core.addCaption(c.closest("figure"),d.options.captionPlaceholder)},50))},g.prototype.unselectImage=function(b){var c=a(b.target),d=this.$el.find(".medium-insert-image-active");return c.is("img")&&c.hasClass("medium-insert-image-active")?(d.not(c).removeClass("medium-insert-image-active"),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),void this.core.removeCaptions(c)):(d.removeClass("medium-insert-image-active"),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),c.is(".medium-insert-caption-placeholder")?this.core.removeCaptionPlaceholder(d.closest("figure")):c.is("figcaption")===!1&&this.core.removeCaptions(),void(this.$currentImage=null))},g.prototype.removeImage=function(e){var f,g,h,i,j,k,l,m,n,o,p=[],q=this.$el.find(".medium-insert-image-active");if((8===e.which||46===e.which)&&(q.length&&p.push(q),h=b.getSelection(),h&&h.rangeCount&&(i=h.getRangeAt(0),j=i.commonAncestorContainer,l="#text"===j.nodeName?a(j).parent():a(j),k=c.selection.getCaretOffsets(j).left,8===e.which&&0===k?m=l.prev():46===e.which&&k===l.text().length&&(m=l.next()),m&&m.hasClass("medium-insert-images")&&p.push(m.find("img")),n=c.selection.getSelectionHtml(d),n&&a("<div></div>").html(n).find(".medium-insert-images img").each(function(){p.push(a(this))})),p.length)){for(o=0;o<p.length;o++)this.deleteFile(p[o].attr("src")),f=p[o].closest(".medium-insert-images"),p[o].closest("figure").remove(),0===f.find("figure").length&&(g=f.next(),(g.is("p")===!1||""!==g.text())&&(g=a(this.templates["src/js/templates/core-empty-line.hbs"]().trim()),f.before(g)),f.remove());this.core.hideAddons(),!n&&g&&(e.preventDefault(),this.core.moveCaret(g)),a(".medium-insert-images-toolbar, .medium-insert-images-toolbar2").remove(),this.core.triggerInput()}},g.prototype.deleteFile=function(b){this.options.deleteScript&&a.ajax(a.extend(!0,{},{url:this.options.deleteScript,type:this.options.deleteMethod||"POST",data:{file:b}},this.options.fileDeleteOptions))},g.prototype.addToolbar=function(){var b,c,d,e=this.$el.find(".medium-insert-image-active"),f=e.closest(".medium-insert-images"),g=!1,h=this.core.getEditor(),i=h.options.elementsContainer||"body";a(i).append(this.templates["src/js/templates/images-toolbar.hbs"]({styles:this.options.styles,actions:this.options.actions}).trim()),b=a(".medium-insert-images-toolbar"),c=a(".medium-insert-images-toolbar2"),d=e.offset().top-b.height()-8-2-5,0>d&&(d=0),b.css({top:d,left:e.offset().left+e.width()/2-b.width()/2}).show(),c.css({top:e.offset().top+2,left:e.offset().left+e.width()-c.width()-4}).show(),b.find("button").each(function(){f.hasClass("medium-insert-images-"+a(this).data("action"))&&(a(this).addClass("medium-editor-button-active"),g=!0)}),g===!1&&b.find("button").first().addClass("medium-editor-button-active")},g.prototype.toolbarAction=function(b){var c,d,e,f,g,h=this;null!==this.$currentImage&&(c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=c.closest("li"),e=d.closest("ul"),f=e.find("li"),g=this.$el.find(".medium-insert-active"),c.addClass("medium-editor-button-active"),d.siblings().find(".medium-editor-button-active").removeClass("medium-editor-button-active"),f.find("button").each(function(){var b="medium-insert-images-"+a(this).data("action");a(this).hasClass("medium-editor-button-active")?(g.addClass(b),h.options.styles[a(this).data("action")].added&&h.options.styles[a(this).data("action")].added(g)):(g.removeClass(b),h.options.styles[a(this).data("action")].removed&&h.options.styles[a(this).data("action")].removed(g))}),this.core.hideButtons(),this.core.triggerInput())},g.prototype.toolbar2Action=function(b){var c,d;null!==this.$currentImage&&(c=a(b.target).is("button")?a(b.target):a(b.target).closest("button"),d=this.options.actions[c.data("action")].clicked,d&&d(this.$el.find(".medium-insert-image-active")),this.core.hideButtons(),this.core.triggerInput())},g.prototype.sorting=function(){a.proxy(this.options.sorting,this)()},a.fn[h+i]=function(b){return this.each(function(){a.data(this,"plugin_"+h+i)||a.data(this,"plugin_"+h+i,new g(this,b))})}}(jQuery,window,document,c.util)});
//# sourceMappingURL=app.js.map
