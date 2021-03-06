Ext.define('PForm.controller.admin.ControlGeneral', {
    extend: 'Ext.app.Controller',

    stores: ['Recordatorios'],

    models: ['Recordatorio', 'EmbarazoInicial','PrimerTrimestre'
    ,'SegundoTercerTrimestre'
    ,'Perfil'
    ,'EcoGinecologica'
    ,'EcoDoppler'
    ,'EcoCervical'
    ,'EcoCardiograma'
    ,'Distocia'
    ],

    views: ['admin.MenuTop' , 'admin.Principal','admin.Home','admin.Ficha','admin.Grid','admin.seleccionInformes',
    'informe.embarazoInicial.ViewFormulario','informe.primerTrimestre.ViewFormulario'
    ,'informe.primerTrimestre.ViewFormulario'
    ,'informe.segundoTercerTrimestre.ViewFormulario'
    ,'informe.perfil.ViewFormulario'
    ,'informe.ecoGinecologica.ViewFormulario'
    ,'informe.ecoDoppler.ViewFormulario'
    ,'informe.ecoCervical.ViewFormulario'
    ,'informe.ecoCardiograma.ViewFormulario'
    ,'informe.distocia.ViewFormulario'],

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
        if(selectedRecords.getLastSelected().data.codInforme == 'in02'){
            var win = Ext.create('PForm.view.informe.primerTrimestre.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in03'){
            var win = Ext.create('PForm.view.informe.segundoTercerTrimestre.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in04'){
            var win = Ext.create('PForm.view.informe.perfil.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in05'){
            var win = Ext.create('PForm.view.informe.distocia.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in06'){
            var win = Ext.create('PForm.view.informe.ecoCardiograma.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in07'){
            var win = Ext.create('PForm.view.informe.ecoCervical.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in08'){
            var win = Ext.create('PForm.view.informe.ecoDoppler.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

            return;
        }
        if(selectedRecords.getLastSelected().data.codInforme == 'in09'){
            var win = Ext.create('PForm.view.informe.ecoGinecologica.ViewFormulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();

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
                var edit = Ext.create('PForm.view.informe.distocia.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'ecoCardio':
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
                var edit = Ext.create('PForm.view.informe.ecoCardiograma.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'ecoCervi':
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
                var edit = Ext.create('PForm.view.informe.ecoCervical.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'ecoDopp':
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
                var edit = Ext.create('PForm.view.informe.ecoDoppler.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
            break;
            case 'ecoGine':
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
                var edit = Ext.create('PForm.view.informe.ecoGinecologica.Formulario', {idInforme: selectedRecords.getLastSelected().data.id}).show();
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
