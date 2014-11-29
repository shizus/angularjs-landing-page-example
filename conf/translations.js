ourApp.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
        'TAGLINE': 'The simpliest and more <strong>Powerful</strong> <br> way to <strong>deliver</strong> your mail',
        'ENTER_EMAIL': 'Enter your email',
        'FOOTER': '&copy; 2014 <b>LogisticApp.co</b>. All Rights Reserved',
        'CUSTOMERS': '<h2>Who use our services?</h2><h4>Companies and private users work with us.</h4>',
        'REGISTER_NOW': 'REGISTER NOW',
        'SUBSCRIBE_NOW': 'Subscribe Now',
        'SUBSCRIBE_OK': 'Thanks for your interest. You will receive an e-mail with all the info soon.',
        'KNOW_MORE': 'MORE INFO?',
        'TEACH_YOU': 'We show you how it works.',
        'SEND_PACKAGE': 'If you want to send a package.',
        'CREATE_USER': 'Create your user',
        'IS_SIMPLE': 'It\'s easy and simple',
        'PUBLISH': 'You publish where you want to send the package',
        'USERS_TAKE_CARE': 'Our users take care of it',
        'CHEAPER': 'for less than any other service',
        'EAR_MONEY': 'If you want to earn money delivering orders',
        'CHECK_LIST': 'Check the requirements list',
        'TAKE_ORDER': 'Choose one',
        'WE_GIVE_YOU_CONTACT_INFO': 'We let you contact the requester',
        'TESTIMONIALS': 'Testimonials from our customers',
        'TESTIMONIAL_1': 'I sent an envelope for only USD 1 and it arrived in only 40 minutes',
        'LAWYER': 'Lawyer',
        'TESTIMONIAL_2': 'I sent a package from Recoleta, Bs As, Argentina to Puerto Madero, Bs As, Argentina for only USD 1.5',
        'CUBIKA_CEO': 'CEO at <a href="index.html#">Cubika</a>'
    });

    $translateProvider.translations('es', {
        'TAGLINE': 'La manera más simple y <strong>Poderosa</strong> <br>de <strong>enviar</strong> tus paquetes',
        'ENTER_EMAIL': 'Ingresa tu correo electrónico',
        'FOOTER': '&copy; 2014 <b>LogisticApp.co</b>. Todos los derechos reservados',
        'CUSTOMERS': '<h2>¿Quiénes usan nuestro servicio?</h2><h4>Empresas y usuarios privados trabajan con nosotros</h4>',
        'REGISTER_NOW': 'REGISTRATE YA',
        'SUBSCRIBE_NOW': 'Inscríbete Ya',
        'SUBSCRIBE_OK': 'Gracias por tu interés. Pronto recibirás un mail con toda la información.',
        'KNOW_MORE': 'QUIERES SABER MAS?',
        'TEACH_YOU': 'Te explicamos como funciona.',
        'SEND_PACKAGE': 'Si quieres enviar un paquete.',
        'CREATE_USER': 'Creas tu usuario',
        'IS_SIMPLE': 'Es simple y fácil',
        'PUBLISH': 'Publicas a dónde quieres enviar el paquete',
        'USERS_TAKE_CARE': 'Nuestos usuarios te lo llevan',
        "CHEAPER": 'Por menos de lo que cualquier servicio te cobraría.',
        'EAR_MONEY': 'Si quieres ganar dinero enviando paquetes.',
        'CHECK_LIST': 'Ves el listado de envíos requeridos',
        'TAKE_ORDER': 'Tomas un pedido',
        'WE_GIVE_YOU_CONTACT_INFO': 'Te contactamos con el usuario que solicita el envío para que coordines todo.',
        'TESTIMONIALS': 'Testimonios de nuestros clientes',
        'TESTIMONIAL_1': 'Envié mi sobre por solos AR$ 15 y llego en menos de 40 minutos',
        'LAWYER': 'Abogada',
        'TESTIMONIAL_2': 'Envié un paquete de Recoleta a Puerto Madero por AR$ 20',
        'CUBIKA_CEO': 'CEO de <a href=\"index.html#\">Cubika</a>'

    });

    var userLang = navigator.language || navigator.userLanguage;
    var defaultLanguage = userLang.split('-')[0];
    $translateProvider.preferredLanguage(defaultLanguage);
}]);
