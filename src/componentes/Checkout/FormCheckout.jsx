import React from 'react'

const FormCheckout = ({dataForm,handleChangeInput,handleSubmitForm}) => {
  return (
    <form className='form' onSubmit={handleSubmitForm} >
        <label >Nombre Completo</label>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />

        <label >Numero de telefono</label>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

        <label >Email</label>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

        <button type="submit" >Enviar</button>
    </form>
  )
}

export default FormCheckout
