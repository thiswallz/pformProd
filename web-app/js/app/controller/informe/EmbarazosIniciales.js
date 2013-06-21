Ext.define('PForm.controller.informe.EmbarazosIniciales', {
    extend: 'Ext.app.Controller',
    views: ['informe.embarazoInicial.Formulario'],
    stores: ['Informes'],
    models: ['Informe'],
    refs: [{
            ref: 'embarazoinicialform',
            selector: 'embarazoinicialform'
        }
    ],

    init: function() {
        //this.control();
        this.control({
            'embarazoinicialform button[action=grabar]':{
                click: this.grabar
            }
        });
        
    },
    grabar: function(){
        var view = this.getEmbarazoinicialform();
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
            url: 'embarazosIniciales/save',
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
