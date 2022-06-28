/***degree****/
//get the degree of the current temperature  of the weather condition
//alert('this code is working');
//prompt('welcome benjamin please enter your name');
//prompt('and also enter your username');


/***declare varables***/
let clock = () =>{
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day   = today.getDay();
        let date  = today.getDate();
        let hour = today.getHours();
        let min  = today.getMinutes();
        let second  = today.getSeconds();
        const bg = document.getElementsByTagName('body');
        let getMonth = document.getElementById("months-greetings")
        let greeting;

        let getDays = document.getElementById("temps");

        const current_Date = document.getElementById("currentDate");

        /***create the greeting code****/

        if(hour > 16){
            greeting = 'Good Evening!!!';
            document.body.style.backgroundImage="url('img/night.jpg')";
        }else if(hour > 11) {
            greeting ='Good afternoon!!';
            document.body.style.backgroundImage="url('img/afternoon.jpg')";
        }else if(hour  > 0){
            greeting = 'Good morning';
            document.body.style.backgroundImage="url('img/morning.jpg')";
        }else{
            greeting = 'Welcome!';
        }


        let msg= document.getElementById('message-note');
        msg.innerHTML = greeting + '!' + ' bennie';


        let period = "AM";
        if(hour== 0){
            hour = 12;
        }else if( hour >= 12){

            hour = hour - 12;
            period = "PM";
        }
        hour = hour === 12 ? "12" : hour;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        second = second < 10 ? "0" + second : second;

        
        let msg1= document.getElementById('message-date');
        msg1.innerText = `${hour}:${min}  ${period}`;
        setTimeout(clock,1000);


        /***copywrite****/

        const copy = document.getElementById('footer-copyright');
        copy.innerHTML = '<p>Copyright &copy' + year + '</p>';

        /****todays date **/

      

        /**get months*** */
        

    

        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        getMonth.textContent = ` Hello  ${ months[today.getMonth()]}`

        /****get days */
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        getDays.textContent = " Happy " + " " + days[today.getDay()];

        }

clock()



