var myTimer = 5;
const changeColor = (elemet) => {

    const myInterval = setInterval(() => {
        $(elemet).attr('disabled', 'disabled');
        $('i', elemet).removeClass();
        $('i', elemet).addClass(' p-1 fa fa-spin fa-spinner')
        myTimer -= 1;

        if (myTimer === 0) {
            clearInterval(myInterval);

            let mycolorid = $('#colorId').val();
            $('#bodyId').css("background-color", mycolorid);
            $(elemet).removeAttr('disabled');
            myTimer = 5;
            $('i', elemet).removeClass();
            $('i', elemet).addClass('p-1 fa fa-paint-brush')
        }

        $('#btnTimer').text(myTimer);


    }, 1000);


}