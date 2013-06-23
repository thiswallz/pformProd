package org.pform.informes

import java.util.Date;

class EcoGinecologica {
	//datos geenrales de la entidad
	Date tableFechaIngreso =  new Date()
	String rutPac
	EmbarazoInicial embarazoInicial
	//Informacion
	//****Edad Gestacional
	Date infoEgesFur
	String infoUterUtero
	String infoUterContorno
	String infoUterParequima
	Double infoUterLongitud
	String infoUterAP
	String infoUterTranverso
	String infoUterCervix
	String infoUterOtros
	String infoUterConclusion
	String infoEndoEndometrio
	String infoEndoTipo
	Double infoEndoMide
	String infoEndoOtros
	String infoEndoConclusion
	String infoOderOvario
	Double infoOderMide
	String infoOderOtros
	String infoOderConclusion
	String infoOizqOvario
	Double infoOizqMide
	String infoOizqOtros
	String infoOizqConclusion
	String infoFsacOtros
	String infoFsacConslusion
		
	//Diagnostico
	String diagnObservaciones
	String diagnDiagnosticos
	String diagnEcografista
	String diagnBecado
	String diagnEquipo
	String diagnDerivada
	Date diagnCitacion
	String diagnConclusiones
	
	static constraints = {
		diagnObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
	}
}
