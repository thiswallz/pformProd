var types = Ext.data.Types;
Ext.define('PForm.model.Informe', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
        {name: 'codInforme', type: types.AUTO},
    	{name: 'informe', type: types.AUTO},
    	{name: 'doctor', type: types.AUTO},
    	{name: 'fecha', type: types.DATE, dateFormat: 'd/m/Y'},
        {name: 'accion', type: types.AUTO}
    ]
});