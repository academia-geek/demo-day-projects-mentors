import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import Footer from '../components/Footer';



const Perfil = () => {
  return (
    <div>
      <div class='container m-5'>
        <div class="row justify-content-between">
          <div class="col-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center">Profesor de inglés certificado, experimentado, flexible.<br /> clases 100% online con material interactivo
                </h5>
                <div className='row m-5 text-center'>

                  <div class="col card">
                    <h5 class="card-title"><FcGraduationCap /><br />Educacion</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div class="col card">
                    <h5 class="card-title"><FcPositiveDynamic /><br />Experiencia</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div class="col card">
                    <h5 class="card-title"><FcVoicePresentation /><br />Idiomas</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>

                </div>
                <div>
                  <p>
                    <h2 className='text-center m-3'>Descripción</h2>
                    ►►► NO SE REALIZAN EXÁMENES DE NINGÚN TIPO. EL PRESENTE PERFIL ES SOLO PARA CLASES DE INGLÉS PARTICULARES 1-1 ONLINE. ◄◄◄

                    ★★★ HORARIOS DISPONIBLES ★★★

                    LUNES - 07:00 A.M. - 07:00 P.M.
                    MARTES - 07:00 A.M. - 07:00 P.M.
                    MIÉRCOLES - 07:00 A.M. - 07:00 P.M.
                    JUEVES - 07:00 A.M. - 07:00 P.M.
                    VIERNES - 07:00 A.M. - 07:00 P.M.

                    NOTA: En el caso de requerir un horario fuera de los mencionados anteriormente, solo abro un horario más a partir de paquetes de 10 clases, en muy contadas ocasiones. Dicho horario sería de 7-8 p.m. (hora local Colombia) con base en disponibilidad. Las reservas en ese caso yo las haría internamente.

                    ►►► PRECIOS NORMALES ◄◄◄

                    ★ 60 MINUTES SESSION - COP 70.000
                    ★ 5 SESSIONS PACK - COP 330.000
                    ★ 10 SESSIONS PACK - COP 680.000
                    ★ 1 MONTH PACK (20 SESSIONS) - COP 1.380.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 text-center">

            <img src='https://files.lafm.com.co/assets/public/2020-01/abogado.jpg' style={{ width: '80%' }} alt="mentors" />
            <h2>Juan Pablo</h2>
            <p><FaStarHalfAlt /> Opiniones (+57)</p>
            <h5>Tarifa horaria:      $70.00 Hr</h5>
            <h5>Tiempo de respuesta: 4 Hr</h5>
            <h5>Numeros de alumnos: +50</h5>
            <button className="btn btn-outline-success bg-success text-white m-2" type="submit">Agendar</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}

export default Perfil