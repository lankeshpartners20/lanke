const chk1 = document.querySelector('.menu')
            const chk1Icon = document.querySelector('.chk1 i')
            const dropDownMenu = document.querySelector('.dropdownmenu')
    
            chk1.onclick = function(){
                dropDownMenu.classList.toggle('open')
            }

var slideImg = document.getElementById("slideImg");

            var images = new Array(
                "Pictures/OIP (4).jpeg",
                "Pictures/Law-Firm.jpg",
                "Pictures/office.jpeg",
                "Pictures/R.jpeg"
            );

            var len = images.length;
            var i = 0;

            function slider(){
                if(i > len-1){
                    i = 0;
                }
                slideImg.src = images[i];
                i++;
                setTimeout('slider()',4000);
            }

let accordians = document.querySelectorAll('.accordian-wrapper .accordian');
accordians.forEach((acco) =>{
    acco.onclick = () =>{
        accordians.forEach((subcontent) =>{
            subcontent.classList.remove("active");
        });
        acco.classList.add("active");
    }
});


const readmore = document.querySelector('.see-more');
const text = document.querySelector('.tt');

readmore.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');

    if(readmore.innerText === 'Read More'){
        readmore.innerText = 'Read Less';
    }else{
        readmore.innerText = 'Read More';
    }
})

const readmore1 = document.querySelector('.see-more1');
const text1 = document.querySelector('.tt1');

readmore1.addEventListener('click',(e)=>{
    text1.classList.toggle('show-more1');

    if(readmore1.innerText === 'Read More'){
        readmore1.innerText = 'Read Less';
    }else{
        readmore1.innerText = 'Read More';
    }
})

const readmore2 = document.querySelector('.see-more2');
const text2 = document.querySelector('.tt2');

readmore2.addEventListener('click',(e)=>{
    text2.classList.toggle('show-more2');

    if(readmore2.innerText === 'Read More'){
        readmore2.innerText = 'Read Less';
    }else{
        readmore2.innerText = 'Read More';
    }
})

const readmore3 = document.querySelector('.see-more3');
const text3 = document.querySelector('.tt3');

readmore3.addEventListener('click',(e)=>{
    text3.classList.toggle('show-more3');

    if(readmore3.innerText === 'Read More'){
        readmore3.innerText = 'Read Less';
    }else{
        readmore3.innerText = 'Read More';
    }
})

const readmore4 = document.querySelector('.see-more4');
const text4 = document.querySelector('.tt4');

readmore4.addEventListener('click',(e)=>{
    text4.classList.toggle('show-more4');

    if(readmore4.innerText === 'Read More'){
        readmore4.innerText = 'Read Less';
    }else{
        readmore4.innerText = 'Read More';
    }
})

const readmore5 = document.querySelector('.see-more5');
const text5 = document.querySelector('.tt5');

readmore5.addEventListener('click',(e)=>{
    text5.classList.toggle('show-more5');

    if(readmore5.innerText === 'Read More'){
        readmore5.innerText = 'Read Less';
    }else{
        readmore5.innerText = 'Read More';
    }
})
