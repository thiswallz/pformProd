Ext.define('PForm.view.admin.MenuTop', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'menutop',

    initComponent: function() {
        Ext.apply(this, {
            width: 500,
            items: [
            '->', 
            {
                xtype: 'combo'
            },
            {
                text:'Log Out'
            }]
        });
        this.callParent();
    }
});