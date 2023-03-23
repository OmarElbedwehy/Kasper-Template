window.onload = ()=>{
    window.scrollTo({
        left: 0,
    })
}

document.querySelector("header").addEventListener("click", (e)=>{
    if (e.target.id == "toggle"){
        document.querySelector("#nav-links").classList.toggle("active-nav")
    }
})

let landing_pics = ["images/landing-1.jpg", "images/landing-2.jpg", "images/landing-3.jpg"];

const add_imgs = ()=>{
    document.querySelector(".landing").style.backgroundImage = `url(${landing_pics[img_index]})`;
    document.querySelectorAll(".landing ul li").forEach((ele)=>{
        ele.classList.remove("active")
    })
    document.querySelectorAll(".landing ul li")[img_index].classList.add("active");
}

let img_index = 0;
document.querySelector(".landing").style.backgroundImage = `url(${landing_pics[img_index]})`;
let imgs_interval = setInterval(()=>{
    add_imgs();
    img_index++;
    if (img_index == landing_pics.length){
        img_index = 0;
    }
}, 5000);

document.querySelector(".fa-angle-right").addEventListener("click", ()=>{
    img_index++;
    if (img_index == landing_pics.length){
        img_index = 0;
    }
    add_imgs();
});

document.querySelector(".fa-angle-left").addEventListener("click", ()=>{
    if (img_index == 0){
        img_index = landing_pics.length;
    }
    img_index--;
    add_imgs()
})

document.querySelectorAll(".landing ul li").forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        let index = e.target.dataset.index;
        img_index = index;
        add_imgs();
    })
});

window.onscroll = ()=>{
    if (window.scrollY >= document.querySelector(".skills").offsetTop-200){
        document.querySelectorAll(".prog-holder .prog .present span").forEach((ele)=>{
            let pre = ele.dataset.pre;
            ele.style.width = pre;
        })
    }else{
        document.querySelectorAll(".prog-holder .prog .present span").forEach((ele)=>{
            ele.style.width = 0;
        })
    }
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll_top = document.documentElement.scrollTop;
    document.querySelector(".scroll").style.width = `${(scroll_top / height) * 100}%`;
    if (window.scrollY >= document.querySelector(".services").offsetTop){
        document.querySelector(".scroll").style.opacity = "1";
        document.querySelector(".scroll_to_top").style.right = "15px";
    }else{
        document.querySelector(".scroll").style.opacity = "0";
        document.querySelector(".scroll_to_top").style.right = "-60px";
    }
}

document.querySelector(".scroll_to_top").addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
})