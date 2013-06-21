Ext.define('PForm.controller.informe.SegundoTercerTrimestres', {
    extend: 'Ext.app.Controller',
    views: ['informe.segundoTercerTrimestre.Formulario'],

    refs: [{
            ref: 'segundotercertrimestreform',
            selector: 'segundotercertrimestreform'
        }
    ],

    init: function() {
        //this.control();
        this.control({
            'segundotercertrimestreform button[action=grabar]':{
                click: this.grabar
            }
        });
    },
    grabar: function(){
        var view = this.getSegundotercertrimestreform();
        var form = view.down('#formId');
        if(!form.isValid()){
            Ext.MessageBox.show({
                title: 'Error',
                msg: 'Rellene los campos obligaorios',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.ERROR
           });
            return;
        }
        form.submit({
            url: 'segundoTercerTrimestres/save',
            success: function(rec, op) {
                Ext.MessageBox.show({
                    title: 'Grabado',
                    msg: 'Grabado Exitosamente',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.IFO
               });
                view.close()
                Ext.getStore('Informes').load()
            },
            failure: function(rec, op) {
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: 'Error al grabar',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
               });
            }
        });

    }

});
