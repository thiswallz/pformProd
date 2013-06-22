Ext.define('PForm.controller.admin.ControlGeneral', {
    extend: 'Ext.app.Controller',

    stores: ['Recordatorios'],

    models: ['Recordatorio', 'EmbarazoInicial'],

    views: ['admin.MenuTop' , 'admin.Principal','admin.Home','admin.Ficha','admin.Grid','admin.seleccionInformes',
    'informe.embarazoInicial.ViewFormulario'],

    refs: [{
            ref: 'admingrid',
            selector: 'admingrid'
        }

    ],
    init: function() {
        this.control({
            'login-form button[action=loginButton]':{
                click: this.login
            },
            'menutop menuitem[action=ac_mpaciente]':{
                click: this.ac_mpaciente
            },
            'menutop menuitem[action=ac_mmedico]':{
                click: this.ac_mmedico
            },
            'menutop menuitem[action=in_embarazoinicial]':{
                click: this.in_embarazoinicial
            },
            'menutop menuitem[action=in_primertrimestre]':{
                click: this.in_primertrimestre
            },
            'adminprincipal button[action=buscar]':{
                click: this.buscar
            },
            'admingrid button[action=crearInforme]': {
                click: this.crearInforme
            },
            'wininformes button[action=cinformes]': {
                click: this.informes
            },
            'admingrid button[action=salir]': {
                click: this.salir
            },
            'admingrid button[action=verInforme]': {
                click: this.verInforme
            },
            'admingrid button[action=addEInicial]': {
                click: this.addEInicial
            }



        });
    },
    addEInicial: function(){
        var edit = Ext.create('PForm.view.informe.embarazoInicial.Formulario').show();
    },
    verInforme: function(){
        var view = this.getAdmingrid()
        var selectedRecords = view.getSelectionModel();
        if(selectedRecords.getCount()<=0){
            Ext.MessageBox.show({
                title: 'Seleccion',
                msg: 'Seleccione un registro',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.IFO
            });
            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in01'){
            var win = Ext.create('PForm.view.informe.embarazoInicial.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }

    },
    salir: function(){
        Ext.Ajax.request({
            scope: this,
            url: 'general/salir',
            success: function(response){
                var main = Ext.ComponentQuery.query('viewport')[0];
                var admin = Ext.create('PForm.view.admin.Principal', {
                });
                main.removeAll();
                main.add(admin);
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
    crearInforme: function(){
        var view = this.getAdmingrid()
        var selectedRecords = view.getSelectionModel();
        if(selectedRecords.getCount()<=0){
            Ext.MessageBox.show({
                title: 'Seleccion',
                msg: 'Seleccione un registro',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.IFO
            });
            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme != 'in01'){
            Ext.MessageBox.show({
                title: 'Seleccion',
                msg: 'Seleccione un informe Embarazo Inicial',
                buttons: Ext.MessageBox.OK,
                icon: Ext.MessageBox.IFO
            });
            return;
        }

        Ext.Ajax.request({
            scope: this,
            url: 'general/getPermisosCreacion',
            params: {
                id: selectedRecords.getLastSelected().data.id
            },
            success: function(response){
                var text = response.responseText;
                var jsonin = Ext.JSON.decode(text)
                var createWindInformes = Ext.widget('wininformes', {permisos: jsonin.data});
                createWindInformes.show();
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
    informes: function(button){
        opcion = button.name;
        switch(opcion){
            case 'embarazoinicial':
                var edit = Ext.create('PForm.view.informe.embarazoInicial.Formulario').show();
            break;
            case 'primertrimestre':
                var view = this.getAdmingrid()
                var selectedRecords = view.getSelectionModel();
                if(selectedRecords.getCount()<=0){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un registro',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                if(selectedRecords.getLastSelected().data.codInforme != 'in01'){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un informe Embarazo Inicial',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                var edit = Ext.create('PForm.view.informe.primerTrimestre.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'segundotercero':
                var view = this.getAdmingrid()
                var selectedRecords = view.getSelectionModel();
                if(selectedRecords.getCount()<=0){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un registro',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                if(selectedRecords.getLastSelected().data.codInforme != 'in01'){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un informe Embarazo Inicial',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                var edit = Ext.create('PForm.view.informe.segundoTercerTrimestre.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'perfil':
                var view = this.getAdmingrid()
                var selectedRecords = view.getSelectionModel();
                if(selectedRecords.getCount()<=0){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un registro',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                if(selectedRecords.getLastSelected().data.codInforme != 'in01'){
                    Ext.MessageBox.show({
                        title: 'Seleccion',
                        msg: 'Seleccione un informe Embarazo Inicial',
                        buttons: Ext.MessageBox.OK,
                        icon: Ext.MessageBox.IFO
                    });
                    return;
                }
                var edit = Ext.create('PForm.view.informe.perfil.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'distocia':
                var edit = Ext.create('PForm.view.informe.distocia.Formulario').show();
            break;
            case 'ecoCardio':
                var edit = Ext.create('PForm.view.informe.ecoCardiograma.Formulario').show();
            break;
            case 'ecoCervi':
                var edit = Ext.create('PForm.view.informe.ecoCervical.Formulario').show();
            break;
            case 'ecoDopp':
                var edit = Ext.create('PForm.view.informe.ecoDoppler.Formulario').show();
            break;
            case 'ecoGine':
                var edit = Ext.create('PForm.view.informe.ecoGinecologica.Formulario').show();
            break;
        }
    },
    buscar: function(){
        var main = Ext.ComponentQuery.query('viewport > adminprincipal')[0];
        var rut = main.down('#rutId').getValue();

        Ext.Ajax.request({
            url: 'paciente/buscarRut',
            params: {
                rut: rut
            },
            success: function(response){
                var text = response.responseText;
                var jsonin = Ext.JSON.decode(text)
                var view = Ext.create('PForm.view.admin.Home', {
                    jsonin: jsonin
                });
                main.removeAll();
                main.add(view);

            },
            failure: function(response){
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: 'No se ha podido encontrar rut',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
               });
            }
        });

    },
    login: function(){
        var form = this.getLogin().getForm();
        var main = Ext.ComponentQuery.query('viewport')[0];
        form.submit({
            success: function(rec, op) {
                var admin = Ext.create('PForm.view.admin.Principal', {
                });
                main.removeAll();
                main.add(admin);
                //validar menus
                if(1==1)
                    admin.down('#tbarId').down('#menu1Id').setDisabled(true)
            },
            failure: function(rec, op) {
                Ext.MessageBox.show({
                    title: 'Error',
                    msg: 'No se ha podido logear',
                    buttons: Ext.MessageBox.OK,
                    icon: Ext.MessageBox.ERROR
               });
            }
        });
    }
});
