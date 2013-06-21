var types = Ext.data.Types;
Ext.define('PForm.model.Medico', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
    	{name: 'rut', type: types.AUTO},
    	{name: 'nombre', type: types.AUTO},
    	{name: 'apellidoPaterno', type: types.AUTO},
    	{name: 'apellidoMaterno', type: types.AUTO},
    	{name: 'rcm', type: types.AUTO},
        {name: 'idEspecialidad', type: types.NUMBER},
    	{name: 'idPatologia', type: types.NUMBER}
    ],
	validations: [
        {type: 'format', field: 'rut', matcher: /^\d+-[\dkK]{1}$/, message: 'Rut invalido'}
    ]
});