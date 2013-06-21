Ext.define('PForm.view.admin.Principal', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminprincipal',
    layout: {
        type: 'fit',
        tdAttrs: { style: 'padding: 5px;' }
    },
    requires: [
        'PForm.view.admin.MenuTop'
    ],
    defaults: {
        xtype: 'panel',
        frame: true
    },
    title: 'Panel Administracion',
    //tbar:  {xtype: 'menutop', itemId: 'tbarId'},
    initComponent: function () {
        this.items = [{
            xtype : 'container',
            width : '100%',
            layout: {
                type: 'hbox',
                align : 'middle'
            },
            items : [{
                xtype:'grid',
                store: 'Recordatorios',
                width : 300,
                height: '100%',
                columns:[{
                    header: 'Recordatorio',
                    dataIndex: 'nombre',
                    flex: 1
                },{
                    header: 'Fecha ',
                    dataIndex: 'fecha',
                    renderer: Ext.util.Format.dateRenderer('m/d/Y'),
                    flex: 1
                }]
            },
            {
                flex: 1,
                border: false,
                layout: {
                    type: 'hbox',
                    align : 'middle',
                    pack:'center'
                },
                items: [
                {
                    iconCls: 'icon-user',
                    xtype: 'panel',
                    frame: true,
                    border: true,
                    width: 500,
                    title: 'Busqueda de Pacientes',
                    items: [
                    {
                        xtype: 'textfield',
                        itemId: 'rutId',
                        padding : '20px 20px 20px 20px',
                        fieldLabel : 'Ingrese RUT Paciente',
                        labelWidth: 200,
                        width : 400              
                    }
                    ],
                    fbar: [{
                        xtype: 'button',
                        text: 'Buscar',
                        action: 'buscar'
                    }]
                }

                ]
            }



            ]
        }];
        this.callParent();
    }
});