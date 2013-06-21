Ext.define('PForm.store.Medicos', {
    extend      : 'Ext.data.Store',
    model       : 'PForm.model.Medico',
    autoLoad    : true,
    pageSize    : 35,
    autoLoad    : {start: 0, limit: 35},
    
    proxy       : {
        type        : 'ajax',
        api         : {
        	create     : 'medico/save', 
            read       : 'medico/list',
            update     : 'medico/update',
            destroy    : 'medico/delete'
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