Ext.define('PForm.view.informe.primerTrimestre.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.primertrimestreform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Primer Trimestre',
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
                                    readOnly: true,
                                    name : 'infoEgesFur',
                                    format: 'd/m/Y',
                                    itemId : 'infoEgesFurId',
                                    fieldLabel: 'FUR',
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    readOnly: true,
                                    name : 'infoEgesEg',
                                    itemId : 'infoEgesEgId',
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
                                    format: 'd/m/Y',
                                    name : 'infoEgesFpp',
                                    fieldLabel: 'FPP',
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
                                    store: [[1,'Unica']],
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
                                    xtype: 'radio',
                                    name : 'infoEgesLcf',
                                    fieldLabel: 'LCF',
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
                                    store: [[1,'CEFALICA']],
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
                        title: 'Biometria',
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Biometria',
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'biomGnrlSacoGestacional',
                                    fieldLabel: 'Saco Gestacional',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlSacoGestacionalOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlSacoGestacionalOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
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
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'biomGnrlLcn',
                                    fieldLabel: 'LCN',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlLcnOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlLcnOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1 
                                }]
                            }/*,
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'lcn',
                                    fieldLabel: 'LCN',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'semamasaco',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'diasaco',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1 
                                }]
                            }*/,
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'biomGnrlEmbrion',
                                    fieldLabel: 'Embrion',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlEmbrionOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlEmbrionOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
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
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'biomGnrlSacoVitalino',
                                    fieldLabel: 'Saco Vitalino',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlSacoVitalinoOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlSacoVitalinoOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
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
                                    labelWidth: 50
                                },
                                items:[{
                                    name : 'biomGnrlLcf',
                                    fieldLabel: 'LCF',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlLcfOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlLcfOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Otras Medidas Anexas',
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
                                    name : 'biomOtmaTn',
                                    fieldLabel: 'TN',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtmaTnIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
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
                                    name : 'biomOtmaHuesoNasal',
                                    fieldLabel: 'Hueso Nasal',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtmaHuesoNasalIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
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
                                    name : 'biomOtmaAnguloMaxiloFacial',
                                    fieldLabel: 'Angulo Maxilo Facial',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtmaAnguloMaxiloFacialIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Estimación de Peso'
                        },{
                            xtype: 'fieldset',
                            title: 'Relaciones Indices'
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
                                         [2,'Dra.']]
                            },
                            {
                                xtype: 'datefield',
                                name : 'diagnCitacion',
                                format: 'd/m/Y',
                                fieldLabel: 'Citacion'
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
