var types = Ext.data.Types;
Ext.define('PForm.model.EmbarazoInicial', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
        {name: 'tableFechaIngreso', type: types.AUTO},
		{name: 'rutPac', type: types.AUTO},
		{name: 'infoEgesFur', type: types.AUTO},
		{name: 'infoEgesEg', type: types.AUTO},
		{name: 'infoMedidasSacoGestacional', type: types.AUTO},
		{name: 'infoMedidasLcn', type: types.AUTO},
        {name: 'infoMedidasEmbrion', type: types.AUTO},
		{name: 'infoMedidasSacoVitelino', type: types.AUTO},
		{name: 'infoMedidasTroboflasto', type: types.AUTO},
		{name: 'infoMedidasLcf', type: types.AUTO},
		{name: 'infoObservaciones', type: types.AUTO},
		{name: 'diagnDiagnosticos', type: types.AUTO},
        {name: 'diagnInfogenEcografia', type: types.AUTO},
		{name: 'diagnInfogenBecado', type: types.AUTO},
		{name: 'diagnInfogenEquipo', type: types.AUTO},
		{name: 'diagnInfogenDerivada', type: types.AUTO},
		{name: 'diagnInfogenCitacion', type: types.AUTO}
    ]
});