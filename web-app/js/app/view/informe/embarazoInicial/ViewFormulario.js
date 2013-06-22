Ext.define('PForm.view.informe.embarazoInicial.ViewFormulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.embarazoinicialviewform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Embarazo Inicial',
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
                url: 'embarazosIniciales/getFields',
                params: {
                    id: me.idInforme
                },
                success: function(response){
                    var text = response.responseText;
                    var jsonin = Ext.JSON.decode(text)
                    var form = me.down('#formId')
                    form.getForm().reset()
                    var mod = new PForm.model.EmbarazoInicial(jsonin.data)
                    form.loadRecord(mod)

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
                itemId: 'formId',
                padding: '5 5 5 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    labelWidth: 170,
                    readOnly: true,
                    combineErrors: true,
                    msgTarget: 'side'
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
                            items: [
                            {
                                xtype: 'datefield',
                                name : 'infoEgesFur',
                                format: 'd/m/Y',
                                fieldLabel: 'FUR'
                            },
                            {
                                xtype: 'textfield',
                                name : 'infoEgesEg',
                                fieldLabel: 'EG'
                            }]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Medidas (mm)',
                            defaults: {
                                xtype: 'numberfield',
                                allowDecimals: true,
                                minValue: 0,
                                step: 0.1
                            },
                            items: [
                            {
                                name : 'infoMedidasSacoGestacional',
                                fieldLabel: 'Saco Gestacional',

                            },
                            {
                                name : 'infoMedidasLcn',
                                fieldLabel: 'LCN'
                            },
                            {
                                name : 'infoMedidasEmbrion',
                                fieldLabel: 'Embrion'
                            },
                            {
                                name : 'infoMedidasSacoVitelino',
                                fieldLabel: 'Saco Vitelino'
                            },
                            {
                                name : 'infoMedidasTroboflasto',
                                fieldLabel: 'Troboflasto'
                            },
                            {
                                name : 'infoMedidasLcf',
                                fieldLabel: 'LCF'
                            }]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Observaciones',
                            items: [
                            {
                                xtype: 'textarea',
                                name : 'infoObservaciones',
                                hideLabel: true
                            }]
                        }]
                    },{
                        title: 'Diagnosticos',
                        items:[{
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
                                name : 'diagnInfogenEcografia',
                                fieldLabel: 'Ecografista'
                            },
                            {
                                xtype: 'textfield',
                                name : 'diagnInfogenBecado',
                                fieldLabel: 'Becado'
                            },
                            {
                                xtype: 'textfield',
                                name : 'diagnInfogenEquipo',
                                fieldLabel: 'Equipo'
                            },
                            {
                                xtype: 'combo',
                                name : 'diagnInfogenDerivada',
                                fieldLabel: 'Derivada',
                                store: [[1,'Dr.'],
                                         [2,'Dra.']]
                            },
                            {
                                xtype: 'datefield',
                                format: 'd/m/Y',
                                name : 'diagnInfogenCitacion',
                                fieldLabel: 'Citacion'
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
