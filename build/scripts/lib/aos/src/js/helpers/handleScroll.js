
const setState=function(el,top,once){const attrOnce=el.node.getAttribute('data-aos-once');if(top>el.position){el.node.classList.add('aos-animate');}else if(typeof attrOnce!=='undefined'){if(attrOnce==='false'||(!once&&attrOnce!=='true')){el.node.classList.remove('aos-animate');}}};const handleScroll=function($elements,once){const scrollTop=window.pageYOffset;const windowHeight=window.innerHeight;$elements.forEach((el,i)=>{setState(el,windowHeight+scrollTop,once);});};export default handleScroll;