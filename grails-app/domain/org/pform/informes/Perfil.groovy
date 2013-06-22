package org.pform.informes

import java.util.Date;

class Perfil {
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
	String infoEgesInterfase
	String infoEgesCordon
	String infoEgesLa
	String infoEgesPresentaLa
	//Biofisico
	//****Perfil Biofisico
	Double biofisPerfilMovCorporales
	Double biofisPerfilMovRespiratorio
	Double biofisPerfilTonoFetal
	Double biofisPerfilLiquidoOvular
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
		infoEgesGemelo nullable: true
		infoEgesGemelos nullable: true
		diagnObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
    }
}
