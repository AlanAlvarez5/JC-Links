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
      minHeigth: "100%",
      padding: "0"
    }
    const h1 = {
      display: "flex",
      justifyContent: "center",
      fontSize: "5rem",
      padding: "0rem",
      margin: "0rem",
      marginTop: "2rem",
      color: "#00569B"

    }
    const row ={

      display: "flex",
      justifyContent: "center",
      marginBottom: "1rem",
    }

    return (
      <div style={app} className="App">

        <h1 style={h1}>Portal UG</h1>
        <div >
          <div style={row}>
            <Link 
              name="Tutorías"
              icon=  'fas fa-graduation-cap'
              href="http://www.tutorias.ugto.mx/Tutorias/wfloginsiia.aspx"
              // color="#FFB199"
              color="#C3A130"
              />
            <Link 
              name="Administración Escolar"
              icon=  'fas fa-school'
              href="https://www.dae.ugto.mx/frontDAE/"
              // color="#FF99C2"
              color="#C3A130"
              />
            <Link 
              name="LISC"
              icon=  'fas fa-laptop-code'
              href="https://sites.google.com/site/ugcoordinacionlisc/home"
              // color="#99C2FF"
              color="#C3A130"
              />
            <Link 
              name="Directorio"
              icon=  'far fa-address-book'
              href="http://www.ugto.mx/campusirapuatosalamanca/index.php/directorio-campus"
              // color="#ca71f0"
              color="#C3A130"
              />
          </div>
          <div style={row}>
            <Link 
              name="Intranet"
              icon=  'fab fa-forumbee'
              href="https://intraug.ugto.mx/"
              // color="#FCD06A"
              color="#C3A130"
              />
            <Link 
              name="Académicos"
              icon=  'fas fa-chalkboard-teacher'
              href="http://www.academicos.ugto.mx/"
              // color="#FF7A7A"
              color="#C3A130"
              />
            <Link 
              name="SIIA"
              icon=  'fas fa-info-circle'
              href="http://www.siia.ugto.mx/"
              // color="#B4FF99"
              color="#C3A130"
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
