// ---------- menu bar ----------
// get info menu bar
let bar = document.querySelector('#bar');
let aside = document.querySelector('aside');
let body = document.querySelector('body');
let back = document.querySelector('#back');
let scroll;
// function menu bar
// when click at bars show mwnu bar div
bar.onclick = function(){
    // change icon bar
    if(bar.classList.toggle('open')){
        body.classList.add('noneScroll');
        aside.classList.add('block');
        setTimeout(()=>{
            aside.classList.add('animate');
        },1);
        bar.src = `assets/img/icon-close.svg`;
        body.classList.add('overlay');
    }else{
        bar.src = `assets/img/bars.svg`;
        aside.classList.remove('animate');
        aside.classList.remove('block');
        body.classList.remove('overlay');
        body.classList.remove('noneScroll');
    }
}
let infoText = document.querySelectorAll('.infotext');
let articleShow = document.querySelector('.showArticles');
infoText.forEach((info)=>{
    info.onclick = function(){
        scroll = scrollY;
        articleShow.classList.add('show');
        console.log(info.parentNode.children[1]);
        let imgsrc = rex(`${info.parentNode.children[0].children[0].src}`);
        let author = info.parentNode.children[1].children[0].innerText;
        let title = info.parentNode.children[1].children[1].innerText;
        let article =info.parentNode.children[1].children[2].innerText ;
        console.log(author);
        showArticles(article,imgsrc,title,author);
        // hidden all element in page
        scrollTo(0,0);
        let arr = [document.querySelector('body').children[1],
        document.querySelector('body').children[2],
        document.querySelector('body').children[3]];
arr.forEach((ch)=>{
    ch.classList.add('hidden');
});
back.onclick = function(){
    arr.forEach((ch)=>{
        ch.classList.remove('hidden');
    });
    articleShow.classList.remove('show');
    scrollTo(0,scroll);
}
    }
})  ;

// show Articles ////
function showArticles(article,src,title,author){
    let articlesShowH3 = document.querySelector('.showArticles h3');
    let imgarticleShow = document.querySelector('.showArticles #imgartcl');
    let artclAll = document.querySelector('.artclAll .text');
    let aThr = document.querySelector('.author');
    console.log(aThr);
    articlesShowH3.innerText = title;
    console.log(imgarticleShow)
    imgarticleShow.src = `${src}`;
    artclAll.innerText = article;
    aThr.innerHTML = author;
    console.log(aThr);
}
// function rex
function rex(src){
    let exp = /\w+\/\w+\/\w+-\w+.\w+/ig
    let textexp = src.match(exp);
    console.log(textexp);
    return textexp[0]
}
// -------- functions dark mode ----------
let dark = document.querySelector('#dark');
let light = document.querySelector('#light');
dark.onclick = function(){
    dark.classList.add('hidden');
    light.classList.add('noHidden');
    body.classList.add('darkmode');
    light.onclick = function(){
        dark.classList.remove('hidden');
        light.classList.remove('noHidden');
        body.classList.remove('darkmode');
    }
}