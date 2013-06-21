Ext.define('PForm.view.admin.Home', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminhome',
    layout: 'border',
    initComponent: function() {
        var me = this;
        this.items = [{
            region:'west',
            xtype: 'panel',
            margins: '5 0 0 5',
            width: 300,
            layout: 'fit',
            items: [{
                xtype: 'adminficha',
                jsonin: me.jsonin
            }]
        },{
            region: 'center',
            xtype: 'panel',
            layout: 'fit',
            margins: '5 5 0 0',
            items:[{
                xtype: 'admingrid'
            }]
        }];
        this.callParent(arguments);
    }/*
    items : [{
        xtype: 'displayfield',
        fieldLabel: 'Home',
        name: 'home_score',
        value: '10'
    }]*/
});