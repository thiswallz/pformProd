package org.pform.informes

import java.util.Date;

class EcoCardiograma {
	
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
	String infoEgesPresentaLaTabla
	//Corazon Fetal
	String coraCfetEje
	String coraCfetTamano
	String coraCfetCuatroCamaras
	String coraCfetTabiqueInterventricular
	String coraCfetCaractTI
	String coraCfetForamenOval
	String coraCfetAuriculoVentricular
	String coraCfetVentriloArterial
	String coraCfetFlujosIntracardiacos
	String coraCfetCayoAortico
	String coraCfetCayoDuctal
	String coraCfetDiamentrosCorazon
	String coraCfetDGrandesVasos
	String coraCfetGrosorParedes
	String coraCfetRitmoCardiaco
	String coraCfetTiempoConduccion
	String coraCfetDrenajeVenosoDer
	String coraCfetDrenajeVenosoIzq
	String coraCfetFrecuenciaCardiaca
	String coraCfetOtros
	String coraCfetConclusion
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
