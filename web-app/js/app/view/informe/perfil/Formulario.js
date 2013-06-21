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

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 5 5',
                border: false,
                style: 'background-color: #fff;',
                
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
                                    xtype: 'datefield',
                                    name : 'fur',
                                    fieldLabel: 'FUR',
                                    readOnly: true,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'eg',
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
                                    name : 'fpp',
                                    fieldLabel: 'FPP',
                                    editable : false,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'ecoprecoz',
                                    fieldLabel: 'ECO PRECOZ' ,
                                    minValue: 0,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    name : 'fechaecoprecoz',
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
                                    name : 'numerodefetos',
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
                                    name : 'gemelos',
                                    fieldLabel: 'Gemelos' ,
                                    store: [[1,'---']],
                                    disabled: true,
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'gemelo',
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
                                    name : 'corioncicidad',
                                    fieldLabel: 'Corioncicidad' ,
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'amniocidad',
                                    fieldLabel: 'Amniocidad' ,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'posicion',
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
                                    name : 'fcarciaca',
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
                                    name : 'troboflasto',
                                    fieldLabel: 'Troboflasto',
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'placenta',
                                    fieldLabel: 'Placenta',
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'localizacion',
                                    fieldLabel: 'Localización' ,
                                    store: [[1,'Anterior']],
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'insercion',
                                    fieldLabel: 'Inserción' ,
                                    store: [[1,'NORMOINSERTA']],
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'madurez',
                                    fieldLabel: 'Madurez' ,
                                    store: [[1,'GRADO 0']],
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'grado',
                                    fieldLabel: 'Grado' ,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'interfase',
                                    fieldLabel: 'Interfase',
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'cordon',
                                    fieldLabel: 'Cordon',
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'la',
                                    fieldLabel: 'LA' ,
                                    store: [[1,'LEVEMENTE']],
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'a',
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
                                    name : 'movimientocoporales',
                                    fieldLabel: 'Mov. Corporales',
                                    flex: 1

                                },{
                                    xtype: 'numberfield',
                                    name : 'movimientorespiratorio',
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
                                    name : 'tonofetal',
                                    fieldLabel: 'Tono Fetal',
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'liquidoovular',
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
                                name : 'observaciones',
                                hideLabel: true
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Diagnosticos',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'diagnosticos',
                                hideLabel: true
                            }]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Información General',
                            items: [
                            {
                                xtype: 'textfield',
                                name : 'ecografista',
                                fieldLabel: 'Ecografista'
                            },
                            {
                                xtype: 'textfield',
                                name : 'becado',
                                fieldLabel: 'Becado'
                            },
                            {
                                xtype: 'textfield',
                                name : 'equipo',
                                fieldLabel: 'Equipo'
                            },
                            {
                                xtype: 'combo',
                                name : 'derivada',
                                fieldLabel: 'Derivada',
                                store: [[1,'Dr.'],
                                         [2,'Dra.']],
                                editable : false
                            },
                            {
                                xtype: 'datefield',
                                name : 'citacion',
                                fieldLabel: 'Citacion',
                                editable : false
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Conclusiones',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'conclusion',
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
