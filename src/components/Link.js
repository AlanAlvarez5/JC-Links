import React, { Component } from 'react';


class Link extends Component {

    
    
    render(){

        const contenedor = {
            margin : "3rem",
            display : "flex",
            flexDirection : "column",
            alignItems: "center",

        }
        const card = {
            display: "flex",
            justifyContent: "center",
            alignItems : "center",
            backgroundColor: this.props.color,
            width : "10rem",
            height: "10rem",
            borderRadius: "3rem",
        }

        const link ={
            textDecoration : "none",
            color  : "white",
        }

        const h3 =  {
            color : "#6F6F6F",
            justify: "center",
            fontSize: "1rem"
        }

        const i = {
            fontSize : "5rem"
        }
        
        return (
            <div style={contenedor}>
                <a style={link} href={this.props.href}>
                    <div style={card}>
                        <i style={i}className={this.props.icon}></i>
                    </div>
                </a>
                <h3 style={h3}>{this.props.name}</h3>
            </div>
        );
    }
  }
  
  export default Link;