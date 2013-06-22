Ext.define('PForm.view.admin.seleccionInformes', {
    extend: 'Ext.window.Window',
    alias: 'widget.wininformes',
    layout: {
        type: 'vbox'
    },
    initComponent: function() {
        this.callParent(arguments);
        var me = this;
        var size = this.permisos.length
        for(var i=0; i<=size; i++){

            if(this.permisos[i] == 'in02'){
                me.down('#primertrimestreId').setDisabled(false)

            }
            if(this.permisos[i] == 'in03'){
                me.down('#segundoterceroId').setDisabled(false)
            }

        }
        
    },
    items:[{
        xtype: 'panel',
        layout: {
            type:'hbox'
        },
        items: [{
            xtype: 'button',
            disabled: true,
            text: '',
            action: 'cinformes',
            name : 'embarazoinicial',
            itemId : 'embarazoinicialId',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            disabled: true,
            text: 'Primer Trimestre',
            action: 'cinformes',
            name: 'primertrimestre',
            itemId: 'primertrimestreId',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            disabled: true,
            text: '2do y 3er Trimestre',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            itemId: 'segundoterceroId',
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
            itemId: 'perfilId',
            name: 'perfil'
        },{
            xtype: 'button',
            text: 'Distocia',
            action: 'cinformes',
            name : 'distocia',
            itemId : 'distociaId',
            margins: '5 5 5 5',
            width : '150'
        },{
            xtype: 'button',
            text: 'Eco Cardiograma',
            action: 'cinformes',
            name: 'ecoCardio',
            itemId: 'ecoCardioId',
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
            itemId: 'ecoCerviId',
            name: 'ecoCervi'
        },{
            xtype: 'button',
            text: 'Eco Doppler',
            action: 'cinformes',
            margins: '5 5 5 5',
            width : '150',
            itemId: 'ecoDoppId',
            name: 'ecoDopp'
        },{
            xtype: 'button',
            text: 'Eco Ginecologica',
            action: 'cinformes',
            name : 'ecoGine',
            itemId : 'ecoGineId',
            margins: '5 5 5 5',
            width : '150'
        }]      
    }]

});