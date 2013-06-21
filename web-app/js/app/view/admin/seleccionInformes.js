Ext.define('PForm.view.admin.seleccionInformes', {
    extend: 'Ext.window.Window',
    alias: 'widget.wininformes',
    layout: {
        type: 'vbox'
    },
    items:[{
        xtype: 'panel',
        layout: {
            type:'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Embarazo Inicial',
            action: 'cinformes',
            name : 'embarazoinicial',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            text: 'Primer Trimestre',
            action: 'cinformes',
            name: 'primertrimestre',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            text: '2do y 3er Trimestre',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            name: 'segundotercero'
        }]      
    },{
        xtype: 'panel',
        layout: {
            type:'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Perfil',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            name: 'perfil'
        },{
            xtype: 'button',
            text: 'Distocia',
            action: 'cinformes',
            name : 'distocia',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            text: 'Eco Cardiograma',
            action: 'cinformes',
            name: 'ecoCardio',
            padding: '5 5 5 5',
            margins : '5 5 5 5',
            width : '150'
        }]      
    },{
        xtype: 'panel',
        layout: {
            type:'hbox'
        },
        items: [{
            xtype: 'button',
            text: 'Eco Cervical',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            name: 'ecoCervi'
        },{
            xtype: 'button',
            text: 'Eco Doppler',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            name: 'ecoDopp'
        },{
            xtype: 'button',
            text: 'Eco Ginecologica',
            action: 'cinformes',
            name : 'ecoGine',
            margins: '5 5 5 5',
            width : '150'
        }]      
    }]

});