!function(){function e(e){e.protect_text&&(document.body.style="-webkit-user-select: none;\n                -webkit-touch-callout: none;\n                -moz-user-select: none;\n                -ms-user-select: none;\n                user-select: none;"),e.stop_keyboard_shortcuts&&document.addEventListener("keydown",function(t){if(123==t.keyCode&&(t.preventDefault(),e.log_legal_notice))return alert("".concat(e.legal_header," \n\n ").concat(e.legal_body," \n\n ").concat(e.legal_footer));if(!(navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)||85!==t.keyCode&&83!==t.keyCode&&65!==t.keyCode&&67!==t.keyCode){if((navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)&&(navigator.platform.match("Mac")?t.altKey:t.shiftKey)&&73===t.keyCode&&(t.preventDefault(),e.log_legal_notice))return alert("".concat(e.legal_header," \n\n ").concat(e.legal_body," \n\n ").concat(e.legal_footer))}else if(t.preventDefault(),e.log_legal_notice)return alert("".concat(e.legal_header," \n\n ").concat(e.legal_body," \n\n ").concat(e.legal_footer))}),e.protect_images&&document.addEventListener("contextmenu",function(e){return e.preventDefault()})}var t=new URLSearchParams({name:StoreBundleBase.unique_name,shop:StoreBundleBase.shop});t=t.toString(),fetch(StoreBundleBase.baseURL+"api/fetch/contentprotection?"+t).then(function(e){return e.json()}).then(function(t){var n=t;switch(n.settings.display.mode.toUpperCase()){case"INDEX":StoreBundleBase.isFrontPage&&e(n.options);break;case"COLLECTION":StoreBundleBase.isCollectionPage&&e(n.options);break;case"PRODUCT":StoreBundleBase.isProductPage&&e(n.options);break;default:e(n.options)}}).catch(function(e){console.error("Error:",e)})}();