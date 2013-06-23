Ext.define('PForm.controller.informe.EcoCardiogramas', {
    extend: 'Ext.app.Controller',
    views: ['informe.ecoCardiograma.Formulario'],
    stores: ['Informes'],
    models: ['Informe'],
    refs: [{
            ref: 'ecocardiogramaform',
            selector: 'ecocardiogramaform'
        }
    ],

    init: function() {
        //this.control();
        this.control({
            'ecocardiogramaform button[action=grabar]':{
                click: this.grabar
            }
            
        });
        
    },
    grabar: function(){
        var view = this.getEcocardiogramaform();
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
            url: 'ecoCardiogramas/save',
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
