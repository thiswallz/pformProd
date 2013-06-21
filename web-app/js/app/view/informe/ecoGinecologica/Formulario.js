Ext.define('PForm.view.informe.ecoGinecologica.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecoginecologicaform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Ginecologica',
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
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Utero',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'utero',
                                    fieldLabel: 'Utero'
                                },{
                                    name : 'contorno',
                                    fieldLabel: 'Contorno' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'parequima',
                                    fieldLabel: 'Parequima'
                                },{
                                    xtype:'numberfield',
                                    name : 'longitud',
                                    fieldLabel: 'Longitud' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'ap',
                                    fieldLabel: 'AP'
                                },{
                                    name : 'tranverso',
                                    fieldLabel: 'Traverso' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'cervix',
                                    fieldLabel: 'Cervix'
                                },{
                                    name : 'otros',
                                    fieldLabel: 'Otros' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'conclusion',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Endometrio',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'endometrio',
                                    fieldLabel: 'Endometrio'
                                },{
                                    name : 'tipo',
                                    fieldLabel: 'Tipo' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    xtype:'numberfield',
                                    name : 'mide',
                                    fieldLabel: 'Mide'
                                },{
                                    name : 'otros',
                                    fieldLabel: 'Otros' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'conclusion',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Ovario Derecho',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'ovarioder',
                                    fieldLabel: 'Ovario'
                                },{
                                    xtype:'numberfield',
                                    name : 'mideder',
                                    fieldLabel: 'Mide' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'otrosder',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'conclusionder',
                                    fieldLabel: 'Conclusion' 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Ovario Izquierdo',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'ovarioizq',
                                    fieldLabel: 'Ovario'
                                },{
                                    xtype:'numberfield',
                                    name : 'mideizq',
                                    fieldLabel: 'Mide' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'otrosizq',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'conclusionizq',
                                    fieldLabel: 'Conclusion' 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Fondo Saco',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'otrosfondo',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'conclusionfondo',
                                    fieldLabel: 'Conclusion' 
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
