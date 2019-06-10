<!DOCTYPE html>
<html>
    <head>
        <title>Cale</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Castelrou'chien</title>
        <!-- plugins:css -->
        <link rel="stylesheet" href="./../../public/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
        <!-- endinject -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

        <!-- inject:css -->
        <link rel="stylesheet" href="./../../public/css/style.css">
        <!-- endinject -->
        <link rel="shortcut icon" href="./../../public/images/favicon.png" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.4.0/fullcalendar.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.css" />
        <link type="text/css" href="//cdn.jsdelivr.net/npm/alpaca@1.5.27/dist/alpaca/bootstrap/alpaca.min.css" rel="stylesheet"/>
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/alpaca@1.5.27/dist/alpaca/bootstrap/alpaca.min.js"></script>
        <script src="./../../public/js/fullcalendar/jquery.min.js"></script>
        <script src="./../../public/js/fullcalendar/jquery-ui.min.js"></script>
        <script src="./../../public/js/fullcalendar/moment.min.js"></script>
        <script src="./../../public/js/fullcalendar/fullcalendar.min.js"></script>
        <script src="./../../public/js/fullcalendar/index.js"></script>




        <script src="./../../public/js/fullcalendar/index.js"></script>




    </head>
    {include file='../../vue/layout/navbar.tpl'}

    <!-- partial:partials/_sidebar.html -->

    {include file='../../vue/layout/sidebar.tpl'}




    {include file='../../vue/layout/breadcrum.tpl'}

    <body>



        <br />
        <h2 align="center">Calendrier</a></h2>
    <br />
    <div id="calendrier" class="container">
        <div id="calendar"></div>
    </div>



    <div id ="userList">
        <div> 
            <input type="radio" name="user_selector" value="all" id="all" checked/>
            <label for="all"> Tout </label>
            <input type="radio" name="user_selector" value="1" id="rdv" />
            <label for="all"> Rdv </label>
            <input type="radio" name="user_selector" value="2" id="vav" />
            <label for="Matt"> Vacances </label>
            <input type="radio" name="user_selector" value="3" id="fer" />
            <label for="Matt"> fermeture </label>
        </div>

        <div id="calendarModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>
                        <h4 id="modalTitle" class="modal-title"></h4>
                    </div>
                    <div id="modalBody" class="modal-body"> </div>
                    Evenement
                    <div class='modal-body1'>
                        <input id="swal-input1" class="swal2-input">
                    </div>
                    <div class='modal-body2'>
                        <input type="datetime-local" id="swal-input2" class="form-control">
                    </div>
                    <div class='modal-body3'>
                        <input type="datetime-local" id="swal-input3" class="swal2-input">
                    </div>
                    <div class='modal-body4'>
                        <input id="swal-input6" class="swal2-input">
                    </div>
                    <div class='modal-body5'>
                        <select name="selectClient" id="selectClient" onchange="rechercherAnimal()">
                            {foreach from= $clientListe item=client}
                                <option id="opt1" value="{$client.clientId}">{$client.clientName}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class='modal-body6'>
                        <select name="selectAnimal" id="selectAnimal">
                            <option value="">Choisir animal</option>
                        </select>
                         </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"  name="Insert" value="insert" data-dismiss="modal" onclick="insert()"/>Insert</button>
                        </div>
                    </div>
                </div>
            </div>
                        
                         <div id="calendarModal2" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>
                        <h4 id="modalTitle" class="modal-title"></h4>
                    </div>
                    <div id="modalBody2" class="modal-body"> </div>
                    Evenement
                     <input type="hidden" id="swal-input00" class="col-md-12" class="swal2-input">
                    <div class='modal-body11'>
                        <input id="swal-input11" class="col-md-12" class="swal2-input">
                    </div>
                    <div class='modal-body22'>
                        <input type="datetime-local" id="swal-input22" class="form-control">
                    </div>
                    <div class='modal-body33'>
                        <input type="datetime-local" id="swal-input33" class="swal2-input">
                    </div>
                    <div class='modal-body44'>
                        <input id="swal-input66" class="swal2-input">
                    </div>
                    <div class='modal-body55'>
                        <select name="selectClients" id="selectClients" onchange="rechercherAnimal2()">
                            {foreach from= $clientListe item=client}
                                <option id="opt1" value="{$client.clientId}">{$client.clientName}</option>
                            {/foreach}
                        </select>
                    </div>
                    <div class='modal-body66'>
                        <select name="selectAnimals" id="selectAnimals">
                            <option value="">Choisir animal</option>
                        </select>
                         </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"  name="Insert" value="insert" data-dismiss="modal" onclick="insert2()"/>Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <script>
                $('#edit-modal').on('hidden.bs.modal', function (e) {
                    $(this).find('modalBody')[0].reset();
                });
            </script>



            <script type="text/javascript" src="./../../public/js/fullcalendar/index.js"></script>    

            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>





            <!-- partial -->
            {include file='../../vue/layout/footer.tpl'}
            <!-- partial -->
        </div>
        <!-- main-panel ends -->


