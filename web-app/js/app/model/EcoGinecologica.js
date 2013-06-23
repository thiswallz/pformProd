var types = Ext.data.Types;
Ext.define('PForm.model.EcoGinecologica', {
    extend: 'Ext.data.Model',
    fields: [
    	{name: 'id', type: types.NUMBER},
        {name: 'tableFechaIngreso', type: types.AUTO},
		{name: 'rutPac', type: types.AUTO},

		{name: 'infoEgesFur', type: types.AUTO},

		{name: 'infoUterUtero', type: types.AUTO},
		{name: 'infoUterContorno', type: types.AUTO},
		{name: 'infoUterParequima', type: types.AUTO},
		{name: 'infoUterLongitud', type: types.AUTO},
		{name: 'infoUterAP', type: types.AUTO},
		{name: 'infoUterTranverso', type: types.AUTO},
		{name: 'infoUterCervix', type: types.AUTO},
		{name: 'infoUterOtros', type: types.AUTO},
		{name: 'infoUterConclusion', type: types.AUTO},
		{name: 'infoEndoEndometrio', type: types.AUTO},
		{name: 'infoEndoTipo', type: types.AUTO},
		{name: 'infoEndoMide', type: types.AUTO},
		{name: 'infoEndoOtros', type: types.AUTO},
		{name: 'infoEndoConclusion', type: types.AUTO},
		{name: 'infoOderOvario', type: types.AUTO},
		{name: 'infoOderMide', type: types.AUTO},
		{name: 'infoOderOtros', type: types.AUTO},
		{name: 'infoOderConclusion', type: types.AUTO},
		{name: 'infoOizqOvario', type: types.AUTO},
		{name: 'infoOizqMide', type: types.AUTO},
		{name: 'infoOizqOtros', type: types.AUTO},
		{name: 'infoOizqConclusion', type: types.AUTO},
		{name: 'infoFsacOtros', type: types.AUTO},
		{name: 'infoFsacOtros', type: types.AUTO},


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