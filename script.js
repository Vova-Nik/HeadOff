

const  tab_header_left = document.querySelector(".tab-header-left");
const  tab_header_right = document.querySelector(".tab-header-right");
const  text_container = document.querySelector(".text-container");
//const  img_container = document.querySelector(".img-container");
//const  tab_main_left = document.querySelector(".tab-main-left");
const  tab_main_right = document.querySelector(".tab-main-right");
const  tab_main = document.querySelector(".tab-main");
const  footer_left = document.querySelector(".tab-footer-left");
const  footer_right = document.querySelector(".tab-footer-right");

let active_tab = "apks";

updateTab = function (dataArray) {
    const hg = "60%";
    tab_main.innerHTML = '';
    footer_left.innerHTML = footer_left_content;
    footer_right.innerHTML = footer_right_content;

    dataArray.forEach((element, index) => {
        let idd = "cont-" + index;
        tab_main.innerHTML += `
                <div class="tab-main-left">
                        <div class="img-container" id=${idd}> <a href=${element.url}><img src="img/window.svg" align="center" width=101% /></a></div>
                    </div>
                    <div class="vl-container"><img src="./img/vl.png" height=${hg} width="2px"></div>
                    <div class="tab-main-right">
                        <div class="text-container">${element.text}</div>
                    </div>
                </div>
            `;
           let ic = document.querySelector(`#cont-${index}`);
           ic.style = `
                    width: 64%;
                    background-color: rgb(13, 13, 13);
                    margin: auto;
                    background-image: url(${element.img_url});
                    background-size: contain;
                    padding: -10px
                    `;
     });
    //  background-image: url(img/capture.jpg); margin: auto; background-size: cover;background-image: url(${element.img_url});
}

tab_header_left.classList.remove('passive-tab-header');
tab_header_right.classList.add('passive-tab-header');
updateTab(apk_tab);

tab_header_left.onclick = () => {
    active_tab = "apks";
    tab_header_left.classList.remove('passive-tab-header');
    tab_header_right.classList.add('passive-tab-header');
    // fill(apk_tab[0]);
    updateTab(apk_tab);
};

tab_header_right.onclick = () => {
    active_tab = "unity";
    tab_header_left.classList.add('passive-tab-header');
    tab_header_right.classList.remove('passive-tab-header');
    updateTab(unity_tab);
};


