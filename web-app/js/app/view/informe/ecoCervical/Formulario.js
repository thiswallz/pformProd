Ext.define('PForm.view.informe.ecoCervical.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecocervicalform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Cervical',
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
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'eg',
                                    fieldLabel: 'EG' ,
                                    flex: 1,
                                    allowDecimals: false,
                                    minValue: 0,
                                    step: 1
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    name : 'fpp',
                                    fieldLabel: 'FPP',
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
                                    flex: 1
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Examen basal',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'canalmaximo',
                                    fieldLabel: 'Canal Maximo'
                                },{
                                    name : 'canalmediano',
                                    fieldLabel: 'Canal Mediano' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'canalminimo',
                                    fieldLabel: 'Canal Minimo'
                                },{
                                    name : 'funnel',
                                    fieldLabel: 'Funnel' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'anchofunnel',
                                    fieldLabel: 'Ancho Funnel'
                                },{
                                    name : 'largofunnel',
                                    fieldLabel: 'Largo Funnel' 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Examen con stress',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'canal',
                                    fieldLabel: 'Canal'
                                },{
                                    name : 'funnelstress',
                                    fieldLabel: 'Funnel' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'anchofunnelstress',
                                    fieldLabel: 'Ancho Funnel'
                                },{
                                    name : 'largofunnelstress',
                                    fieldLabel: 'Largo Funnel' 
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
