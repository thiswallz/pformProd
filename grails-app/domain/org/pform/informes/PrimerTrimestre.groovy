package org.pform.informes

import java.util.Date;

class PrimerTrimestre {
	//datos geenrales de la entidad
	Date tableFechaIngreso =  new Date()
	String rutPac
	EmbarazoInicial embarazoInicial
	//Informacion
	//****Edad Gestacional
	Date infoEgesFur
	Double infoEgesEg
	Date infoEgesFpp
	Double infoEgesEcoPrecoz
	Date infoEgesFechaEcoPrecoz
	Integer infoEgesNumeroFetos
	String infoEgesGestacion
	String infoEgesGemelos //?
	String infoEgesGemelo //?
	String infoEgesCorioncicidad
	String infoEgesAmniocidad
	String infoEgesPosicion
	String infoEgesLcf
	Double infoEgesFcardiaca
	String infoEgesPresentacion
	String infoEgesTroboflasto
	String infoEgesPlacenta
	String infoEgesLocalizacion
	String infoEgesInsercion
	String infoEgesMadurez
	String infoEgesGrado
	String infoEgesInterfase
	String infoEgesCordon
	String infoEgesLa
	String infoEgesPresentaLa
	//Biometria
	//****Biometria
	Double biomGnrlSacoGestacional
	Double biomGnrlSacoGestacionalOpS
	Double biomGnrlSacoGestacionalOpD
	Double biomGnrlLcn
	Double biomGnrlLcnOpS
	Double biomGnrlLcnOpD
	Double biomGnrlEmbrion
	Double biomGnrlEmbrionOpS
	Double biomGnrlEmbrionOpD
	Double biomGnrlSacoVitalino
	Double biomGnrlSacoVitalinoOpS
	Double biomGnrlSacoVitalinoOpD
	Double biomGnrlLcf
	Double biomGnrlLcfOpS
	Double biomGnrlLcfOpD
	//****Otras Medidas Anexas
	String biomOtmaTn
	String biomOtmaTnIt
	String biomOtmaHuesoNasal
	String biomOtmaHuesoNasalIt
	String biomOtmaAnguloMaxiloFacial
	String biomOtmaAnguloMaxiloFacialIt
	//Diagnosticos
	String diagnObservaciones
	String diagnDiagnosticos
	String diagnEcografista
	String diagnBecado
	String diagnEquipo
	String diagnDerivada
	Date diagnCitacion
	String diagnConclusiones


	
    static constraints = {
		infoEgesLcf nullable: true
		infoEgesGemelo nullable: true
		infoEgesGemelos nullable: true
		diagnObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
    }
}
