package org.pform.informes

import java.util.Date;

import estructuras.ElementoGeneral


class EmbarazoInicial {
	//datos geenrales de la entidad
	Date tableFechaIngreso =  new Date()
	String rutPac
	
	//Informacion
	//****Edad Gestacional
	Date infoEgesFur
	String infoEgesEg
	//****Medidas
	Double infoMedidasSacoGestacional
	Double infoMedidasLcn
	Double infoMedidasEmbrion
	Double infoMedidasSacoVitelino
	Double infoMedidasTroboflasto
	Double infoMedidasLcf
	//****Obsr
	String infoObservaciones
	//Diagnostico
	//****Diagnosticos
	String diagnDiagnosticos
	//****Info General
	String diagnInfogenEcografia
	String diagnInfogenBecado
	String diagnInfogenEquipo
	String diagnInfogenDerivada
	Date diagnInfogenCitacion
	
    static constraints = {
		infoObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
    }
}
