var types = Ext.data.Types;
Ext.define('PForm.model.EcoCervical', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
        {name: 'tableFechaIngreso', type: types.AUTO},
		{name: 'rutPac', type: types.AUTO},
		{name: 'infoEgesFur', type: types.AUTO},
		{name: 'infoEgesEg', type: types.AUTO},
		{name: 'infoEgesFpp', type: types.AUTO},
		{name: 'infoEgesEcoPrecoz', type: types.AUTO},
		{name: 'infoEgesFechaEcoPrecoz', type: types.AUTO},
		
		
		
		{name: 'infoEbasCanalMaximo', type: types.AUTO},
		{name: 'infoEbasCanalMediano', type: types.AUTO},
		{name: 'infoEbasCanalMinimo', type: types.AUTO},
		{name: 'infoEbasFunnel', type: types.AUTO},
		{name: 'infoEbasAnchoFunnel', type: types.AUTO},
		{name: 'infoEbasLargoFunnel', type: types.AUTO},
		{name: 'infoEstrCanal', type: types.AUTO},
		{name: 'infoEstrFunnel', type: types.AUTO},
		{name: 'infoEstrAnchoFunnel', type: types.AUTO},
		{name: 'infoEstrLargoFunnel', type: types.AUTO},





		{name: 'diagnObservaciones', type: types.AUTO},
		{name: 'diagnDiagnosticos', type: types.AUTO},
        {name: 'diagnEcografista', type: types.AUTO},
		{name: 'diagnBecado', type: types.AUTO},
		{name: 'diagnEquipo', type: types.AUTO},
		{name: 'diagnDerivada', type: types.AUTO},
		{name: 'diagnCitacion', type: types.AUTO},
		{name: 'diagnConclusiones', type: types.AUTO}
    ]
});