(function anfalp(win,docu){

    let icone=document.querySelector('.menu_bar')
    let menu=document.querySelector('.ul_container')
    let article=document.querySelectorAll('article')
    let btn_follows=[...document.querySelectorAll('.btn-follows')]
    let form=[...document.querySelectorAll('.form1')]
    let rad=[...document.querySelectorAll('.rad')]
    let btn_message=[...document.querySelectorAll('.btn-messages')]
    let line=[...document.querySelectorAll('.line')]
    let percentagem=document.querySelectorAll('.percentagem')
    let radio=[...document.querySelectorAll('.radio')]
    let arrows=[...document.querySelectorAll('.arrows')]
    let charts_1=document.querySelector('.charst-1')
    let charts_2=document.querySelector('.charst-2')
    let calendar_month_header=document.querySelector('#calendar-month-header')
    let calendar_dates=document.querySelector('#calendar-dates')
    let banner=document.querySelector('#banner')
    const random=(max,min)=> Math.random() * (max-min) + min

    function menu_bar(){
       if(menu.classList.contains("menu")){
        menu.classList.remove("menu")
        icone.setAttribute('src','img/Icones/menu_32px.png')
       }
       else{
        menu.classList.add("menu")
        icone.setAttribute('src','img/Icones/multiply_26px.png')
       }
    }

    for(let i=0;i<btn_follows.length;i++){
        btn_follows[i].addEventListener('click',(event)=>{
                event.preventDefault()
                for(let y=0;y<rad.length;y++){
                if(btn_follows[i].innerHTML==='follows'){
                    btn_follows[i].innerHTML='unfollows'
                    rad[i].style.background='crimson'
                    
                }
                else{
                    btn_follows[i].innerHTML='follows'
                    rad[i].style.background='yellow'   
                }

            }
            },false)
        }

        for(let m=0;m<btn_message.length;m++){
            btn_message[m].addEventListener('click',(event)=>{
                event.preventDefault()
                for(let f=0;f<form.length;f++){
                    if(form[m].classList.contains('form_visibility')){
                        form[m].classList.remove('form_visibility')
                    }
                    else{
                        form[m].classList.add('form_visibility')
                    }
                }
                
            },false)
        }

    icone.addEventListener('click',menu_bar,false)

    let w=0
    function width_line(){
        w++
        let i=''
        line.forEach(function w_line(elem,ind,obj){
            let width=Math.floor(random(90,1))
            for(i=0;i<11;i++){
                line[ind].style.width=`${width}%`
                line[ind].style.background='#99173c'
                percentagem[ind].innerHTML=width+'%';
                //width+=10
                //console.log(i)
            }

        }
        )
        

    setTimeout(width_line,1000)
    }
    width_line()



    window.onload=function(){
        var d=new Date()
        var month_name=['janeiro','fevereiro','marco','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
        var month=d.getMonth();
        var year=d.getFullYear();
        var day=d.getDate()
        var first_date=month_name[month] + ' ' + day + ' ' + year
        var tmp= new Date(first_date).toDateString()
        var first_day=tmp.substring(0,3)
        var day_name=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        var day_no=day_name.indexOf(first_day)
        var days=new Date(year,month+1,0).getDate()
        let calendar=get_calendar(day_no,days)

        calendar_month_header.innerHTML=day+" " +month_name[month]+ " "+year;
        //console.log(calendar)
        calendar_dates.appendChild(calendar)
        
    }

    function get_calendar(day_no,days){
            let table=document.createElement('table')
            let tr=document.createElement('tr')
            for(let i=0;i<=6;i++){
                let td=document.createElement('td')
                td.innerHTML='STQQSSD'[i]
                tr.appendChild(td)
            }
            table.appendChild(tr)

            tr=document.createElement('tr')
            var i=''
            for(i=0;i<=6;i++){
                if(i==day_no){
                    break;
                }
                let td=document.createElement('td')
                td.innerHTML=""
                tr.appendChild(td)
            }
            var count=1
            for(;i<=6;i++){
                let td=document.createElement('td')
                td.innerHTML=count;
                count++;
                tr.appendChild(td)
            }
            
            for(let r=3;r<=6;r++){
                tr=document.createElement('tr')
                for(let c=0;c<=6;c++){
                    if(count>days){
                        table.appendChild(tr)
                        return table;
                    }
                    var td=document.createElement('td')
                    td.innerHTML=count;
                    count++
                    tr.appendChild(td)
                }
                table.appendChild(tr)
            }
    }



})(window,document)