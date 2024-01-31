
const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "MCA Student";
            }, 0);
             setTimeout(() => {
                text.textContent = "MCA Student";
            }, 4000);
           setTimeout(() => {
                text.textContent = "MCA Student";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

 

