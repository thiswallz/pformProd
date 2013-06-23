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
                                    name : 'infoEgesFur',
                                    fieldLabel: 'FUR',
                                    format: 'd/m/Y',
                                    itemId: 'infoEgesFurId',
                                    flex: 1,
                                    readOnly: true
                                },{
                                    xtype: 'numberfield',
                                    name : 'infoEgesEg',
                                    fieldLabel: 'EG' ,
                                    flex: 1,
                                    allowDecimals: false,
                                    itemId: 'infoEgesEgId',
                                    minValue: 0,
                                    step: 1,
                                    readOnly: true
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    name : 'infoEgesFpp',
                                    fieldLabel: 'FPP',
                                    format: 'd/m/Y',
                                    flex: 1,
                                    editable: false
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
                                    name : 'infoEgesFechaEcoPrecoz',
                                    fieldLabel: 'Fecha ECO PRECOZ',
                                    format: 'd/m/Y',
                                    flex: 1,
                                    editable: false
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
                                    name : 'infoEbasCanalMaximo',
                                    fieldLabel: 'Canal Maximo'
                                },{
                                    name : 'infoEbasCanalMediano',
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
                                    name : 'infoEbasCanalMinimo',
                                    fieldLabel: 'Canal Minimo'
                                },{
                                    name : 'infoEbasFunnel',
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
                                    name : 'infoEbasAnchoFunnel',
                                    fieldLabel: 'Ancho Funnel'
                                },{
                                    name : 'infoEbasLargoFunnel',
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
                                    name : 'infoEstrCanal',
                                    fieldLabel: 'Canal'
                                },{
                                    name : 'infoEstrFunnel',
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
                                    name : 'infoEstrAnchoFunnel',
                                    fieldLabel: 'Ancho Funnel'
                                },{
                                    name : 'infoEstrLargoFunnel',
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
                                name : 'diagnCitacion',
                                fieldLabel: 'Citacion',
                                format: 'd/m/Y',
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
