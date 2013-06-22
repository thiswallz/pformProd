package org.pform.informes

import java.util.Date;

class SegundoTercerTrimestre {
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
	//Biometria
	//****Biometria
	Double biomGnrlDbp
	Double biomGnrlDbpOpS
	Double biomGnrlDbpOpD
	Double biomGnrlFo
	Double biomGnrlFoOpS
	Double biomGnrlFoOpD
	Double biomGnrlPx
	Double biomGnrlPxOpS
	Double biomGnrlPxOpD
	Double biomGnrlAc
	Double biomGnrlAcOpS
	Double biomGnrlAcOpD
	Double biomGnrlAbdomenAp
	Double biomGnrlAbdomenApOpS
	Double biomGnrlAbdomenApOpD
	Double biomGnrlAbdomenTr
	Double biomGnrlAbdomenTrOpS
	Double biomGnrlAbdomenTrOpD
	Double biomGnrlAbdomenPer
	Double biomGnrlAbdomenPerOpS
	Double biomGnrlAbdomenPerOpD
	Double biomGnrlFemur
	Double biomGnrlFemurOpS
	Double biomGnrlFemurOpD
	//****Estudio Huesos Largos
	Double biomEstHuesLarHumero
	Double biomEstHuesLarHumeroOpS
	Double biomEstHuesLarHumeroOpD
	Double biomEstHuesLarCubito
	Double biomEstHuesLarCubitoOpS
	Double biomEstHuesLarCubitoOpD
	Double biomEstHuesLarRadio
	Double biomEstHuesLarRadioOpS
	Double biomEstHuesLarRadioOpD
	Double biomEstHuesLarFemur
	Double biomEstHuesLarFemurOpS
	Double biomEstHuesLarFemurOpD
	Double biomEstHuesLarTibia
	Double biomEstHuesLarTibiaOpS
	Double biomEstHuesLarTibiaOpD
	Double biomEstHuesLarPerone
	Double biomEstHuesLarPeroneOpS
	Double biomEstHuesLarPeroneOpD
	//****Otras Medidas Anexas 1
	Double biomOtrasAnexAtrium
	Double biomOtrasAnexAtriumIt
	Double biomOtrasAnexCistMagna
	Double biomOtrasAnexCistMagnaIt
	Double biomOtrasAnexCerebelo
	Double biomOtrasAnexCerebeloIt
	//****Estimacion de Peso
	Double biomEstPesoHadlock
	Double biomEstPesoHadlockIt
	Double biomEstPesoShepard
	Double biomEstPesoShepardIt
	Double biomEstPesoTodasHadlock
	Double biomEstPesoodasHadlockIt
	//****Otras Medidas Anexas 2
	Double biomOtrasAnexFa
	Double biomOtrasAnexFca
	Double biomOtrasAnexDdbp
	Double biomOtrasAnexCcca
	//****Otras Medidas Anexas 2
	Double biomPerfilBiofisicoMovCorporal
	Double biomPerfilBiofisicoMovRespiratorio
	Double biomPerfilBiofisicoTonoFetal
	Double biomPerfilBiofisicoLiquidoOvular
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
		infoEgesLcf nullable: true
		infoEgesGemelo nullable: true
		infoEgesGemelos nullable: true
		diagnObservaciones maxSize: 1000
		diagnDiagnosticos maxSize: 1000
    }
}
