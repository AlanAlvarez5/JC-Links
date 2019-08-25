import React, {Component} from 'react' ;
import Link from './components/Link'


class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     link1 : {
  //       name:"Tutorías",
  //       href:"http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //     link2 : {
  //       name : "Tutorías",
  //       href : "http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //     link3 : {
  //       name : "Tutorías",
  //       href : "http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //     link4 : {
  //       name : "Tutorías",
  //       href : "http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //     link5 : {
  //       name : "Tutorías",
  //       href : "http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //     link6 : {
  //       name : "Tutorías",
  //       href : "http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx",
  //       icon : <i class="fas fa-graduation-cap"></i>
  //     },
      
  //   };

  // }
  render(){

    const app = {
      width : "100%",
      padding: "3rem"
    }
    const h1 = {
      display: "flex",
      justifyContent: "center",
      color : "#707070",
      fontSize: "5rem",
    }
    const row1 ={

      display: "flex",
      justifyContent: "center"
    }
    const row2 ={

      display: "flex",
      justifyContent: "center"
    }

    return (
      <div style={app} className="App">

        <h1 style={h1}>Portal UG</h1>
        <div >
          <div style={row1}>
            <Link 
              name="Tutorías"
              icon=  'fas fa-graduation-cap'
              href="http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx"
              color="#FFB199"
              />
            <Link 
              name="Administración Escolar"
              icon=  'fas fa-school'
              href="https://www.dae.ugto.mx/frontDAE/"
              color="#FF99C2"
              />
            <Link 
              name="LISC"
              icon=  'fas fa-laptop-code'
              href="https://sites.google.com/site/ugcoordinacionlisc/home"
              color="#99C2FF"
              />
          </div>
          <div style={row2}>
            <Link 
              name="Intranet"
              icon=  'fab fa-forumbee'
              href="https://intraug.ugto.mx/"
              color="#FCD06A"
              />
            <Link 
              name="Académicos"
              icon=  'fas fa-chalkboard-teacher'
              href="http://www.academicos.ugto.mx/"
              color="#FF7A7A"
              />
            <Link 
              name="SIIA"
              icon=  'fas fa-info-circle'
              href="http://www.siia.ugto.mx/"
              color="#B4FF99"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
