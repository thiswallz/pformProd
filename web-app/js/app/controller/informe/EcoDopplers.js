Ext.define('PForm.controller.informe.EcoDopplers', {
    extend: 'Ext.app.Controller',
    views: ['informe.ecoDoppler.Formulario'],
    stores: ['Informes'],
    models: ['Informe'],
    refs: [{
            ref: 'ecodopplerform',
            selector: 'ecodopplerform'
        }
    ],

    init: function() {
        //this.control();
        this.control({
            'ecodopplerform button[action=grabar]':{
                click: this.grabar
            }
            
        });
        
    },
    grabar: function(){
        var view = this.getEcodopplerform();
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
            url: 'ecoDopplers/save',
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
