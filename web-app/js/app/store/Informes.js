Ext.define('PForm.store.Informes', {
    extend      : 'Ext.data.Store',
    model       : 'PForm.model.Informe',
    autoLoad    : true,
    pageSize    : 35,
    autoLoad    : {start: 0, limit: 35},
    
    proxy       : {
        type        : 'ajax',
        api         : {
            read       : 'general/listadoInformes'
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