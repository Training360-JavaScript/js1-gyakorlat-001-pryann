const handleClick = () => {
    document.querySelectorAll('button.button').forEach( button => {
        button.addEventListener( 'click', (ev) => {
            console.log(ev.target.innerText);
        });
    })
};

handleClick();
