var types = Ext.data.Types;
Ext.define('PForm.model.Distocia', {
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
        {name: 'infoEgesNumeroFetos', type: types.AUTO},
		{name: 'infoEgesGestacion', type: types.AUTO},
		{name: 'infoEgesGemelos', type: types.AUTO},
		{name: 'infoEgesGemelo', type: types.AUTO},
		
		
		
		{name: 'infoEgesCorioncicidad', type: types.AUTO},
		{name: 'infoEgesAmniocidad', type: types.AUTO},
		{name: 'infoEgesPosicion', type: types.AUTO},
		{name: 'infoEgesLcf', type: types.AUTO},
		{name: 'infoEgesFcardiaca', type: types.AUTO},
		{name: 'infoEgesPresentacion', type: types.AUTO},
		{name: 'infoEgesTroboflasto', type: types.AUTO},
		{name: 'infoEgesPlacenta', type: types.AUTO},
		{name: 'infoEgesLocalizacion', type: types.AUTO},
		{name: 'infoEgesInsercion', type: types.AUTO},
		{name: 'infoEgesMadurez', type: types.AUTO},
		{name: 'infoEgesInterfase', type: types.AUTO},
		{name: 'infoEgesCordon', type: types.AUTO},
		{name: 'infoEgesLa', type: types.AUTO},
		{name: 'infoEgesPresentaLa', type: types.AUTO},
		{name: 'infoEgesPresentaLaTabla', type: types.AUTO},





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