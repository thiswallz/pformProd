Ext.define('PForm.view.informe.perfil.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.perfilform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Perfil',
    layout: 'fit',
    autoShow: true,
    width: 600,
    modal: true,
    iconCls: 'icon-add',
    //bodyPadding: 15,
    listeners: {
        afterlayout: function (win) {
            var me = this
            Ext.Ajax.request({
                scope: this,
                url: 'embarazosIniciales/get',
                params: {
                    id: me.idInforme
                },
                success: function(response){
                    var text = response.responseText;
                    var jsonin = Ext.JSON.decode(text)

                    me.down('#infoEgesFurId').setValue(jsonin.data.infoEgesFur)
                    me.down('#infoEgesEgId').setValue(jsonin.data.infoEgesEg)
                    me.down('#idEmbarazoInicialId').setValue(me.idInforme)
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
        }
    },
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 5 5',
                border: false,
                style: 'background-color: #fff;',
                itemId: 'formId',
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    labelWidth: 150,
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side',
                    xtype: 'numberfield',
                    allowDecimals: true,
                    minValue: 0,
                    step: 0.1
                },

                items: [{

                    xtype: 'tabpanel',
                    border: false,
                    defaults: 
                    {
                        border: false
                    },
                    items: [{
                        title: 'Información',
                        items: [
                        {
                            xtype: 'fieldset',
                            title: 'Edad Gestacional',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'hidden',
                                    name : 'idEmbarazoInicial',
                                    itemId: 'idEmbarazoInicialId'
                                },{
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    name : 'infoEgesFur',
                                    itemId : 'infoEgesFurId',
                                    fieldLabel: 'FUR',
                                    readOnly: true,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'infoEgesEg',
                                    itemId : 'infoEgesEgId',
                                    fieldLabel: 'EG' ,
                                    flex: 1,
                                    allowDecimals: false,
                                    minValue: 0,
                                    readOnly: true,
                                    step: 1
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    name : 'infoEgesFpp',
                                    fieldLabel: 'FPP',
                                    editable : false,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'infoEgesEcoPrecoz',
                                    fieldLabel: 'ECO PRECOZ' ,
                                    minValue: 0,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    format: 'd/m/Y',
                                    name : 'infoEgesFechaEcoPrecoz',
                                    fieldLabel: 'Fecha ECO PRECOZ',
                                    editable : false,
                                    flex: 1
                                }]
                            },{
                                xtype:'container',
                                html: '<hr />',
                                padding: '0px'
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'infoEgesNumeroFetos',
                                    fieldLabel: 'Numero de Fetos',
                                    minValue: 0,
                                    step: 1,
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesGestacion',
                                    fieldLabel: 'Gestacion' ,
                                    store: [[1,'UNICA'],
                                    [2,'DOBLE']],
                                    editable: false,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesGemelos',
                                    fieldLabel: 'Gemelos' ,
                                    store: [[1,'---']],
                                    disabled: true,
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesGemelo',
                                    fieldLabel: 'Gemelo' ,
                                    store: [[1,'---']],
                                    disabled: true,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesCorioncicidad',
                                    fieldLabel: 'Corioncicidad' ,
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesAmniocidad',
                                    fieldLabel: 'Amniocidad' ,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesPosicion',
                                    fieldLabel: 'Posición' ,
                                    flex: 1
                                },{
                                    xtype: 'fieldcontainer',
                                    //name : 'infoEgesLcf',
                                    defaultType: 'radiofield',
                                    fieldLabel: 'LCF',
                                    items: [{
                                            boxLabel  : 'Ausentes',
                                            name      : 'infoEgesLcf',
                                            inputValue: 'AUSENTES'
                                        }, {
                                            boxLabel  : 'Presentes',
                                            name      : 'infoEgesLcf',
                                            inputValue: 'PRESENTES'
                                        }],
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'infoEgesFcardiaca',
                                    fieldLabel: 'F. Cardiaca' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesPresentacion',
                                    fieldLabel: 'Presentación' ,
                                    store: [[1,'CEFALICA'],
                                    [2,'PODALICA'],
                                    [3,'TRANSVERSA'],
                                    [4,'TRANSICION']],
                                    editable: false,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesTroboflasto',
                                    fieldLabel: 'Troboflasto',
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesPlacenta',
                                    fieldLabel: 'Placenta',
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesLocalizacion',
                                    fieldLabel: 'Localización' ,
                                    store: [[1,'Anterior']],
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesInsercion',
                                    fieldLabel: 'Inserción' ,
                                    store: [[1,'NORMOINSERTA']],
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesMadurez',
                                    fieldLabel: 'Madurez' ,
                                    store: [[1,'GRADO 0']],
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesGrado',
                                    fieldLabel: 'Grado' ,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesInterfase',
                                    fieldLabel: 'Interfase',
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesCordon',
                                    fieldLabel: 'Cordon',
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesLa',
                                    fieldLabel: 'LA' ,
                                    store: [[1,'LEVEMENTE']],
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesPresentaLa',
                                    fieldLabel: 'PRESENTA LA' ,
                                    flex: 1 
                                }]
                            }]
                        }]
                    },{
                        title: 'Biofisico',
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Perfil Biofisico',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 120
                                },
                                items:[{
                                    name : 'biofisPerfilMovCorporales',
                                    fieldLabel: 'Mov. Corporales',
                                    flex: 1

                                },{
                                    xtype: 'numberfield',
                                    name : 'biofisPerfilMovRespiratorio',
                                    fieldLabel: 'Mov. Respiratorio' ,
                                    step: 1,
                                    flex: 1
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 120
                                },
                                items:[{
                                    name : 'biofisPerfilTonoFetal',
                                    fieldLabel: 'Tono Fetal',
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biofisPerfilLiquidoOvular',
                                    fieldLabel: 'Liquido Ovular' ,
                                    step: 1,
                                    flex: 1
                                }]
                            }]
                        }]
                    },{
                        title: 'Diagnosticos',
                        items:[{
                            xtype: 'fieldset',
                            title: 'Observaciones',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'diagnObservaciones',
                                hideLabel: true
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Diagnosticos',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'diagnDiagnosticos',
                                hideLabel: true
                            }]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Información General',
                            items: [
                            {
                                xtype: 'textfield',
                                name : 'diagnEcografista',
                                fieldLabel: 'Ecografista'
                            },
                            {
                                xtype: 'textfield',
                                name : 'diagnBecado',
                                fieldLabel: 'Becado'
                            },
                            {
                                xtype: 'textfield',
                                name : 'diagnEquipo',
                                fieldLabel: 'Equipo'
                            },
                            {
                                xtype: 'combo',
                                name : 'diagnDerivada',
                                fieldLabel: 'Derivada',
                                store: [[1,'Dr.'],
                                         [2,'Dra.']],
                                editable : false
                            },
                            {
                                xtype: 'datefield',
                                format: 'd/m/Y',
                                name : 'diagnCitacion',
                                fieldLabel: 'Citacion',
                                editable : false
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Conclusiones',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'diagnConclusiones',
                                hideLabel: true
                            }]
                        }]
                    }]
                }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Grabar',
                action: 'grabar'
            },{
                iconCls: 'icon-reset',
                text: 'Cancelar',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
