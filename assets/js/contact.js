$(document).ready(function () {

    (function ($) {
        "use strict";

        jQuery.validator.addMethod('answercheck', function (value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function () {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    number: {
                        required: true,
                        minlength: 5
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "come on, you have a name, don't you?",
                        minlength: "el nombre debe contener almenos 2 caracteres"
                    },
                    subject: {
                        required: "come on, you have a subject, don't you?",
                        minlength: "el asunto debe tener almenos 4 caracteres"
                    },
                    number: {
                        required: "come on, you have a number, don't you?",
                        minlength: "your Number must consist of at least 5 characters"
                    },
                    email: {
                        required: "sin email, sin mensaje"
                    },
                    message: {
                        required: "um...claro, es necesario que escribas algo en el mensaje.",
                        minlength: "eso es todo? enserio?"
                    }
                 },
                submitHandler: function (form) {
                    $(form).ajaxSubmit({
                        type:"POST",
                        data: $(form).serialize(),
                        url:"mailer.php",
                        success: function() {
                            // $('#contactForm :input').attr('disabled', 'disabled');
                            // $('#contactForm').fadeTo( "slow", 1, function() {
                            //     $(this).find(':input').attr('disabled', 'disabled');
                            //     $(this).find('label').css('cursor','default');
                            //     $('#success').fadeIn()
                            //     $('.modal').modal('hide');
                            //     $('#success').modal('show');
                            // })
                            //$('#contactForm').trigger('reset');
                            //alert('Mensaje enviado');
                            

                        },
                        error: function() {
                            // $('#contactForm').fadeTo( "slow", 1, function() {
                            //     $('#error').fadeIn()
                            //     $('.modal').modal('hide');
                            //     $('#error').modal('show');
                            // })
                            //alert('Mensaje no enviado');
                        }
                    })
                    alert('Mensaje Enviado');
                    window.location.href= "https://khosting.com.mx";
                }
            })
        })

    })(jQuery)
})