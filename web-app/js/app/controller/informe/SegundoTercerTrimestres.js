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
            },
            'segundotercertrimestreform [name=biomGnrlDbp]':{
                change: this.onChangeDS
            }
        });
    },
    onChangeDS: function(t, value){
        var view = this.getSegundotercertrimestreform()

        Ext.Ajax.request({
            scope: this,
            url: 'parametrosGenerales/getParametrosByCodigo',
            params: {
                informe: 'in02',
                tipo: t.name,
                valor: view.down('#'+t.name).getValue()
            },
            success: function(response){
                var text = response.responseText;
                var jsonin = Ext.JSON.decode(text)
                if(jsonin.data){
                    view.down('#'+t.name + 'OpS').setValue(jsonin.data.S)
                    view.down('#'+t.name + 'OpD').setValue(jsonin.data.D)    
                }

            },
            failure: function(response){
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: 'Error Interno',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
               });
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
