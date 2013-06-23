package org.pform.informes

import java.util.Date;

class EcoCervical {
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
	Double infoEbasCanalMaximo
	Double infoEbasCanalMediano
	Double infoEbasCanalMinimo
	Double infoEbasFunnel
	Double infoEbasAnchoFunnel
	Double infoEbasLargoFunnel
	Double infoEstrCanal
	Double infoEstrFunnel
	Double infoEstrAnchoFunnel
	Double infoEstrLargoFunnel

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
