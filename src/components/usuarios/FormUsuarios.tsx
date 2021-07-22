import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import InputOutlined from "../form/InputOutlined";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export type Inputs = {
  [key: string]: FieldValues;
};

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório').min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
});

export default function FormUsuarios() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver: yupResolver(schema),
    reValidateMode: 'onBlur'
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputOutlined
        label="Nome"
        value={name}
        onChange={(event) => { setName(event.target.value) }}
        register={register}
        error={errors.nome && true}
        helperText={errors.nome ? errors.nome.message : ''}
      />

      <InputOutlined
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        register={register}
        required
        error={errors.email && true}
        helperText={errors.email ? errors.email.message : ''}
      />

      <input type="submit" />
    </form>
  );
}