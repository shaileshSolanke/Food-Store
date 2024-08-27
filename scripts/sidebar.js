import {categories} from '../data/categories-data.js'

const sideBar=document.querySelector('.sidebar');

categories.forEach((c)=>{
    const sublist=c.subTypes.map((st)=>`<li><a href="${st[1]}">${st[0]}</a></li>`).join("")
sideBar.innerHTML+=
`<div class="sidebar-list">
        <div class="sidebar-list-title">
          <p>${c.type.toUpperCase()}</p>
          <img src="./assets/icons/plus-small.svg" alt="" />
        </div>
        <ul class="sidebar-list-sublist">
            ${sublist}
        </ul>
      </div>`;
})

const navLeft=document.querySelector('.nav-left')

navLeft.addEventListener('click',()=>{
    navLeft.classList.toggle('sideactive')
})

const sideBarList = document.querySelectorAll(".sidebar-list");

sideBarList.forEach((list)=>{
    list.addEventListener('click',(e)=>{
        list.classList.toggle('active')
        e.stopPropagation()
    })
})