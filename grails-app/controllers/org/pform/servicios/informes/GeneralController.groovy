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
		def embarazoInicial = EmbarazoInicial.findAllByRutPac(session.pac_rut)
		embarazoInicial.each{
			resp.add([id: it.id, codInforme: 'in01',informe: 'Embarazo Inicial', fecha: it.tableFechaIngreso, doctor: it.diagnInfogenEcografia])
			
		}
		//primer trimestre
		def ptrimestre = PrimerTrimestre.findAllByRutPac(session.pac_rut)
		ptrimestre.each{
			resp.add([id: it.id, codInforme: 'in02',informe: 'Primer Trimestre', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		//segunfo tercer trimestre
		def stercertrimestre = SegundoTercerTrimestre.findAllByRutPac(session.pac_rut)
		stercertrimestre.each{
			resp.add([id: it.id, codInforme: 'in03',informe: 'Segundo Tercer Trimestre', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		//segunfo tercer trimestre
		def perfiles = Perfil.findAllByRutPac(session.pac_rut)
		perfiles.each{
			resp.add([id: it.id, codInforme: 'in04',informe: 'Informe Perfil', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		def distocias = Distocia.findAllByRutPac(session.pac_rut)
		distocias.each{
			resp.add([id: it.id, codInforme: 'in05',informe: 'Informe Distocia', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		def ecocardiogramas = EcoCardiograma.findAllByRutPac(session.pac_rut)
		ecocardiogramas.each{
			resp.add([id: it.id, codInforme: 'in06',informe: 'Informe Eco Cardiograma', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		def ecocervicales = EcoCervical.findAllByRutPac(session.pac_rut)
		ecocervicales.each{
			resp.add([id: it.id, codInforme: 'in07',informe: 'Informe Eco Cervical', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		def ecodoppler = EcoDoppler.findAllByRutPac(session.pac_rut)
		ecodoppler.each{
			resp.add([id: it.id, codInforme: 'in08',informe: 'Informe Eco Doppler', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		def ecoginecologicas = EcoGinecologica.findAllByRutPac(session.pac_rut)
		ecoginecologicas.each{
			resp.add([id: it.id, codInforme: 'in09',informe: 'Informe Eco Ginecologica', fecha: it.tableFechaIngreso, doctor: it.diagnEcografista])
			
		}
		jsonResponseOK.data = resp
		render jsonResponseOK as JSON
	}
	def listadoRecordatorios() {
		def r = Recordatorio.list()
		
		jsonResponseOK.data = r 
		render jsonResponseOK as JSON
	}
	def getPermisosCreacion() {
		def einicial = EmbarazoInicial.get(params.id)
		def permisos = []
		if(einicial){
			
			//primer trimestre
			def ptrimestre = PrimerTrimestre.findByEmbarazoInicial(einicial)
			permisos.add('in02')
			permisos.add('in03')
			//segunfo tercer trimestre
			def stercertrimestre = SegundoTercerTrimestre.findByEmbarazoInicial(einicial)
			if(stercertrimestre){
				permisos.remove('in02')
			}
			
			
			jsonResponseOK.data = permisos
			render jsonResponseOK as JSON
		}else{
			throw new RuntimeException("Error.")
		}
		
	}
}
