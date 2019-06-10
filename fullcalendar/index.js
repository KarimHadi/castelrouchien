
$(document).ready(function () {





    var calendar = $('#calendar').fullCalendar({

        events: './../../mod.calendrier/controler/loadAll.php',
        editable: true,
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        eventRender: function (event, element, view) {





            if (event.eventType == '1') {
                element.css({
                    'background-color': '#ADD8E6',
                    'border-color': 'black',
                });
            } else if (event.eventType == '2') {
                element.css({
                    'background-color': 'orange',
                    'border-color': 'black',
                });
            } else if (event.eventType == '3') {
                element.css({
                    'background-color': '#FFA07A',
                    'border-color': 'black',
                });
            }

            return $('input[type=radio][name=user_selector]:checked').val() === 'all'

                    || event.eventType.indexOf($("input[type=radio][name=user_selector]:checked").val()) >= 0
        },
        navLinks: true,
        editable: true,
        eventLimit: true,
        selectable: true,
        selectHelper: true,

        select: function (event, jsEvent, view) {

            var id = event.id;
            var retour = 0;


            $('#modalTitle').html(event.title);
            $('#modalBody').removeData('bs.modal')
            $('#eventUrl').attr('href', event.url);
            $('#calendarModal').modal();




            $(".modal").on("hidden.bs.modal", function () {
                $(".modal-body1").html('<input id="swal-input1" class="swal2-input">');
                $(".modal-body2").html('<input type="datetime-local" id="swal-input2" class="form-control">');
                $(".modal-body3").html('<input type="datetime-local" id="swal-input3" class="swal2-input">');
                $(".modal-body4").html(' <input id="swal-input6" class="swal2-input">');

            });
            $('#calendarModal').on('hidden.bs.modal', function () {
                $('#calendar').fullCalendar('refetchEvents');
            });




        },
        eventResize: function (event)
        {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
            var id = event.id;
            $.ajax({
                url: "./../../mod.calendrier/controler/update.php",
                type: "POST",
                data: {title: title, start_event: start, end_event: end, id: id},
                success: function ()
                {
                    calendar.fullCalendar('refetchEvents');
                    alert(start + " start: " + end + " end: ");
                }
            });
        }
        ,
        eventDrop: function (event)
        {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD HH:mm:ss");
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD HH:mm:ss");
            var title = event.title;
             var obs = event.obs;
            var clientName = event.clientName;
            var animalName = event.animalName;
             id = event.id;
            $.ajax({
                url: "./../../mod.calendrier/controler/update.php",
                type: "POST",
                data: {title: title, start_event: start, end_event: end, id: id, client_event: clientName, animal_event: animalName, obs_event:obs },
                success: function ()
                {
                    calendar.fullCalendar('refetchEvents');
                }
            });
        }
        ,
        eventClick: function (event)
        {
            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD");
            var start2 = $.fullCalendar.formatDate(event.start, "HH:mm:ss");
            var start3 = "T";
            var start4 = start + start3 + start2;
            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD");
            var end2 = $.fullCalendar.formatDate(event.end, "HH:mm:ss");
            var end3 = "T";
            var end4 = end + end3 + end2;
            var title = event.title;
            var id = event.id;
            var obs = event.obs;
            var clientName = event.clientName;
            var animalName = event.animalName;
            var retour = 0;


            $('#modalBody2').removeData('bs.modal')
            $('#eventUrl').attr('href', event.url);
            $('#calendarModal2').modal();
            $(".modal").on("shown.bs.modal", function () {
                $(".modal-body00").html('<input type ="hidden" id="swal-input00" class="swal2-input" value=' + id + '>');
                $(".modal-body11").html('<input id="swal-input11" class="swal2-input" value=' + title + '>');
                $(".modal-body22").html('<input type="datetime-local" id="swal-input22" class="form-control" value=' + start4 + '>');
                $(".modal-body33").html('<input type="datetime-local" id="swal-input33" class="swal2-input" value=' + end4 + '>');
                $(".modal-body44").html(' <input id="swal-input66" class="swal2-input" value=' + obs + '>');



            });
            $('#calendarModal2').on('hidden.bs.modal', function () {
                $('#calendar').fullCalendar('refetchEvents');
            });


        }

//
//            var start = $.fullCalendar.formatDate(event.start, "Y-MM-DD");
//            var start2 = $.fullCalendar.formatDate(event.start, "HH:mm:ss");
//            var start3 = "T";
//            var start4 = start + start3 + start2;
//            var end = $.fullCalendar.formatDate(event.end, "Y-MM-DD");
//            var end2 = $.fullCalendar.formatDate(event.end, "HH:mm:ss");
//            var end3 = "T";
//            var end4 = end + end3 + end2;
//            var title = event.title;
//            var id = event.id;
//            var obs = event.obs;
//            var clientName = event.clientName;
//            var animalName = event.animalName;
//            (async function getFormValues() {
//                const items = item;
//                const inputOptions = new Map;
//                items.forEach(item => inputOptions.set(item.clientId, item.clientName));
//                const {value: formValues} = await Swal.fire({
//
//                    title: 'EVENEMENT',
//                    input: 'select',
//                    inputOptions,
//                    html:
//                            'Nom evenement' +
//                            '<input id="swal-input1" class="swal2-input" value=' + title + '>' +
//                            'Date de début' +
//                            '<input type="datetime-local" id="swal-input2" class="swal2-input" value="' + start4 + '">' +
//                            'date de fin' +
//                            '<input type="datetime-local" id="swal-input3" class="swal2-input" value="' + end4 + '">' +
//                            'client' +
//                            '<input id="swal-input4" class="swal2-input" value="' + clientName + '">' +
//                            'animal' +
//                            '<input id="swal-input5" class="swal2-input" value="' + animalName + '">' +
//                            'Observation' +
//                            '<input id="swal-input6" class="swal2-input" value="' + obs + '">',
//                    allowOutsideClick: false,
//                    focusConfirm: false,
//                    showCancelButton: true,
//                    cancelButtonColor: '#d33',
//                    cancelButtonText: "Delete",
//                });
//                if (formValues) {
//                    $.ajax({
//                        url: "./../../mod.calendrier/controler/update.php",
//                        type: "POST",
//                        data: {title: (document.getElementById('swal-input1').value),
//                            start_event: (document.getElementById('swal-input2').value),
//                            end_event: (document.getElementById('swal-input3').value),
//                            eventObs: (document.getElementById('swal-input6').value),
//                            id: id},
//                        success: function ()
//                        {
//                            calendar.fullCalendar('refetchEvents');
//                        }
//                    });
//                } else {
//                    Swal.fire({
//                        title: 'Are you sure?',
//                        text: "You won't be able to revert this!",
//                        type: 'warning',
//                        showCancelButton: true,
//                        confirmButtonColor: '#3085d6',
//                        cancelButtonColor: '#d33',
//                        confirmButtonText: 'Yes, delete it!'
//                    }).then((result) => {
//                        if (result.value) {
//                            $.ajax({
//                                url: "./../../mod.calendrier/controler/delete.php",
//                                type: "POST",
//                                data: {id: id},
//                            }),
//                                    Swal.fire(
//                                            'Deleted!',
//                                            'Your file has been deleted.',
//                                            'success'
//                                            )
//                        }
//                    })
//                }
//
//            })();
//        }
//
    }
    );
    $('input[type=radio][name=user_selector]').on('change', function () {
        console.log("Event");
        $('#calendar').fullCalendar('rerenderEvents');
    });
    var f = document.getElementById('data123');
    var att = document.createAttribute("id");


});


function insert() {

    $.ajax({
        url: "./../../mod.calendrier/controler/insert.php",
        type: "POST",
        data: {title: (document.getElementById('swal-input1').value),
            start_event: (document.getElementById('swal-input2').value),
            end_event: (document.getElementById('swal-input3').value),
            client_event: (document.getElementById('selectClient').value),
            animal_event: (document.getElementById('selectAnimal').value),
            obs_event: (document.getElementById('swal-input6').value)},
        success: function () {
            return retour = 1;

        }
    });
}


function insert2() {
   id = id;
    $.ajax({
        url: "./../../mod.calendrier/controler/update.php",
        type: "POST",
        data: {title: (document.getElementById('swal-input11').value),
            start_event: (document.getElementById('swal-input22').value),
            end_event: (document.getElementById('swal-input33').value),
            client_event: (document.getElementById('selectClients').value),
            animal_event: (document.getElementById('selectAnimals').value),
            obs_event: (document.getElementById('swal-input66').value),
        id:id},
        success: function () {
            return retour = 1;

        }
    });
}

//$('#selectClient').change(function) () {
//    function myFunction() {
//        var clientId=event.clientId;
//        var idClient = document.getElementById("mySelect").value;
//        
//                function (data) {
//                    $.ajax({
//                        url: "./../../mod.calendrier/controler/animal.php",
//                        type: "POST",
//                        data: {
//                            clientId: clientId},
//                        success: function ()
//                        {
//                            consol.log($data);
//                            consol.log($liste);
//                            consol.log($clientId);
//                            calendar.fullCalendar('refetchEvents');
//                        }
//                    });
//
//                },
//                'json'
//                );
//
//    }
//    ;
//});


function rechercherAnimal() {
    var idClient = document.getElementById("selectClient").value;
    if (idClient) {
        $.ajax({
            url: "./../../mod.calendrier/controler/animal.php",
            type: "POST",
            data: {
                clientId: idClient},
            success: function (data)
            {
                document.getElementById('selectAnimal').innerHTML = "";
                var listeAnimal = JSON.parse(data);

                for (var i = 0; i < listeAnimal.length; i++) {
                    $('<option>', {
                        value: listeAnimal[i].animalId,
                        text: listeAnimal[i].animalName,

                    }).appendTo(selectAnimal);
                }
                $('#calendar').fullCalendar('refetchEvents');

            }
        });

    }
    ;
    'json';
}
;

function rechercherAnimal2() {
    var idClient = document.getElementById("selectClients").value;
    if (idClient) {
        $.ajax({
            url: "./../../mod.calendrier/controler/animal.php",
            type: "POST",
            data: {
                clientId: idClient},
            success: function (data)
            {
                document.getElementById('selectAnimals').innerHTML = "";
                var listeAnimal = JSON.parse(data);

                for (var i = 0; i < listeAnimal.length; i++) {
                    $('<option>', {
                        value: listeAnimal[i].animalId,
                        text: listeAnimal[i].animalName,

                    }).appendTo(selectAnimals);
                }
                $('#calendar').fullCalendar('refetchEvents');

            }
        });

    }
    ;
    'json';
}
;
 