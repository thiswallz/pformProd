package org.pform.informes

import java.util.Date;

class EcoDoppler {
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
	
	Double infoAumbIP
	Double infoAumbIR
	Double infoAumbSD
	Double infoAumbFlujoDiastolico
	Double infoAumbPercentil
	String infoAumbConclusion
	Double infoAcermedIP
	Double infoAcermedIR
	Double infoAcermedSD
	Double infoAcermedFlujoDiastolico
	Double infoAcermedPercentil
	String infoAcermedConclusion
	Double infoAutederIP
	Double infoAutederIR
	Double infoAutederSD
	Double infoAutederFlujoDiastolico
	Double infoAutederPercentil
	String infoAutederConclusion
	Double infoAuteizqIP
	Double infoAuteizqIR
	Double infoAuteizqSD
	Double infoAuteizqFlujoDiastolico
	Double infoAuteizqPercentil
	String infoAuteizqConclusion
	//Biofisico
	Double biofDvenVelSistolicaMax
	Double biofDvenVelDiasloticaMin
	Double biofDvenIndiceSIP
	String biofDvenConclusion
	
	Double biofAcermedVelSistolicaMax
	Double biofAcermedVelDiasloticaMin
	Double biofAcermedIndiceSIP
	String biofAcermedConclusion
	
	Double biofVcovinfIPPosi
	Double biofVcovinfIPPNega
	Double biofVcovinfFlujoReverso
	String biofVcovinfConclusion

	Double biofVumbIPPosi
	Double biofVumbIPPNega
	Double biofVumbFlujoReverso
	String biofVumbConclusion
	
	String biofFmitConslusion
	
	String biofFtriConslusion
	
	Double biofPbioMovCorporales
	Double biofPbioMovRespiratorios
	Double biofPbioTonoFetal
	Double biofPbioLiquidoOvular
	String biofPbioPlacenta
	String biofPbioLocalizacion
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
		diagnObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
	}
}
