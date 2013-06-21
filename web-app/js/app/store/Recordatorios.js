Ext.define('PForm.store.Recordatorios', {
    extend      : 'Ext.data.Store',
    model       : 'PForm.model.Recordatorio',
    autoLoad    : true,
    proxy       : {
        type        : 'ajax',
        api         : {
            read       : 'general/listadoRecordatorios'
        },
        reader  : {
            type       : 'json',
            root       : 'data',
            successProperty: 'success'
        },
        writer  : {
            type        : 'json',
            writeAllFields: true,
            encode      : true,
            root        : 'data'
        }
    }
});