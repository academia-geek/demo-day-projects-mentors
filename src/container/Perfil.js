import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { BgPerfil } from '../styles/StylePerfil';
import { getAuth } from "firebase/auth";
// import Pay from '../modals/Pay';
import NewComent from '../components/NewComent';
import Opinions from '../components/Opinions';


const Perfil = ({ isLoggedIn }) => {

  const { search } = useSelector((store) => store.search);
  // const [modal, setModal] = useState(false)
  const data = getAuth()
  const name = data.currentUser.displayName
  const email = data.currentUser.email


  return (
    <div>


      <BgPerfil className='m-5'>
        {search.map((mentors, index) => (
          <div key={index} className="row justify-content-between perfil">
            <div className="col-8">
              <div className="card mx-5">
                <div className="card-body shadow bg-body rounded">
                  <h5 className="card-title text-left description fst-italic m-2">{mentors.description}</h5>
                  <div className='row m-5 text-center info'>

                    <div className="col card border border-success rounded m-2">
                      <h5 className="card-title"><FcGraduationCap /><br />Educacion</h5>
                      <p className="card-text">{mentors.education}</p>
                    </div>
                    <div className="col card border border-success rounded m-2">
                      <h5 className="card-title"><FcPositiveDynamic /><br />Experiencia</h5>
                      <p className="card-text">{mentors.experience}</p>
                    </div>
                    <div className="col card border border-success rounded m-2">
                      <h5 className="card-title"><FcVoicePresentation /><br />Idiomas</h5>
                      <p className="card-text">{mentors.languages}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className='text-center m-3'>Descripci??n</h2>
                    <div>
                      <p>No se realizan ex??menes de ningun tipo. El presente perfil es solo para mentorias particulares 1-1 online.</p>

                      <h5>HORARIOS DISPONIBLES</h5>

                      <ul>
                        <ol>LUNES - 07:00 A.M. - 07:00 P.M.</ol>
                        <ol>MARTES - 07:00 A.M. - 07:00 P.M.</ol>
                        <ol>MI??RCOLES - 07:00 A.M. - 07:00 P.M.</ol>
                        <ol>JUEVES - 07:00 A.M. - 07:00 P.M.</ol>
                        <ol>VIERNES - 07:00 A.M. - 07:00 P.M.</ol>
                      </ul>
                      <strong>NOTA:</strong> En el caso de requerir un horario fuera de los mencionados anteriormente, solo abro un horario m??s a partir de paquetes de 10 clases, en muy contadas ocasiones. Dicho horario ser??a de 7-8 p.m. (hora local Colombia) con base en disponibilidad. Las reservas en ese caso yo las har??a internamente.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 text-center h-50 mentor shadow-lg p-3 mb-5 bg-white rounded">

              <img className='mx-2 my-4' src={mentors.img} style={{ width: '80%' }} alt="mentors" />
              <h2>{mentors.name}</h2>
              <p><FaStarHalfAlt /> Opiniones (+57)</p>
              <h5> x2 - Sesiones:     {mentors.price} Hr</h5>
              <h5>Tiempo de respuesta: 4 Hr</h5>
              <h5>{mentors.email}</h5>
              <div>
                {mentors.name === name && mentors.email === email ?
                  ''
                  :
                  <a href={mentors.calendly} target="_blank" rel="noreferrer">
                    <button className="btn btn-outline-success bg-success text-white m-2">Agendar</button>
                  </a>
                }
              </div>
            </div>
            {/* {
              modal === true ? <Pay setModal={setModal} name={name} email={email} calendly={mentors.calendly} mentor={mentors.name} /> : ''
            } */}
            <NewComent id={mentors.codeProfile} />
            <Opinions isLoggedIn={isLoggedIn} id={mentors.codeProfile} />
          </div>
        ))
        }
      </BgPerfil>
      <Footer />
    </div>

  )
}

export default Perfil