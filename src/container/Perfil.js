import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { BgPerfil } from '../styles/StylePerfil';
import { getAuth } from "firebase/auth";


const Perfil = () => {

  const { search } = useSelector((store) => store.search);
  const data = getAuth()
  const name = data.currentUser.displayName
  const email = data.currentUser.email


  return (
    <div>


      <BgPerfil className='container m-5'>
        {search.map((mentors, index) => (
          <div key={index} className="row justify-content-between perfil">
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center description">{mentors.description}</h5>
                  <div className='row m-5 text-center info'>

                    <div className="col card">
                      <h5 className="card-title"><FcGraduationCap /><br />Educacion</h5>
                      <p className="card-text">{mentors.education}</p>
                    </div>
                    <div className="col card">
                      <h5 className="card-title"><FcPositiveDynamic /><br />Experiencia</h5>
                      <p className="card-text">{mentors.experience}</p>
                    </div>
                    <div className="col card">
                      <h5 className="card-title"><FcVoicePresentation /><br />Idiomas</h5>
                      <p className="card-text">{mentors.languages}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className='text-center m-3'>Descripción</h2>
                    <p>
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
            <div className="col-4 text-center mentor">

              <img src={mentors.img} style={{ width: '80%' }} alt="mentors" />
              <h2>{mentors.name}</h2>
              <p><FaStarHalfAlt /> Opiniones (+57)</p>
              <h5>Tarifa horaria:     {mentors.price} Hr</h5>
              <h5>Tiempo de respuesta: 4 Hr</h5>
              <h5>{mentors.email}</h5>
              <a href={mentors.calendly}>
                {mentors.name === name && mentors.email === email ?
                  ''
                  :
                  <button className="btn btn-outline-success bg-success text-white m-2" type="submit">Agendar</button>
                }
              </a>
              <div className="calendly-inline-widget" data-url={mentors.calendly} style={{ minWidth: '300px', height: '500px' }}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
          </div>
        ))
        }
      </BgPerfil>
      <Footer />
    </div>

  )
}

export default Perfil