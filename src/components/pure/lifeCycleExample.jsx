/**
 * Ejemplo de ciclo de clase que dispone de los métodos
 * de ciclo de vida.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia en el componente.')
    }

    componentWillMount() {
        console.log("Mount: antes del montaje del componente")
    }

    componentDidMount() {
        console.log("DidMount: justo al acabar el montaje del componente, antes del rederizado")
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Si va recibir una nueva props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * controlad si el componente debe o no actualizarse
         * retorna true o false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: se ejecuta antes de actualizar");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DidUpdate: justo al momento de actualizar el componente");
    }

    componentWillUnmount() {
        console.log("WillUnmount: justo antes del desaparecer el componente");
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

lifeCycleExample.propTypes = {

}

export default lifeCycleExample