package org.pform.servicios.informes

import grails.converters.JSON
import org.pform.informes.*
import org.pform.mantenedores.*
class GeneralController {

	def jsonResponseOK = [success: true, data: []]
	def jsonResponseERROR = [success: false, message: "Error al procesar registro", failure: true]
	def dateParser = new java.text.SimpleDateFormat("dd/MM/yyyy")
	
    def index() { }
	
	def salir() { 
		session.invalidate()
		render jsonResponseOK as JSON
	}
	
	def listadoInformes() {
		def resp = [];
		//embarazo inicial
		def embarazoInicial = EmbarazoInicial.findByRutPac(session.pac_rut)
		embarazoInicial.each{
			resp.add([id: it.id, codInforme: 'in01',informe: 'Embarazo Inicial', fecha: it.tableFechaIngreso, doctor: it.diagnInfogenEcografia])
			
		}
		//primer trimestre
		def ptrimestre = PrimerTrimestre.findByRutPac(session.pac_rut)
		ptrimestre.each{
			resp.add([id: it.id, codInforme: 'in02',informe: 'Primer Trimestre', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		//segunfo tercer trimestre
		def stercertrimestre = SegundoTercerTrimestre.findByRutPac(session.pac_rut)
		stercertrimestre.each{
			resp.add([id: it.id, codInforme: 'in03',informe: 'Segundo Tercer Trimestre', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		jsonResponseOK.data = resp
		render jsonResponseOK as JSON
	}
	def listadoRecordatorios() {
		def r = Recordatorio.list()
		
		jsonResponseOK.data = r 
		render jsonResponseOK as JSON
	}
}
