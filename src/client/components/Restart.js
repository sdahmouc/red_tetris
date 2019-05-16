import React from 'react';
import { PropTypes } from 'prop-types';
import { restart as style } from '../style/tetris.module.css';

const Restart = ({ restartHandler, quitHandler }) => {
	return (
		<div
			className={ style }
			data-jest="restart"
		>
		<div className="inner-container">
			<div>GAME OVER</div>
			<button className="buttoneon1" onClick={ restartHandler } autoFocus><span>RESTART</span></button>
			<button className="buttoneon2" onClick={ quitHandler }><span>QUIT</span></button>
			</div>
			<style>
		{`

	  .inner-container{
		  display:flex;
		  align-items:center;
		  		border-radius: 20px;
				border: 10px solid #0ff;
				width:400px;
				height:400px;
				position:absolute;
				top:calc(50vh - 200px);
				left:calc(50vw - 200px);
				overflow:hidden;
				background:rgba(0,0,0,0.8);
				text-align: center;
				justify-content: center;
				display: flex; 
				flex-direction: column;
				color:#0ff;
				font-size: 50px;
				box-shadow:  
  			   inset 0 0 5px #0FF,
   				 inset 0 0 10px #0FFF,
    inset 0 0 20px #0FFF,
    inset 0 0 40px #FF00DE,
    0 0 5px #0ff,
    0 0 10px #0ff,
    0 0 20px #0ff,
    0 0 30px #FF00DE,
    0 0 30px #FF00DE,
    0 0 30px #FF00DE,
    0 0 30px #FF00DE,
	0 0 30px #FF00DE;
			  }
			  .inner-container div{
				  color:#0ff;
				  font-size: 50px!important;
				  text-shadow: 0 0 10px #0ff!important;
			  }
			  .buttoneon2 {
				margin: 20px 0;
				font-family: 'Permanent Marker', cursive;
				width: 250px;
				height: 60px;
				background: #FF00DE;
				border: 10px solid #FF00DE;
				border-radius: 20px;
				text-align: center;
				/*box-shadow: 0px 0px 16px 7px #FF00DE;*/
				transition: ease 0.3s;
				outline: inherit;
				box-shadow: 0 0 10px #f0f;
				}

				.buttoneon1 {
					margin: 20px 0;
					font-family: 'Permanent Marker', cursive;
					width: 250px;
					height: 60px;
					background: #0ff;
					border: 10px solid #0ff;
					border-radius: 20px;
					text-align: center;
					transition: ease 0.3s;
					outline: inherit;
					box-shadow: 0 0 10px #0ff;
					}
				
				.buttoneon1:hover, .buttoneon2:hover {
				background: #0ff;
				border: 10px solid #0ff;
				box-shadow: 0px 0px 16px 7px #0ff;
				cursor:pointer;
				}
				
				.buttoneon1:hover > span, .buttoneon2:hover > span{
				color: #fff;
				letter-spacing: 0.4em;
				}
				
				.buttoneon1 span, .buttoneon2 span {
				font-size: 26px!important;
				color: #222;
				text-align: center;
				line-height: 40px;
				font-weight: bold;
				letter-spacing: 0.2em;
				transition: ease 0.3s;
				}
		`}
		</style>
		</div>
	);
};

Restart.propTypes = {
	restartHandler: PropTypes.func,
	quitHandler: PropTypes.func,
};

export default Restart;