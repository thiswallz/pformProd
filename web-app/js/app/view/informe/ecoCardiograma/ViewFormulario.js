Ext.define('PForm.view.informe.ecoCardiograma.ViewFormulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.ecocardiogramaviewform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'ECO Cardiograma',
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
                url: 'ecoCardiogramas/getFields',
                params: {
                    id: me.idInforme
                },
                success: function(response){
                    var text = response.responseText;
                    var jsonin = Ext.JSON.decode(text)
                    var form = me.down('#formId')
                    form.getForm().reset()
                    var mod = new PForm.model.EcoCardiograma(jsonin.data)
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
                                    flex: 1,
                                    editable:false
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
                                    flex: 1,
                                    editable:false
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
                                    name : 'infoEgesFcardiaca',
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
                                    name : 'infoEgesTroboflasto',
                                    fieldLabel: 'Troboflasto',
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesPlacenta',
                                    fieldLabel: 'Placenta',
                                    store: [[1,'BAJA'],
                                    [2,'PREVIA'],
                                    [3,'PREVIA OCLUSIVA'],
                                    [4,'NORMOINSERTA']],
                                    editable: false,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesLocalizacion',
                                    fieldLabel: 'Localización' ,
                                    store: [[1,'ANTERIOR'],
                                    [2,'POSTERIOR'],
                                    [3,'ANTERO POSTERIOR']],
                                    editable: false,
                                    flex: 1
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesInsercion',
                                    fieldLabel: 'Inserción' ,
                                    store: [[1,'NORMOINSERTA']],
                                    editable: false,
                                    flex: 1 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'combo',
                                    name : 'infoEgesMadurez',
                                    fieldLabel: 'Madurez' ,
                                    store: [[1,'NINGUNA'],
                                    [2,'GRADO 0'],
                                    [3,'GRADO 1'],
                                    [4,'GRADO 2']],
                                    editable: false,
                                    flex: 1
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesInterfase',
                                    fieldLabel: 'Interfase',
                                    flex: 1
                                }/*,{
                                    xtype: 'textfield',
                                    name : 'infoEgesGrado',
                                    fieldLabel: 'Grado' ,
                                    flex: 1 
                                }*/]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesCordon',
                                    fieldLabel: 'Cordon',
                                    flex: 1 
                                },{
                                    xtype: 'combo',
                                    name : 'infoEgesLa',
                                    fieldLabel: 'LA' ,
                                    store: [[1,'LEVEMENTE'],
                                    [2,'DISMINUIDO'],
                                    [3,'AUMNETADO'],
                                    [4,'OLIGOAMNIOS'],
                                    [5,'POLIHIDROAMNIOS']],
                                    editable: false,
                                    flex: 1
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                items:[{
                                    xtype: 'textfield',
                                    name : 'infoEgesPresentaLa',
                                    fieldLabel: 'Indice LA' ,
                                    flex: 1 
                                },{
                                    xtype: 'textfield',
                                    name : 'infoEgesPresentaLaTabla',
                                    fieldLabel: 'Indice por Tabla' ,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'coraCfetEje',
                                    fieldLabel: 'EJE',
                                    store: ['Unica'],
                                    editable: false
                                },{
                                    xtype: 'numberfield',
                                    name : 'coraCfetTamano',
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
                                    name : 'coraCfetCuatroCamaras',
                                    fieldLabel: 'Cuatro Camaras'
                                },{
                                    xtype: 'numberfield',
                                    name : 'coraCfetTabiqueInterventricular',
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
                                    name : 'coraCfetCaractTI',
                                    fieldLabel: 'Caract. T. I.'
                                },{
                                    name : 'coraCfetForamenOval',
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
                                    name : 'coraCfetAuriculoVentricular',
                                    fieldLabel: 'Auriculo Ventricular'
                                },{
                                    name : 'coraCfetVentriloArterial',
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
                                    name : 'coraCfetFlujosIntracardiacos',
                                    fieldLabel: 'Flujos Intracardiacos'
                                },{
                                    name : 'coraCfetCayoAortico',
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
                                    name : 'coraCfetCayoDuctal',
                                    fieldLabel: 'Cayo Ductal'
                                },{
                                    name : 'coraCfetDiamentrosCorazon',
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
                                    name : 'coraCfetDGrandesVasos',
                                    fieldLabel: 'D. Grandes Vasos'
                                },{
                                    name : 'coraCfetGrosorParedes',
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
                                    name : 'coraCfetRitmoCardiaco',
                                    fieldLabel: 'Ritmo Cardiaco'
                                },{
                                    name : 'coraCfetTiempoConduccion',
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
                                    name : 'coraCfetDrenajeVenosoDer',
                                    fieldLabel: 'Drenaje Venoso Der.'
                                },{
                                    name : 'coraCfetDrenajeVenosoIzq',
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
                                    name : 'coraCfetFrecuenciaCardiaca',
                                    fieldLabel: 'Frecuencia Cardiaca'
                                },{
                                    xtype: 'textfield',
                                    name : 'coraCfetOtros',
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
                                    name : 'coraCfetConclusion',
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
