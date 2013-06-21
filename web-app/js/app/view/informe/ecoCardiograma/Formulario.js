Ext.define('PForm.view.informe.ecoCardiograma.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecocardiogramaform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Cardiograma',
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
                                    name : 'gestacion',
                                    fieldLabel: 'Gestacion' ,
                                    store: [[1,'Unica']],
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
                                    xtype: 'radio',
                                    name : 'lcf',
                                    fieldLabel: 'LCF',
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
                                    name : 'presentacion',
                                    fieldLabel: 'Presentación' ,
                                    store: [[1,'CEFALICA']],
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
                        title: 'Corazon Fetal',
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Corazon Fetal',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    xtype: 'combo',
                                    name : 'eje',
                                    fieldLabel: 'EJE',
                                    store: ['Unica']
                                },{
                                    xtype: 'numberfield',
                                    name : 'tamano',
                                    fieldLabel: 'Tamaño'
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'cuatrocamaras',
                                    fieldLabel: 'Cuatro Camaras'
                                },{
                                    xtype: 'numberfield',
                                    name : 'tabiqueintervetricular',
                                    fieldLabel: 'Tabique Interventricular' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'caractti',
                                    fieldLabel: 'Caract. T. I.'
                                },{
                                    name : 'foramenoval',
                                    fieldLabel: 'Foramen Oval' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'auriculoventricular',
                                    fieldLabel: 'Auriculo Ventricular'
                                },{
                                    name : 'ventriculoarterial',
                                    fieldLabel: 'Ventrilo Arterial' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'textfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'flujosintracardiacos',
                                    fieldLabel: 'Flujos Intracardiacos'
                                },{
                                    name : 'cayoaortico',
                                    fieldLabel: 'Cayo Aortico'
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    xtype: 'textfield',
                                    name : 'cayoductal',
                                    fieldLabel: 'Cayo Ductal'
                                },{
                                    name : 'diametrosdelcorazon',
                                    fieldLabel: 'Diametros del Corazon' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'dgrandesvasos',
                                    fieldLabel: 'D. Grandes Vasos'
                                },{
                                    name : 'grosordeparedes',
                                    fieldLabel: 'Grosor de Paredes' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'ritmocardiaco',
                                    fieldLabel: 'Ritmo Cardiaco'
                                },{
                                    name : 'tiempoconduccionav',
                                    fieldLabel: 'Tiempo Conduccion AV' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'drenajevenosoder',
                                    fieldLabel: 'Drenaje Venoso Der.'
                                },{
                                    name : 'drenajevenosoizq',
                                    fieldLabel: 'Drenaje Venoso Izq.' 
                                }]
                            },
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    labelWidth: 120,
                                    flex:1
                                },
                                items:[{
                                    name : 'frecuenciacardiaca',
                                    fieldLabel: 'Frecuencia Cardiaca'
                                },{
                                    xtype: 'textfield',
                                    name : 'otros',
                                    fieldLabel: 'Otros' 
                                }]
                            },
                            {
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
