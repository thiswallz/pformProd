var types = Ext.data.Types;
Ext.define('PForm.model.PrimerTrimestre', {
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

		{name: 'biomGnrlSacoGestacional', type: types.AUTO},
		{name: 'biomGnrlSacoGestacionalOpS', type: types.AUTO},
		{name: 'infoEgesPresentaLaTabla', type: types.AUTO},
		{name: 'biomGnrlSacoGestacionalOpD', type: types.AUTO},
		{name: 'biomGnrlLcn', type: types.AUTO},
		{name: 'biomGnrlLcnOpS', type: types.AUTO},
		{name: 'biomGnrlLcnOpD', type: types.AUTO},
		{name: 'biomGnrlEmbrion', type: types.AUTO},
		{name: 'biomGnrlEmbrionOpS', type: types.AUTO},
		{name: 'biomGnrlEmbrionOpD', type: types.AUTO},
		{name: 'biomGnrlSacoVitalino', type: types.AUTO},
		{name: 'biomGnrlSacoVitalinoOpS', type: types.AUTO},
		{name: 'biomGnrlSacoVitalinoOpD', type: types.AUTO},
		{name: 'biomGnrlLcf', type: types.AUTO},
		{name: 'biomGnrlLcfOpS', type: types.AUTO},
		{name: 'biomGnrlLcfOpD', type: types.AUTO},
		{name: 'biomOtmaTn', type: types.AUTO},
		{name: 'biomOtmaTnIt', type: types.AUTO},
		{name: 'biomOtmaHuesoNasal', type: types.AUTO},
		{name: 'biomOtmaHuesoNasalIt', type: types.AUTO},
		{name: 'biomOtmaAnguloMaxiloFacial', type: types.AUTO},
		{name: 'biomOtmaAnguloMaxiloFacialIt', type: types.AUTO},






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