Ext.define('PForm.view.admin.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.admingrid',  
    requires: ['Ext.toolbar.Paging'], 
    iconCls: 'icon-grid',
    title : 'Listado Informes',
    store: 'Informes',
    columns: [{
        hidden: true,
        dataIndex: 'id'
    },{
        hidden: true,
        dataIndex: 'codInforme'
    },{
    	header: "Informe",
		flex: 1,
		dataIndex: 'informe'
	},{
		header: "Fecha",
		width: 180,
		dataIndex: 'fecha',
        type: 'date', 
        dateFormat: 'd/m/Y',
        renderer: Ext.util.Format.dateRenderer('m/d/Y')
	},{
		header: "Doctor",
		width: 180,
		dataIndex: 'doctor'
	}],
	
	initComponent: function() {
		Ext.getStore('Informes').load()
		this.dockedItems = [{
            xtype: 'toolbar',
            items: [{
                iconCls: 'icon-add',
                itemId: 'addEInicial',
                text: 'Crear Informe Embarazo Inicial',
                action: 'addEInicial'
            },{
                iconCls: 'icon-add',
                itemId: 'add',
                text: 'Crear Informe',
                action: 'crearInforme'
            },{
                iconCls: 'icon-grid',
                itemId: 'ver',
                text: 'Ver Informe',
                action: 'verInforme'
            },'->',
            {
                iconCls: 'icon-delete',
                itemId: 'salir',
                text: 'Salir',
                action: 'salir'
            }
            ]
        },
        {
            xtype: 'pagingtoolbar',
            dock:'bottom',
            //store: 'Medicos',
            displayInfo: true,
            displayMsg: 'Mostrando {0} - {1} de {2}',
            emptyMsg: "No encontrado."
        }];
		
		this.callParent(arguments);
	}
});
