Ext.define('PForm.view.informe.segundoTercerTrimestre.Formulario', {
    extend: 'Ext.window.Window',
    alias : 'widget.segundotercertrimestreform',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Segundo y Tercer Trimestre',
    layout: 'fit',
    autoShow: true,
    width: 650,
    modal: true,
    iconCls: 'icon-add',
    y: 10,
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
                                    itemId: 'infoEgesFurId',
                                    format: 'd/m/Y',
                                    fieldLabel: 'FUR',
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    readOnly: true,
                                    name : 'infoEgesEg',
                                    itemId: 'infoEgesEgId',
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
                                    editable : false
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
                                    editable : false
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
                                }]
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
                        title: 'Biometria',
                        height: 500,
                        autoScroll: true,
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Biometria',
                            defaults: {
                                padding: '0 8px 8px 8px'
                            },
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
                                    name : 'biomGnrlDbp',
                                    itemId : 'biomGnrlDbp',
                                    fieldLabel: 'DBP',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlDbpOpS',
                                    itemId : 'biomGnrlDbpOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlDbpOpD',
                                    itemId : 'biomGnrlDbpOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlFo',
                                    fieldLabel: 'FO',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlFoOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlFoOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlPx',
                                    fieldLabel: 'PX',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlPxOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlPxOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlAc',
                                    fieldLabel: 'AC',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAcOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAcOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlAbdomenAp',
                                    fieldLabel: 'Abdomen AP',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenApOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenApOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlAbdomenTr',
                                    fieldLabel: 'Abdomen TR',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenTrOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenTrOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlAbdomenPer',
                                    fieldLabel: 'Abdomen Perimetro',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenPerOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlAbdomenPerOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomGnrlFemur',
                                    fieldLabel: 'Femur',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlFemurOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomGnrlFemurOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Estudios Huesos Largos',
                            defaults: {
                                padding: '0 8px 8px 8px'
                            },
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
                                    name : 'biomEstHuesLarHumero',
                                    fieldLabel: 'Humero',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarHumeroOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarHumeroOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomEstHuesLarCubito',
                                    fieldLabel: 'Cubito',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarCubitoOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarCubitoOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomEstHuesLarRadio',
                                    fieldLabel: 'Radio',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarRadioOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarRadioOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomEstHuesLarFemur',
                                    fieldLabel: 'Femur',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarFemurOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarFemurOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomEstHuesLarTibia',
                                    fieldLabel: 'Tibia',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarTibiaOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarTibiaOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomEstHuesLarPerone',
                                    fieldLabel: 'Perone',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarPeroneOpS',
                                    fieldLabel: 'S' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstHuesLarPeroneOpD',
                                    fieldLabel: 'D' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1 
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Otras Medidas Anexas',
                            defaults: {
                                padding: '0 8px 8px 8px'
                            },
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
                                    name : 'biomOtrasAnexAtrium',
                                    fieldLabel: 'Atrium',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtrasAnexAtriumIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomOtrasAnexCistMagna',
                                    fieldLabel: 'Cisterna Magna',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtrasAnexCistMagnaIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    name : 'biomOtrasAnexCerebelo',
                                    fieldLabel: 'Cerebelo',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomOtrasAnexCerebeloIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
                                    flex: 1
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Estimación de Peso',
                            defaults: {
                                padding: '0 8px 8px 8px'
                            },
                            items: [
                            {
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80,
                                    value : 0,
                                    readOnly:true
                                },
                                items:[{
                                    name : 'biomEstPesoHadlock',
                                    fieldLabel: 'Hadlock',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstPesoHadlockIt',
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
                                    labelWidth: 80,

                                    readOnly: true,
                                    value : 0,
                                },
                                items:[{
                                    name : 'biomEstPesoShepard',
                                    fieldLabel: 'Shepard',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstPesoShepardIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    readOnly: true,
                                    value : 0,
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
                                    labelWidth: 80,
                                    value : 0,
                                    readOnly:true
                                },
                                items:[{
                                    name : 'biomEstPesoTodasHadlock',
                                    fieldLabel: 'Todas Hadlock',
                                    flex: 2,
                                    labelWidth: 120
                                },{
                                    xtype: 'numberfield',
                                    name : 'biomEstPesoodasHadlockIt',
                                    fieldLabel: 'Indice Tabla' ,
                                    step: 1,
                                    minValue: 0,
                                    flex: 1
                                }]
                            }]
                        },{
                            xtype: 'fieldset',
                            title: 'Otras Medidas Anexas',
                            items: [{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80,
                                    value : 0,
                                    readOnly:true
                                },
                                items:[{
                                    name : 'biomOtrasAnexFa',
                                    fieldLabel: 'F/A'
                                },{
                                    name : 'biomOtrasAnexFca',
                                    fieldLabel: 'F/CA' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    step: 0.1,
                                    labelWidth: 80,
                                    value : 0,
                                    readOnly:true
                                },
                                items:[{
                                    name : 'biomOtrasAnexDdbp',
                                    fieldLabel: 'D/DBP'
                                },{
                                    name : 'biomOtrasAnexCcca',
                                    fieldLabel: 'CC/CA' 
                                }]
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
                                    maxValue: 2,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'biomPerfilBiofisicoMovCorporal',
                                    fieldLabel: 'Mov. Corporales'
                                },{
                                    name : 'biomPerfilBiofisicoMovRespiratorio',
                                    fieldLabel: 'Mov. Respiratorios' 
                                }]
                            },{
                                xtype:'container',
                                layout: 'hbox',
                                defaults:{
                                    xtype: 'numberfield',
                                    allowDecimals: true,
                                    minValue: 0,
                                    maxValue: 2,
                                    step: 0.1,
                                    labelWidth: 80
                                },
                                items:[{
                                    name : 'biomPerfilBiofisicoTonoFetal',
                                    fieldLabel: 'Tono Fetal'
                                },{
                                    name : 'biomPerfilBiofisicoLiquidoOvular',
                                    fieldLabel: 'Liquido Ovular' 
                                }]
                            }]
                        }]
                    },{
                        title: 'Anatomia',
                        items:[
                        {
                            xtype: 'fieldset',
                            title: 'Anatomia'
                        },{
                            xtype: 'fieldset',
                            title: 'Anatomia Cardiaca'
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
                                format: 'd/m/Y',
                                name : 'diagnCitacion',
                                fieldLabel: 'Citacion',
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
