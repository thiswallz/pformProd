
Ext.Loader.setConfig({enabled: true});
Ext.Loader.setPath('PForm', '/js/');
Ext.application({
    name: 'PForm',
    appFolder: 'js/app/',
    controllers: [
        'informe.EmbarazosIniciales',
        'informe.PrimerosTrimestres',
        'informe.SegundoTercerTrimestres',
        'informe.Perfiles',
        'informe.Distocias',
        'informe.EcoCardiogramas',
        'informe.EcoCervicales',
        'informe.EcoGinecologicas',
        'informe.EcoDopplers',
        'admin.ControlGeneral'
    ],
    launch: function(){

    },
    autoCreateViewport: true
});
