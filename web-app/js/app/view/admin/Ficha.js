Ext.define('PForm.view.admin.Ficha', {
    extend: 'Ext.panel.Panel',
    xtype: 'adminficha',
    listeners: {
        afterrender: function (el) {
            var me = this

            me.down('#dis_rutId').setValue(me.jsonin.data.rut)
            me.down('#dis_nombreId').setValue(me.jsonin.data.nombre + " " + me.jsonin.data.apellidoPaterno)
            me.down('#dis_previsionId').setValue(me.jsonin.data.prevision)
            me.down('#dis_nacimientoId').setValue(me.jsonin.data.fechaNacimiento)
            me.down('#dis_patologiaId').setValue(me.jsonin.data.patologias[0])
            me.down('#dis_telefonoId').setValue(me.jsonin.data.telefonos[0])
            me.down('#dis_correoId').setValue(me.jsonin.data.correo)

        }
    },
    items: [{
        xtype: 'image',
        src: 'http://www.sencha.com/img/20110215-feat-html5.png',
        width : 295
    },{
        xtype: 'displayfield',
        fieldLabel: 'RUT:',
        itemId: 'dis_rutId',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Nombre:',
        itemId: 'dis_nombreId',
        value: 'Alexia Fernandez',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Previsión:',
        itemId: 'dis_previsionId',
        value: 'FONASA',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Nacimiento:',
        itemId: 'dis_nacimientoId',
        value: '21/06/1987',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Patologia:',
        itemId: 'dis_patologiaId',
        value: 'Hipertensión',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Telefono:',
        itemId: 'dis_telefonoId',
        value: '123 55 77',
        padding: '5 5 5 5'
    },{
        xtype: 'displayfield',
        fieldLabel: 'Correo:',
        name: 'correo',
        itemId: 'dis_correoId',
        value: 'ale_fer87@gmail.com',
        padding: '5 5 5 5'
    }]
});