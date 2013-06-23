package org.pform.informes

import java.util.Date;

import estructuras.ElementoGeneral


class EmbarazoInicial {
	//datos geenrales de la entidad
	Date tableFechaIngreso =  new Date()
	String rutPac
	String imgPath01
	String imgPath02
	String imgPath03
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
		imgPath01 nullable: true
		imgPath02 nullable: true
		imgPath03 nullable: true
		infoObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
    }
}
