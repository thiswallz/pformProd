var types = Ext.data.Types;
Ext.define('PForm.model.Recordatorio', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
        {name: 'nombre', type: types.AUTO},
    	{name: 'fecha', type: types.DATE, dateFormat: 'd/m/Y'}
    ]
});