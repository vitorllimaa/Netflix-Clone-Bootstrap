function Menu() {
    const button = document.querySelector('button');
    let addclass = document.querySelector('nav');

    button.addEventListener('click', e =>{

        addclass.classList.toggle('sidebar-open');

        //ou

        /* addclass.className === 'navbar navbar-dark bg-dark fixed-top sidebar-open' 
        ? addclass.classList.remove('sidebar-open') 
        :addclass.classList.add('sidebar-open'); */

        if (addclass.className === 'navbar navbar-dark bg-dark fixed-top sidebar-open'){

            const backdrop = document.createElement('div');

            backdrop.classList.add('backdrop');
            document.querySelector('body').appendChild(backdrop);
            
            backdrop.addEventListener('click', e=> {
                addclass.classList.toggle('sidebar-open');
                document.querySelector('.backdrop').remove();
            });
        }else{
            document.querySelector('.backdrop').remove();

        }
        
        
    });
}

Menu();