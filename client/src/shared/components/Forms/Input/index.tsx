import { Field } from 'formik'

interface InputProps {
  label: string
}

const Input = ({ label }: InputProps) => {
  return (
    <div className='mb-6 mt-6'>
      <label className='block mb-2 text-base font-medium text-white'>{label}</label>
      <Field className='bg-black border border-secondary-dark text-secondary-dark text-sm rounded-lg focus:border-primary block w-full p-3' />
    </div>
  )
}

export default Input
