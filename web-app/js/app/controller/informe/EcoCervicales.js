Ext.define('PForm.controller.informe.EcoCervicales', {
    extend: 'Ext.app.Controller',
    views: ['informe.ecoCardiograma.Formulario'],
    stores: ['Informes'],
    models: ['Informe'],
    refs: [{
            ref: 'ecocervicalform',
            selector: 'ecocervicalform'
        }
    ],

    init: function() {
        //this.control();
        this.control({
            'ecocervicalform button[action=grabar]':{
                click: this.grabar
            }
            
        });
        
    },
    grabar: function(){
        var view = this.getEcocervicalform();
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
            url: 'ecoCervicales/save',
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
