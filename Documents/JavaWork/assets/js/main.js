const form = document.querySelector('form');
const msg = document.querySelector('.msgs');
const tasks = document.querySelector('#task');
const ul = document.querySelector('.list-group');
const button = document.querySelector('.move')
const span = document.querySelector('.span')

 form.addEventListener('submit', todoApp);
 button.addEventListener('submit', redoApp);

function todoApp(e){
    e.preventDefault();

    if(tasks.value===''){
        msg.innerHTML='Please enter a task';
        msg.classList.add('error')

         setTimeout(function(){
            msg.innerHTML = ""
            msg.classList.remove('error')
        },2500)

    }
    
    
    else{

        const li = document.createElement('li');
        const span = document.createElement('span')
        span.appendChild(document.createTextNode('x'))
        span.classList.add('span')

        li.appendChild(span)
        //li.className='list-group-item';

        li.appendChild(document.createTextNode(`${tasks.value}`));
        ul.appendChild(li);

        msg.innerHTML='Added a new task';
        msg.classList.add('success')

        setTimeout(function(){
            msg.innerHTML = ""
            msg.classList.remove('success')
        },2500)

        span.addEventListener('click', removeList);

        tasks.value=''

    }
}



button.addEventListener('click', redoApp)

function redoApp(e){
    e.preventDefault();

    ul.innerHTML= ''
}

function removeList(e) {
    e.preventDefault();
    //console.log(this.parentElement)
    this.parentElement.remove()
}

// dark mode

const dm = document.querySelector('#drk');
const lm = document.querySelector('#lght');

dm.addEventListener('click',function(){
const forms= document.querySelector('#book');
const card= document.querySelector('.card');

card.style.backgroundColor='black'
card.style.color='white'
forms.style.backgroundColor='black'
forms.style.color='white'

})
lm.addEventListener('click',function(){
const forms= document.querySelector('#book');
const card= document.querySelector('.card');

card.style.backgroundColor='white'
card.style.color='black'

})



// for book list
const forms= document.querySelector('#book');
const title= document.querySelector('#title');
const author= document.querySelector('#author');
const srn= document.querySelector('#srn');
const amnt= document.querySelector('#amt');
const msgs = document.querySelector('.msg');


forms.addEventListener('submit',bookList);

function bookList(e){
    e.preventDefault()

    if(title.value==='' || author.value==='' || srn.value==='' || amnt.value===''){
        msgs.innerHTML='Please enter a book';
        msgs.classList.add('error')

        setTimeout(function(){
            msgs.remove()
        },2500)
    }else{

        const tbody = document.querySelector('#tbody');
        const trow = document.createElement('tr');

        trow.innerHTML = `
            <td> ${title.value} </td>
            <td> ${author.value} </td>
            <td> ${srn.value} </td>
            <td> ${amnt.value} </td>
        `
        console.log(trow);
        tbody.appendChild(trow)

        msgs.innerHTML='A book added successfully';
        msgs.classList.add('success')

        setTimeout(function(){
            msgs.remove()
        },2500)

        title.value=''
        author.value=''
        srn.value=''
        amnt.value=''

    }

}