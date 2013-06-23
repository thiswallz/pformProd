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
                                    itemId:'infoEgesFurId',
                                    readOnly: true,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'infoEgesEg',
                                    fieldLabel: 'EG' ,
                                    flex: 1,
                                    allowDecimals: false,
                                    itemId: 'infoEgesEgId',
                                    minValue: 0,
                                    readOnly: true,
                                    step: 1
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'datefield',
                                    name : 'infoEgesFpp',
                                    fieldLabel: 'FPP',
                                    flex: 1,
                                    format: 'd/m/Y',
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
                                    flex: 1,
                                    format: 'd/m/Y',
                                    editable: false
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
                                    name : 'infoAumbIP',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'infoAumbIR',
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
                                    name : 'infoAumbSD',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'infoAumbFlujoDiastolico',
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
                                    name : 'infoAumbPercentil',
                                    fieldLabel: 'Percentil',
                                    readOnly: true,
                                    value: 0
                                },{
                                    name : 'infoAumbConclusion',
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
                                    name : 'infoAcermedIP',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'infoAcermedIR',
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
                                    name : 'infoAcermedSD',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'infoAcermedFlujoDiastolico',
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
                                    name : 'infoAcermedPercentil',
                                    fieldLabel: 'Percentil',
                                    readOnly: true,
                                    value: 0
                                },{
                                    name : 'infoAcermedConclusion',
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
                                    name : 'infoAutederIP',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'infoAutederIR',
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
                                    name : 'infoAutederSD',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'infoAutederFlujoDiastolico',
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
                                    name : 'infoAutederPercentil',
                                    fieldLabel: 'Percentil',
                                    readOnly: true,
                                    value: 0
                                },{
                                    name : 'infoAutederConclusion',
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
                                    name : 'infoAuteizqIP',
                                    fieldLabel: 'IP'
                                },{
                                    name : 'infoAuteizqIR',
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
                                    name : 'infoAuteizqSD',
                                    fieldLabel: 'S/D'
                                },{
                                    name : 'infoAuteizqFlujoDiastolico',
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
                                    name : 'infoAuteizqPercentil',
                                    fieldLabel: 'Percentil',
                                    readOnly: true,
                                    value: 0
                                },{
                                    name : 'infoAuteizqConclusion',
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
                                    name : 'biofDvenVelSistolicaMax',
                                    fieldLabel: 'Vel. Sistolica Max.'
                                },{
                                    name : 'biofDvenVelDiasloticaMin',
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
                                    name : 'biofDvenIndiceSIP',
                                    fieldLabel: 'Indice S/ IP'
                                },{
                                    xtype:'textfield',
                                    name : 'biofDvenConclusion',
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
                                    name : 'biofAcermedVelSistolicaMax',
                                    fieldLabel: 'Vel. Sistolica Max.'
                                },{
                                    name : 'biofAcermedVelDiasloticaMin',
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
                                    name : 'biofAcermedIndiceSIP',
                                    fieldLabel: 'Indice S/ IP'
                                },{
                                    xtype:'textfield',
                                    name : 'biofAcermedConclusion',
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
                                    name : 'biofVcovinfIPPosi',
                                    fieldLabel: 'IP P. Posi.'
                                },{
                                    name : 'biofVcovinfIPPNega',
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
                                    name : 'biofVcovinfFlujoReverso',
                                    fieldLabel: '% Flujo Reverso'
                                },{
                                    xtype:'textfield',
                                    name : 'biofVcovinfConclusion',
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
                                    name : 'biofVumbIPPosi',
                                    fieldLabel: 'IP P. Posi.'
                                },{
                                    name : 'biofVumbIPPNega',
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
                                    name : 'biofVumbFlujoReverso',
                                    fieldLabel: '% Flujo Reverso'
                                },{
                                    xtype:'textfield',
                                    name : 'biofVumbConclusion',
                                    fieldLabel: 'Conclusion'
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Flujo Mitral',
                            items:[{
                                xtype: 'textfield',
                                name:'biofFmitConslusion',
                                fieldLabel:'Conclusion'
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Flujo Tricuspideo',
                            items:[{
                                xtype: 'textfield',
                                name:'biofFtriConslusion',
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
                                    name : 'biofPbioMovCorporales',
                                    fieldLabel: 'Mov. Corporales'
                                },{
                                    name : 'biofPbioMovRespiratorios',
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
                                    name : 'biofPbioTonoFetal',
                                    fieldLabel: 'Tono Fetal'
                                },{
                                    name : 'biofPbioLiquidoOvular',
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
                                    name : 'biofPbioPlacenta',
                                    fieldLabel: 'Placenta'
                                },{
                                    name : 'biofPbioLocalizacion',
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
                            title: 'diagnConclusiones',
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
