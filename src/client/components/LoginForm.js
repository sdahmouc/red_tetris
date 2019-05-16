import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const LoginForm = ({ logToGame, history }) => {
	const style = {
		display: 'flex',
		flexDirection: 'column',
		width: '200px',
	};

	const [ credentials, setCredentials ] = useState({ name: '', room: ''});

	function handleLogin(e) {
		setCredentials({ ...credentials, name: e.target.value.trim() });
	}

	function handleRoom(e) {
		setCredentials({ ...credentials, room: e.target.value.trim() });
	}

	return (
		<div>
			<h1>TET<span className="h1color">R</span>IS</h1>
			<form
				style={ style }
				onSubmit={ logToGame(credentials, history) }
				className="login-form"
			>
			<div className="container">
				<div className="box">
					<input data-jest="name" autoFocus type="text" onChange={ handleLogin } placeholder="name"/>
					<input data-jest="room" type="text" onChange={ handleRoom } placeholder="room"/>
					<button className="buttoneon" data-jest="submit"><span>Start</span></button>
				</div>
			</div>
			</form>
			<style>
		{`
				h1{
					text-align:center;
					margin:-400px 0;
					font-size:100px;
					font-weight:bold;
				/*	text-shadow:  
					0 0 10px #f0f,       
					0 0 20px #f0f;*/
					text-shadow: 0 0 10px #0ff;
					animation-timing-function: ease; 
 					animation-name: bounceInDown;
					animation-duration: 2s;
					color: #0ff;
					}
					.h1color{
						color:#f0f;
						text-shadow: 0 0 10px #f0f;						
					}

			  .container{
				border-radius: 20px;
				border: 10px solid #0ff;
				width:400px;
				height:400px;
				position:absolute;
				top:calc(50vh - 200px);
				left:calc(50vw - 200px);/*
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
				0 0 30px #FF00DE;*/
				overflow: hidden;		
				animation: 0.8s neoneffect ease-in-out infinite alternate, bounceInUp 2s;				
			}
				
			  .box{
				position:absolute;
				height:100%;
				width:100%;				
				color:#f0f;
				padding:70px 0px;
				}

			  .box h2{
				text-align:center;
				margin:30px 0;
				font-size:45px;
				color: #96F68A;
				text-shadow:  
					0 0 10px #0ff,       
					0 0 20px #0ff;
				}

			  .box input{
				display:block;
				width:300px;
				margin:20px auto;
				padding:15px;
				background:rgba(255,255,255,0.2);
				color:#f0f!important;
				border:0;
				font-size: 25px;
				font-weight: bold;
				border-radius:20px;
				font-family: 'Permanent Marker', cursive;
				}
				
			  .box input:focus,.box input:active,.box .button:focus,.box .button:active{
				outline:inherit;
				box-shadow:  
   			inset 0 10px 5px #F0F,
    		inset 0 0 10px #f0f;
				}
				
			  .box button{
				border:0;
				color:#000;
				font-size:20px;
				width:330px;
				margin:40px auto;
				display:block;
				cursor:pointer;
				box-shadow: 0 0 10px #f0f;
			  }

				
			  .box p{
				font-size:14px;
				text-align:center;
				}
				
			  .box p span{
				cursor:pointer;
				color:#666;
				}
				
				.buttoneon {
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
					}
					
					.buttoneon:hover {
					background: #0ff;
					border: 10px solid #0ff;
					box-shadow: 0px 0px 16px 7px #0ff;
					}
					
					.buttoneon:hover > span {
					color: #fff;
					letter-spacing: 0.4em;
					}
					
					.buttoneon span {
					font-size: 35px;
					color: #222;
					text-align: center;
					line-height: 40px;
					font-weight: bold;
					letter-spacing: 0.2em;
					transition: ease 0.3s;
					}

					/*************** Animation ********************/

					@keyframes bounceInDown {
						0%, 60%, 75%, 90%, 100% {
											transition-timing-function: b(0.215, 0.610, 0.355, 1.000);
						}					
						0% {
							opacity: 0;
											transform: translate3d(0, -200px, 0);
						}					
						60% {
							opacity: 1;
											transform: translate3d(0, 25px, 0);
						}					
						75% {
											transform: translate3d(0, -10px, 0);
						}	
						100% {
											transform: none;
						}}

						@keyframes bounceInUp {
							0%, 60%, 75%, 90%, 100% {
												transition-timing-function: b(0.215, 0.610, 0.355, 1.000);
							}					
							0% {
								opacity: 0;
												transform: translate3d(0, 200px, 0);
							}					
							60% {
								opacity: 1;
												transform: translate3d(0, -25px, 0);
							}					
							75% {
												transform: translate3d(0, 10px, 0);
							}	
							100% {
												transform: none;
							}}


	@keyframes neoneffect {
    from {			box-shadow:  
			inset 0 0 1px #0FF,
			inset 0 0 5px #0FFF,
			inset 0 0 10px #0FFF,
			inset 0 0 20px #FF00DE,
			inset 0 0 20px #FF00DE,
			0 0 5px #0ff,
			0 0 10px #0ff,
			0 0 10px #0ff,
			0 0 10px #FF00DE,
			0 0 10px #FF00DE,
			0 0 10px #FF00DE,
			0 0 10px #FF00DE,
			0 0 10px #FF00DE;}
    to {			
			box-shadow:  
				inset 0 0 5px #0FF,
				inset 0 0 10px #0FFF,
				inset 0 0 20px #0FFF,
				inset 0 0 40px #FF00DE,
				inset 0 0 40px #FF00DE,
				0 0 5px #0ff,
				0 0 10px #0ff,
				0 0 20px #0ff,
				0 0 30px #FF00DE,
				0 0 30px #FF00DE,
				0 0 30px #FF00DE,
				0 0 30px #FF00DE,
				0 0 30px #FF00DE;}
		}


		`}
		</style>
		</div>
	);
};

LoginForm.propTypes = {
	logToGame: PropTypes.func,
	history: PropTypes.object,
};

export default withRouter(LoginForm);
