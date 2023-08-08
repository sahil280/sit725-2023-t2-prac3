const cardList = [{
    title: ' Dogs',
    path: 'images/dogs.jpeg',
    subTitle: 'Click on dogs',
    description: 'Dogs are of different breeds and some of them are cute and some of them are not'
},
{
    title: ' Elephant ',
    path: 'images/elephant.jpeg',
    subTitle: 'Click on elephants',
    description: 'Elephants are tall and strong.'
},
{
    title: 'Lion',
    path: 'images/lion.jpeg',
    subTitle: 'Click on lion',
    description: 'Lion hunts at  night.'
}];

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.subTitle+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

const formSumitted = () => {
    let formData = {};
    formData.firstName = $('#first_name').val();
    formData.lastName = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();

    console.log(formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSumitted();
    });
    addCards(cardList);
    $('.modal').modal();
});