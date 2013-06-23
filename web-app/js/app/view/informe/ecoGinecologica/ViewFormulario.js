Ext.define('PForm.view.informe.ecoGinecologica.ViewFormulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecoginecologicaviewform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Ginecologica',
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
                url: 'ecoGinecologicas/getFields',
                params: {
                    id: me.idInforme
                },
                success: function(response){
                    var text = response.responseText;
                    var jsonin = Ext.JSON.decode(text)
                    var form = me.down('#formId')
                    form.getForm().reset()
                    var mod = new PForm.model.EcoGinecologica(jsonin.data)
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
                                    itemId: 'infoEgesFurId',
                                    format: 'd/m/Y',
                                    fieldLabel: 'FUR',
                                    flex: 1,
                                    readOnly: true
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
                                    name : 'infoUterUtero',
                                    fieldLabel: 'Utero'
                                },{
                                    name : 'infoUterContorno',
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
                                    name : 'infoUterParequima',
                                    fieldLabel: 'Parequima'
                                },{
                                    xtype:'numberfield',
                                    name : 'infoUterLongitud',
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
                                    name : 'infoUterAP',
                                    fieldLabel: 'AP'
                                },{
                                    name : 'infoUterTranverso',
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
                                    name : 'infoUterCervix',
                                    fieldLabel: 'Cervix'
                                },{
                                    name : 'infoUterOtros',
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
                                    name : 'infoUterConclusion',
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
                                    name : 'infoEndoEndometrio',
                                    fieldLabel: 'Endometrio'
                                },{
                                    name : 'infoEndoTipo',
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
                                    name : 'infoEndoMide',
                                    fieldLabel: 'Mide'
                                },{
                                    name : 'infoEndoOtros',
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
                                    name : 'infoEndoConclusion',
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
                                    name : 'infoOderOvario',
                                    fieldLabel: 'Ovario'
                                },{
                                    xtype:'numberfield',
                                    name : 'infoOderMide',
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
                                    name : 'infoOderOtros',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'infoOderConclusion',
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
                                    name : 'infoOizqOvario',
                                    fieldLabel: 'Ovario'
                                },{
                                    xtype:'numberfield',
                                    name : 'infoOizqMide',
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
                                    name : 'infoOizqOtros',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'infoOizqConclusion',
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
                                    name : 'infoFsacOtros',
                                    fieldLabel: 'Otros'
                                },{
                                    name : 'infoFsacConslusion',
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
