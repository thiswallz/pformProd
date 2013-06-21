Ext.define('PForm.view.informe.ecoDoppler.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecodopplerform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Doppler',
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
                            title: 'Arteria Umbilical',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    name : 'ipau',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'irau',
                                    fieldLabel: 'IR'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'sdau',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'flujodiastolico',
                                    fieldLabel: 'Flujo Diastolico'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'percentilau',
                                    fieldLabel: 'Percentil'
                                },{
                                    name : 'conclusionau',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Arteria Cerebral Media',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    name : 'ipacp',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'iracp',
                                    fieldLabel: 'IR'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'sdacp',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'flujodiastolicoacp',
                                    fieldLabel: 'Flujo Diastolico'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'percentilacp',
                                    fieldLabel: 'Percentil'
                                },{
                                    name : 'conclusionacp',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Arteria Uterina Derecha',
                            defaults: {
                                padding: '0 3px 3px 3px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    name : 'ipaud',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'iraud',
                                    fieldLabel: 'IR'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'sdaud',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'flujodiastolicoaud',
                                    fieldLabel: 'Flujo Diastolico'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'percentilaud',
                                    fieldLabel: 'Percentil'
                                },{
                                    name : 'conclusionaud',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Arteria Uterina Izquierda',
                            defaults: {
                                padding: '0 3px 3px 3px',
                                xtype: 'textfield',
                                labelWidth: 100,
                                flex: 1
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    name : 'ipaui',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'iraui',
                                    fieldLabel: 'IR'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'sdaui',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'flujodiastolicoaui',
                                    fieldLabel: 'Flujo Diastolico'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults: {
                                    padding: '0 3px 3px 3px',
                                    xtype: 'textfield',
                                    labelWidth: 100,
                                    flex: 1
                                },
                                items:[{
                                    xtype: 'numberfield',
                                    name : 'percentilaui',
                                    fieldLabel: 'Percentil'
                                },{
                                    name : 'conclusionaui',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        }]
                    },{
                        title: 'Biofisico',
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Ductus Venoso',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'velmaxdv',
                                    fieldLabel: 'Vel. Sistolica Max.'
                                },{
                                    name : 'velmindv',
                                    fieldLabel: 'Vel. Diastolica Min.'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'sipdv',
                                    fieldLabel: 'Indice S/ IP'
                                },{
                                    xtype:'textfield',
                                    name : 'conclusiondv',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Arteria Cerebral Media',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'velmaxacm',
                                    fieldLabel: 'Vel. Sistolica Max.'
                                },{
                                    name : 'velminacm',
                                    fieldLabel: 'Vel. Diastolica Min.'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'sipacm',
                                    fieldLabel: 'Indice S/ IP'
                                },{
                                    xtype:'textfield',
                                    name : 'conclusionacm',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Vena Cova Inferior',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'ipppvci',
                                    fieldLabel: 'IP P. Posi.'
                                },{
                                    name : 'ippnvci',
                                    fieldLabel: 'IP P. Nega.'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'flujovci',
                                    fieldLabel: '% Flujo Reverso'
                                },{
                                    xtype:'textfield',
                                    name : 'conclusionvci',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Vena Umbilical',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'ipppvu',
                                    fieldLabel: 'IP P. Posi.'
                                },{
                                    name : 'ippnvu',
                                    fieldLabel: 'IP P. Nega.'
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'flujovu',
                                    fieldLabel: '% Flujo Reverso'
                                },{
                                    xtype:'textfield',
                                    name : 'conclusionvu',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Fujo Mitral',
                            items:[{
                                xtype: 'textfield',
                                name:'conclusionfm',
                                fieldLabel:'Conclusion'
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Fujo Tricuspideo',
                            items:[{
                                xtype: 'textfield',
                                name:'conclusionft',
                                fieldLabel:'Conclusion'
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Perfil Biofisico',
                            items: [{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'movcorporales',
                                    fieldLabel: 'Mov. Corporales'
                                },{
                                    name : 'movrespiratorios',
                                    fieldLabel: 'Mov. Respiratorios' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'tonofetal',
                                    fieldLabel: 'Tono Fetal'
                                },{
                                    name : 'liquidoovular',
                                    fieldLabel: 'Liquido Ovular' 
                                }]
                            },,{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'placenta',
                                    fieldLabel: 'Placenta'
                                },{
                                    name : 'localizacion',
                                    fieldLabel: 'Localizacion'
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
                                         [2,'Dra.']]
                            },
                            {
                                xtype: 'datefield',
                                name : 'citacion',
                                fieldLabel: 'Citacion'
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
